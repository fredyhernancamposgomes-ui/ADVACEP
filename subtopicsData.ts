import { SubtopicExplanation, SubtopicLearningMode } from "../types";

export const TOPIC_SUBTOPICS: Record<string, string[]> = {
  "tema-01": [
    "Postulados fundamentales de la Teoría Celular",
    "Cronología de científicos (Hooke, Leeuwenhoek, Brown, Schleiden, Schwann)",
    "El principio de Virchow: Omnis cellula e cellula",
    "Excepciones biológicas (Virus, priones, sincitios y viroides)",
  ],
  "tema-02": [
    "Carioteca y compartimentación: Procariota vs. Eucariota",
    "Plásmidos y ADN circular desnudo bacteriano",
    "Ribosomas 70S vs. 80S y sensibilidad a antibióticos",
    "Pared celular: Peptidoglucano bacteriano vs. Celulosa eucariota",
  ],
  "tema-03": [
    "Composición bioquímica: Oligosacáridos y glicoproteínas",
    "Reconocimiento celular y antigenismo (Grupos sanguíneos ABO)",
    "Histocompatibilidad (MHC) e inmunidad tisular",
    "Carga eléctrica negativa superficial y adhesión intercelular",
  ],
  "tema-04": [
    "Capas de la pared: Lámina media, pared primaria y pared secundaria",
    "Componentes químicos: Celulosa, hemicelulosa, pectinas y lignina",
    "Plasmodesmos: Interconexión citoplasmática y desmotúbulo",
    "Presión de turgencia y prevención de la lisis osmótica vegetal",
  ],
  "tema-05": [
    "Estructura del peptidoglucano (Mureína y puentes peptídicos)",
    "Bacterias Gram positivas: Ácidos teicoicos y lipoteicoicos",
    "Bacterias Gram negativas: Membrana externa, porinas y LPS",
    "Mecanismo de acción de la penicilina y lisozima",
  ],
  "tema-06": [
    "Modelo del Mosaico Fluido de Singer y Nicolson (1972)",
    "Bicapa de fosfolípidos anfipáticos y autosellado",
    "Colesterol: Amortiguador térmico de la fluidez de membrana",
    "Proteínas de membrana: Integrales (transmembrana) vs. Periféricas",
  ],
  "tema-07": [
    "Difusión simple a través de la bicapa lipídica (Gases, O2, CO2)",
    "Difusión facilitada por canales iónicos y permeasas (carriers)",
    "Ósmosis: Acuaporinas y comportamiento en medios hiper/hipo/isotónicos",
    "Plasmólisis vegetal, turgencia y crenación/lisis animal",
  ],
  "tema-08": [
    "Transporte activo primario: Bomba Na+/K+ ATPasa (3 Na+ salen, 2 K+ entran)",
    "Transporte activo secundario: Simporte y antiporte con gradiente iónico",
    "Endocitosis: Fagocitosis (pseudópodos) y Pinocitosis (vesículas)",
    "Exocitosis constitutiva y regulada por calcio intracelular",
  ],
  "tema-09": [
    "Citosol / hialoplasma: Composición coloidal y agua libre vs ligada",
    "Transiciones de fase sol-gel y tixotropía citoplasmática",
    "Corriente citoplasmática (ciclosis) y movimiento de organelas",
    "Homeostasis química intracelular y reservas de metabolitos",
  ],
  "tema-10": [
    "Microfilamentos de actina: Polaridad (+/-) y motilidad celular",
    "Filamentos intermedios: Resistencia mecánica celular (queratinas, láminas)",
    "Microtúbulos de alfa y beta tubulina: Crecimiento dinámico y huso",
    "Proteínas motoras citoesqueléticas: Quinesinas y dineínas",
  ],
  "tema-11": [
    "Centrosoma celular y centro organizador de microtúbulos (MTOC)",
    "Diplosoma: Pareja de centríolos con estructura 9x3 tripletes",
    "Axonema de cilios y flagelos: Estructura 9+2 dobletes y nexina",
    "Corpúsculo basal o cinetosoma y mecanismo de batido ciliar",
  ],
  "tema-12": [
    "Estructura del ribosoma: Subunidad menor y subunidad mayor",
    "Comparativa: Ribosoma 70S procariota vs 80S eucariota",
    "Polisomas o polirribosomas en la traducción intensiva",
    "Centro peptidil transferasa y catálisis de la unión peptídica",
  ],
  "tema-13": [
    "Inclusiones de reserva energética: Gránulos de glucógeno hepático",
    "Gotas lipídicas (liposomas / adiposomas) y triglicéridos",
    "Inclusiones vegetales: Granos de almidón y amiloplastos",
    "Cristales de sales minerales: Oxalato cálcico (drusas y rafidios)",
  ],
  "tema-14": [
    "Riboforinas I y II: Anclaje de ribosomas 80S a la membrana del RER",
    "Síntesis de proteínas de exportación, membrana y lisosomales",
    "N-glicosilación inicial de proteínas en la luz del retículo",
    "Chaperonas moleculares y control de calidad del plegamiento (Bip/Calnexina)",
  ],
  "tema-15": [
    "Síntesis de lípidos: Fosfolípidos, colesterol y hormonas esteroideas",
    "Detoxificación celular mediada por citocromo P450 en hepatocitos",
    "Glucogenólisis hepática: Enzima glucosa-6-fosfatasa",
    "Retículo sarcoplásmico: Almacén y liberación de Ca2+ en músculo",
  ],
  "tema-16": [
    "Dictiosomas y polaridad: Cara cis (entrada) y cara trans (salida)",
    "O-glicosilación terminal y maduración química de biomoléculas",
    "Empaquetamiento y tráfico vesicular mediado por COP-I, COP-II y clatrina",
    "Biogénesis de lisosomas primarios y del acrosoma del espermatozoide",
  ],
  "tema-17": [
    "Hidrolasas ácidas y bomba vacuolar H+-ATPasa (pH 5.0 intra-lisosomal)",
    "Heterofagia: Fusión con fagosomas para digerir bacterias y detritos",
    "Autofagia: Reciclaje y limpieza de organelas senescentes (mitofagia)",
    "Autólisis celular y patologías de almacenamiento lisosomal (Tay-Sachs)",
  ],
  "tema-18": [
    "Enzimas oxidasas y generación metabólica de H2O2",
    "Enzima catalasa: Conversión inmediata de H2O2 en H2O y O2",
    "Beta-oxidación de ácidos grasos de cadena muy larga (VLCFA)",
    "Glioxisomas en semillas vegetales: Ciclo del glioxilato para dar glúcidos",
  ],
  "tema-19": [
    "Membrana del tonoplasto y bombas de transporte selectivo",
    "Generación de presión de turgencia en tejidos vegetales",
    "Almacén de pigmentos antocianinas y metabolitos secundarios",
    "Inclusiones y cristales vacuolares de oxalato de calcio",
  ],
  "tema-20": [
    "Ultraestructura: Doble membrana, espacio intermembrana y crestas",
    "Matriz mitocondrial (mitosol) y mitorribosomas 70S",
    "ADN circular mitocondrial, semiautonomía y herencia materna",
    "Fosforilación oxidativa, complejos respiratorios y ATP sintasa F0-F1",
  ],
  "tema-21": [
    "Ultraestructura del cloroplasto: Doble membrana, estroma y tilacoides",
    "Clorofilas y pigmentos fotosintéticos accesorios (carotenos y xantofilas)",
    "ADN plastidial circular y ribosomas plastidiales 70S",
    "Clasificación plastidial: Cloroplastos, cromoplastos y amiloplastos",
  ],
  "tema-22": [
    "Arquitectura general del núcleo interfásico y su función celular",
    "Relación nucleocitoplasmática y control del ciclo celular",
    "Compartimentación física del material genético en eucariotas",
    "Diferencias morfológicas del núcleo en distintos tipos celulares",
  ],
  "tema-23": [
    "Envoltura nuclear: Membrana interna, externa y cisterna perinuclear",
    "Complejo del poro nuclear (NPC) y proteínas nucleoporinas",
    "Lámina nuclear: Filamentos de láminas A, B y C que dan soporte",
    "Desensamble de la carioteca por fosforilación de láminas al dividirse",
  ],
  "tema-24": [
    "Señal de localización nuclear (NLS) y exportación (NES)",
    "Proteínas transportadoras: Importinas alfa/beta y exportinas",
    "Ciclo de la pequeña GTPasa Ran (Ran-GTP nuclear vs Ran-GDP citosólico)",
    "Selectividad del poro nuclear: Difusión libre de solutos vs tráfico activo",
  ],
  "tema-25": [
    "Cariolinfa o nucleoplasma: Composición iónica, nucleótidos y enzimas",
    "Matriz nuclear fibrilar: Andamiaje interno para anclar la cromatina",
    "Topología nuclear: Territorios cromosómicos interfásicos",
    "Actividad metabólica nuclear: Replicación, transcripción y corte/empalme",
  ],
  "tema-26": [
    "Organización del nucleosoma: Octámero de histonas (H2A, H2B, H3, H4) + ADN",
    "Histona H1: Sellado del nucleosoma y fibra cromatínica de 30 nm",
    "Bucles cromatínicos y andamiaje no histónico condensina",
    "Niveles de empaquetamiento: Desde la doble hélice hasta el cromosoma metafásico",
  ],
  "tema-27": [
    "Eucromatina: Configuración abierta, descondensada y activa",
    "Heterocromatina constitutiva: Regiones centroméricas y teloméricas silenciadas",
    "Heterocromatina facultativa e inactivación del cromosoma X",
    "El corpúsculo de Barr: Detección en frotis y compensación de dosis genética",
  ],
  "tema-28": [
    "Ultraestructura del nucleolo: Centro fibrilar, componente denso y granular",
    "Organizador nucleolar (NOR) en los cromosomas acrocéntricos humanos",
    "Transcripción del transcrito primario ARNr 45S por la ARN polimerasa I",
    "Ensamblaje y maduración de las subunidades ribosomales 40S y 60S",
  ],
  "tema-29": [
    "Anatomía del cromosoma: Centrómero, constricción primaria y cromátidas",
    "Cinetocoro proteico: Punto de unión para los microtúbulos del huso",
    "Telómeros protectores: Secuencias repetidas TTAGGG y telomerasa",
    "Clasificación por posición del centrómero: Metacéntrico a telocéntrico",
  ],
  "tema-30": [
    "Cariotipo: Definición, obtención en metafase y ordenamiento en pares",
    "Cariotipo humano normal: 46 cromosomas (22 pares autosómicos + XY / XX)",
    "Concepto de ploidía: Células somáticas diploides (2n) vs gametos haploides (n)",
    "Anomalías cromosómicas numéricas frecuentes (Aneuploidías como trisomía 21)",
  ],
};

// Banco de explicaciones pedagógicas curadas y humanas para enamorar al estudiante
const CURATED_SUBTOPIC_DETAILS: Record<string, Partial<Record<SubtopicLearningMode, SubtopicExplanation>>> = {
  // TEMA 1: Teoría Celular e Historia
  "Postulados fundamentales de la Teoría Celular": {
    simple: {
      mode: "simple",
      analogyTitle: "Los Ladrillos de Lego y el Motor de Todo Edificio",
      analogyStory:
        "Imagina que quieres construir cualquier cosa en el mundo: una casa, un avión o un castillo. Todo está hecho de piezas de Lego individuales. En los seres vivos pasa exactamente lo mismo: una ballena gigante, una rosa del jardín o tú mismo estamos hechos del mismo ladrillo básico: la célula. Ningún ser vivo puede funcionar con menos de una célula entera. Si partes una célula por la mitad, sus trozos mueren; la célula es la unidad viva más pequeña que existe.",
      analogyKeyTakeaway:
        "Todo ser vivo está formado por células: es la unidad anatómica (estructura), fisiológica (funciones vitales) y genética (origen).",
      explanation:
        "La Teoría Celular establece que la célula es la unidad estructural, funcional y de origen de toda forma de vida en la Tierra. Formulada por Schleiden (plantas), Schwann (animales) y Virchow (reproducción celular).",
      practicalMeaning:
        "Gracias a este principio entendemos que para curar cualquier enfermedad o hacer crecer un tejido, debemos actuar a nivel de sus células individuales.",
      proteinsAndFactors: [
        "Matthias Schleiden (Botánico, 1838)",
        "Theodor Schwann (Zoólogo, 1839)",
        "Rudolf Virchow (Patólogo, 1855)",
      ],
      quickQuestion: {
        question: "¿Por qué un virus no se considera una célula según la Teoría Celular?",
        answer: "Porque los virus carecen de metabolismo propio, no tienen membrana celular ni ribosomas; son parásitos genéticos intracelulares obligados.",
      },
    },
    causeEffect: {
      mode: "causeEffect",
      explanation:
        "Los 3 postulados de la Teoría Celular y su significado biológico:",
      cause:
        "La necesidad de encontrar el principio común que une a todos los reinos biológicos (plantas, animales, hongos y microorganismos).",
      molecularMechanism:
        "1. Unidad Anatómica: Todos los seres vivos están formados por una o más células. 2. Unidad Fisiológica: Las reacciones químicas de la vida ocurren dentro de la célula. 3. Unidad Genética: Toda célula proviene de otra preexistente.",
      biologicalEffect:
        "Continuidad biológica y evolución común de todas las especies a partir de un ancestro celular común (LUCA).",
      disruptionConsequence:
        "Si se rompe la integridad celular, se pierde la compartimentación y cesa la vida biológica independiente.",
      proteinsAndFactors: [
        "Lípidos de membrana",
        "Genoma (ADN/ARN)",
        "Enzimas metabólicas",
      ],
      quickQuestion: {
        question: "¿Quién demostró que los animales también estaban formados por células?",
        answer: "Theodor Schwann en 1839, un año después de que Schleiden lo postulara para las plantas.",
      },
    },
    cepre: {
      mode: "cepre",
      explanation:
        "Conceptos clave y criterios biológicos de la Teoría Celular:",
      cepreRule:
        "Idea fundamental: Unidad morfológica (Schwann y Schleiden), unidad fisiológica y unidad de origen (Virchow: 'Omnis cellula e cellula'). Las 3 aplican a todos los seres vivos.",
      examTrap:
        "Confusión frecuente: ¿Los virus refutan la teoría celular? No la refutan, son considerados entidades biológicas acelulares que dependen obligatoriamente de una célula viva para multiplicarse.",
      proteinsAndFactors: [
        "Unidad anatómica (Schleiden & Schwann)",
        "Unidad patológica/reproductiva (Virchow)",
        "Unidad genética moderna (ADN)",
      ],
      quickQuestion: {
        question: "¿Qué postulado incorporó Rudolf Virchow a la teoría celular original?",
        answer: "El postulado de origen: que toda célula proviene de la división de otra célula preexistente ('Omnis cellula e cellula', 1855).",
      },
    },
  },

  "Cronología de científicos (Hooke, Leeuwenhoek, Brown, Schleiden, Schwann)": {
    simple: {
      mode: "simple",
      analogyTitle: "Los Exploradores del Mundo Invisible",
      analogyStory:
        "Durante miles de años, los humanos solo podían ver lo grande: perros, árboles o comida. Pero en el siglo XVII inventaron lupas potentes. Robert Hooke miró un pedazo de corcho de vino y vio pequeñas celdas vacías como las habitaciones de monjes en un monasterio, y las bautizó 'células'. Luego Leeuwenhoek miró agua estancada y sarro de sus dientes y vio pequeños 'bichitos' nadando (los primeros microbios). Más tarde Robert Brown descubrió que en el centro de la celda había un redondel oscuro: el núcleo. Así, paso a paso, descubrieron que dentro de cada ser vivo hay un universo oculto.",
      analogyKeyTakeaway:
        "Hooke (acuñó el término 'célula') -> Leeuwenhoek (vio células vivas) -> Brown (descubrió el núcleo) -> Schleiden y Schwann (teoría celular).",
      explanation:
        "La citología avanzó de la mano del microscopio óptico. Hooke observó paredes celulares de corcho muerto (1665), mientras que Leeuwenhoek observó protozoarios y espermatozoides vivos (1674).",
      practicalMeaning:
        "Comprender la cronología permite apreciar cómo la tecnología de lentes y microscopía revoluciona la medicina humana.",
      proteinsAndFactors: [
        "Robert Hooke (Micrographia, 1665)",
        "Antonie van Leeuwenhoek (Animálculos, 1674)",
        "Robert Brown (Núcleo celular, 1831)",
      ],
      quickQuestion: {
        question: "¿Qué fue exactamente lo que observó Robert Hooke en el corcho?",
        answer: "Paredes celulares vegetales vacías (tejido vegetal muerto de alcornoque o suber).",
      },
    },
    causeEffect: {
      mode: "causeEffect",
      explanation:
        "Hitos históricos del descubrimiento celular:",
      cause:
        "Desarrollo de sistemas de lentes ópticas compuestas en el siglo XVII.",
      molecularMechanism:
        "Hooke (1665, acuña 'cellulae') -> Leeuwenhoek (1674, protozoarios y bacterias) -> Brown (1831, núcleo en orquídeas) -> Purkinje (1839, protoplasma) -> Schleiden y Schwann (1838-1839, teoría) -> Virchow (1855, origen).",
      biologicalEffect:
        "Nacimiento de la Citología moderna como rama experimental de la Biología.",
      disruptionConsequence:
        "Sin microscopio, la biología humana creía en la generación espontánea y los miasmas.",
      proteinsAndFactors: [
        "Robert Hooke",
        "Antonie van Leeuwenhoek",
        "Robert Brown",
        "Jan Evangelista Purkinje",
      ],
      quickQuestion: {
        question: "¿Quién descubrió el núcleo celular?",
        answer: "El botánico escocés Robert Brown en 1831, observando células de orquídeas.",
      },
    },
    cepre: {
      mode: "cepre",
      explanation:
        "Puntos clave de la cronología citológica:",
      cepreRule:
        "Idea central: Hooke observó células muertas (paredes de suberina); Leeuwenhoek observó células vivas por primera vez ('animálculos'); Brown descubrió el núcleo (1831); Purkinje acuñó 'protoplasma'.",
      examTrap:
        "Confusión frecuente: Robert Hooke NO observó células vivas con citoplasma y núcleo; solo vio las celdillas vacías que dejó la pared celular del corcho seco.",
      proteinsAndFactors: [
        "Robert Hooke (1665)",
        "Antonie van Leeuwenhoek (1674)",
        "Robert Brown (1831)",
      ],
      quickQuestion: {
        question: "¿Cuál es la diferencia crítica entre lo que vio Hooke y lo que vio Leeuwenhoek?",
        answer: "Hooke vio paredes celulares vegetales muertas; Leeuwenhoek fue el primero en ver microorganismos y células vivas en movimiento.",
      },
    },
  },

  "El principio de Virchow: Omnis cellula e cellula": {
    simple: {
      mode: "simple",
      analogyTitle: "Las Células no Brotan de la Nada, Tienen Mamá",
      analogyStory:
        "Antes la gente creía que si dejabas carne podrida en una mesa, la carne se transformaba mágicamente en moscas y gusanos (generación espontánea). Rudolf Virchow dio un golpe sobre la mesa y dijo en latín: 'Omnis cellula e cellula', que significa: toda célula viva nace de otra célula que se dividió antes. Nada vivo aparece de la nada por arte de magia. Cada una de las 30 billones de células de tu cuerpo actual nació de la división de una sola célula original: el óvulo fecundado (cigoto) de tus padres.",
      analogyKeyTakeaway:
        "La vida celular es una cadena ininterrumpida: ninguna célula aparece por generación espontánea, toda célula desciende de otra preexistente.",
      explanation:
        "El tercer postulado de la teoría celular, enunciado por Rudolf Virchow en 1855, descarta definitivamente la generación espontánea y fundamenta la división celular (mitosis y meiosis).",
      practicalMeaning:
        "Gracias a esto entendemos cómo cicatriza la piel cuando te cortas: las células del borde se dividen para rellenar el espacio vacío.",
      proteinsAndFactors: [
        "Rudolf Virchow (1855)",
        "Ciclo celular y mitosis",
        "Cigoto y linaje embrionario",
      ],
      quickQuestion: {
        question: "¿Qué teoría fue destruida para siempre con el principio de Virchow y los experimentos de Pasteur?",
        answer: "La teoría de la generación espontánea (abiogénesis).",
      },
    },
    causeEffect: {
      mode: "causeEffect",
      explanation:
        "Mecanismo biológico de la división celular como base de la herencia:",
      cause:
        "Crecimiento del organismo, renovación de tejidos envejecidos o reproducción de la especie.",
      molecularMechanism:
        "La célula duplica su material genético (ADN) durante la fase S de la interfase y luego lo reparte equitativamente mediante mitosis o meiosis a las células hijas.",
      biologicalEffect:
        "Conservación del genoma e información biológica de generación en generación.",
      disruptionConsequence:
        "Si la división celular se descontrola y pierde sus frenos, se originan tumores y cáncer.",
      proteinsAndFactors: [
        "Ciclinas y quinasas dependientes de ciclinas (CDK)",
        "Proteína supresora de tumores p53",
        "ADN polimerasa",
      ],
      quickQuestion: {
        question: "¿Cuál es la frase célebre en latín de Rudolf Virchow?",
        answer: "'Omnis cellula e cellula' (Toda célula proviene de otra célula preexistente).",
      },
    },
    cepre: {
      mode: "cepre",
      explanation:
        "Puntos clave sobre el postulado de origen:",
      cepreRule:
        "Idea fundamental: 'Omnis cellula e cellula' (1855) convirtió a la célula en la unidad reproductiva y de herencia de la biología.",
      examTrap:
        "Confusión frecuente: Atribuir 'Omnis cellula e cellula' a Schleiden o Schwann. ¡Falso! Schleiden y Schwann propusieron los dos primeros postulados en 1838-1839; Virchow añadió el tercero en 1855.",
      proteinsAndFactors: [
        "Rudolf Virchow (1855)",
        "Postulado de origen y patología celular",
      ],
      quickQuestion: {
        question: "¿En qué año y quién completó la Teoría Celular con el postulado de origen?",
        answer: "Rudolf Virchow en 1855.",
      },
    },
  },

  "Excepciones biológicas (Virus, priones, sincitios y viroides)": {
    simple: {
      mode: "simple",
      analogyTitle: "Los Piratas sin Barco Propio y los Zombis Moleculares",
      analogyStory:
        "La regla general dice que todo ser vivo está hecho de células completas. Pero en la naturaleza hay 'piratas': los virus no tienen casa ni cuerpo propio (no tienen membrana, ni ribosomas, ni citoplasma); son solo un sobre con instrucciones genéticas que necesita asaltar una célula viva para obligarla a fabricar copias de él. Los viroides son aún más pequeños: un trocito de ARN suelto que enferma a plantas. Y los priones son proteínas rebeldes mal dobladas que contagian su mala forma a otras proteínas (como en la enfermedad de la vaca loca). Ninguno de ellos es una célula.",
      analogyKeyTakeaway:
        "Virus, viroides y priones son entidades biológicas acelulares: carecen de metabolismo y no son células.",
      explanation:
        "Las excepciones a la definición clásica de célula incluyen entidades acelulares (virus, viroides, priones) y estructuras multinucleadas resultantes de fusión celular (sincitios, como el músculo estriado esquelético).",
      practicalMeaning:
        "Por eso los antibióticos matan bacterias (que son células) pero no tienen ningún efecto contra la gripe o el COVID (que son virus).",
      proteinsAndFactors: [
        "Cápside proteica viral (capsómeros)",
        "Genoma viral (ADN o ARN, nunca ambos activos a la vez)",
        "Prion PrPSc (proteína infecciosa)",
      ],
      quickQuestion: {
        question: "¿Por qué los antibióticos no curan los resfriados comunes?",
        answer: "Porque los resfriados son causados por virus (acelulares), y los antibióticos solo atacan estructuras de células bacterianas (como su pared o ribosomas 70S).",
      },
    },
    causeEffect: {
      mode: "causeEffect",
      explanation:
        "Clasificación biológica de entidades acelulares:",
      cause:
        "Invasión de una célula hospedera para replicación forzada de material genético o conformación proteica.",
      molecularMechanism:
        "Virus: Ácido nucleico (ADN o ARN) dentro de cápside. Viroide: ARN circular desnudo monocatenario (afecta vegetales). Prion: Proteína infecciosa sin ácido nucleico (PrPSc) que altera el plegamiento de proteínas normales.",
      biologicalEffect:
        "Infección celular, desvío de la maquinaria de traducción y patología tisular.",
      disruptionConsequence:
        "Lisis de la célula huésped o degeneración espongiforme del tejido nervioso.",
      proteinsAndFactors: [
        "Capsómeros virales",
        "Prion PrPSc",
        "ARN viroidal",
      ],
      quickQuestion: {
        question: "¿Qué tipo de molécula es un prion?",
        answer: "Es únicamente una proteína mal plegada con capacidad infecciosa; carece de cualquier ácido nucleico (ni ADN ni ARN).",
      },
    },
    cepre: {
      mode: "cepre",
      explanation:
        "Diferenciación conceptual de entidades acelulares:",
      cepreRule:
        "Idea central: Los virus son agregados supramoleculares nucleoproteicos acelulares (parásitos intracelulares obligados). Los viroides son solo ARN desnudo. Los priones son solo proteínas infecciosas. Los sincitios son masas de citoplasma con múltiples núcleos (células multinucleadas).",
      examTrap:
        "Confusión frecuente: Pensar que los priones tienen genes. ¡Los priones NO tienen ADN ni ARN! Son exclusivamente proteínas patógenas.",
      proteinsAndFactors: [
        "Virus (Nucleoproteínas)",
        "Viroides (Solo ARN vegetal)",
        "Priones (Solo proteína PrPSc)",
        "Sincitios (Fusión celular multinucleada)",
      ],
      quickQuestion: {
        question: "¿Cuál es la diferencia entre un virus y un viroide?",
        answer: "El virus posee cápside de proteínas protegiendo su genoma; el viroide carece de cápside y es únicamente una hebra de ARN circular desnuda.",
      },
    },
  },

  // TEMA 2: Célula Procariota vs. Eucariota
  "Carioteca y compartimentación: Procariota vs. Eucariota": {
    simple: {
      mode: "simple",
      analogyTitle: "La Mansión con Cuartos vs. El Monoambiente de Estudiante",
      analogyStory:
        "Imagina que una célula es una casa donde se vive y se trabaja. La bacteria (procariota) es como un monoambiente o loft abierto: no tiene paredes divisorias ni cuartos cerrados. En el mismo espacio abierto duermes, cocinas y tienes tus libros de estudio (el ADN circular) en el piso sin caja fuerte (sin carioteca). En cambio, la célula eucariota (como las nuestras o de una planta) es una mansión dividida con paredes y puertas cerradas con llave: la habitación principal es el núcleo (con doble pared llamada carioteca) para proteger los planos maestros del ADN. Y tiene muebles especializados en cada cuarto: la cocina (mitocondrias), el taller de paquetería (Golgi) y el triturador de basura (lisosomas).",
      analogyKeyTakeaway:
        "Procariota = Un solo espacio abierto sin paredes ni carioteca | Eucariota = Mansión compartimentada con cuartos cerrados por membranas.",
      explanation:
        "La diferencia que define a una célula eucariota es la CARIOTECA (envoltura nuclear doble con poros). Gracias a ella, el material genético está resguardado dentro de un núcleo verdadero, mientras que en las bacterias el ADN flota libremente en una zona llamada nucleoide.",
      practicalMeaning:
        "¿Por qué es una ventaja tener cuartos cerrados? Porque la célula eucariota puede realizar procesos peligrosos (como digerir con ácidos o quemar azúcares) dentro de sus cuartos (organelas) sin quemar ni dañar el resto de la célula.",
      proteinsAndFactors: [
        "Carioteca (Membrana nuclear doble)",
        "Poros nucleares (Complejo NPC / Nucleoporinas)",
        "Lámina nuclear (Filamentos intermedios)",
        "Histonas (Proteínas que empaquetan el ADN)",
      ],
      quickQuestion: {
        question: "¿Por qué se dice que las bacterias no tienen 'verdadero núcleo'?",
        answer: "Porque carecen de carioteca (envoltura nuclear) que aísle su ADN del citoplasma.",
      },
    },
    causeEffect: {
      mode: "causeEffect",
      explanation:
        "Comparación anatómica y molecular directa entre Procariota y Eucariota:",
      comparison: {
        itemA: "Célula Procariota (Bacterias, Arqueas)",
        itemB: "Célula Eucariota (Animales, Plantas, Hongos)",
        differences: [
          { feature: "Carioteca (Núcleo)", valA: "AUSENTE (ADN en el nucleoide)", valB: "PRESENTE (Doble envoltura con poros)" },
          { feature: "ADN y Proteínas", valA: "Circular, cerrado y desnudo (sin histonas)", valB: "Lineal, asociado a histonas (cromatina)" },
          { feature: "Organelas con membrana", valA: "NINGUNA (Sin mitocondrias, sin Golgi)", valB: "SÍ (Mitocondrias, vacuolas, retículos, Golgi)" },
          { feature: "Ribosomas", valA: "70S (subunidades 50S + 30S)", valB: "80S (subunidades 60S + 40S)" },
          { feature: "Pared Celular", valA: "Peptidoglucano (mureína)", valB: "Celulosa (plantas) / Quitina (hongos) / Ninguna (animal)" },
        ],
      },
      proteinsAndFactors: [
        "Carioteca (Membrana nuclear doble)",
        "Histonas (H2A, H2B, H3, H4, H1)",
        "Nucleoporinas del poro nuclear",
        "Ribosomas 70S vs. 80S",
      ],
      quickQuestion: {
        question: "Si una bacteria no tiene mitocondrias, ¿dónde realiza su respiración celular?",
        answer: "En los mesosomas / repliegues de su membrana celular, donde tiene sus enzimas respiratorias.",
      },
    },
    cepre: {
      mode: "cepre",
      explanation:
        "Conceptos biológicos clave y criterios de compartimentación:",
      cepreRule:
        "Idea fundamental: La presencia de CARIOTECA y SISTEMA DE ENDOMEMBRANAS (RER, REL, Golgi) es exclusiva de eucariotas. El ADN procariota es circular, bicatenario y desnudo (carente de histonas verdaderas).",
      examTrap:
        "Confusión frecuente: Pensar que las bacterias carecen de ribosomas. ¡Falso! Las bacterias SÍ tienen ribosomas (tipo 70S). La clave es que los ribosomas NO tienen membrana y toda célula viva los necesita para fabricar proteínas.",
      proteinsAndFactors: [
        "Carioteca (Envoltura nuclear)",
        "Ribosomas 70S bacterianos",
        "Peptidoglucano (Mureína)",
        "Histonas eucariotas",
      ],
      quickQuestion: {
        question: "¿Cuál es el único organoide citoplasmático que comparten bacterias y células humanas?",
        answer: "Los ribosomas (aunque en bacterias son 70S y en humanos 80S).",
      },
    },
  },

  "Plásmidos y ADN circular desnudo bacteriano": {
    simple: {
      mode: "simple",
      analogyTitle: "El Anillo de Alambre y las Tarjetas de Superpoderes",
      analogyStory:
        "El ADN de una bacteria no es una hebra larga estirada como la nuestra: es un anillo cerrado de alambre (circular) que no está envuelto en carretes de hilo (desnudo, sin histonas). Y además, la bacteria suele tener 'tarjetas de trucos' o accesorios extra llamados PLÁSMIDOS. Un plásmido es un pequeño anillo de ADN que le da un superpoder, como por ejemplo fabricar un escudo contra la penicilina. Lo más genial es que una bacteria puede pasarle una copia de su plásmido a su amiga bacteria a través de un tubo (el pili sexual), ¡como compartir una tarjeta de memoria con trucos!",
      analogyKeyTakeaway:
        "ADN bacteriano = Anillo principal sin histonas. Plásmido = Mini-anillo accesorio con genes de resistencia a antibióticos.",
      explanation:
        "El cromosoma bacteriano es único, circular y bicatenario. Los plásmidos son fragmentos circulares de ADN extracromosómico que se replican de forma independiente y transmiten resistencia a medicamentos.",
      practicalMeaning:
        "Por eso cuando tomas antibióticos a medias, las bacterias supervivientes se pasan plásmidos de resistencia entre sí y el medicamento deja de hacer efecto.",
      proteinsAndFactors: [
        "ADN polimerasa bacteriana",
        "Topoisomerasa / ADN girasa",
        "Pilus sexual (F-pilina para conjugación)",
      ],
    },
    causeEffect: {
      mode: "causeEffect",
      explanation:
        "Funcionamiento del ADN bacteriano y transferencia de plásmidos:",
      cause:
        "Presencia de antibióticos en el entorno o necesidad de adaptación ambiental rápida.",
      molecularMechanism:
        "La bacteria con plásmido R (resistencia) extiende un puente proteico (pili sexual) hacia otra bacteria y le transfiere una copia del plásmido por conjugación.",
      biologicalEffect:
        "La bacteria receptora adquiere de inmediato la capacidad de sintetizar enzimas que destruyen antibióticos (como las betalactamasas).",
      disruptionConsequence:
        "Si se inhibe la síntesis del pili o la ADN girasa (con ciprofloxacino), la bacteria no puede replicar su ADN ni compartir plásmidos, muriendo rápidamente.",
      proteinsAndFactors: [
        "ADN Girasa (diana de quinolonas)",
        "Betalactamasa (enzima codificada en plásmidos)",
        "Pilina del pili sexual",
      ],
    },
    cepre: {
      mode: "cepre",
      explanation:
        "Puntos clave y distinciones sobre genética bacteriana:",
      cepreRule:
        "El ADN bacteriano se ubica en el NUCLEOIDE (región citoplasmática sin membrana). Los plásmidos no son indispensables para la vida diaria de la bacteria, pero confieren ventajas adaptativas críticas (resistencia a antibióticos y metales pesados).",
      examTrap:
        "¡No confundir NUCLEOIDE con NUCLEOLO! El nucleoide es la región con ADN en bacterias; el nucleolo es la fábrica de ribosomas dentro del núcleo de células eucariotas.",
      proteinsAndFactors: [
        "Plásmido R (Resistencia)",
        "Plásmido F (Fertilidad / Conjugación)",
        "ADN Girasa bacteriana",
      ],
      quickQuestion: {
        question: "¿Cómo se llama el proceso de transferencia de plásmidos entre bacterias a través del pili?",
        answer: "Conjugación bacteriana (un mecanismo de variabilidad genética horizontal).",
      },
    },
  },

  "Ribosomas 70S vs. 80S y sensibilidad a antibióticos": {
    simple: {
      mode: "simple",
      analogyTitle: "El Enchufe de 110V vs. 220V: Por qué los antibióticos no te dañan a ti",
      analogyStory:
        "¿Alguna vez te preguntaste por qué tomar amoxicilina o eritromicina mata a las bacterias pero no te mata a ti? Porque los ribosomas de las bacterias son modelo '70S' (más pequeños y con una cerradura molecular distinta) y los tuyos son modelo '80S'. El antibiótico está fabricado como una llave que solo entra y traba el candado del ribosoma 70S. Cuando la bacteria intenta fabricar proteínas, el antibiótico la frena en seco y la bacteria muere. Tus ribosomas 80S, al tener otra forma, ni se enteran.",
      analogyKeyTakeaway:
        "Bacterias = Ribosoma 70S (50S + 30S). Células humanas = Ribosoma 80S (60S + 40S). Esa diferencia salva tu vida.",
      explanation:
        "Los ribosomas son las fábricas que traducen el ARN mensajero en proteínas. Su tamaño se mide en unidades Svedberg (S). Los antibióticos como tetraciclinas, cloranfenicol y aminoglucósidos actúan específicamente sobre los ribosomas 70S de las bacterias.",
      proteinsAndFactors: [
        "Subunidad 50S y 30S (en 70S bacteriano)",
        "Subunidad 60S y 40S (en 80S eucariota)",
        "Peptidil transferasa (enzima que une aminoácidos)",
      ],
    },
    causeEffect: {
      mode: "causeEffect",
      explanation:
        "Mecanismo de acción de los antibióticos sobre ribosomas bacterianos:",
      cause:
        "Ingreso de fármaco antibiótico (eritromicina, tetraciclina o estreptomicina) al citoplasma bacteriano.",
      molecularMechanism:
        "El antibiótico se une selectivamente a la subunidad 30S o 50S del ribosoma 70S, bloqueando la unión del ARNt o la acción de la peptidil transferasa.",
      biologicalEffect:
        "Parálisis inmediata de la síntesis proteica bacteriana; la bacteria no puede fabricar enzimas ni membrana.",
      disruptionConsequence:
        "Muerte bacteriana (efecto bactericida) o frenado total de su crecimiento (efecto bacteriostático).",
      proteinsAndFactors: [
        "Subunidad 30S (fijación de tetraciclinas)",
        "Subunidad 50S (fijación de macrólidos y cloranfenicol)",
        "ARNr 16S bacteriano vs ARNr 18S eucariota",
      ],
    },
    cepre: {
      mode: "cepre",
      explanation:
        "Aspectos clave sobre ribosomas y teoría endosimbiótica:",
      cepreRule:
        "Composición matemática no aditiva de Svedberg: Procariota 70S = 50S + 30S. Eucariota 80S = 60S + 40S. (No se suman aritméticamente porque mide coeficiente de sedimentación hidrodinámica).",
      examTrap:
        "Punto crítico: ¿Tienen nuestras células ribosomas 70S? ¡SÍ, DENTRO DE LAS MITOCONDRIAS! Los mitorribosomas son 70S, lo que demuestra que la mitocondria proviene de una bacteria ancestral que fue fagocitada (Teoría Endosimbiótica de Lynn Margulis).",
      proteinsAndFactors: [
        "Mitorribosomas 70S",
        "Ribosomas citosólicos 80S",
        "ARNr 23S y 16S procariotas",
      ],
      quickQuestion: {
        question: "¿Qué organela de una célula humana tiene ribosomas parecidos a los de las bacterias?",
        answer: "La mitocondria (posee mitorribosomas 70S debido a su origen endosimbiótico bacteriano).",
      },
    },
  },

  "Pared celular: Peptidoglucano bacteriano vs. Celulosa eucariota": {
    simple: {
      mode: "simple",
      analogyTitle: "La Cota de Malla de Acero vs. Las Vigas de Madera",
      analogyStory:
        "Imagina que llenas un globo con tanta agua que está a punto de reventar. La bacteria vive en charcos y humedad, así que el agua entra sin parar a su cuerpo por ósmosis. Si no tuviera un escudo rígido, ¡explotaría sola en segundos! Ese escudo protector es el peptidoglucano (o mureína), que funciona como una armadura tejida con alambre de acero. Las plantas usan otro material: celulosa (como vigas de madera vegetal), y los hongos usan quitina (como la coraza de los insectos). Los animales no tenemos pared celular.",
      analogyKeyTakeaway:
        "Bacterias = Peptidoglucano (mureína). Plantas = Celulosa. Hongos = Quitina. Animales = SIN pared celular.",
      explanation:
        "La pared celular otorga rigidez, forma definida y protección contra la lisis osmótica (reventar por exceso de agua interna). El peptidoglucano bacteriano está formado por dos azúcares unidos por péptidos: NAG y NAM.",
      practicalMeaning:
        "La penicilina descubierta por Fleming funciona cortando los remaches del peptidoglucano. Sin armadura, el agua entra a la bacteria y la hace explotar.",
      proteinsAndFactors: [
        "Peptidoglucano (Mureína: NAG + NAM)",
        "Transpeptidasa (enzima que teje los puentes de la pared)",
        "Celulosa (Polímero de glucosas beta-1,4 en plantas)",
      ],
    },
    causeEffect: {
      mode: "causeEffect",
      explanation:
        "Comparación de paredes celulares en los reinos biológicos:",
      comparison: {
        itemA: "Pared Bacteriana (Peptidoglucano)",
        itemB: "Pared Vegetal (Celulosa)",
        differences: [
          { feature: "Componente Principal", valA: "Peptidoglucano o Mureína (NAG + NAM)", valB: "Celulosa (fibras de glucosa con hemicelulosa)" },
          { feature: "Enlace Químico", valA: "Puentes peptídicos de aminoácidos", valB: "Enlaces glucosídicos beta-1,4" },
          { feature: "Sensible a Penicilina", valA: "SÍ (la penicilina bloquea la transpeptidasa)", valB: "NO (la penicilina es inocua para plantas)" },
          { feature: "Función compartida", valA: "Evita la lisis osmótica en medio hipotónico", valB: "Soporta la turgencia y da rigidez al tallo" },
        ],
      },
      proteinsAndFactors: [
        "Transpeptidasa bacteriana (diana de penicilinas)",
        "Celulosa sintasa (complejo en roseta vegetal)",
        "Ácidos teicoicos y lipoteicoicos (en Gram positivas)",
      ],
    },
    cepre: {
      mode: "cepre",
      explanation:
        "Conceptos fundamentales sobre paredes celulares por reino biológico:",
      cepreRule:
        "Pared por reinos: Monera = Peptidoglucano (mureína); Fungi = Quitina (polímero de N-acetilglucosamina); Plantae = Celulosa; Animalia = Carece de pared celular (posee glucocálix).",
      examTrap:
        "Excepción crucial: ¿Todas las bacterias tienen pared celular de peptidoglucano? NO: Los MICOPLASMAS son bacterias sin pared celular (por eso son naturalmente resistentes a la penicilina).",
      proteinsAndFactors: [
        "N-acetilglucosamina (NAG)",
        "Ácido N-acetilmurámico (NAM)",
        "Penicilina y Lisozima (enzima de lágrimas y saliva)",
      ],
      quickQuestion: {
        question: "¿Por qué la lisozima de nuestras lágrimas nos defiende de infecciones bacterianas en los ojos?",
        answer: "Porque la lisozima hidroliza el enlace beta-1,4 entre NAG y NAM del peptidoglucano, destruyendo la pared de las bacterias.",
      },
    },
  },
};

// Generador inteligente de analogías y explicaciones pedagógicas para cualquier subtema
export function getSubtopicDetail(topicTitle: string, subtopicName: string, mode: SubtopicLearningMode): SubtopicExplanation {
  // 1. Verificar si tenemos una entrada curada y detallada
  const curatedTopic = CURATED_SUBTOPIC_DETAILS[subtopicName];
  if (curatedTopic && curatedTopic[mode]) {
    return curatedTopic[mode] as SubtopicExplanation;
  }

  // 2. Extracción de proteínas y factores reales según el contenido
  const lower = (subtopicName + " " + topicTitle).toLowerCase();
  const realProteins: string[] = [];
  let analogyTitle = "La Metáfora Cotidiana";
  let analogyStory = "";
  let analogyKeyTakeaway = "";
  let practicalMeaning = "";

  if (lower.includes("bomba") || lower.includes("na+") || lower.includes("transporte activo")) {
    analogyTitle = "El Molinete del Metro y los Pasajeros a Presión";
    analogyStory =
      "Imagina el molinete del metro en hora punta. La calle está llena de gente de sodio (Na+) y dentro de la estación hay gente de potasio (K+). La bomba es un guardia que no deja pasar a cualquiera: cobra una moneda de energía (1 molécula de ATP) y empuja a la fuerza a 3 personas de Sodio (Na+) hacia afuera y mete a 2 personas de Potasio (K+) hacia adentro, en contra de la multitud. Por eso la célula gasta un tercio de toda su energía diaria solo manteniendo a este guardia trabajando.";
    analogyKeyTakeaway = "Bomba Na+/K+ ATPasa: Expulsa 3 Na+ y mete 2 K+ consumiendo 1 ATP contra el gradiente.";
    practicalMeaning = "Sin esta bomba, tus neuronas no podrían disparar impulsos eléctricos y tu corazón no podría latir.";
    realProteins.push("Bomba Na+/K+ ATPasa (Subunidad α catalítica)", "ATPasa hidrolítica", "Iones Na+ y K+");
  } else if (lower.includes("ósmosis") || lower.includes("difusión") || lower.includes("medio hiper") || lower.includes("turgencia")) {
    analogyTitle = "La Pasa de Uva en el Vaso de Agua vs. en Agua Salada";
    analogyStory =
      "El agua siempre es solidaria: va hacia donde hay más sed (hacia donde hay más sal o azúcar). Si metes una pasa de uva arrugada en agua pura, el agua entra y la hincha como uva fresca (turgencia). Pero si pones una célula en agua con mucha sal marina (medio hipertónico), el agua se escapa de su cuerpo para diluir la sal de afuera, y la célula se arruga y deshidrata como una pasa seca (crenación en animales, plasmólisis en plantas).";
    analogyKeyTakeaway = "El agua viaja siempre de donde hay MENOS soluto hacia donde hay MÁS soluto buscando el equilibrio.";
    practicalMeaning = "Por eso nunca debes beber agua de mar si tienes sed: deshidrataría tus células más rápido.";
    realProteins.push("Acuaporinas (canales proteicos de agua)", "Permeasas transportadoras");
  } else if (lower.includes("mosaico") || lower.includes("membrana") || lower.includes("fosfolípido")) {
    analogyTitle = "El Mar de Aceite con Icebergs Flotantes y Puertas Inteligentes";
    analogyStory =
      "La membrana celular no es una pared de cemento tiesa; es un mar de aceite líquido (bicapa de fosfolípidos) donde flotan barcos e icebergs de colores (las proteínas). Como los lípidos se mueven como aceite de cocina, los barcos pueden desplazarse de un lado a otro (por eso se llama mosaico fluido). Y el colesterol actúa como un termostato: si hace mucho frío, evita que la grasa se congele; si hace mucho calor, evita que la membrana se derrita.";
    analogyKeyTakeaway = "Modelo del Mosaico Fluido (Singer y Nicolson, 1972): Bicapa de fosfolípidos con proteínas integrales y periféricas en movimiento constante.";
    practicalMeaning = "Gracias a su fluidez, la célula puede deformarse, fusionarse con vesículas y enviar señales químicas.";
    realProteins.push("Fosfolípidos anfipáticos", "Proteínas integrales y periféricas", "Colesterol amortiguador térmico", "Glicocálix receptor");
  } else if (lower.includes("mitocondria") || lower.includes("respiración") || lower.includes("krebs") || lower.includes("atp")) {
    analogyTitle = "La Central Termoeléctrica y las Baterías Portátiles (ATP)";
    analogyStory =
      "La mitocondria es la central generadora de electricidad de la célula. La comida que comes (glucosa) es como el carbón o gas; la mitocondria la quema con oxígeno y utiliza esa energía para recargar millones de pequeñas baterías portátiles llamadas ATP. Cada vez que tu músculo se contrae o tu cerebro piensa, gasta una batería ATP.";
    analogyKeyTakeaway = "Mitocondria = Central de respiración aeróbica que produce la mayor cantidad de ATP celular.";
    practicalMeaning = "Si se interrumpe el oxígeno o se bloquea con cianuro, la central se apaga de golpe y la célula muere en segundos por falta de ATP.";
    realProteins.push("ATP sintasa (rotor F0-F1)", "Complejo Citocromo oxidasa", "Coenzima Q (Ubiquinona)", "Enzimas de la matriz mitocondrial");
  } else if (lower.includes("cloroplasto") || lower.includes("fotosíntesis") || lower.includes("rubisco")) {
    analogyTitle = "Paneles Solares Gigantes y la Cocina de Azúcar";
    analogyStory =
      "El cloroplasto es una fábrica verde equipada con paneles solares (los tilacoides con clorofila) que atrapan la luz del sol. Con esa energía solar descomponen agua (liberando oxígeno para que respiremos) y luego, en su cocina interna (el estroma), una enzima llamada RuBisCO agarra el dióxido de carbono del aire y cocina azúcar pura (glucosa) para alimentar a la planta y a todo el planeta.";
    analogyKeyTakeaway = "Cloroplasto = Atrapa luz solar en tilacoides (fase luminosa) y sintetiza glucosa en el estroma (fase oscura con RuBisCO).";
    practicalMeaning = "Toda la comida que existe en la Tierra y el oxígeno que respiramos nació en los cloroplastos.";
    realProteins.push("RuBisCO (enzima fijadora de CO2)", "Clorofila con Mg2+", "Fotosistemas I y II", "ATP sintasa tilacoidal");
  } else if (lower.includes("golgi") || lower.includes("vesícula") || lower.includes("secreción")) {
    analogyTitle = "El Centro de Distribución y Envíos de Amazon";
    analogyStory =
      "El aparato de Golgi es la oficina central de paquetería de la célula. Recibe cajas con productos recién salidos de fábrica (las proteínas del retículo rugoso), las revisa, les pega etiquetas de código de barras (azúcares agregados por glicosilación), las empaca en cajas seguras (vesículas) y las envía en camiones de reparto a donde hagan falta: a la membrana, fuera de la célula o al basurero.";
    analogyKeyTakeaway = "Aparato de Golgi = Modifica, empaqueta, clasifica y distribuye macromoléculas en vesículas de secreción.";
    practicalMeaning = "Sin el Golgi, las hormonas como la insulina jamás podrían ser empacadas ni enviadas a la sangre.";
    realProteins.push("Proteínas de cubierta COP-I y COP-II", "Clatrina", "Glicosiltransferasas de cisternas");
  } else if (lower.includes("lisosoma") || lower.includes("digestión") || lower.includes("autofagia")) {
    analogyTitle = "El Camión de Basura Triturador y la Planta de Reciclaje";
    analogyStory =
      "El lisosoma es el estómago y camión triturador de la célula. Es una bolsa blindada con ácido fuerte y más de 40 enzimas demoledoras. Si la célula se come una bacteria invasora o tiene una mitocondria vieja que ya no sirve, la mete al lisosoma; este la desintegra en piezas chiquitas y devuelve los nutrientes limpios al citoplasma para volver a usarlos (reciclaje celular o autofagia).";
    analogyKeyTakeaway = "Lisosomas = Digestión celular mediante hidrolasas ácidas activas a pH ácido (5.0).";
    practicalMeaning = "El premio Nobel de Medicina de 2016 se otorgó por descubrir cómo la autofagia del lisosoma previene el envejecimiento y el cáncer.";
    realProteins.push("Hidrolasas ácidas (proteasas, lipasas)", "Bomba vacuolar de protones H+-ATPasa", "Marcador Manosa-6-fosfato");
  } else if (lower.includes("núcleo") || lower.includes("carioteca") || lower.includes("cromatina") || lower.includes("adn")) {
    analogyTitle = "La Biblioteca de Planos Maestros en la Bóveda Central";
    analogyStory =
      "El núcleo es la oficina de presidencia y la biblioteca más importante del organismo. Guarda el único juego original de planos maestros de cómo construir todo tu cuerpo (tu ADN). Como esos planos no pueden arriesgarse a mancharse ni romperse, están guardados en una caja fuerte de doble pared (la carioteca) con guardias de seguridad en las puertas (los poros nucleares). Cuando la célula necesita una receta, nunca saca el plano original: le saca una fotocopia en borrador (el ARN mensajero) y envía la fotocopia a los ribosomas.";
    analogyKeyTakeaway = "Núcleo = Protege el genoma y controla toda la actividad celular mediante la transcripción del ADN a ARN.";
    practicalMeaning = "Toda mutación en los planos maestros del núcleo puede originar enfermedades o cáncer.";
    realProteins.push("Histonas H2A, H2B, H3, H4 y H1", "Complejo del poro nuclear (Nucleoporinas)", "Lámina nuclear");
  } else if (lower.includes("mitosis") || lower.includes("ciclo celular") || lower.includes("meiosis")) {
    analogyTitle = "La Fotocopiadora Exacta vs. El Barajador de Naipes Genético";
    analogyStory =
      "La mitosis es como una fotocopiadora de oficinas: una célula duplica todos sus papeles y muebles y se divide exactamente por la mitad en anafase para dejar dos oficinas hijas 100% idénticas a la original (sirve para cicatrizar heridas y crecer). En cambio, la meiosis es un barajador de cartas: mezcla las cartas de mamá y papá (crossing over en paquiteno) y entrega cuatro paquetes con la mitad de cartas cada uno (óvulos o espermatozoides), asegurando que ningún hermano sea idéntico a otro.";
    analogyKeyTakeaway = "Mitosis = División somática ecuacional (2n a 2n). Meiosis = División reduccional (2n a n) que genera variabilidad genética.";
    practicalMeaning = "Gracias a la meiosis y el crossing-over, cada ser humano es una combinación genética irrepetible en la historia.";
    realProteins.push("Ciclinas y CDKs (reguladores del ciclo)", "Tubulina del huso mitótico", "Cohesinas y Separasa de cromátidas");
  } else {
    analogyTitle = "El Engranaje Especializado de la Maquinaria Celular";
    analogyStory =
      `Imagina que la célula es una gran fábrica sincronizada al milímetro. ${subtopicName} cumple una labor específica de montaje, transporte o control de calidad. Sin este paso, las demás secciones de la fábrica se quedarían sin insumos o saturadas de material sin procesar.`;
    analogyKeyTakeaway = `${subtopicName} asegura el equilibrio metabólico y la precisión operativa de ${topicTitle}.`;
    practicalMeaning = "Permite que la célula sobreviva y responda de forma flexible a los cambios del ambiente.";
    realProteins.push(`Proteínas específicas de ${subtopicName}`, "Enzimas catalíticas clave", "Cofactores esenciales");
  }

  // Generación por modo
  if (mode === "simple") {
    return {
      mode: "simple",
      analogyTitle,
      analogyStory,
      analogyKeyTakeaway,
      explanation: `${subtopicName} es un pilar del tema ${topicTitle}. Su función es garantizar que la célula opere de forma fluida, coordinada y con el mínimo gasto energético posible.`,
      practicalMeaning,
      proteinsAndFactors: realProteins,
      quickQuestion: {
        question: `¿Cuál es el rol principal de ${subtopicName}?`,
        answer: `Mantener la función de ${topicTitle} coordinando las piezas moleculares sin errores metabólicos.`,
      },
    };
  }

  if (mode === "causeEffect") {
    return {
      mode: "causeEffect",
      analogyTitle,
      explanation: `Cómo opera ${subtopicName} en la arquitectura celular:`,
      cause: `Necesidad funcional o señal química que activa ${subtopicName} en la célula.`,
      molecularMechanism: `Las piezas biológicas clave (${realProteins.slice(0, 2).join(", ")}) ejecutan el proceso catalizando enlaces, transportando solutos o ensamblando estructuras.`,
      biologicalEffect: `Resultado celular concreto: avance de la ruta metabólica, estabilidad estructural o intercambio de solutos.`,
      disruptionConsequence: `Si falla o se bloquea este mecanismo, la célula sufre desequilibrio homeostático o detención de su ciclo.`,
      proteinsAndFactors: realProteins,
      quickQuestion: {
        question: `¿Qué ocurre si las proteínas ejecutoras de ${subtopicName} se inactivan?`,
        answer: "Se interrumpe el flujo normal del proceso celular, afectando la supervivencia o función del tejido.",
      },
    };
  }

  // mode === "cepre" (Puntos Clave y Diferencias)
  return {
    mode: "cepre",
    explanation: `Conceptos clave y puntos críticos para comprender ${subtopicName}:`,
    cepreRule: `Idea fundamental: Reconocer la localización celular exacta, si requiere energía directa (ATP) y la función de sus componentes (${realProteins[0] || "proteínas o moléculas principales"}).`,
    examTrap: `Punto crítico y confusión frecuente: Distinguir con precisión si ocurre en células procariotas o eucariotas, y verificar si depende de gradientes o de hidrólisis de ATP.`,
    proteinsAndFactors: realProteins,
    quickQuestion: {
      question: `¿Cuál es la confusión más común al estudiar ${subtopicName}?`,
      answer: "Confundir si el proceso requiere o no gasto directo de ATP o atribuirlo a una organela o compartimento equivocado.",
    },
  };
}
