import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";
import { TOPIC_MASTER_DATA } from "./src/data/topicMasterData";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini lazily
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Fallback generator for high-reliability if API key is temporarily unavailable
function getFallbackNodeData(topicTitle: string, moduleName: string, level: number | string = 2) {
  return {
    summary: [
      `Componente fundamental en ${moduleName} enfocado en la arquitectura y función celular de ${topicTitle}.`,
      "Pilar clave para comprender el funcionamiento integral de la célula y sus organelas.",
      "Base estructural para la homeostasis, metabolismo energético y señalización celular.",
    ],
    analogy: {
      title: "La Metáfora de la Ciudadela Viva",
      story: `Imagina que la célula es una metrópoli viva de alta tecnología; ${topicTitle} actúa como el sistema especializado de procesamiento y seguridad que evita el colapso organizativo, asegurando que cada molécula llegue a su destino en el momento exacto.`,
      keyTakeaway: `${topicTitle} es el engranaje clave que conecta la estructura micrométrica con la función vital del organismo.`,
    },
    cepreDeepDive: {
      concepts: [
        `Definición citológica y molecular de ${topicTitle} y su función en la célula viva.`,
        "Mecanismos moleculares involucrados, transporte de gradientes y gasto o producción de ATP.",
        "Diferenciación estructural entre células animales y vegetales vinculadas a esta estructura.",
      ],
      technicalTerms: [
        { term: "Homeostasis celular", definition: "Mantenimiento del equilibrio físico-químico interno frente a variaciones externas." },
        { term: "Gradiente electroquímico", definition: "Diferencia combinada de concentración y carga eléctrica a través de membranas biológicas." },
        { term: "Biogénesis", definition: "Proceso de síntesis, ensamblado y renovación de componentes celulares." },
      ],
      examTraps: [
        `Punto clave: Verificar si la estructura pertenece exclusivamente a eucariotas o si también existe en bacterias.`,
        "Presta atención al balance energético: verifica si el proceso es pasivo o si requiere gasto de energía metabólica (ATP).",
      ],
    },
    advancedClinical: {
      caseTitle: `Importancia Fisiológica de ${topicTitle}`,
      clinicalApplication: `Alteraciones funcionales en ${topicTitle} afectan directamente el equilibrio celular (fatiga celular, fallas de transporte o acumulación de sustancias de desecho).`,
      toxinOrDrugTarget: `Diana molecular de antibióticos o reguladores celulares empleados para estudiar el comportamiento de la célula.`,
    },
    quiz: getFallbackNodeQuiz(topicTitle, moduleName, 3),
  };
}

// Dedicated topic quiz fallback
function getFallbackNodeQuiz(topicTitle: string, moduleName: string = "Citología", count: number = 4) {
  const t = topicTitle.toLowerCase();
  
  if (t.includes("membrana") || t.includes("mosaico")) {
    return [
      {
        question: "Según el modelo del Mosaico Fluido propuesto por Singer y Nicolson, ¿qué componente es el principal responsable de la permeabilidad selectiva?",
        options: [
          "La bicapa lipídica anfipática de fosfolípidos",
          "Las proteínas periféricas unidas a la cara externa",
          "Los iones de sodio libres en el citosol",
          "El glucocálix unido al citoesqueleto"
        ],
        answerIndex: 0,
        explanation: "Los fosfolípidos forman una bicapa con colas hidrofóbicas que actúan como una barrera impermeable para iones y moléculas polares grandes, permitiendo solo el paso de moléculas lipofílicas o gases pequeños.",
        conceptTested: "Bicapa de fosfolípidos anfipáticos"
      },
      {
        question: "¿Qué efecto produce el colesterol en la membrana plasmática de las células animales?",
        options: [
          "Amortigua la fluidez: evita que se congele a bajas temperaturas y que se vuelva demasiado fluida a altas temperaturas",
          "Aumenta la síntesis de glucosa en la superficie celular",
          "Funciona como canal primario para el paso de agua",
          "Destruye las proteínas integrales para permitir la endocitosis"
        ],
        answerIndex: 0,
        explanation: "El colesterol actúa como un modulador o amortiguador térmico de la fluidez: intercalado entre los fosfolípidos, estabiliza la membrana ante cambios de temperatura.",
        conceptTested: "Colesterol y fluidez de membrana"
      },
      {
        question: "Las proteínas integrales de membrana se caracterizan principalmente por:",
        options: [
          "Atravesar la bicapa lipídica (poseer dominios hidrofóbicos) y funcionar como canales o transportadores",
          "Estar unidas únicamente por enlaces covalentes al citoesqueleto",
          "Estar presentes solo en células procariotas",
          "Disolverse completamente en agua al separarse de la membrana"
        ],
        answerIndex: 0,
        explanation: "Las proteínas integrales o transmembrana cruzan la bicapa y contienen regiones hidrofóbicas que interactúan con las colas lipídicas.",
        conceptTested: "Proteínas integrales vs periféricas"
      },
      {
        question: "Si una célula animal se coloca en una solución hipotónica (agua pura con muy poca sal), ¿qué ocurre con la membrana celular?",
        options: [
          "El agua entra a la célula por ósmosis hasta provocar su hinchamiento y eventual lisis (ruptura)",
          "El agua sale masivamente y la célula se arruga (crenación)",
          "La membrana sintetiza celulosa para evitar hincharse",
          "La bomba Na+/K+ se detiene de forma instantánea y permanente"
        ],
        answerIndex: 0,
        explanation: "Al carecer de pared celular rígida, la célula animal en medio hipotónico absorbe agua por ósmosis hasta estallar (lisis osmótica).",
        conceptTested: "Comportamiento osmótico en células animales"
      }
    ].slice(0, count);
  }

  if (t.includes("pasivo") || t.includes("ósmosis") || t.includes("difusión")) {
    return [
      {
        question: "¿Cuál es la característica definitoria del transporte pasivo a través de la membrana?",
        options: [
          "Ocurre a favor del gradiente de concentración sin requerir gasto de energía celular (ATP)",
          "Requiere hidrólisis obligatoria de moléculas de ATP para cada soluto",
          "Solo ocurre en presencia de bacterias fotosintéticas",
          "Transporta únicamente partículas visibles al microscopio óptico"
        ],
        answerIndex: 0,
        explanation: "El transporte pasivo aprovecha la energía cinética intrínseca del gradiente: las sustancias van de donde hay más a donde hay menos concentración espontáneamente.",
        conceptTested: "Gradiente de concentración y ausencia de ATP"
      },
      {
        question: "¿Qué diferencia a la difusión facilitada de la difusión simple?",
        options: [
          "La difusión facilitada requiere proteínas transportadoras (canales o permeasas) para solutos polares o iones",
          "La difusión facilitada gasta ATP mientras que la simple no",
          "La difusión simple requiere energía solar para funcionar",
          "La difusión facilitada solo transporta gases respiratorios como O2"
        ],
        answerIndex: 0,
        explanation: "Moléculas polares o iones no pueden atravesar libremente la bicapa de lípidos; necesitan de canales iónicos o transportadores proteicos (permeasas).",
        conceptTested: "Canales y transportadores de difusión facilitada"
      },
      {
        question: "¿A través de qué proteínas especializadas ocurre el flujo veloz de agua a través de la membrana por ósmosis?",
        options: [
          "Acuaporinas",
          "Riboforinas",
          "Tubulinas",
          "Clatrinas"
        ],
        answerIndex: 0,
        explanation: "Las acuaporinas son canales proteicos transmembrana específicos que facilitan el transporte ultraveloz de agua por ósmosis.",
        conceptTested: "Acuaporinas y ósmosis"
      },
      {
        question: "Cuando una célula vegetal se encuentra en un medio hipertónico (muy salado), el agua sale y su membrana se separa de la pared celular. Este fenómeno se llama:",
        options: [
          "Plasmólisis",
          "Turgencia",
          "Crenación",
          "Fagocitosis"
        ],
        answerIndex: 0,
        explanation: "En la célula vegetal, la pérdida masiva de agua por ósmosis reduce la vacuola y retrae la membrana de la pared celular, fenómeno conocido como plasmólisis.",
        conceptTested: "Plasmólisis vegetal"
      }
    ].slice(0, count);
  }

  if (t.includes("activo") || t.includes("bomba") || t.includes("endocitosis") || t.includes("masa")) {
    return [
      {
        question: "La bomba de Sodio-Potasio (Na+/K+ ATPasa) transporta en cada ciclo de hidrólisis de ATP:",
        options: [
          "3 iones Na+ hacia el exterior y 2 iones K+ hacia el interior de la célula",
          "2 iones Na+ hacia el exterior y 3 iones K+ hacia el interior de la célula",
          "3 iones K+ hacia el exterior y 3 iones Na+ hacia el interior de la célula",
          "1 ion Na+ y 1 molécula de glucosa hacia el interior"
        ],
        answerIndex: 0,
        explanation: "La estequiometría clásica de la bomba Na+/K+ es expulsar 3 iones Na+ e ingresar 2 iones K+, consumiendo 1 molécula de ATP y manteniendo el potencial electroquímico.",
        conceptTested: "Estequiometría de la Bomba Na+/K+"
      },
      {
        question: "¿Por qué la bomba de Na+/K+ es electrogénica?",
        options: [
          "Porque expulsa más cargas positivas (3 Na+) de las que ingresa (2 K+), generando un interior celular electronegativo",
          "Porque produce chispas eléctricas que activan los ribosomas",
          "Porque consume glucosa en lugar de ATP para funcionar",
          "Porque transporta iones de calcio a través de los plasmodesmos"
        ],
        answerIndex: 0,
        explanation: "Al sacar 3 cationes Na+ por cada 2 cationes K+ que introduce, crea una diferencia neta de carga que contribuye al potencial de reposo de la membrana celular.",
        conceptTested: "Potencial electrogénico de membrana"
      },
      {
        question: "La ingestión celular de partículas sólidas de gran tamaño mediante la emisión de pseudópodos se denomina:",
        options: [
          "Fagocitosis",
          "Pinocitosis",
          "Exocitosis constitutiva",
          "Difusión facilitada"
        ],
        answerIndex: 0,
        explanation: "La fagocitosis envuelve sólidos con proyecciones de membrana (pseudópodos) formando un fagosoma.",
        conceptTested: "Fagocitosis vs Pinocitosis"
      },
      {
        question: "En la exocitosis, ¿qué ocurre con la membrana de la vesícula secretora una vez liberado su contenido al exterior?",
        options: [
          "Se fusiona e integra con la membrana plasmática celular",
          "Es destruida y evaporada al medio extracelular",
          "Se transforma espontáneamente en un ribosoma 80S",
          "Regresa intacta al núcleo celular"
        ],
        answerIndex: 0,
        explanation: "La membrana vesicular bicapa se fusiona con la membrana plasmática celular, permitiendo reciclar lípidos y mantener la superficie de la célula.",
        conceptTested: "Fusión vesicular en exocitosis"
      }
    ].slice(0, count);
  }

  if (t.includes("núcleo") || t.includes("carioteca") || t.includes("poro") || t.includes("nucleolo")) {
    return [
      {
        question: "¿Qué función cumple el Complejo del Poro Nuclear (NPC) en la envoltura nuclear?",
        options: [
          "Regular de forma selectiva y bidireccional el tráfico de macromoléculas (proteínas y ARN) entre núcleo y citosol",
          "Sintetizar directamente la pared celular de celulosa",
          "Bombear protones para acidificar el nucleoplasma a pH 2",
          "Destruir los ribosomas que intenten ingresar al núcleo"
        ],
        answerIndex: 0,
        explanation: "El complejo del poro nuclear está formado por nucleoporinas y regula el paso de proteínas con señal NLS y la salida de ARN mensajeros y subunidades ribosómicas.",
        conceptTested: "Tráfico del complejo del poro nuclear"
      },
      {
        question: "¿En qué región del núcleo celular se sintetiza el ARN ribosomal (ARNr) y se ensamblan las subunidades ribosómicas?",
        options: [
          "En el nucleolo",
          "En la lámina nuclear externa",
          "En los cinetocoros del centrómero",
          "En los telómeros de heterocromatina"
        ],
        answerIndex: 0,
        explanation: "El nucleolo es una estructura densa no membranosa organizada alrededor de las regiones NOR donde se transcribe el ARNr y se acoplan proteínas para formar las subunidades ribosomales.",
        conceptTested: "Función del nucleolo"
      },
      {
        question: "¿Cuál es la diferencia fundamental entre la eucromatina y la heterocromatina?",
        options: [
          "La eucromatina está descondensada y activa para la transcripción, mientras que la heterocromatina está compacta y silenciada",
          "La eucromatina solo contiene lípidos y la heterocromatina solo ADN",
          "La heterocromatina solo existe en las células bacterianas",
          "La eucromatina forma la cápsula externa de la célula"
        ],
        answerIndex: 0,
        explanation: "La eucromatina presenta una conformación abierta accesible para la ARN polimerasa, mientras que la heterocromatina es densa, altamente condensada y transcripcionalmente inactiva.",
        conceptTested: "Eucromatina vs Heterocromatina"
      },
      {
        question: "Las proteínas encargadas de ingresar macromoléculas desde el citosol hacia el interior del núcleo a través del poro nuclear son:",
        options: [
          "Importinas (que reconocen la señal de localización nuclear NLS)",
          "Exportinas (que reconocen la señal NES)",
          "Dineínas de los flagelos",
          "Colágenos de la matriz extracelular"
        ],
        answerIndex: 0,
        explanation: "Las importinas reconocen la señal NLS (Nuclear Localization Signal) en las proteínas citosólicas y las guían a través del poro con ayuda de la GTPasa Ran.",
        conceptTested: "Mecanismo de Importinas y NLS"
      }
    ].slice(0, count);
  }

  // Generic fallback
  return [
    {
      question: `¿Cuál es la función celular primordial asociada a ${topicTitle}?`,
      options: [
        `Coordinar procesos especializados indispensables para la fisiología y arquitectura de la célula`,
        `Destruir indiscriminadamente todo tipo de biomoléculas sin control enzimático`,
        `Impedir el flujo de energía hacia el resto de compartimentos`,
        `Sustituir de forma espontánea el genoma celular`
      ],
      answerIndex: 0,
      explanation: `${topicTitle} cumple un rol molecular de alta especificidad para mantener la homeostasis celular.`,
      conceptTested: `Función biológica de ${topicTitle}`
    },
    {
      question: `Si se altera o inhibe la estructura de ${topicTitle}, ¿qué impacto experimenta la célula?`,
      options: [
        `Se altera el equilibrio celular y se produce un fallo funcional en los procesos que dependen de su actividad`,
        `La célula se duplica instantáneamente sin requerir nutrientes`,
        `Todos los fosfolípidos se transforman en ADN`,
        `La célula adquiere vida eterna sin envejecer`
      ],
      answerIndex: 0,
      explanation: `Las organelas y estructuras celulares trabajan en red interconectada; cuando una falla, el metabolismo se desequilibra.`,
      conceptTested: `Consecuencia celular de ${topicTitle}`
    },
    {
      question: `¿Qué relación existe entre la ultraestructura de ${topicTitle} y su función?`,
      options: [
        `Su forma y componentes moleculares determinan con exactitud qué reacciones puede realizar`,
        `No guardan ninguna relación; la forma celular es completamente aleatoria`,
        `Solo tiene forma fija cuando la célula ha muerto`,
        `Depende exclusivamente de la luz solar directa`
      ],
      answerIndex: 0,
      explanation: `El principio unificador de la citología es que la estructura molecular define la función biológica.`,
      conceptTested: `Relación estructura-función`
    },
    {
      question: `Para consolidar el aprendizaje de ${topicTitle}, ¿cuál es el mejor enfoque pedagógico?`,
      options: [
        `Comprender la analogía de cómo funciona y qué piezas reales intervienen paso a paso`,
        `Memorizar nombres sin relacionarlos con la célula viva`,
        `Confundir términos similares sin verificar su ubicación`,
        `Ignorar el papel de las proteínas y enzimas`
      ],
      answerIndex: 0,
      explanation: `Entender la lógica y la metáfora viva permite recordar el concepto para siempre con total naturalidad.`,
      conceptTested: `Comprensión conceptual profunda`
    }
  ].slice(0, count);
}

// 1. Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", aiConfigured: Boolean(process.env.GEMINI_API_KEY) });
});

// 2. Progressive Node Content Generation
app.post("/api/generate-node", async (req, res) => {
  try {
    const { topicId, topicTitle, moduleName, keywords, level = 2 } = req.body;

    if (!topicTitle && !topicId) {
      return res.status(400).json({ error: "Falta el identificador o título del tema." });
    }

    // 1. Check curated TOPIC_MASTER_DATA first by ID or Title
    let curatedData = topicId ? TOPIC_MASTER_DATA[topicId] : null;
    if (!curatedData && topicTitle) {
      const matchKey = Object.keys(TOPIC_MASTER_DATA).find(
        (key) =>
          TOPIC_MASTER_DATA[key].analogy?.title?.toLowerCase().includes(topicTitle.toLowerCase()) ||
          key === topicId
      );
      if (matchKey) curatedData = TOPIC_MASTER_DATA[matchKey];
    }

    // If curated biological content is available, return it directly!
    if (curatedData) {
      console.log(`[Master Data] Sirviendo contenido biológico curado de alta fidelidad para: ${topicId || topicTitle}`);
      return res.json(curatedData);
    }

    const ai = getGeminiClient();

    if (!ai) {
      // Return structured fallback
      console.log(`[Gemini API] Sin API KEY, sirviendo contenido optimizado para: ${topicTitle}`);
      return res.json(getFallbackNodeData(topicTitle, moduleName || "Citología", level));
    }

    const levelText =
      level === 1 || level === "simple"
        ? "Nivel 1 (Sencillo & Didáctico): Concepto fundamental ultraclaro, analogía didáctica inolvidable y fijación rápida."
        : level === 2 || level === "causeEffect"
        ? "Nivel 2 (Intermedio & Mecanismo Celular con Proteínas): Identificación de las proteínas, enzimas y componentes moleculares clave, cómo funciona la célula de verdad y qué ocurre si falla."
        : "Nivel 3 (Profundización & Conceptos Críticos): Ultraestructura celular, balances bioenergéticos, términos técnicos exactos y los puntos donde suelen ocurrir confusiones.";

    const prompt = `Eres un docente y divulgador de Biología Celular que enseña con pasión y claridad en una Biblioteca Viva de Citología.
Tu misión es generar una síntesis fascinante y accesible para el tema: "${topicTitle}" (Módulo: "${moduleName || 'Citología'}", Palabras clave: "${keywords || 'célula, organelas'}").
Evita tecnicismos vacíos o lenguaje robótico; usa explicaciones humanas, lógicas y memorables.

Nivel solicitado: ${levelText}.

Debes devolver UN ÚNICO OBJETO JSON con esta estructura exacta:
{
  "summary": [
    "Punto esencial 1: Definición precisa y ultraestructura.",
    "Punto esencial 2: Función bioenergética o fisiológica crucial.",
    "Punto esencial 3: Dato clave de diferenciación celular (animal vs vegetal o procariota vs eucariota)."
  ],
  "analogy": {
    "title": "Título de la analogía cotidiana",
    "story": "Metáfora clara de la vida diaria que explica el mecanismo biológico sin rodeos.",
    "keyTakeaway": "La conexión directa entre la analogía y la biología celular."
  },
  "proteinsAndFactors": [
    { "name": "Nombre de proteína/enzima 1", "role": "Función molecular exacta en este tema." },
    { "name": "Nombre de proteína/enzima 2", "role": "Función molecular exacta en este tema." },
    { "name": "Nombre de proteína/enzima 3", "role": "Función molecular exacta en este tema." }
  ],
  "cepreDeepDive": {
    "concepts": [
      "Concepto clave 1 con nombres de enzimas, complejos o rutas precisas.",
      "Concepto clave 2 con detalles moleculares o de transporte.",
      "Concepto clave 3 sobre regulación celular."
    ],
    "technicalTerms": [
      { "term": "Término 1", "definition": "Definición concisa y rigurosa." },
      { "term": "Término 2", "definition": "Definición concisa y rigurosa." },
      { "term": "Término 3", "definition": "Definición concisa y rigurosa." }
    ],
    "examTraps": [
      "Punto de atención 1: La confusión frecuente entre este concepto y otro muy parecido.",
      "Punto de atención 2: El detalle biológico que nunca se debe olvidar."
    ]
  },
  "quiz": [
    {
      "question": "Pregunta 1 de comprensión conceptual.",
      "options": ["Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D"],
      "answerIndex": 0,
      "explanation": "Explicación didáctica de por qué la clave es la correcta."
    },
    {
      "question": "Pregunta 2 sobre ultraestructura o función molecular.",
      "options": ["Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D"],
      "answerIndex": 1,
      "explanation": "Explicación detallada."
    },
    {
      "question": "Pregunta 3 sobre diferenciación celular o balance biológico.",
      "options": ["Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D"],
      "answerIndex": 2,
      "explanation": "Explicación detallada."
    }
  ]
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.2,
      },
    });

    const responseText = response.text || "{}";
    const parsedData = JSON.parse(responseText.trim());
    return res.json(parsedData);
  } catch (error) {
    console.error("[generate-node] Error generando contenido:", error);
    const { topicTitle, moduleName } = req.body;
    return res.json(getFallbackNodeData(topicTitle || "Citología", moduleName || "Citología"));
  }
});

// 2.5. Dedicated Subtopic Deep-Dive with 3 Learning Modes (Sencillo/Analogía, Mecanismo/Proteínas, Puntos Clave)
app.post("/api/generate-subtopic", async (req, res) => {
  try {
    const { topicTitle, subtopicName, mode = "simple", customQuestion } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      // Fallback rico y pedagógico
      return res.json({
        analogyTitle: `La Analogía Cotidiana de ${subtopicName}`,
        analogyStory: `Imagina que la célula es como una casa en constante actividad. ${subtopicName} funciona como una de sus habitaciones o herramientas especializadas, asegurando que todo funcione en orden sin que se crucen los cables ni se gaste energía en vano.`,
        analogyKeyTakeaway: `${subtopicName} resuelve una necesidad vital de la célula con máxima eficiencia.`,
        explanation: `${subtopicName} es un concepto clave en ${topicTitle}. Comprender cómo interactúan sus piezas y qué diferencia a cada estructura permite visualizar el funcionamiento de la vida celular con total naturalidad.`,
        practicalMeaning: `Permite comprender la fisiología celular y cómo los medicamentos o toxinas actúan sobre el organismo.`,
        proteinsAndFactors: [
          "Proteínas estructurales de anclaje",
          "Enzimas catalíticas específicas",
          "Factores de regulación molecular"
        ],
        cepreRule: `Punto clave: Identificar con precisión la localización celular y qué estructuras tienen membrana vs. cuáles no.`,
        examTrap: `Confusión frecuente: No confundir términos similares (como nucleoide con nucleolo) ni atribuir organelas eucariotas a las bacterias.`,
        keyTakeaway: `Entender la función real y la analogía hace que el concepto quede grabado con naturalidad.`,
      });
    }

    const modePromptGuide =
      mode === "simple"
        ? `NIVEL 1: METÁFORA Y ANALOGÍA COTIDIANA (Objetivo: que un estudiante que le cuesta aprender se enamore del tema y lo entienda en 30 segundos).
Crea una metáfora de la vida real súper visual y humana (por ejemplo: la célula como una casa o mansión con habitaciones vs. un monoambiente sin paredes, o una fábrica de envíos, o una batería recargable, o un enchufe con distinto voltaje).
Debe incluir:
- "analogyTitle": Título llamativo y simpático de la metáfora.
- "analogyStory": La historia o metáfora explicada de forma amena, fluida, sin palabras raras ni tecnicismos vacíos.
- "analogyKeyTakeaway": La conclusión que se le graba en la memoria al instante.
- "practicalMeaning": ¿Para qué sirve esto en la vida real o en los seres vivos?`
        : mode === "causeEffect"
        ? `NIVEL 2: ¿CÓMO FUNCIONA EN LA CÉLULA? (Sentido común y piezas reales).
Explica con claridad meridiana cómo funciona este subtema en la célula viva y cuáles son las PROTEÍNAS, ENZIMAS y ESTRUCTURAS REALES que intervienen (con 2 o 3 palabras explicando qué hace cada una).
Si el tema es comparativo (como Procariota vs Eucariota, 70S vs 80S, etc.), rellena el campo "comparison" con itemA, itemB y una lista de differences (feature, valA, valB).
Si es un proceso fisiológico, detalla "cause", "molecularMechanism", "biologicalEffect" y "disruptionConsequence" con explicaciones humanas, lógicas y comprensibles.`
        : `NIVEL 3: TRAMPAS DE EXAMEN Y DESARME DE CONFUSIONES.
Enfocado en desarmar trampas de examen y confusiones frecuentes con lenguaje humano y sentido común:
- "cepreRule": El criterio central e incontrovertible que permite responder con seguridad sin caer en trampas.
- "examTrap": La confusión más común de los exámenes y el truco mental para descartarla en segundos.
- "keyTakeaway": La regla de oro para que el cerebro lo recuerde sin esfuerzo.`;

    const prompt = `Eres un educador y divulgador de Biología Celular apasionado por la claridad pedagógica.
Tu misión es hablarle a un estudiante que se siente frustrado cuando le complican temas sencillos, y hacer que le quede cristalino, fluido y fascinante el subtema: "${subtopicName}" (dentro del tema general "${topicTitle}").
Explica con sentido común, metáforas cotidianas y las piezas biológicas reales. No uses tecnicismos vacíos ni frases artificiales de plantilla.

${modePromptGuide}
${customQuestion ? `Pregunta específica del estudiante: "${customQuestion}"` : ""}

Devuelve un ÚNICO objeto JSON con estos campos (todos en español):
{
  "explanation": "Explicación clara, directa y motivadora (máximo 140 palabras).",
  "analogyTitle": "Título de la analogía cotidiana (solo si aplica o relevante)",
  "analogyStory": "Historia de la analogía cotidiana (solo si aplica o relevante)",
  "analogyKeyTakeaway": "Frase memorable de la analogía",
  "practicalMeaning": "Por qué importa esto en los seres vivos y la vida real",
  "proteinsAndFactors": ["Proteína/Enzima 1 (qué hace en 3 palabras)", "Proteína/Enzima 2 (qué hace en 3 palabras)", "Componente 3"],
  "comparison": {
    "itemA": "Nombre A (ej: Procariota)",
    "itemB": "Nombre B (ej: Eucariota)",
    "differences": [
      { "feature": "Característica", "valA": "Estado en A", "valB": "Estado en B" }
    ]
  },
  "cause": "Por qué se activa o se necesita este proceso en la célula",
  "molecularMechanism": "Cómo actúan las piezas biológicas paso a paso",
  "biologicalEffect": "Qué resultado se obtiene",
  "disruptionConsequence": "Qué pasa si falla o se altera",
  "cepreRule": "Idea fundamental y rigurosa del subtema",
  "examTrap": "Confusión frecuente y cómo evitarla",
  "keyTakeaway": "Frase final para recordar con sentido común"
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.3,
      },
    });

    const parsed = JSON.parse((response.text || "{}").trim());
    return res.json(parsed);
  } catch (err) {
    console.error("[generate-subtopic] Error:", err);
    return res.json({
      explanation: `Explicación clave de ${req.body.subtopicName || 'subtema'}: Comprender sus componentes y la lógica biológica es indispensable para dominar el tema.`,
      proteinsAndFactors: ["Proteínas funcionales", "Enzimas específicas"],
      keyTakeaway: "Dominar la lógica del subtema asegura comprender la célula a profundidad.",
    });
  }
});

// 3. Dynamic Cross-Topic Quiz (Desafío Global de la Biblioteca)
app.post("/api/generate-cross-quiz", async (req, res) => {
  try {
    const { topicTitles = [], count = 5 } = req.body;
    const ai = getGeminiClient();

    const selectedTopics = topicTitles.length > 0
      ? topicTitles.slice(0, 10).join(", ")
      : "Citología general, Organelas celulares, Membrana plasmática, Núcleo celular y Meiosis";

    if (!ai) {
      return res.json({
        quiz: [
          {
            question: "¿Cuál de las siguientes estructuras celulares carece de membrana y está constituida por ARN ribosomal y proteínas?",
            options: ["Ribosoma", "Lisosoma", "Peroxisoma", "Glioxisoma"],
            answerIndex: 0,
            explanation: "Los ribosomas son organoides no membranosos formados por ARNr y ribonucleoproteínas (70S en procariotas y 80S en eucariotas).",
          },
          {
            question: "En la membrana plasmática, el modelo del mosaico fluido fue propuesto en 1972 por:",
            options: ["Singer y Nicolson", "Watson y Crick", "Schleiden y Schwann", "Davson y Danielli"],
            answerIndex: 0,
            explanation: "S. Jonathan Singer y Garth L. Nicolson propusieron el modelo del Mosaico Fluido demostrando la movilidad de la bicapa lipídica y proteínas.",
          },
          {
            question: "Durante la respiración celular aeróbica, ¿en qué compartimento de la mitocondria ocurre el Ciclo de Krebs?",
            options: ["Matriz mitocondrial (mitosol)", "Espacio intermembranoso", "Crestas mitocondriales", "Membrana externa"],
            answerIndex: 0,
            explanation: "El Ciclo de Krebs se produce en la matriz mitocondrial, mientras que la fosforilación oxidativa ocurre en las crestas.",
          },
          {
            question: "La organela celular encargada de la detoxificación celular y de la síntesis de lípidos es:",
            options: ["Retículo Endoplasmático Liso (REL)", "Retículo Endoplasmático Rugoso (RER)", "Aparato de Golgi", "Vacuola"],
            answerIndex: 0,
            explanation: "El REL carece de ribosomas y se especializa en síntesis de lípidos, almacén de calcio y detoxificación celular.",
          },
          {
            question: "¿En qué subfase de la Profase I de la Meiosis ocurre el crossing over o recombinación genética homóloga?",
            options: ["Paquiteno", "Leptoteno", "Cigoteno", "Diploteno"],
            answerIndex: 0,
            explanation: "El crossing over ocurre exactamente en el Paquiteno (tras la formación del complejo sinaptonémico en cigoteno).",
          },
        ],
      });
    }

    const prompt = `Actúa como tutor de Biología Celular. Crea un Cuestionario Integrador de ${count} preguntas de opción múltiple (4 alternativas A, B, C, D) para evaluar la comprensión de estos temas de la biblioteca: ${selectedTopics}.
Las preguntas deben evaluar comprensión real de mecanismos celulares, no memorización mecánica.
Devuelve un JSON con:
{
  "quiz": [
    {
      "question": "Pregunta clara y bien planteada",
      "options": ["A", "B", "C", "D"],
      "answerIndex": 0,
      "explanation": "Explicación biológica clara de la respuesta correcta"
    }
  ]
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.3,
      },
    });

    const parsed = JSON.parse((response.text || "{}").trim());
    return res.json(parsed);
  } catch (err) {
    console.error("[generate-cross-quiz] Error:", err);
    return res.status(500).json({ error: "Error generando cuestionario" });
  }
});

// 3.5. Dynamic Node-Specific Quiz Generator (Evaluación Activa con IA por Nodo)
app.post("/api/generate-node-quiz", async (req, res) => {
  try {
    const { topicTitle, moduleName, keywords, level = 1, count = 4 } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      console.log(`[generate-node-quiz] Sin API KEY, sirviendo fallback enriquecido para: ${topicTitle}`);
      return res.json({
        quiz: getFallbackNodeQuiz(topicTitle, moduleName || "Citología", count),
        source: "curated-library"
      });
    }

    const levelGuide = Number(level) === 1
      ? "Nivel 1 (Didáctico, Visual & Sencillo): Evaluando analogías cotidianas, la función biológica principal, identificación intuitiva de estructuras y evitar confusiones clásicas."
      : Number(level) === 2
      ? "Nivel 2 (Mecanismos & Piezas Reales): Proteínas y enzimas específicas, relaciones causa-consecuencia, flujo molecular y qué ocurre si falla la estructura."
      : "Nivel 3 (Profundización & Conceptos Críticos): Ultraestructura de membrana/compartimentos, detalles fisiológicos y distinciones sutiles.";

    const prompt = `Eres un docente y divulgador de Biología Celular que enseña con pasión y claridad pedagógica.
Tu misión es crear un desafío interactivo de autoevaluación activa para el tema: "${topicTitle}" (Módulo: "${moduleName || 'Citología'}").
Palabras clave: "${keywords || 'célula, ultraestructura, fisiología'}".
Enfoque didáctico solicitado: ${levelGuide}.

Genera exactamente ${count} preguntas de opción múltiple (4 alternativas por pregunta: A, B, C, D) con estas directrices de oro:
1. Las preguntas deben evaluar comprensión real y lógica biológica (no trampas absurdas de memoria o números irrelevantes).
2. Cada pregunta debe invitar al estudiante a razonar cómo funciona la célula viva.
3. Las opciones incorrectas deben representar confusiones frecuentes que los estudiantes suelen cometer.
4. La opción correcta debe ser inconfundible cuando se comprende el concepto.
5. El campo "explanation" debe ser cálido, humano, didáctico y explicar en 2 o 3 líneas por qué esa opción es la correcta y qué detalle aclara la duda para siempre.

Devuelve un ÚNICO objeto JSON con este formato:
{
  "quiz": [
    {
      "question": "¿Pregunta clara y contextualizada en la fisiología celular?",
      "options": ["Opción correcta o distractora A", "Opción B", "Opción C", "Opción D"],
      "answerIndex": 0,
      "explanation": "Explicación pedagógica amena y cristalina.",
      "conceptTested": "Concepto evaluado breve"
    }
  ]
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.35,
      },
    });

    const parsed = JSON.parse((response.text || "{}").trim());
    return res.json({
      quiz: parsed.quiz && parsed.quiz.length > 0 ? parsed.quiz : getFallbackNodeQuiz(topicTitle, moduleName, count),
      source: "gemini-ai"
    });
  } catch (err) {
    console.error("[generate-node-quiz] Error:", err);
    return res.json({
      quiz: getFallbackNodeQuiz(req.body.topicTitle || "Citología", req.body.moduleName, 4),
      source: "curated-library"
    });
  }
});

// 4. Ask Tutor IA (Resolve questions on any node)
app.post("/api/ask-doubt", async (req, res) => {
  try {
    const { topicTitle, question } = req.body;
    if (!question) {
      return res.status(400).json({ error: "Escribe tu pregunta." });
    }

    const ai = getGeminiClient();
    if (!ai) {
      return res.json({
        answer: `Respecto a "${topicTitle}": Recuerda que la clave para entender la célula radica en relacionar su estructura (su forma y membranas) con su función (qué hace y cómo interactúa). Para "${question}", concéntrate en identificar las partes involucradas y el flujo de la célula.`,
      });
    }

    const prompt = `Eres un tutor de Biología Celular cercano, pedagógico y empático.
El alumno está explorando el tema "${topicTitle || 'Citología'}" en la biblioteca viva y te hace esta pregunta:
"${question}"

Respóndele de forma directa, comprensible y con sentido común (máximo 120 palabras). Usa una pequeña analogía cotidiana si ayuda a destrabar el concepto, y evita el lenguaje excesivamente técnico o robótico.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        temperature: 0.3,
      },
    });

    return res.json({ answer: response.text || "No se pudo generar respuesta." });
  } catch (err) {
    console.error("[ask-doubt] Error:", err);
    return res.status(500).json({ error: "Error al responder duda" });
  }
});

// Setup Vite / Static handling
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Biblioteca Celular Viva Server corriendo en http://0.0.0.0:${PORT}`);
  });
}

start();
