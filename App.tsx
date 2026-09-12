import React, { useState, useEffect, useMemo } from "react";
import { Header } from "./components/Header";
import { ModuleFilter } from "./components/ModuleFilter";
import { NodeAccordion } from "./components/NodeAccordion";
import { NetworkGraph } from "./components/NetworkGraph";
import { FlashcardsMode } from "./components/FlashcardsMode";
import { LevelSelector } from "./components/LevelSelector";
import { NodeDetailModal } from "./components/NodeDetailModal";
import { CrossQuizModal } from "./components/CrossQuizModal";
import { AddCustomTopicModal } from "./components/AddCustomTopicModal";
import { INITIAL_TOPICS } from "./data/topics";
import { TOPIC_SUBTOPICS } from "./data/subtopicsData";
import { TOPIC_MASTER_DATA } from "./data/topicMasterData";
import {
  FilterStatus,
  ModuleId,
  NodeContent,
  NodeProgress,
  StudyLevel,
  TopicNode,
  ViewMode,
} from "./types";
import {
  Network,
  ListTree,
  Zap,
  GraduationCap,
  CircleDashed,
  Compass,
} from "lucide-react";

const STORAGE_KEY_TOPICS = "geniux_citologia_topics_v3";
const STORAGE_KEY_PROGRESS = "geniux_citologia_progress_v3";
const STORAGE_KEY_LEVEL = "geniux_citologia_level_v3";
const STORAGE_KEY_VIEW = "geniux_citologia_view_v3";

export default function App() {
  // Topics state (with local persistence for user-created topics and coordinates)
  const [topics, setTopics] = useState<TopicNode[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_TOPICS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length === INITIAL_TOPICS.length) {
          return parsed.map((t: TopicNode) => ({
            ...t,
            subtopics: (t.subtopics && t.subtopics.length > 0) ? t.subtopics : (TOPIC_SUBTOPICS[t.id] || []),
          }));
        }
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_TOPICS;
  });

  // Node progress and generated content map
  const [progressMap, setProgressMap] = useState<Record<string, NodeProgress>>(() => {
    // Build baseline progress from the high-fidelity curated database
    const initialMap: Record<string, NodeProgress> = {};
    Object.keys(TOPIC_MASTER_DATA).forEach((tId) => {
      initialMap[tId] = {
        topicId: tId,
        isGenerated: true,
        isMastered: false,
        content: TOPIC_MASTER_DATA[tId],
      };
    });

    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROGRESS);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Merge so user's mastery/score is preserved, but master data is always up-to-date
        Object.keys(parsed).forEach((k) => {
          if (initialMap[k]) {
            initialMap[k].isMastered = parsed[k].isMastered;
            initialMap[k].lastScore = parsed[k].lastScore;
          } else {
            initialMap[k] = parsed[k];
          }
        });
        return initialMap;
      }
    } catch (e) {
      console.error(e);
    }
    return initialMap;
  });

  // View Mode: network (Grafo de la red celular) vs list (Acordeón deslizable) vs flashcards (Tarjetas mnemotécnicas)
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_VIEW);
      if (saved === "network" || saved === "list" || saved === "flashcards") {
        return saved;
      }
    } catch (e) {
      console.error(e);
    }
    return "network"; // Default to the interactive cell network graph!
  });

  // Study depth level (1: Sencillo, 2: Mecanismo, 3: Avanzado)
  const [activeLevel, setActiveLevel] = useState<StudyLevel>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_LEVEL);
      if (saved === "1" || saved === "2" || saved === "3") {
        return Number(saved) as StudyLevel;
      }
    } catch (e) {
      console.error(e);
    }
    return 1; // Default to Level 1 (Sencillo & Didáctico)
  });

  // Active accordion item (for list view)
  const [openNodeId, setOpenNodeId] = useState<string | null>("tema-01");

  // Selected topic for detail modal (e.g. when clicked in network view)
  const [modalTopic, setModalTopic] = useState<TopicNode | null>(null);

  // Filtering
  const [selectedModule, setSelectedModule] = useState<ModuleId | "ALL">("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<FilterStatus>("all");

  // Generating indicator
  const [generatingId, setGeneratingId] = useState<string | null>(null);

  // Modals
  const [isSimulacroOpen, setIsSimulacroOpen] = useState(false);
  const [isAddTopicOpen, setIsAddTopicOpen] = useState(false);

  // Save progress changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(progressMap));
    } catch (e) {
      console.error(e);
    }
  }, [progressMap]);

  // Save topics
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_TOPICS, JSON.stringify(topics));
    } catch (e) {
      console.error(e);
    }
  }, [topics]);

  // Save viewMode
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_VIEW, viewMode);
    } catch (e) {
      console.error(e);
    }
  }, [viewMode]);

  // Save activeLevel
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_LEVEL, String(activeLevel));
    } catch (e) {
      console.error(e);
    }
  }, [activeLevel]);

  // Generate node content progressively via Gemini
  const handleGenerateNode = async (topicId: string, level: StudyLevel | "cepre" | "simple") => {
    const topic = topics.find((t) => t.id === topicId);
    if (!topic) return;

    setGeneratingId(topicId);

    const numericLevel =
      typeof level === "number" ? level : level === "simple" ? 1 : 2;

    try {
      const response = await fetch("/api/generate-node", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topicId: topic.id,
          topicTitle: topic.title,
          moduleName: topic.moduleName,
          keywords: topic.keywords,
          level: numericLevel,
        }),
      });

      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }

      const generatedContent: NodeContent = await response.json();
      generatedContent.level = numericLevel;

      setProgressMap((prev) => ({
        ...prev,
        [topicId]: {
          topicId,
          isGenerated: true,
          isMastered: prev[topicId]?.isMastered || false,
          lastScore: prev[topicId]?.lastScore,
          content: generatedContent,
        },
      }));
    } catch (err) {
      console.error("Error al generar nodo:", err);
    } finally {
      setGeneratingId(null);
    }
  };

  // Mark node as mastered upon passing quiz
  const handlePassQuiz = (topicId: string, score: number) => {
    setProgressMap((prev) => ({
      ...prev,
      [topicId]: {
        ...(prev[topicId] || { topicId, isGenerated: true }),
        isMastered: true,
        lastScore: score,
      },
    }));
  };

  // Toggle mastered status manually
  const handleToggleMaster = (topicId: string) => {
    setProgressMap((prev) => {
      const current = prev[topicId];
      const nextMastered = !current?.isMastered;
      return {
        ...prev,
        [topicId]: {
          ...(current || { topicId, isGenerated: false }),
          isMastered: nextMastered,
        },
      };
    });
  };

  // Add custom node
  const handleAddTopic = (newTopicData: Omit<TopicNode, "id" | "number" | "x" | "y" | "connections">) => {
    const nextNumber = topics.length + 1;
    const newId = `tema-${nextNumber < 10 ? "0" + nextNumber : nextNumber}`;
    // Position near the center
    const newTopic: TopicNode = {
      ...newTopicData,
      id: newId,
      number: nextNumber,
      x: 550 + (Math.random() * 100 - 50),
      y: 400 + (Math.random() * 100 - 50),
      connections: ["tema-06", "tema-09"],
    };
    setTopics((prev) => [...prev, newTopic]);
    setModalTopic(newTopic);
  };

  // Filtered topics calculation
  const filteredTopics = useMemo(() => {
    return topics.filter((t) => {
      // 1. Module filter
      if (selectedModule !== "ALL" && t.module !== selectedModule) {
        return false;
      }

      // 2. Status filter
      const p = progressMap[t.id];
      if (filterStatus === "mastered" && !p?.isMastered) return false;
      if (filterStatus === "pending" && p?.isMastered) return false;

      // 3. Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = t.title.toLowerCase().includes(q);
        const matchesKeywords = t.keywords.toLowerCase().includes(q);
        const matchesCategory = t.category.toLowerCase().includes(q);
        const matchesConcept = t.essentialConcept.toLowerCase().includes(q);
        return matchesTitle || matchesKeywords || matchesCategory || matchesConcept;
      }

      return true;
    });
  }, [topics, selectedModule, filterStatus, searchQuery, progressMap]);

  // Global counts
  const progressList = Object.values(progressMap) as NodeProgress[];
  const generatedCount = progressList.filter((p) => p.isGenerated).length;
  const masteredCount = progressList.filter((p) => p.isMastered).length;
  const masteredTopicIds = progressList
    .filter((p) => p.isMastered)
    .map((p) => p.topicId);

  return (
    <div className="min-h-screen bg-[#0a0e27] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white pb-16">
      {/* App Header with Stats & Actions */}
      <Header
        totalTopics={topics.length}
        generatedCount={generatedCount}
        masteredCount={masteredCount}
        onOpenSimulacro={() => setIsSimulacroOpen(true)}
        onOpenAddTopic={() => setIsAddTopicOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-3 sm:px-4 py-3 sm:py-5 space-y-4 sm:space-y-5">
        {/* Study Level Selector (Nivel 1: Sencillo, Nivel 2: Mecanismo, Nivel 3: Avanzado) */}
        <LevelSelector
          activeLevel={activeLevel}
          onChangeLevel={(lvl) => setActiveLevel(lvl)}
        />

        {/* View Mode Switcher + Controls Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/60 p-2 sm:p-2.5 rounded-2xl border border-slate-800">
          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-950/80 p-1 rounded-xl border border-slate-800/90 text-xs font-semibold">
            <button
              onClick={() => setViewMode("network")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                viewMode === "network"
                  ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/30 font-bold"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              <Network className="w-4 h-4" />
              <span>Red Visual (Grafo)</span>
            </button>

            <button
              onClick={() => setViewMode("list")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                viewMode === "list"
                  ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/30 font-bold"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              <ListTree className="w-4 h-4" />
              <span>Nodos Deslizables (Lista)</span>
            </button>

            <button
              onClick={() => setViewMode("flashcards")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                viewMode === "flashcards"
                  ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/30 font-bold"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Flashcards (Repaso)</span>
            </button>
          </div>

          {/* Quick Info / Context indicator */}
          <div className="flex items-center gap-2 text-xs text-slate-400 px-2">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>
              {viewMode === "network" && "Exploración topológica celular interactiva"}
              {viewMode === "list" && `${topics.length} nodos temáticos de Citología I y II en acordeón interactivo`}
              {viewMode === "flashcards" && "Fijación mnemotécnica rápida con autoevaluación"}
            </span>
          </div>
        </div>

        {/* Filter, search, and module bar (Used across all modes) */}
        <ModuleFilter
          selectedModule={selectedModule}
          onSelectModule={setSelectedModule}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filterStatus={filterStatus}
          onFilterStatusChange={setFilterStatus}
          filteredCount={filteredTopics.length}
          totalCount={topics.length}
        />

        {/* MODE 1: VISUAL NETWORK GRAPH (Grafo Celular Interactivo) */}
        {viewMode === "network" && (
          <div className="space-y-3 animate-in fade-in duration-200">
            <NetworkGraph
              topics={topics}
              progressMap={progressMap}
              selectedTopicId={modalTopic?.id || null}
              onSelectTopic={(t) => setModalTopic(t)}
              activeLevel={activeLevel}
              highlightQuery={searchQuery}
              selectedModule={selectedModule}
            />
          </div>
        )}

        {/* MODE 2: ACCORDION LIST (Nodos Deslizables) */}
        {viewMode === "list" && (
          <div className="space-y-2.5 animate-in fade-in duration-200">
            {filteredTopics.map((topic) => {
              const prog = progressMap[topic.id];
              const isOpen = openNodeId === topic.id;

              return (
                <NodeAccordion
                  key={topic.id}
                  topic={topic}
                  isOpen={isOpen}
                  onToggle={() => setOpenNodeId(isOpen ? null : topic.id)}
                  content={prog?.content}
                  isGenerated={Boolean(prog?.isGenerated)}
                  isMastered={Boolean(prog?.isMastered)}
                  onGenerate={(tId, lvl) => handleGenerateNode(tId, lvl)}
                  onPassQuiz={handlePassQuiz}
                  isGeneratingThis={generatingId === topic.id}
                />
              );
            })}

            {/* Empty search state */}
            {filteredTopics.length === 0 && (
              <div className="text-center py-12 px-4 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-2">
                <CircleDashed className="w-8 h-8 text-slate-500 mx-auto" />
                <p className="text-sm font-semibold text-slate-300">
                  No se encontraron temas con esos filtros
                </p>
                <p className="text-xs text-slate-500">
                  Intenta buscar otro término o limpia los filtros para ver todos los 35 temas.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedModule("ALL");
                    setFilterStatus("all");
                  }}
                  className="mt-2 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-cyan-400 font-semibold cursor-pointer"
                >
                  Restablecer filtros
                </button>
              </div>
            )}
          </div>
        )}

        {/* MODE 3: FLASHCARDS (Tarjetas Mnemotécnicas) */}
        {viewMode === "flashcards" && (
          <div className="animate-in fade-in duration-200 py-2">
            <FlashcardsMode
              topics={filteredTopics}
              progressMap={progressMap}
              onToggleMaster={handleToggleMaster}
              onOpenTopic={(t) => setModalTopic(t)}
            />
          </div>
        )}
      </main>

      {/* Node Detail Modal (Opens when clicked from Network, Flashcards, or anywhere) */}
      <NodeDetailModal
        topic={modalTopic}
        isOpen={Boolean(modalTopic)}
        onClose={() => setModalTopic(null)}
        content={modalTopic ? progressMap[modalTopic.id]?.content : undefined}
        isGenerated={modalTopic ? Boolean(progressMap[modalTopic.id]?.isGenerated) : false}
        isMastered={modalTopic ? Boolean(progressMap[modalTopic.id]?.isMastered) : false}
        onGenerate={handleGenerateNode}
        onPassQuiz={handlePassQuiz}
        isGeneratingThis={modalTopic ? generatingId === modalTopic.id : false}
        allTopics={topics}
        onSelectConnectedTopic={(connected) => setModalTopic(connected)}
        activeLevel={activeLevel}
        onToggleMaster={handleToggleMaster}
      />

      {/* Cross-Topic Simulator Modal */}
      <CrossQuizModal
        isOpen={isSimulacroOpen}
        onClose={() => setIsSimulacroOpen(false)}
        topics={topics}
        masteredTopicIds={masteredTopicIds}
      />

      {/* Add Custom Topic Modal */}
      <AddCustomTopicModal
        isOpen={isAddTopicOpen}
        onClose={() => setIsAddTopicOpen(false)}
        onAddTopic={handleAddTopic}
        nextNumber={topics.length + 1}
      />
    </div>
  );
}
