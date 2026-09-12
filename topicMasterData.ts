import { NodeContent } from "../types";
import { TOPIC_MASTER_DATA_PART2 } from "./topicMasterDataPart2";
import { TOPIC_MASTER_DATA_PART3 } from "./topicMasterDataPart3";

/**
 * Banco maestro de contenido biológico 100% auténtico, curado y libre de textos comodín
 * para los 30 nodos de Citología I y Citología II.
 * Cada nodo cuenta con su narrativa verídica, analogía viva realista,
 * ultraestructura real sin textos de relleno (sin ATP donde no va),
 * términos técnicos exactos y puntos clave claros.
 */
const TOPIC_MASTER_DATA_PART1: Record<string, NodeContent> = {
  // 01: Teoría Celular e Historia
  "tema-01": {
    summary: [
      "La célula es la unidad morfológica y estructural de todos los seres vivos (no existe vida más pequeña que una célula viva completa).",
      "Es la unidad fisiológica o funcional: todas las reacciones químicas vitales (metabolismo) se realizan dentro de su límite celular.",
      "Es la unidad genética y de origen: toda célula procede de la división de otra célula preexistente ('Omnis cellula e cellula').",
    ],
    analogy: {
      title: "El Ladrillo Maestro de Todo Edificio",
      story:
        "Imagina construir rascacielos, puentes o casas diminutas: todos necesitan ladrillos elementales. Si pulverizas un ladrillo, deja de sostener la pared. En la naturaleza ocurre igual: una secuoya de 100 metros o una bacteria milimétrica están hechas de la misma unidad viva elemental. Rompe la célula y sus componentes químicos mueren; la célula es el mínimo paquete que sabe mantenerse vivo por sí mismo.",
      keyTakeaway:
        "Ninguna estructura biológica menor que una célula (como un virus o una molécula aislada) posee vida autónoma independiente.",
    },
    proteinsAndFactors: [
      {
        name: "Robert Hooke (1665)",
        role: "Acuñó el término 'célula' (cellulae o celdillas) al observar cortes finos de corcho muerto con su microscopio.",
      },
      {
        name: "Antonie van Leeuwenhoek (1674)",
        role: "Descubrió microorganismos vivos ('animálculos'), bacterias, protozoarios y espermatozoides con lentes pulidas a mano.",
      },
      {
        name: "Schleiden & Schwann (1838-1839)",
        role: "Formularon los dos primeros postulados: todos los vegetales (Schleiden) y todos los animales (Schwann) están formados por células.",
      },
      {
        name: "Rudolf Virchow (1855)",
        role: "Añadió el postulado de origen: 'Omnis cellula e cellula' (toda célula se origina a partir de otra célula previa).",
      },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Postulado Morfológico (Schleiden & Schwann): Todos los organismos vivos están compuestos por una (unicelulares) o millones de células (pluricelulares).",
        "2. Postulado Fisiológico (Schwann): La célula efectúa todas las funciones del ser vivo: nutrición, relación, homeostasis y reproducción.",
        "3. Postulado de Origen (Virchow): La vida no surge por generación espontánea; proviene de la división de células previas.",
        "4. Postulado Genético Moderno: Cada célula contiene la información hereditaria completa (ADN) para regular su función y transmitirla a su descendencia.",
      ],
      technicalTerms: [
        {
          term: "Omnis cellula e cellula",
          definition: "Aforismo latino de Rudolf Virchow (1855) que refutó definitivamente la generación espontánea a nivel celular.",
        },
        {
          term: "Entidad acelular",
          definition: "Virus, viroides y priones: carecen de metabolismo, membrana y ribosomas; requieren invadir células vivas para multiplicarse.",
        },
        {
          term: "Sincitio",
          definition: "Masa citoplasmática multinucleada (como la fibra muscular esquelética) formada por la fusión de múltiples células individuales.",
        },
      ],
      examTraps: [
        "Los virus NO refutan la Teoría Celular; son parásitos genéticos intracelulares estrictos que no cumplen con los criterios de vida celular autónoma.",
        "Robert Hooke observó en 1665 las paredes vacías de células muertas de corcho (tejido suberoso), no células vivas con citoplasma.",
        "Robert Brown descubrió el Núcleo celular en 1831; Purkinje acuñó el término Protoplasma en 1839.",
      ],
    },
    advancedClinical: {
      caseTitle: "La Teoría Celular y la Patología Médica Moderna",
      clinicalApplication:
        "Rudolf Virchow transformó la medicina al postular que las enfermedades no se originan por 'desequilibrio de humores', sino por alteraciones funcionales o lesiones en las células individuales de los órganos.",
      toxinOrDrugTarget:
        "Toda quimioterapia oncológica o antibiótico busca destruir selectivamente a las células enfermas respetando las células sanas.",
    },
    quiz: [
      {
        question: "¿Qué científico acuñó por primera vez la palabra 'célula' al observar celdillas en láminas finas de corcho?",
        options: ["Robert Hooke (1665)", "Antonie van Leeuwenhoek", "Rudolf Virchow", "Theodor Schwann"],
        answerIndex: 0,
        explanation: "Robert Hooke observó en 1665 bajo su microscopio cortes de corcho y comparó las cavidades poliédricas con las celdillas de los monjes.",
        conceptTested: "Descubrimiento de la célula por Robert Hooke",
      },
      {
        question: "El postulado fundamental 'Omnis cellula e cellula' (toda célula proviene de otra preexistente) fue formulado en 1855 por:",
        options: ["Rudolf Virchow", "Matthias Schleiden", "Robert Brown", "Louis Pasteur"],
        answerIndex: 0,
        explanation: "Virchow completó la teoría celular de Schleiden y Schwann introduciendo el principio de continuidad reproductiva celular.",
        conceptTested: "Postulado de origen celular de Virchow",
      },
      {
        question: "Según la Teoría Celular clásica y moderna, ¿por qué los virus NO son considerados células vivas?",
        options: [
          "Porque carecen de metabolismo autónomo, no tienen membrana celular propia ni ribosomas para sintetizar proteínas",
          "Porque poseen más de dos núcleos celulares",
          "Porque se desplazan únicamente mediante flagelos bacterianos",
          "Porque no poseen material genético de ningún tipo"
        ],
        answerIndex: 0,
        explanation: "Los virus carecen de la maquinaria enzimática para sintetizar componentes o producir ATP por sí mismos; son complejos macromoleculares acelulares.",
        conceptTested: "Naturaleza acelular de los virus",
      },
    ],
  },

  // 02: Procariota vs Eucariota
  "tema-02": {
    summary: [
      "Procariota: Carece de carioteca (envoltura nuclear); ADN circular cerrado desnudo libre en el nucleoide, sin histonas ni intrones.",
      "Eucariota: Núcleo verdadero delimitado por doble membrana con poros; ADN lineal asociado a histonas (cromatina).",
      "Diferencias citoplasmáticas: Ribosomas 70S en procariotas vs 80S en citosol eucariota; procariotas carecen de organelas membranosas.",
    ],
    analogy: {
      title: "Estudio Abierto vs. Mansión con Bóveda Compartimentada",
      story:
        "Una bacteria procariota es como un departamento tipo estudio: la cama, la cocina y la biblioteca están en un único ambiente sin paredes divisorias. Una eucariota es una residencia dividida en habitaciones herméticas: el núcleo es la biblioteca blindada, las mitocondrias son salas de máquinas y los lisosomas cuartos de incineración con cerradura de seguridad.",
      keyTakeaway:
        "La compartimentación membranosa permite a las células eucariotas llevar a cabo reacciones químicas incompatibles de forma simultánea.",
    },
    proteinsAndFactors: [
      {
        name: "Histonas (H2A, H2B, H3, H4, H1)",
        role: "Proteínas nucleares básicas exclusivas de eucariotas para empaquetar el ADN en nucleosomas.",
      },
      {
        name: "Ribosomas 70S vs 80S",
        role: "Procariotas usan 70S (50S + 30S); el citoplasma eucariota usa 80S (60S + 40S).",
      },
      {
        name: "Proteína FtsZ bacteriana",
        role: "Homóloga bacteriana de la tubulina que forma el anillo de constricción durante la fisión binaria.",
      },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Material Genético: Procariotas poseen un único cromosoma circular sin carioteca; eucariotas poseen múltiples cromosomas lineales dentro de la carioteca.",
        "2. Compartimentación: Eucariotas tienen sistema de endomembranas (RER, REL, Golgi) y organelas semiautónomas (mitocondrias, cloroplastos).",
        "3. Pared celular: Procariotas con peptidoglicano (mureína); vegetales con celulosa; hongos con quitina; animales sin pared.",
        "4. División: Procariotas por fisión binaria (amitosis); eucariotas por mitosis o meiosis con huso acromático.",
      ],
      technicalTerms: [
        { term: "Nucleoide", definition: "Zona del citosol procariota donde reside el ADN bacteriano sin membrana circundante." },
        { term: "Plásmido", definition: "Pequeño anillo de ADN extracromosómico bacteriano que suele conferir resistencia a antibióticos." },
        { term: "Endosimbiosis", definition: "Proceso evolutivo por el cual bacterias aerobias primitivas dieron origen a mitocondrias y cloroplastos." },
      ],
      examTraps: [
        "Las bacterias SÍ tienen ribosomas (70S); los ribosomas no tienen membrana y existen en ambos tipos celulares.",
        "Las bacterias NO tienen mitocondrias: su respiración celular ocurre en su propia membrana plasmática.",
        "Las células de plantas y hongos son EUCARIOTAS: poseen núcleo y mitocondrias exactamente igual que los animales.",
      ],
    },
    advancedClinical: {
      caseTitle: "Selectividad de Antibióticos sobre Ribosomas 70S",
      clinicalApplication:
        "Antibióticos como claritromicina, tetraciclina o gentamicina inactivan selectivamente las subunidades 30S o 50S del ribosoma bacteriano sin afectar a los ribosomas 80S del citosol humano.",
      toxinOrDrugTarget: "Subunidades 30S y 50S de ribosomas procariotas.",
    },
    quiz: [
      {
        question: "¿Cuál es la principal característica que define a una célula eucariota frente a una procariota?",
        options: [
          "Presencia de una carioteca que encierra el material genético dentro de un núcleo verdadero",
          "Carencia absoluta de ribosomas",
          "Ausencia de membrana plasmática",
          "Incapacidad para sintetizar proteínas"
        ],
        answerIndex: 0,
        explanation: "El término 'eucariota' significa núcleo verdadero, señalando la existencia de una envoltura nuclear que encierra la cromatina.",
        conceptTested: "Presencia de carioteca en eucariotas",
      },
    ],
  },

  // 03: Glucocálix Animal
  "tema-03": {
    summary: [
      "El glucocálix es una cubierta glucídica situada exclusivamente en la cara externa de la membrana plasmática de células animales.",
      "Formado por cadenas de oligosacáridos unidas covalentemente a proteínas (glucoproteínas) y lípidos (glucolípidos).",
      "Funciones capitales: Reconocimiento celular, antígenos de histocompatibilidad (MHC), grupos sanguíneos ABO y protección mecánica.",
    ],
    analogy: {
      title: "La Antena de Identidad y Código de Barras Celular",
      story:
        "Imagina un vecindario donde cada casa tiene una bandera y una campana con un timbre acústico único en la puerta. Los carteros (glóbulos blancos) leen esa bandera. Si la bandera dice 'Soy tu propio hígado', la respetan; si la bandera es extraña (una bacteria o un órgano incompatible trasplantado), los guardias la atacan de inmediato.",
      keyTakeaway:
        "El glucocálix es la huella digital y el escudo frontal con el que la célula se comunica y se identifica ante el sistema inmunitario.",
    },
    proteinsAndFactors: [
      { name: "Glucoproteínas de membrana", role: "Proteínas ancladas a la bicapa portadoras de oligosacáridos ramificados externos." },
      { name: "Glucolípidos (Gangliósidos y cerebrósidos)", role: "Lípidos de membrana con glúcidos que forman dominios de reconocimiento." },
      { name: "Complejo Mayor de Histocompatibilidad (MHC)", role: "Proteínas del glucocálix que presentan péptidos para distinguir lo propio de lo extraño." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Asimetría: Los carbohidratos del glucocálix NUNCA miran hacia el citosol; se sitúan 100% en la superficie extracelular.",
        "2. Carga eléctrica: La presencia de ácido siálico otorga carga neta negativa, repeliendo células indeseadas y atrapando agua.",
        "3. Antigenismo: Los antígenos A, B y O de los eritrocitos son secuencias específicas de azúcares en los glucolípidos de la membrana.",
      ],
      technicalTerms: [
        { term: "Ácido siálico", definition: "Monosacárido terminal ácido cargado negativamente en las cadenas del glucocálix." },
        { term: "Lectinas", definition: "Proteínas extracelulares que reconocen y se unen específicamente a los azúcares del glucocálix." },
        { term: "Inhibición por contacto", definition: "Propiedad mediada por el glucocálix donde las células detienen su proliferación al tocarse." },
      ],
      examTraps: [
        "El glucocálix es característico de células ANIMALES y ciertos protozoarios; las células vegetales tienen en su lugar pared celular de celulosa.",
        "Los carbohidratos representan solo entre 2% y 10% del peso de la membrana celular, pero son decisivos para el reconocimiento.",
      ],
    },
    advancedClinical: {
      caseTitle: "Incompatibilidad de Transfusiones Sanguíneas",
      clinicalApplication:
        "Si a un individuo de grupo O se le transfunde sangre A o B, sus anticuerpos reconocen los azúcares específicos del glucocálix ajeno y provocan una aglutinación y hemólisis masiva.",
      toxinOrDrugTarget: "Oligosacáridos antigénicos del sistema ABO.",
    },
    quiz: [
      {
        question: "¿En qué cara de la membrana plasmática se localizan los azúcares que conforman el glucocálix?",
        options: [
          "Exclusivamente en la superficie externa o extracelular",
          "En la cara citoplásmica interna en contacto con el citoesqueleto",
          "En el interior hidrofóbico entre las colas lipídicas",
          "En el lumen de las mitocondrias"
        ],
        answerIndex: 0,
        explanation: "Debido al proceso de síntesis en RER y maduración en Golgi, los glúcidos siempre emergen orientados hacia el medio extracelular.",
        conceptTested: "Orientación y asimetría del glucocálix",
      },
    ],
  },

  // 04: Pared Celular Vegetal
  "tema-04": {
    summary: [
      "Estructura extracelular rígida que envuelve a las células vegetales; constituida por microfibrillas de celulosa inmersas en una matriz de hemicelulosa y pectinas.",
      "Capas en orden de formación (desde afuera hacia adentro): Lámina media (rica en pectatos), Pared primaria (flexible, celulosa desordenada) y Pared secundaria (gruesa, celulosa ordenada, a menudo con lignina).",
      "Plasmodesmos: Puentes o canales citoplasmáticos que atraviesan la pared para comunicar directamente células vegetales adyacentes.",
    ],
    analogy: {
      title: "El Hormigón Armado y los Túneles Secretos",
      story:
        "Imagina un muro de hormigón armado: las varillas de hierro que resisten la tracción son las fibras de celulosa, y el cemento que las une son las pectinas y hemicelulosa. Y para que los vecinos no queden aislados por muros de piedra maciza, se taladran pequeños túneles con mangueras que conectan las salas: esos son los plasmodesmos.",
      keyTakeaway:
        "La pared celular confiere resistencia mecánica contra la lisis osmótica en medios hipotónicos, permitiendo a la planta mantenerse erguida por turgencia.",
    },
    proteinsAndFactors: [
      { name: "Celulosa sintasa (Complejo en roseta)", role: "Complejo enzimático transmembrana que sintetiza microfibrillas de celulosa y las expulsa a la pared." },
      { name: "Pectinas (Pectato de calcio y magnesio)", role: "Gel aglutinante que conforma la lámina media para cementar células contiguas." },
      { name: "Lignina", role: "Polímero aromático complejo que impermeabiliza y confiere rigidez extrema a la pared secundaria de la madera (xilema)." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Secuencia de capas: La lámina media es la más externa y primera en formarse durante la citocinesis a partir del fragmoplasto.",
        "2. Turgencia: El agua ingresa a la vacuola por ósmosis empujando al citoplasma contra la pared; la pared resiste mecánicamente evitando que la célula estalle.",
        "3. Plasmodesmo y Desmotúbulo: Cada plasmodesmo está revestido por membrana plasmática y atravesado en su eje por una prolongación del retículo endoplásmico llamada desmotúbulo.",
      ],
      technicalTerms: [
        { term: "Fragmoplasto", definition: "Estructura formada por microtúbulos y vesículas del Golgi que organiza la nueva pared durante la división vegetal." },
        { term: "Desmotúbulo", definition: "Túbulo derivado del retículo endoplasmático que cruza el interior del plasmodesmo." },
        { term: "Plasmólisis", definition: "Retracción del citoplasma celular vegetal al perder agua en un medio hipertónico, despegándose de la pared celular." },
      ],
      examTraps: [
        "La pared secundaria se forma POR DENTRO de la pared primaria (más cerca de la membrana celular), no por fuera.",
        "Los plasmodesmos comunican los citoplasmas creando un continuo denominado simplasto; el espacio de las paredes es el apoplasto.",
      ],
    },
    advancedClinical: {
      caseTitle: "Marchitez Vegetal por Falta de Riego",
      clinicalApplication:
        "Cuando una planta carece de agua, las vacuolas pierden turgencia y las células sufren plasmólisis; los tallos se doblan porque la rigidez de las plantas herbáceas depende de la presión hidráulica contra sus paredes celulares.",
      toxinOrDrugTarget: "Pared primaria y presión hidrostática vacuola-pared.",
    },
    quiz: [
      {
        question: "¿Qué polisacárido es el constituyente estructural fundamental de las microfibrillas de la pared celular vegetal?",
        options: ["Celulosa", "Glucógeno", "Quitina", "Peptidoglicano"],
        answerIndex: 0,
        explanation: "La celulosa es un polímero lineal de glucosas unidas por enlaces beta-1,4 que forman microfibrillas de altísima resistencia tensil.",
        conceptTested: "Composición de la pared vegetal",
      },
    ],
  },

  // 05: Pared Bacteriana (Gram+ y Gram-)
  "tema-05": {
    summary: [
      "La pared celular bacteriana está compuesta por peptidoglicano (mureína), una red de heteropolisacáridos unidos por puentes de tetrapéptidos.",
      "Bacterias Gram positivas: Tienen una capa gruesa de peptidoglicano (hasta 40 capas) atravesada por ácidos teicoicos y lipoteicoicos; retienen el colorante cristal violeta (color púrpura/azul).",
      "Bacterias Gram negativas: Poseen una capa fina de peptidoglicano rodeada por una membrana externa con lipopolisacáridos (LPS/endotoxina) y porinas; se tiñen de rosado con la safranina.",
    ],
    analogy: {
      title: "El Suéter Grueso vs. El Impermeable de Doble Capa",
      story:
        "Una bacteria Gram positiva viste un suéter de lana muy grueso y acolchado (muchas capas de peptidoglicano). En cambio, una Gram negativa lleva una camiseta delgada y encima un impermeable impermeable adicional (la membrana externa con porinas y grasa tóxica LPS). Por eso, muchos detergentes y penicilinas atraviesan fácilmente la lana pero rebotan contra el impermeable de la Gram negativa.",
      keyTakeaway:
        "La arquitectura de la pared determina la resistencia a los antibióticos y la respuesta inmune desencadenada por la bacteria.",
    },
    proteinsAndFactors: [
      { name: "Transpeptidasa bacteriana (PBP)", role: "Enzima que entrecruza los puentes peptídicos de la mureína; diana directa de los antibióticos betalactámicos (penicilina)." },
      { name: "Lipopolisacárido (LPS)", role: "Molécula de la membrana externa de Gram negativas; su lípido A actúa como potente endotoxina que causa fiebre y shock séptico." },
      { name: "Porinas", role: "Canales proteicos transmembrana en la membrana externa de Gram negativas que regulan la entrada de nutrientes y antibióticos." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Tinción de Gram (Christian Gram, 1884): Cristal violeta -> Lugol (fijador) -> Alcohol-acetona (decolorante) -> Safranina (contraste).",
        "2. Espacio periplásmico: Muy amplio y activo en Gram negativas entre la membrana plasmática y la membrana externa; contiene enzimas como betalactamasas.",
        "3. Lisozima: Enzima presente en lágrimas y saliva que rompe los enlaces glucosídicos beta-1,4 del peptidoglicano, destruyendo la pared bacteriana.",
      ],
      technicalTerms: [
        { term: "Peptidoglicano / Mureína", definition: "Polímero formado por N-acetilglucosamina (NAG) y ácido N-acetilmurámico (NAM) unidos por enlaces beta-1,4." },
        { term: "Ácidos teicoicos", definition: "Polímeros de glicerol o ribitol fosfato exclusivos de las bacterias Gram positivas que estabilizan la pared." },
        { term: "Endotoxina (Lípido A)", definition: "Componente lipídico tóxico del LPS liberado cuando se destruye la bacteria Gram negativa." },
      ],
      examTraps: [
        "Los micoplasmas (Mycoplasma) son bacterias que NO tienen pared celular; por ende son naturalmente resistentes a la penicilina.",
        "Las arqueobacterias (Archaea) NO tienen peptidoglicano; tienen pseudopeptidoglicano o capas S proteicas.",
      ],
    },
    advancedClinical: {
      caseTitle: "Shock Séptico por Bacterias Gram Negativas",
      clinicalApplication:
        "La lisis masiva de bacterias Gram negativas libera el lípido A del LPS al torrente sanguíneo, desencadenando una respuesta inflamatoria descontrolada con hipotensión severa y fallo multiorgánico.",
      toxinOrDrugTarget: "Lípido A del LPS y receptores TLR-4 de macrófagos.",
    },
    quiz: [
      {
        question: "¿Qué componente confiere rigidez y previene la lisis osmótica en la inmensa mayoría de las bacterias?",
        options: ["Peptidoglicano o mureína", "Quitina", "Celulosa", "Glucógeno"],
        answerIndex: 0,
        explanation: "El peptidoglicano forma una malla molecular tridimensional única que soporta elevadas presiones internas.",
        conceptTested: "Estructura de la pared bacteriana",
      },
    ],
  },

  // 06: Membrana Plasmática
  "tema-06": {
    summary: [
      "El modelo del Mosaico Fluido (Singer y Nicolson, 1972) describe la membrana como una bicapa de fosfolípidos anfipáticos en constante movimiento bidimensional.",
      "Las proteínas están incrustadas como mosaicos: integrales (transmembrana con dominios hidrofóbicos) y periféricas (unidas a las superficies).",
      "El colesterol modula térmicamente la fluidez en células animales; los oligosacáridos forman el glucocálix en la cara extracelular.",
    ],
    analogy: {
      title: "El Mar de Boyas con Barcos Flotantes",
      story:
        "Imagina una piscina cubierta de millones de pequeñas boyas flotantes unidas en parejas por sus bases (los fosfolípidos). Entre ellas navegan icebergs y barcos de distintos tamaños (las proteínas). Todo se desplaza lateralmente con facilidad. Si hace mucho frío, se intercalan pequeñas cuñas (el colesterol) para evitar que las boyas se congelen en un bloque rígido.",
      keyTakeaway:
        "La membrana es una estructura dinámica y autorreparable que actúa como una aduana molecular altamente selectiva.",
    },
    proteinsAndFactors: [
      { name: "Fosfolípidos anfipáticos", role: "Cabeza polar fosfato afín al agua hacia el exterior/interior y colas de ácidos grasos hidrofóbicos al centro." },
      { name: "Proteínas Integrales (Transmembrana)", role: "Atraviesan la bicapa; actúan como canales iónicos, transportadores (carriers), bombas y receptores de señales." },
      { name: "Colesterol", role: "Amortiguador de fluidez: impide la congelación a bajas temperaturas y frena el movimiento excesivo a temperaturas altas." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Asimetría de membrana: Los glúcidos se encuentran únicamente en la cara externa; los fosfolípidos con carga negativa predominan en la cara interna.",
        "2. Tipos de movimiento lipídico: Difusión lateral (veloz), rotación, flexión y flip-flop (cambio de monocapa, muy infrecuente, mediado por flipasas con ATP).",
        "3. Permeabilidad selectiva: Fácil paso a gases (O2, CO2), agua y lípidos apolares; barrera total para iones cargados (Na+, K+, Cl-) y solutos polares grandes.",
      ],
      technicalTerms: [
        { term: "Anfipático", definition: "Molécula con una región polar hidrofílica y una región apolar lipofílica o hidrofóbica." },
        { term: "Balsas lipídicas", definition: "Microdominios ricos en colesterol y esfingolípidos donde se concentran proteínas de señalización." },
        { term: "Flipasa", definition: "Enzima translocadora que mueve lípidos de la capa externa a la interna consumiendo ATP." },
      ],
      examTraps: [
        "Los carbohidratos de la membrana NUNCA se encuentran en la cara citosólica.",
        "Las bacterias carecen de colesterol en su membrana celular (a excepción de Mycoplasma).",
      ],
    },
    advancedClinical: {
      caseTitle: "Fluidez de Membrana y Anestésicos",
      clinicalApplication:
        "Muchos anestésicos liposolubles se intercalan en la bicapa fosfolipídica neuronal modificando la fluidez e inactivando canales iónicos esenciales para la transmisión del dolor.",
      toxinOrDrugTarget: "Bicapa lipídica y canales iónicos de la membrana neuronal.",
    },
    quiz: [
      {
        question: "De acuerdo con Singer y Nicolson (1972), la membrana plasmática se define como:",
        options: [
          "Un mosaico fluido constituido por una bicapa de fosfolípidos con proteínas integrales y periféricas",
          "Una lámina estática de proteínas fijas rellena de glucosa",
          "Una cubierta dura de celulosa y quitina impermeable",
          "Una capa única de triglicéridos hidrofóbicos"
        ],
        answerIndex: 0,
        explanation: "El modelo del mosaico fluido demostró que los lípidos forman una matriz bidimensional líquida donde las proteínas se mueven libremente.",
        conceptTested: "Modelo del Mosaico Fluido",
      },
    ],
  },

  // 07: Transporte Pasivo: Difusión y Ósmosis
  "tema-07": {
    summary: [
      "Transporte pasivo: Ocurre a favor del gradiente de concentración (de mayor a menor concentración) y sin gasto de energía metabólica (sin ATP).",
      "Difusión simple: Moléculas pequeñas no polares (O2, CO2, N2, esteroides) y agua atraviesan directamente la bicapa lipídica.",
      "Difusión facilitada: Moléculas polares o cargadas (glucosa, aminoácidos, iones) cruzan con ayuda de proteínas de canal o permeasas (carriers).",
      "Ósmosis: Movimiento neto de agua a través de una membrana semipermeable hacia la zona con mayor concentración de soluto.",
    ],
    analogy: {
      title: "Bajar por el Tobogán sin Esfuerzo",
      story:
        "Imagina tirarte por un tobogán en un parque acuático: no necesitas gastar energía en pedalear ni empujar, la gravedad te lleva suavemente hacia abajo (a favor de gradiente). Las sustancias pequeñas y delgadas bajan directo por el tubo (difusión simple); las más grandes necesitan un flotador especial para no atorarse (proteínas transportadoras o carriers en difusión facilitada).",
      keyTakeaway:
        "La energía que impulsa el transporte pasivo es la energía cinética térmica intrínseca de las propias moléculas que se dispersan espontáneamente.",
    },
    proteinsAndFactors: [
      { name: "Acuaporinas (AQP)", role: "Canales proteicos tetraméricos que permiten el paso ultra-rápido de agua por ósmosis bidireccional." },
      { name: "Transportadores GLUT (Permeasas de glucosa)", role: "Proteínas carriers que cambian de conformación para ingresar glucosa por difusión facilitada." },
      { name: "Canales iónicos dependientes de voltaje / ligando", role: "Poros acuosos selectivos que se abren para permitir el paso pasivo de Na+, K+, Ca2+ o Cl-." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Comportamiento en Células Animales: En medio hipotónico sufren hinchamiento y lisis osmótica; en medio hipertónico pierden agua y sufren crenación (se arrugan).",
        "2. Comportamiento en Células Vegetales: En medio hipotónico alcanzan turgencia (retenidas por la pared); en medio hipertónico sufren plasmólisis (el citoplasma se despega de la pared).",
        "3. Cinética de transporte: La difusión simple es lineal; la difusión facilitada es saturable cuando todos los transportadores están ocupados (Vmax).",
      ],
      technicalTerms: [
        { term: "Crenación", definition: "Deshidratación y arrugamiento de eritrocitos u otras células animales al colocarse en medio hipertónico." },
        { term: "Lisis osmótica", definition: "Ruptura de la membrana plasmática animal por ingreso excesivo de agua en un medio hipotónico." },
        { term: "Plasmólisis", definition: "Retracción del citosol vegetal por pérdida de agua en solución hipertónica sin que la pared celular colapse." },
      ],
      examTraps: [
        "El agua en la ósmosis SIEMPRE viaja desde la solución con MENOR concentración de soluto (hipotónica) hacia la de MAYOR concentración de soluto (hipertónica).",
        "La difusión facilitada NO consume ATP a pesar de utilizar proteínas transmembrana carrier.",
      ],
    },
    advancedClinical: {
      caseTitle: "Suero Fisiológico y Equilibrio Osmótico Clínico",
      clinicalApplication:
        "El suero fisiológico al 0.9% de NaCl es isotónico respecto al plasma humano. Inyectar agua destilada pura a un paciente destruiría sus glóbulos rojos por lisis osmótica masiva.",
      toxinOrDrugTarget: "Equilibrio osmótico de la membrana eritrocitaria.",
    },
    quiz: [
      {
        question: "¿Qué fenómeno experimenta un glóbulo rojo si se sumerge en una solución hipertónica (muy concentrada en sales)?",
        options: [
          "Crenación: el agua sale de la célula por ósmosis y la célula se deshidrata y arruga",
          "Lisis osmótica: absorbe agua hasta estallar",
          "Turgencia máxima",
          "División mitótica acelerada"
        ],
        answerIndex: 0,
        explanation: "En un medio hipertónico, el agua abandona la célula hacia el exterior más concentrado, encogiendo el eritrocito (crenación).",
        conceptTested: "Ósmosis y comportamiento osmótico celular",
      },
    ],
  },

  // 08: Transporte Activo: Bombas y Masa
  "tema-08": {
    summary: [
      "Transporte activo: Moviliza solutos en contra del gradiente de concentración consumiendo energía metabólica (hidrólisis de ATP o gradientes secundarios).",
      "Bomba de Na+/K+ ATPasa: Expulsa 3 iones Na+ e ingresa 2 iones K+ por cada molécula de ATP hidrolizada; es electrogénica y mantiene el potencial de membrana.",
      "Transporte en masa: Movilización de grandes partículas o volúmenes mediante vesículas: Endocitosis (fagocitosis y pinocitosis) y Exocitosis (secreción).",
    ],
    analogy: {
      title: "Remar Contracorriente y la Grúa Portuaria",
      story:
        "Si quieres nadar río arriba contra la corriente del río, no puedes relajarte: necesitas gastar tu propia fuerza y energía (ATP) a cada brazada. Eso hace la bomba de Na+/K+. Y si necesitas ingresar al almacén una caja gigante que no cabe por ninguna puerta, usas una grúa con una lona envolvente (vesícula) para meterla entera de golpe: eso es el transporte en masa.",
      keyTakeaway:
        "El transporte activo genera los gradientes electroquímicos esenciales que hacen posible la vida neuronal, la contracción muscular y la absorción de nutrientes.",
    },
    proteinsAndFactors: [
      { name: "Bomba Na+/K+ ATPasa", role: "Proteína integral que saca 3 Na+ y mete 2 K+ consumiendo 1 ATP; mantiene la concentración baja de sodio intracelular." },
      { name: "Bomba de protones (H+-ATPasa)", role: "Acidifica el lumen de lisosomas, endosomas y la vacuola vegetal bombeando H+ contra gradiente." },
      { name: "Clatrina", role: "Proteína periférica que recubre vesículas durante la endocitosis mediada por receptor facilitando su invaginación." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Estequiometría de la Bomba Na+/K+: 3 Na+ hacia el exterior / 2 K+ hacia el interior / 1 ATP hidrolizado a ADP + Pi.",
        "2. Naturaleza electrogénica: Al sacar más cargas positivas netas de las que ingresa, contribuye a mantener la cara interna de la membrana con carga negativa (-70 mV en reposo).",
        "3. Fagocitosis vs Pinocitosis: Fagocitosis ingiere partículas sólidas grandes mediante pseudópodos; pinocitosis invagina fluidos extracelulares con solutos disueltos.",
      ],
      technicalTerms: [
        { term: "Transporte activo primario", definition: "Utiliza directamente la energía de la hidrólisis del ATP (como la bomba Na+/K+)." },
        { term: "Transporte activo secundario (Cotransporte)", definition: "Aprovecha el gradiente de sodio preformado para ingresar glucosa u otros solutos (SGLT)." },
        { term: "Fagosoma", definition: "Vesícula formada por endocitosis que engloba un sólido grande antes de fusionarse con un lisosoma primario." },
      ],
      examTraps: [
        "La bomba Na+/K+ NO mete sodio; el sodio es expulsado al exterior para mantenerlo bajo en el citoplasma.",
        "La exocitosis NO destruye la membrana celular; la vesícula se fusiona con ella renovando lípidos y proteínas.",
      ],
    },
    advancedClinical: {
      caseTitle: "Los Glucósidos Cardíacos y la Bomba Na+/K+",
      clinicalApplication:
        "Fármacos como la digoxina o uabaína bloquean parcialmente la bomba Na+/K+ cardíaca, aumentando el calcio intracelular y mejorando la fuerza de contracción en pacientes con insuficiencia cardíaca.",
      toxinOrDrugTarget: "Subunidad alfa de la bomba Na+/K+ ATPasa.",
    },
    quiz: [
      {
        question: "Por cada molécula de ATP que hidroliza la Bomba de Sodio y Potasio (Na+/K+ ATPasa), ¿cuántos iones transloca?",
        options: [
          "Expulsa 3 Na+ e introduce 2 K+",
          "Expulsa 2 Na+ e introduce 3 K+",
          "Introduce 3 Na+ y expulsa 3 K+",
          "Expulsa 1 Na+ e introduce 1 Ca2+"
        ],
        answerIndex: 0,
        explanation: "La estequiometría exacta es 3 sodios hacia el medio extracelular y 2 potasios hacia el citoplasma.",
        conceptTested: "Estequiometría de la bomba Na+/K+",
      },
    ],
  },
};

export const TOPIC_MASTER_DATA: Record<string, NodeContent> = {
  ...TOPIC_MASTER_DATA_PART1,
  ...TOPIC_MASTER_DATA_PART2,
  ...TOPIC_MASTER_DATA_PART3,
};
