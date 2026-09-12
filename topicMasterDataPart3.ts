import { NodeContent } from "../types";

/**
 * Banco maestro curado para Nodos 22 al 30:
 * Citología II: Arquitectura Nuclear, Carioteca, Complejo del Poro (NPC), Transporte Nuclear,
 * Cariolinfa, Lámina Nuclear, Cromatina, Nucleosoma, Eucromatina/Heterocromatina, Nucleolo,
 * Cromosomas y Cariotipo Humano.
 * 100% rigor biológico, analogías reales, cero textos robóticos/comodín.
 */
export const TOPIC_MASTER_DATA_PART3: Record<string, NodeContent> = {
  // 22: El Núcleo Interfásico: Arquitectura General
  "tema-22": {
    summary: [
      "El núcleo interfásico es el compartimento insignia y centro directriz de la célula eucariota donde se resguarda, replica y transcribe la totalidad del genoma nuclear.",
      "Cuatro componentes arquitectónicos fundamentales: 1) Carioteca (envoltura nuclear doble con poros), 2) Cariolinfa o nucleoplasma (matriz coloidal), 3) Cromatina (ADN condensado con histonas) y 4) Nucleolo (fábrica de subunidades ribosomales sin membrana).",
      "Estado interfásico: Etapa entre divisiones celulares (G1, S, G2) donde el ADN se encuentra metabólicamente activo, transcribiendo ARNm y duplicándose con exactitud.",
    ],
    analogy: {
      title: "La Bóveda Acorazada del Archivo Histórico Central",
      story:
        "Imagina la sede del banco central de un país: los planos maestros originales de toda la nación jamás salen a la calle. Están custodiados en una bóveda blindada con doble muro de acero (la carioteca) y guardias de seguridad en esclusas controladas (los poros nucleares). Adentro, los tomos están ordenados en carpetas con códigos de barras (la cromatina). Cuando los obreros de la ciudad necesitan fabricar algo, entran fotocopiadoras a sacar copias de una sola página (el ARN mensajero) que luego se llevan a los talleres externos.",
      keyTakeaway:
        "El núcleo mantiene segregada la transcripción (en su interior) de la traducción (en el citoplasma), permitiendo a las eucariotas madurar y editar el ARN antes de fabricar proteínas.",
    },
    proteinsAndFactors: [
      { name: "ADN Polimerasas nucleares (alfa, delta, épsilon)", role: "Duplican con fidelidad quirúrgica los 3200 millones de pares de bases durante la fase S de la interfase." },
      { name: "ARN Polimerasas I, II y III", role: "Pol I: transcribe pre-ARNr en el nucleolo; Pol II: sintetiza ARNm y microARNs; Pol III: transcribe ARNt y ARNr 5S." },
      { name: "Topoisomerasas I y II", role: "Alivian la tensión torsional y superenrollamientos mecánicos del ADN durante la transcripción y replicación." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Segregación espacio-temporal: Característica exclusiva de eucariotas; en procariotas la transcripción y traducción son simultáneas en el mismo compartimento.",
        "2. Número de núcleos por célula: Mononucleadas (mayoría), binucleadas (hepatocitos, células cartilaginosas, Paramecium), polinucleadas (osteoclastos, fibras musculares) y anucleadas (eritrocitos maduros de mamíferos).",
        "3. Posición y forma: Generalmente central y esférico, pero basal en células secretoras o aplanado periférico en adipocitos por el empuje de la gota lipídica.",
      ],
      technicalTerms: [
        { term: "Interfase", definition: "Periodo del ciclo celular entre dos divisiones sucesivas que abarca las fases G1, S y G2." },
        { term: "Sincitio vs Plasmodio", definition: "Sincitio: masa multinucleada por fusión de células; Plasmodio: masa multinucleada por divisiones nucleares repetidas sin citocinesis." },
        { term: "Cariotipo", definition: "Conjunto ordenado de los cromosomas característicos de una especie clasificados por tamaño y morfología." },
      ],
      examTraps: [
        "Los eritrocitos (glóbulos rojos) humanos maduros CARECEN de núcleo y mitocondrias; no pueden dividirse ni sintetizar proteínas.",
        "Robert Brown descubrió formalmente el núcleo celular en 1831 en células de orquídeas.",
      ],
    },
    advancedClinical: {
      caseTitle: "Diagnóstico Citológico de Cáncer (Atipia Nuclear)",
      clinicalApplication:
        "Los patólogos detectan células malignas en biopsias al observar pleomorfismo nuclear: núcleos agrandados, contornos irregulares, pérdida de la relación núcleo-citoplasma y nucleolos prominentes múltiples.",
      toxinOrDrugTarget: "Morfología del núcleo celular y relación nucleocitoplasmática.",
    },
    quiz: [
      {
        question: "¿Qué científico escocés descubrió y describió el núcleo celular en 1831 observando células vegetales de orquídeas?",
        options: ["Robert Brown", "Robert Hooke", "Theodor Schwann", "Antonie van Leeuwenhoek"],
        answerIndex: 0,
        explanation: "Robert Brown describió una estructura densa y constante en las células a la que llamó núcleo en 1831.",
        conceptTested: "Descubrimiento histórico del núcleo",
      },
    ],
  },

  // 23: Carioteca y Complejo del Poro Nuclear (NPC)
  "tema-23": {
    summary: [
      "La carioteca (envoltura nuclear) consta de dos membranas concéntricas separadas por el espacio perinuclear (20-40 nm): la membrana nuclear externa (continua con el RER) y la membrana interna.",
      "Lámina nuclear: Malla de filamentos intermedios adosada a la cara interna de la membrana nuclear interna que da sostén mecánico y ancla la cromatina.",
      "Complejo del Poro Nuclear (NPC): Estructura multiproteica octogonal gigante compuesta por unas 30 nucleoporinas (Nups) diferentes que perfora ambas membranas fusionadas.",
      "Puerta de enlace bidireccional: Difusión pasiva libre de iones y moléculas menores a 40 kDa; transporte activo dependiente de energía para proteínas grandes y complejos de ribonucleoproteínas.",
    ],
    analogy: {
      title: "Las Esclusas Octogonales del Submarino",
      story:
        "Imagina un submarino de doble casco de titanio: entre ambos cascos hay agua (espacio perinuclear). Para entrar o salir no hay agujeros abiertos, sino esclusas circulares con 8 compuertas giratorias (simetría octogonal) y una red de tentáculos proteicos en el centro (repeticiones FG). El agua y los peces minúsculos pasan flotando libremente, pero para que pase una persona o un torpedo grande, un guardia debe verificar su tarjeta de acceso molecular.",
      keyTakeaway:
        "El complejo del poro es una de las mayores máquinas moleculares de la célula, regulando qué señales del exterior tienen permiso de alterar los genes del núcleo.",
    },
    proteinsAndFactors: [
      { name: "Nucleoporinas con repeticiones FG (Fenilalanina-Glicina)", role: "Filamentos hidrofóbicos desordenados en el centro del poro que forman una barrera en gel selectiva." },
      { name: "Cesta nuclear ('Nuclear Basket')", role: "Estructura en forma de jaula en la cara interna nucleoplásmica del poro que orienta las moléculas para la exportación." },
      { name: "Filamentos citoplásmicos del poro", role: "Tentáculos proteicos en la cara externa que capturan los complejos de importación con sus cargas." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Continuidad con el RER: La membrana externa está recubierta de ribosomas activos que vuelcan proteínas directamente al espacio perinuclear.",
        "2. Densidad de poros: Una célula humana típica tiene entre 2000 y 4000 complejos de poro; células muy activas en transcripción tienen mayor densidad de poros.",
        "3. Desensamblaje en mitosis: Al final de la profase, la fosforilación de las láminas nucleares por la quinasa CDK1 provoca la ruptura y desensamblaje transitorio de la carioteca.",
      ],
      technicalTerms: [
        { term: "Nucleoporinas (Nups)", definition: "Familia de unas 30 proteínas que integran el complejo del poro nuclear." },
        { term: "Espacio perinuclear", definition: "Espacio de 20 a 40 nm entre ambas membranas de la carioteca continuo con la luz del RER." },
        { term: "Simetría octogonal", definition: "Organización radial en 8 radios idénticos que caracteriza al complejo del poro." },
      ],
      examTraps: [
        "La carioteca NO es una membrana simple; es una ENVOLTURA DOBLE compuesta por dos bicapas lipídicas separadas.",
        "La carioteca se desintegra en prometafase por FOSFORILACIÓN de las láminas nucleares y se reconstruye en telofase.",
      ],
    },
    advancedClinical: {
      caseTitle: "Progeria de Hutchinson-Gilford (Envejecimiento Prematuro)",
      clinicalApplication:
        "Mutación puntual en el gen LMNA genera progerina, una forma anómala de lámina A que no se procesa bien, distorsionando la forma del núcleo, desestabilizando los poros nucleares y causando senescencia celular acelerada y muerte cardiovascular en la adolescencia.",
      toxinOrDrugTarget: "Lámina A y farnesilación de la progerina.",
    },
    quiz: [
      {
        question: "¿Qué simetría geométrica característica presenta el Complejo del Poro Nuclear (NPC) al ser observado mediante microscopía electrónica?",
        options: ["Simetría octogonal (8 radios)", "Simetría pentagonal", "Simetría triangular", "Simetría lineal simple"],
        answerIndex: 0,
        explanation: "El complejo del poro está formado por 8 columnas proteicas simétricas que forman un canal octogonal.",
        conceptTested: "Arquitectura del poro nuclear",
      },
    ],
  },

  // 24: Transporte Nuclear: Importinas y Señal NLS
  "tema-24": {
    summary: [
      "El transporte de macromoléculas a través del poro nuclear es selectivo, saturable y unidireccional, guiado por señales peptídicas codificadas en las propias proteínas.",
      "Señal de Localización Nuclear (NLS): Secuencia de aminoácidos básicos (lisina y arginina) que rotula a las proteínas que deben ingresar al núcleo.",
      "Señal de Exportación Nuclear (NES): Secuencia rica en leucinas hidrofóbicas que marca a moléculas que deben salir al citoplasma.",
      "Ciclo de la GTPasa Ran: Ran-GTP predomina en el núcleo y Ran-GDP en el citosol; este gradiente energético unidireccional disocia o ensambla los complejos con importinas y exportinas.",
    ],
    analogy: {
      title: "El Pasaporte VIP y la Puerta Giratoria Energizada",
      story:
        "Para que una proteína fabricada en el citoplasma (como una polimerasa) pueda entrar al núcleo, debe mostrar un pasaporte dorado con un sello de lisinas (el NLS). La azafata (la importina) toma su mano y la acompaña cruzando los tentáculos del poro. Una vez dentro de la bóveda nuclear, una batería de alta energía (Ran-GTP) choca contra la azafata: la obliga a soltar la proteína adentro y la empuja de regreso vacía hacia el citoplasma para reciclarse.",
      keyTakeaway:
        "El gradiente de Ran-GTP en el núcleo frente a Ran-GDP en el citoplasma es la brújula química absoluta que define la dirección del transporte nuclear.",
    },
    proteinsAndFactors: [
      { name: "Importina alfa y beta", role: "La alfa reconoce la señal NLS y la beta interactúa físicamente con las nucleoporinas FG para translocar la carga." },
      { name: "Exportina (CRM1)", role: "Reconoce la señal NES y se une a la carga únicamente en presencia de Ran-GTP para sacarla al citosol." },
      { name: "Ran-GEF (RCC1 en cromatina)", role: "Factor de intercambio en el núcleo que recarga a Ran colocando GTP." },
      { name: "Ran-GAP (citosólico)", role: "Proteína que estimula a Ran a hidrolizar su GTP a GDP en el citoplasma, liberando la carga exportada." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Permanencia de la NLS: A diferencia de la secuencia señal del retículo (que se corta tras entrar), la señal NLS NO se elimina, permitiendo a la proteína reingresar al núcleo tras cada mitosis.",
        "2. Gradiente Ran: Mantenido por la localización exclusiva de Ran-GEF unido a la cromatina nuclear y Ran-GAP en el citosol exterior.",
        "3. Tráfico del ARN: Los ARNm, ARNt y subunidades ribosomales salen al citosol ensamblados con proteínas formando complejos ribonucleoproteicos (RNP) mediante exportinas.",
      ],
      technicalTerms: [
        { term: "NLS (Nuclear Localization Signal)", definition: "Secuencia peptídica rica en lisinas y argininas básica que dirige proteínas al interior del núcleo." },
        { term: "Ran GTPasa", definition: "Proteína G monomérica interruptora molecular que energiza la dirección del transporte nuclear." },
        { term: "Karioferinas", definition: "Superfamilia de receptores de transporte nuclear que incluye tanto a importinas como exportinas." },
      ],
      examTraps: [
        "La señal NLS NO se corta dentro del núcleo; se mantiene intacta en la proteína para que vuelva a entrar cuando la carioteca se reconstruye tras la mitosis.",
        "Ran-GTP está sumamente concentrado en el NÚCLEO, mientras que Ran-GDP abunda en el CITOSOL.",
      ],
    },
    advancedClinical: {
      caseTitle: "Inhibidores de Exportina CRM1 en Leucemia (Selinexor)",
      clinicalApplication:
        "Selinexor bloquea la exportina nuclear CRM1, atrapando factores supresores de tumores (como p53) dentro del núcleo donde obligan a la célula cancerosa a entrar en apoptosis.",
      toxinOrDrugTarget: "Cisteína-528 de la exportina CRM1 (XPO1).",
    },
    quiz: [
      {
        question: "¿Qué aminoácidos cargados positivamente predominan en la Señal de Localización Nuclear (NLS) clásica?",
        options: ["Lisina y Arginina", "Glicina y Alanina", "Ácido aspártico y Glutamato", "Triptófano y Fenilalanina"],
        answerIndex: 0,
        explanation: "La secuencia NLS clásica está compuesta por tramos cortos de aminoácidos básicos cargados positivamente (lisina y arginina).",
        conceptTested: "Composición de la señal NLS",
      },
    ],
  },

  // 25: Cariolinfa y Lámina Nuclear
  "tema-25": {
    summary: [
      "La cariolinfa (nucleoplasma o jugo nuclear) es la fase coloidal transparente y viscosa que llena el espacio intercromatínico del núcleo, rica en agua, nucleótidos, iones y enzimas.",
      "Lámina nuclear: Red bidimensional densa de filamentos intermedios (laminas A, B y C) de 10-30 nm de grosor que tapiza la cara interna de la envoltura nuclear.",
      "Funciones de la lámina: Confiere rigidez estructural y forma esférica al núcleo, posiciona los complejos de poro y ancla los dominios heterocromatínicos periféricos (LADs).",
    ],
    analogy: {
      title: "El Chasis Interior y la Malla de Refuerzo del Domo",
      story:
        "Si imaginas el núcleo como un domo geodésico inflable, la cariolinfa es el aire comprimido y los fluidos que mantienen todo en suspensión. Pero para que el domo no colapse ni se deforme con cualquier golpe, por debajo del plástico hay una malla tejida de alambre fino de acero (la lámina nuclear). Las hebras de cromatina que no se están usando están grapadas a esa malla para que no estorben en el centro de la pista.",
      keyTakeaway:
        "La lámina nuclear organiza espacialmente el genoma en 3D: los genes silenciados se archivan pegados a la lámina periférica y los activos flotan hacia el centro del nucleoplasma.",
    },
    proteinsAndFactors: [
      { name: "Lamina B", role: "Posee una modificación lipídica hidrofóbica (anclaje farnesilo) que la une permanentemente a la membrana nuclear interna." },
      { name: "Laminas A y C", role: "Se ensamblan a la lámina B formando el retículo de filamentos intermedios nucleares tipo V." },
      { name: "Receptor de Lamina B (LBR) y Emerina", role: "Proteínas integrales de la membrana interna que anclan la lámina al envoltorio lipídico." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Dominios Asociados a la Lámina (LADs): Regiones de heterocromatina silenciada ricas en genes inactivos ancladas físicamente a la lámina nuclear.",
        "2. Ciclo mitótico: Al inicio de la mitosis, la fosforilación de las láminas por CDK1 desensambla la malla; en la telofase, fosfatasas retiran los fosfatos permitiendo la reasociación de la carioteca.",
        "3. Cuerpos nucleares en la cariolinfa: Cuerpos de Cajal (ensamblado de snRNP para splicing) y motas nucleares (speckles con factores de maduración del ARN).",
      ],
      technicalTerms: [
        { term: "Cariolinfa", definition: "Medio coloidal nucleoplásmico donde se hallan inmersos la cromatina y los nucleolos." },
        { term: "Laminopatías", definition: "Grupo de enfermedades genéticas humanas causadas por defectos en los genes de la lámina nuclear." },
        { term: "Fosforilación mitótica", definition: "Adición de grupos fosfato por CDK1 que induce la despolimerización de la lámina nuclear." },
      ],
      examTraps: [
        "Las láminas nucleares son FILAMENTOS INTERMEDIOS (tipo V), no están hechas de actina ni de tubulina.",
        "El nucleoplasma tiene un pH ligeramente más alcalino y concentraciones iónicas reguladas distintas al citosol.",
      ],
    },
    advancedClinical: {
      caseTitle: "Distrofia Muscular de Emery-Dreifuss",
      clinicalApplication:
        "Mutaciones en la emerina o en la lámina A debilitan el anclaje del núcleo celular sometido a tensiones mecánicas repetitivas, provocando degeneración muscular progresiva y arritmias cardíacas letales.",
      toxinOrDrugTarget: "Complejo emerina-lámina A de miocitos cardíacos.",
    },
    quiz: [
      {
        question: "¿Qué tipo de filamentos del citoesqueleto constituyen la estructura básica de la lámina nuclear?",
        options: ["Filamentos intermedios (laminas A, B y C)", "Microtúbulos de tubulina", "Microfilamentos de actina", "Fibras colágenas"],
        answerIndex: 0,
        explanation: "La lámina nuclear es una red constituida por láminas proteicas clasificadas como filamentos intermedios tipo V.",
        conceptTested: "Composición de la lámina nuclear",
      },
    ],
  },

  // 26: Cromatina y Niveles de Compactación
  "tema-26": {
    summary: [
      "La cromatina es el complejo nucleoproteico constituido por la doble hélice de ADN asociada a proteínas histónicas básicas y no histónicas.",
      "El Nucleosoma ('Cuentas de collar'): Unidad fundamental de la cromatina formada por un octámero de histonas (2 de cada una: H2A, H2B, H3 y H4) alrededor del cual el ADN da 1.65 vueltas (146-147 pares de bases).",
      "Histona H1 (Histona ligadora o linker): Se une al ADN espaciador exterior estabilizando el nucleosoma y permitiendo el plegamiento en niveles superiores.",
      "Niveles de empaquetamiento: 1) Fibra de 10 nm (cuentas de collar), 2) Fibra de 30 nm (solenoide), 3) Bucles o lazos radiales (300 nm) sobre un armazón proteico no histónico, 4) Cromonema condensado (700 nm) y 5) Cromosoma metafásico máximo (1400 nm).",
    ],
    analogy: {
      title: "Los Dos Metros de Hilo Enrollados en Carreteles Microscópicos",
      story:
        "Si estiras el ADN de una sola célula humana mide 2 metros de largo. ¿Cómo metes 2 metros de hilo invisible dentro de una esfera de apenas 6 micrómetros sin que se vuelva un nudo imposible? La célula usa carreteles de hilo cilíndricos perfectos (los nucleosomas). El hilo se enrolla dos veces en cada carretel; luego esos carreteles se apilan en espiral formando cuerdas gruesas, que luego se doblan en lazos hasta formar paquetes ultracompactos listos para la mudanza (los cromosomas).",
      keyTakeaway:
        "Las histonas poseen abundante carga positiva (lisina y arginina) que se acopla magnéticamente con la carga negativa de los grupos fosfato del ADN.",
    },
    proteinsAndFactors: [
      { name: "Octámero de histonas del core (2x H2A, 2x H2B, 2x H3, 2x H4)", role: "Carrete globular básico sobre el cual se enrolla la hebra de ADN bicatenario." },
      { name: "Histona H1", role: "Sella la entrada y salida del ADN en el nucleosoma facilitando la condensación a fibra de 30 nm (solenoide)." },
      { name: "Condensinas y Cohesinas", role: "Complejos proteicos SMC que empaquetan los bucles de cromatina y mantienen unidas a las cromátidas hermanas." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Interacción electrostática: Las histonas son fuertemente básicas debido a abundantes residuos de lisina y arginina que neutralizan los fosfatos ácidos del ADN.",
        "2. Longitud del ADN nucleosomal: ~146 pb envuelven directamente al octámero + ~50 pb de ADN de enlace (linker) asociado a H1 suman unos 200 pb por nucleosoma.",
        "3. Modelo del Solenoide: Estructura helicoidal de 30 nm con aproximadamente 6 nucleosomas por vuelta estabilizados por la histona H1.",
      ],
      technicalTerms: [
        { term: "Nucleosoma", definition: "Unidad estructural elemental de repetición de la cromatina eucariota formada por el octámero de histonas y el ADN." },
        { term: "Histona ligadora H1", definition: "Histona que no forma parte del octámero y se sitúa en el exterior de la partícula núcleo." },
        { term: "Cromatosoma", definition: "Complejo formado por el nucleosoma central de 146 pb más la histona H1 y el ADN linker (~166 pb)." },
      ],
      examTraps: [
        "El octámero del nucleosoma contiene 8 histonas (H2A, H2B, H3, H4 por duplicado); la histona H1 NO FORMA PARTE del octámero interno.",
        "Las bacterias carecen de histonas verdaderas y nucleosomas; tienen proteínas HU parecidas a histonas pero su ADN está desnudo.",
      ],
    },
    advancedClinical: {
      caseTitle: "Epigenética e Inhibidores de Histona Desacetilasa (HDAC)",
      clinicalApplication:
        "Fármacos epigenéticos como el vorinostat bloquean las histona desacetilasas, manteniendo acetiladas a las histonas para que la cromatina permanezca abierta (eucromatina) y reexpresen genes supresores tumorales que destruyen linfomas.",
      toxinOrDrugTarget: "Bolsillo catalítico de zinc de las histona desacetilasas (HDAC).",
    },
    quiz: [
      {
        question: "¿Cuántas moléculas de histonas componen el octámero central alrededor del cual se enrolla el ADN en cada nucleosoma?",
        options: [
          "8 moléculas (2 copias de H2A, H2B, H3 y H4)",
          "4 moléculas (1 de cada tipo)",
          "10 moléculas incluyendo dos de H1",
          "16 moléculas apareadas"
        ],
        answerIndex: 0,
        explanation: "El núcleo del nucleosoma es un octámero formado por dos dímeros H2A-H2B y un tetrámero H3-H4.",
        conceptTested: "Composición del octámero histónico",
      },
    ],
  },

  // 27: Eucromatina vs. Heterocromatina
  "tema-27": {
    summary: [
      "Eucromatina: Fracción de la cromatina descondensada (laxa, fibra de 10 nm) durante la interfase; transcripcionalmente activa (genes en constante lectura y expresión).",
      "Heterocromatina: Fracción de la cromatina densamente condensada e inactiva (silenciada) que se tiñe intensamente con colorantes básicos.",
      "Heterocromatina constitutiva: Permanentemente condensada en todas las células del organismo; rica en secuencias de ADN repetitivo no codificante (centrómeros y telómeros).",
      "Heterocromatina facultativa: Genes silenciados específicamente en un tejido o etapa del desarrollo, pero que pueden activarse en otras células o momentos.",
      "Corpúsculo de Barr: Ejemplo clásico de heterocromatina facultativa; corresponde al cromosoma X inactivado al azar en las células somáticas de las hembras de mamíferos (XX).",
    ],
    analogy: {
      title: "El Libro Abierto en el Escritorio vs. Los Archivos Embalados con Cinta",
      story:
        "Imagina una biblioteca de investigación: los libros que los científicos leen y consultan todos los días están abiertos de par en par sobre las mesas de lectura (la eucromatina, fácil de fotocopiar por la ARN polimerasa). En cambio, los manuales obsoletos o prohibidos están cerrados, atados con alambre y sellados con candados de cera química (la heterocromatina con metilación). Nadie los puede leer a menos que un operario corte las ataduras.",
      keyTakeaway:
        "La diferencia entre una neurona y una célula hepática (que comparten exactamente el mismo ADN) radica en qué regiones son eucromatina accesible y cuáles están empaquetadas como heterocromatina.",
    },
    proteinsAndFactors: [
      { name: "Histona Acetiltransferasas (HATs)", role: "Añaden grupos acetilo a las lisinas de las histonas neutralizando su carga positiva; relajan la cromatina a eucromatina activa." },
      { name: "Histona Desacetilasas (HDACs)", role: "Retiran los acetilos devolviendo la carga positiva a las histonas; condensan la cromatina a heterocromatina silenciada." },
      { name: "Proteína HP1 (Heterochromatin Protein 1)", role: "Reconoce la trimetilación de la histona H3 en lisina 9 (H3K9me3) y empaqueta la cromatina en bloques densos inactivos." },
      { name: "ARN no codificante Xist", role: "Recubre físicamente uno de los cromosomas X en embriones femeninos reclutando complejos represores para formar el corpúsculo de Barr." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Tinción interfásica: La eucromatina se ve clara y difusa al microscopio electrónico; la heterocromatina se observa como grumos oscuros densos pegados a la lámina nuclear.",
        "2. Hipótesis de Mary Lyon (Lionización): Inactivación aleatoria y temprana de uno de los dos cromosomas X en hembras de mamíferos para igualar la dosis génica respecto a los machos (XY).",
        "3. Epigenética: Modificaciones reversibles en las colas de las histonas y metilación de citosinas en islas CpG del ADN sin alterar la secuencia nucleotídica.",
      ],
      technicalTerms: [
        { term: "Corpúsculo de Barr", definition: "Masa densa de heterocromatina facultativa observable en el borde del núcleo correspondiente al cromosoma X inactivado." },
        { term: "Epigenética", definition: "Cambios heredables en la expresión génica que no implican modificaciones en la secuencia primaria del ADN." },
        { term: "Acetilación de histonas", definition: "Marca epigenética activadora que descondensa la fibra cromatínica abriendo el acceso a los factores de transcripción." },
      ],
      examTraps: [
        "El corpúsculo de Barr se encuentra en células somáticas de individuos con MÁS DE UN cromosoma X (mujeres normales 46,XX tienen 1; hombres normales 46,XY tienen 0; pacientes Klinefelter 47,XXY tienen 1).",
        "La heterocromatina constitutiva NUNCA se transcribe en ningún tejido ni etapa.",
      ],
    },
    advancedClinical: {
      caseTitle: "Síndrome de Klinefelter y el Corpúsculo de Barr",
      clinicalApplication:
        "Un frotis bucal permite diagnosticar rápidamente el Síndrome de Klinefelter (47,XXY): aunque el paciente es de fenotipo masculino, sus células muestran un corpúsculo de Barr debido a la inactivación obligada de su cromosoma X extra.",
      toxinOrDrugTarget: "Cromosoma X hipercondensado y corpúsculo de Barr.",
    },
    quiz: [
      {
        question: "¿Cuál de las siguientes afirmaciones describe con exactitud a la eucromatina?",
        options: [
          "Cromatina descondensada, clara y transcripcionalmente activa durante la interfase",
          "Región permanentemente inactiva de los centrómeros y telómeros",
          "El cromosoma X condensado en hembras conocido como corpúsculo de Barr",
          "ADN mitocondrial circular carente de histonas"
        ],
        answerIndex: 0,
        explanation: "La eucromatina está abierta y accesible para que las ARN polimerasas transcriban activamente los genes.",
        conceptTested: "Definición y propiedades de la eucromatina",
      },
    ],
  },

  // 28: El Nucleolo y Biogénesis Ribosomal
  "tema-28": {
    summary: [
      "El nucleolo es una región densa, esférica y no delimitada por membrana dentro del núcleo dedicada a la transcripción del ARN ribosomal (ARNr) y al ensamblado de las subunidades ribosomales.",
      "Regiones Organizadoras Nucleolares (NOR): Bucles de ADN situados en los brazos cortos de los 5 pares de cromosomas acrocéntricos humanos (13, 14, 15, 21 y 22) que contienen los genes repetidos en tándem para el pre-ARNr 45S.",
      "Tres zonas ultraestructurales visibles: 1) Centro fibrilar (ADN con genes del NOR y ARN polimerasa I), 2) Componente fibrilar denso (transcripción activa y maduración del pre-ARNr 45S) y 3) Componente granular (ensamblado de las subunidades 40S y 60S con proteínas ribosomales).",
    ],
    analogy: {
      title: "La Fábrica Ensambladora de Motores",
      story:
        "Imagina una nave industrial gigantesca en el corazón de la metrópoli: aquí se prensan los bloques de motor más importantes de la célula (los ribosomas). Desde las afueras (el citoplasma) entran convoyes con 80 tipos de piezas de metal terminadas (proteínas ribosomales). Dentro de la nave, diez líneas de montaje de ADN (los cromosomas acrocéntricos) imprimen moldes de plástico (el ARN ribosomal). Se arman las mitades mayores y menores, se empaquetan y se despachan por los poros para que construyan las proteínas de la vida.",
      keyTakeaway:
        "El nucleolo se disuelve por completo al iniciar la mitosis (profase) y se reorganiza de nuevo en la telofase alrededor de las regiones NOR de los cromosomas hijos.",
    },
    proteinsAndFactors: [
      { name: "ARN Polimerasa I", role: "Enzima nuclear exclusiva del nucleolo que transcribe el transcripto precursor de pre-ARNr 45S." },
      { name: "Fibrilarina", role: "Proteína marcadora del componente fibrilar denso involucrada en las primeras modificaciones y metilaciones del pre-ARNr." },
      { name: "Nucleostemina y Nucleolina", role: "Proteínas del componente granular encargadas de empaquetar y acoplar las subunidades ribosomales antes de exportarlas." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Procesamiento del pre-ARNr 45S: Se corta enzimáticamente dando origen a tres de los cuatro tipos de ARNr eucariotas: 18S (para la subunidad 40S), 28S y 5.8S (para la subunidad 60S).",
        "2. Excepción del ARNr 5S: Se sintetiza FUERA del nucleolo, en el nucleoplasma por la ARN Polimerasa III, y luego ingresa al nucleolo para unirse a la subunidad 60S.",
        "3. Tráfico bidireccional: Las proteínas ribosomales se sintetizan en el CITOPLASMA, viajan al NÚCLEO, entran al NUCLEOLO, se ensamblan y las subunidades terminadas salen por los poros al CITOPLASMA.",
      ],
      technicalTerms: [
        { term: "NOR (Nucleolar Organizer Region)", definition: "Región cromosómica con múltiples copias de genes que codifican para el ARN ribosomal." },
        { term: "Pre-ARNr 45S", definition: "Transcripto primario policistrónico que tras sucesivos clivajes genera los ARNr 18S, 28S y 5.8S." },
        { term: "SnoRNA", definition: "Pequeños ARN nucleolares que guían la modificación química (metilación y pseudouridilación) del ARNr." },
      ],
      examTraps: [
        "El nucleolo NO sintetiza proteínas; solo ENSAMBLA el ARNr con proteínas que vienen del citoplasma.",
        "El nucleolo carece de membrana delimitante; es un condensado biomolecular formado por separación de fases líquidas.",
      ],
    },
    advancedClinical: {
      caseTitle: "Hipertrofia Nucleolar en Células Cancerosas",
      clinicalApplication:
        "Las células cancerosas malignas de proliferación descontrolada exhiben nucleolos gigantes y múltiples al microscopio debido a una demanda descomunal de ribosomas nuevos para sostener su veloz síntesis proteica tumoral.",
      toxinOrDrugTarget: "ARN Polimerasa I y factores de biogénesis nucleolar.",
    },
    quiz: [
      {
        question: "¿Cuáles son los cromosomas humanos que poseen las Regiones Organizadoras Nucleolares (NOR) en sus brazos cortos?",
        options: [
          "Los cromosomas acrocéntricos 13, 14, 15, 21 y 22",
          "Los cromosomas sexuales X e Y",
          "Los grandes cromosomas metacéntricos 1, 2 y 3",
          "Únicamente el cromosoma 21"
        ],
        answerIndex: 0,
        explanation: "Los 5 pares acrocéntricos (13, 14, 15, 21 y 22) albergan los bucles de ADN con genes de ARNr que forman el nucleolo.",
        conceptTested: "Cromosomas con regiones NOR",
      },
    ],
  },

  // 29: Morfología del Cromosoma
  "tema-29": {
    summary: [
      "El cromosoma es el grado máximo de condensación de la cromatina visible al microscopio óptico durante la metafase de la división celular.",
      "Partes anatómicas: Centrómero (constricción primaria con ADN satélite heterocromatínico), Cinetocoros (placas proteicas discoidales a ambos lados del centrómero donde se anclan los microtúbulos cinetocóricos del huso), Telómeros (extremos protectores con secuencias repetitivas TTAGGG) y Brazos (brazo corto 'p' y brazo largo 'q').",
      "Clasificación según la posición del centrómero: 1) Metacéntrico (centrómero en el centro exacto, brazos iguales p = q), 2) Submetacéntrico (centrómero ligeramente desplazado, brazo p más corto que q), 3) Acrocéntrico (centrómero muy cerca de un extremo con satélites pedunculados) y 4) Telocéntrico (centrómero en el extremo terminal con un solo brazo visible; no existen en la especie humana normal).",
    ],
    analogy: {
      title: "Las Valijas con Manija de Remolque y Candados en las Esquinas",
      story:
        "Cuando una familia se muda de casa, no traslada la ropa flotando en el aire: la dobla en maletas herméticas cerradas con candados inviolables en las esquinas (los telómeros que impiden que el ADN se deshilache). En el medio de la valija hay una manija de acero reforzada (el centrómero) con argollas de anclaje (los cinetocoros). Los camiones de remolque (las fibras del huso) enganchan sus cuerdas en esas argollas y tiran con fuerza para repartir una valija a cada nueva casa sin perder ni un solo calcetín.",
      keyTakeaway:
        "El cromosoma no existe como cuerpo condensado individual todo el tiempo; solo se empaqueta así para garantizar un reparto mecánico equitativo del genoma durante la mitosis.",
    },
    proteinsAndFactors: [
      { name: "Cinetocoro (Complejos Ndc80 y KMN)", role: "Estructura multiproteica sobre el centrómero que ancla los microtúbulos del huso y monitorea la tensión para el punto de control del ensamblaje del huso (SAC)." },
      { name: "Telomerasa (TERT + TERC)", role: "Ribonucleoproteína retrotranscriptasa que mantiene la longitud de los telómeros en células madre y germinales." },
      { name: "Complejo Shelterina (TRF1, TRF2, POT1)", role: "Capuchón proteico que oculta el extremo libre 3' monocatenario del telómero en bucles t (t-loops) para evitar que sea reconocido como ADN roto." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Brazos 'p' y 'q': La 'p' proviene del francés 'petit' (pequeño); la 'q' se eligió por ser la letra siguiente del abecedario para el brazo largo.",
        "2. Cromátidas hermanas: Cada cromosoma metafásico duplicado consta de 2 cromátidas hermanas genéticamente idénticas unidas por el centrómero y anillos de cohesina.",
        "3. Constricción secundaria y Satélites (cuerpos trabantes): Estrangulamientos adicionales en los brazos cortos de cromosomas acrocéntricos que delimitan masas esféricas llamadas satélites.",
      ],
      technicalTerms: [
        { term: "Cinetocoro", definition: "Estructura proteica trilaminar adosada al centrómero donde se fijan las fibras del huso acromático." },
        { term: "Telómero", definition: "Extremo terminal del cromosoma con repeticiones hexanucleotídicas (TTAGGG) que previene la fusión con otros cromosomas." },
        { term: "Satélite cromosómico", definition: "Segmento terminal redondeado separado del resto del cromosoma por una constricción secundaria." },
      ],
      examTraps: [
        "Los cromosomas TELOCÉNTRICOS NO existen en el cariotipo humano normal (los ratones sí los tienen).",
        "El centrómero es la constricción PRIMARIA; las zonas que originan satélites son constricciones SECUNDARIAS.",
      ],
    },
    advancedClinical: {
      caseTitle: "Acortamiento Telomérico, Límite de Hayflick y Envejecimiento",
      clinicalApplication:
        "En células somáticas normales, la falta de telomerasa hace que los telómeros se acorten con cada división; tras unas 50 divisiones (Límite de Hayflick), el telómero se agota y la célula entra en senescencia permanente. Las células tumorales reactivan la telomerasa para volverse inmortales.",
      toxinOrDrugTarget: "Subunidad catalítica TERT de la telomerasa humana.",
    },
    quiz: [
      {
        question: "¿Cómo se clasifica morfológicamente un cromosoma cuyo centrómero se localiza muy cerca de un extremo, presentando un brazo p diminuto con satélite?",
        options: ["Acrocéntrico", "Metacéntrico", "Submetacéntrico", "Telocéntrico"],
        answerIndex: 0,
        explanation: "Los cromosomas acrocéntricos tienen el centrómero muy desplazado hacia un polo y suelen portar satélites.",
        conceptTested: "Clasificación morfológica de cromosomas",
      },
    ],
  },

  // 30: Cariotipo y Organización del Genoma
  "tema-30": {
    summary: [
      "El cariotipo es el conjunto completo ordenado y sistematizado de los cromosomas de una célula somática de un individuo clasificados según tamaño, forma y patrón de bandas.",
      "Cariotipo humano normal: 46 cromosomas en 23 pares homólogos (célula diploide 2n = 46). Consta de 22 pares de autosomas (cromosomas no sexuales, 44 autosomas) y 1 par de cromosomas sexuales o gonosomas (XX en mujeres, XY en varones).",
      "Fórmula cariotípica estándar: Mujer normal = 46,XX; Varón normal = 46,XY.",
      "Grupos del cariotipo humano (Clasificación de Denver): 7 grupos (del A al G) ordenados de mayor a menor tamaño: Grupo A (1-3, grandes meta/submeta), Grupo B (4-5, grandes submeta), Grupo C (6-12 + X, medianos submeta), Grupo D (13-15, medianos acrocéntricos con satélite), Grupo E (16-18, pequeños meta/submeta), Grupo F (19-20, muy pequeños metacéntricos) y Grupo G (21-22 + Y, diminutos acrocéntricos).",
    ],
    analogy: {
      title: "El Álbum Familiar Ordenado de Tomos Enciclopédicos",
      story:
        "Imagina una colección de 46 enciclopedias distribuidas en 23 pares de tomos idénticos: cada tomo tiene dos volúmenes (uno heredado de papá y otro de mamá). En un cariograma, los genetistas detienen la división celular, toman una fotografía microscópica, recortan cada libro con tijeras y los alinean en el estante de mayor a menor tamaño: los tomos más pesados arriba (Grupo A) y los folletos más pequeños al final (Grupo G), dejando al final los tomos especiales que definen el sexo biológico.",
      keyTakeaway:
        "Cualquier cromosoma de más (trisomía) o de menos (monosomía) desequilibra la dosis de cientos de genes provocando anomalías del desarrollo severas.",
    },
    proteinsAndFactors: [
      { name: "Colchicina", role: "Alcaloide que inhibe la polimerización de los microtúbulos del huso, deteniendo a miles de células en metafase para poder fotografiarlas." },
      { name: "Giemsa (Bandas G)", role: "Colorante que tiñe preferencialmente regiones ricas en adenina-timina (AT) generando un código de barras transversal reproducible único para cada cromosoma." },
      { name: "Gen SRY del cromosoma Y", role: "Factor determinante testicular que inicia la diferenciación de las gónadas hacia testículos en el embrión XY." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Células diploides (2n) vs Haploides (n): Células somáticas humanas tienen 46 cromosomas (2n = 46); gametos maduros (espermatozoides y óvulos) tienen 23 cromosomas (n = 23).",
        "2. Aneuploidías autosómicas viables más frecuentes: Trisomía 21 (Síndrome de Down: 47,XX,+21 o 47,XY,+21), Trisomía 18 (Síndrome de Edwards: 47,+18) y Trisomía 13 (Síndrome de Patau: 47,+13).",
        "3. Aneuploidías sexuales: Síndrome de Turner (45,X0: única monosomía viable en humanos, fenotipo femenino con amenorrea y baja estatura) y Síndrome de Klinefelter (47,XXY: fenotipo masculino con hipogonadismo y ginecomastia).",
      ],
      technicalTerms: [
        { term: "Cariograma (Idiógrama)", definition: "Representación gráfica esquemática o fotográfica de los cromosomas ordenados por pares homólogos." },
        { term: "Aneuploidía", definition: "Alteración numérica en la que se ganan o pierden cromosomas individuales debido a no disyunción meiótica." },
        { term: "Cromosomas homólogos", definition: "Par de cromosomas (uno paterno y uno materno) que poseen los mismos loci génicos en el mismo orden." },
      ],
      examTraps: [
        "El cariotipo humano tiene 23 PARES de cromosomas, pero un total de 46 CROMOSOMAS.",
        "El cromosoma sexual X pertenece por tamaño y forma al Grupo C; el cromosoma Y pertenece al Grupo G.",
        "El Síndrome de Turner (45,X) es la ÚNICA monosomía compatible con la vida humana.",
      ],
    },
    advancedClinical: {
      caseTitle: "Amniocentesis y Diagnóstico Prenatal del Síndrome de Down",
      clinicalApplication:
        "La extracción de líquido amniótico durante el embarazo permite cultivar células fetales, tratarlas con colchicina y realizar un cariograma para confirmar con certeza absoluta la presencia de una trisomía 21.",
      toxinOrDrugTarget: "Cariotipo fetal metafásico y no disyunción meiótica materna.",
    },
    quiz: [
      {
        question: "¿Cuál es la dotación cromosómica y fórmula cariotípica correspondiente a una mujer con Síndrome de Turner?",
        options: ["45,X0 (monosomía del cromosoma X)", "47,XX,+21", "47,XXY", "46,XY"],
        answerIndex: 0,
        explanation: "El síndrome de Turner se caracteriza por la pérdida completa o parcial de un cromosoma sexual, dando un cariotipo con 45 cromosomas (45,X0).",
        conceptTested: "Aneuploidías del cariotipo humano",
      },
    ],
  },
};
