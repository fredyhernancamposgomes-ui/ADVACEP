export type ModuleId = "I" | "II" | "III" | "IV" | "V";

export type StudyLevel = 1 | 2 | 3;
// 1: Nivel Sencillo (Didáctico & Mnemotécnico)
// 2: Nivel Intermedio (Mecanismos & Componentes Clave)
// 3: Nivel Avanzado (Profundización & Puntos Críticos)

export type ViewMode = "network" | "list" | "flashcards";

export interface TopicNode {
  id: string;
  number: number;
  title: string;
  module: ModuleId;
  moduleName: string;
  category: string;
  keywords: string;
  essentialConcept: string;
  subtopics: string[]; // List of official subtopics included in this node
  // Network graph positioning and topology
  x: number;
  y: number;
  connections: string[]; // Connected topic IDs
}

export type SubtopicLearningMode = "simple" | "causeEffect" | "cepre";

export interface SubtopicExplanation {
  mode: SubtopicLearningMode;
  explanation: string;
  // Modo 1: Metáfora y Analogía Cotidiana
  analogyTitle?: string;
  analogyStory?: string;
  analogyKeyTakeaway?: string;
  // Modo 2: Cómo funciona en la Célula (Sentido común, piezas reales o comparación directa)
  practicalMeaning?: string;
  proteinsAndFactors?: string[];
  comparison?: {
    itemA: string;
    itemB: string;
    differences: { feature: string; valA: string; valB: string }[];
  };
  // Para procesos secuenciales
  cause?: string;
  molecularMechanism?: string;
  biologicalEffect?: string;
  disruptionConsequence?: string;
  // Modo 3: Puntos Clave & Conceptos Críticos
  cepreRule?: string;
  examTrap?: string;
  // Pregunta rápida de autoevaluación
  quickQuestion?: {
    question: string;
    answer: string;
  };
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  conceptTested?: string;
}

export interface NodeContent {
  level?: StudyLevel;
  summary: string[];
  analogy: {
    title: string;
    story: string;
    keyTakeaway: string;
  };
  cepreDeepDive: {
    concepts: string[];
    technicalTerms: {
      term: string;
      definition: string;
    }[];
    examTraps: string[];
  };
  proteinsAndFactors?: {
    name: string;
    role: string;
  }[];
  advancedClinical?: {
    caseTitle: string;
    clinicalApplication: string;
    toxinOrDrugTarget?: string;
  };
  quiz: QuizQuestion[];
}

export interface NodeProgress {
  topicId: string;
  isGenerated: boolean;
  isMastered: boolean;
  lastScore?: number;
  content?: NodeContent;
}

export type LearningLevel = "cepre" | "simple" | "advanced";
export type FilterStatus = "all" | "mastered" | "pending";

