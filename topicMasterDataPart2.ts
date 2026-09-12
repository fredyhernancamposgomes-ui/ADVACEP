import { NodeContent } from "../types";

/**
 * Banco maestro curado para Nodos 09 al 21:
 * Citología I: Citosol, Citoesqueleto, Organoides, Sistema de Endomembranas y Organelas Energéticas.
 * 100% rigor biológico, analogías reales, cero textos genéricos/robóticos.
 */
export const TOPIC_MASTER_DATA_PART2: Record<string, NodeContent> = {
  // 09: Citosol, Ciclosis y Coloides Celulares
  "tema-09": {
    summary: [
      "El citosol (hialoplasma) es la matriz acuosa semifluida del citoplasma compuesta por un 70-85% de agua con iones, glucosa, aminoácidos y una densa red de proteínas.",
      "Comportamiento coloidal tixotrópico: alternancia dinámica reversible entre estado 'sol' (fluido, viscosidad baja) y estado 'gel' (semisólido, viscosidad alta).",
      "Ciclosis: corriente citoplasmática rotatoria continua observada notoriamente en células vegetales (como Elodea) facilitada por microfilamentos de actina.",
    ],
    analogy: {
      title: "La Gelatina Inteligente y la Corriente Marina",
      story:
        "Imagina un acuario lleno de un gel coloidal mágico: cuando está quieto parece gelatina firme (fase gel), pero en cuanto se agita se vuelve líquido como agua (fase sol). A través de ese líquido fluye una corriente continua en círculo (la ciclosis), transportando nutrientes y organelas a toda velocidad para que ninguna esquina de la célula se quede sin comida ni oxígeno.",
      keyTakeaway:
        "El citosol no es un vaso de agua inerte; es una solución coloidal viva densamente poblada donde ocurren la glucólisis, la síntesis proteica inicial y el tráfico metabólico.",
    },
    proteinsAndFactors: [
      { name: "Actina F y Miosina citoplasmática", role: "Generan la fuerza motriz para el flujo citoplasmático (ciclosis) interactuando con ATP." },
      { name: "Enzimas de la Glucólisis (Hexoquinasa, Fosfofructoquinasa, etc.)", role: "Solubles en el citosol; degradan la glucosa a piruvato sin necesidad de oxígeno." },
      { name: "Chaperonas citosólicas (Hsp70)", role: "Ayudan al correcto plegamiento de proteínas recién traducidas por los ribosomas libres." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Tixotropía: Capacidad del coloide citosólico de cambiar de sol a gel según la temperatura, pH o actividad citoesquelética.",
        "2. Vías metabólicas citosólicas: Glucólisis anaerobia, gluconeogénesis, ruta de las pentosas fosfato y síntesis de ácidos grasos.",
        "3. Efecto Tyndall: Propiedad óptica del coloide donde las partículas dispersas desvían la luz visible.",
      ],
      technicalTerms: [
        { term: "Tixotropía", definition: "Propiedad de ciertos geles de licuarse al ser agitados o sometidos a fuerzas de cizallamiento y gelificar en reposo." },
        { term: "Ciclosis", definition: "Movimiento circulatorio regular del citoplasma alrededor de la gran vacuola central en células vegetales." },
        { term: "Hialoplasma", definition: "Sinónimo histórico y citológico de la fracción soluble y no particulada del citoplasma (citosol)." },
      ],
      examTraps: [
        "La glucólisis ocurre en el CITOSOL, NUNCA dentro de la mitocondria.",
        "La ciclosis depende de filamentos de ACTINA y miosina, no de microtúbulos.",
      ],
    },
    advancedClinical: {
      caseTitle: "Edema Celular e Isquemia",
      clinicalApplication:
        "Durante la falta de oxígeno (isquemia), la falla de la bomba Na+/K+ citosólica hace que el agua inunde el citosol por ósmosis, provocando tumefacción turbia y desorganización coloidal.",
      toxinOrDrugTarget: "Homeostasis coloidal y bombas iónicas citoplásmicas.",
    },
    quiz: [
      {
        question: "¿Qué vía metabólica fundamental para la producción de energía ocurre íntegramente en el citosol y no requiere oxígeno?",
        options: ["Glucólisis", "Ciclo de Krebs", "Fosforilación oxidativa", "Cadena transportadora de electrones"],
        answerIndex: 0,
        explanation: "La glucólisis se lleva a cabo en el citosol soluble y convierte la glucosa en dos piruvatos.",
        conceptTested: "Metabolismo del citosol",
      },
    ],
  },

  // 10: Citoesqueleto y Motores Moleculares
  "tema-10": {
    summary: [
      "El citoesqueleto es una red tridimensional dinámica de filamentos proteicos que mantiene la forma celular, organiza las organelas y guía el transporte vesicular.",
      "Tres componentes: Microfilamentos de actina (7 nm, contracción y ciclosis), Filamentos intermedios (10 nm, resistencia mecánica a la tracción) y Microtúbulos de tubulina (25 nm, cilindros huecos, vías de transporte y huso mitótico).",
      "Motores moleculares: Quinesina (transporte anterógrado hacia extremo +) y Dineína (transporte retrógrado hacia extremo -), que caminan sobre microtúbulos usando ATP.",
    ],
    analogy: {
      title: "El Sistema Ferroviario y las Vigas de Acero",
      story:
        "Una célula sin citoesqueleto se aplastaría como una bolsa de agua desinflada. Los filamentos intermedios son las cuerdas y cables de acero que evitan que la célula se rompa al estirarla. Los microtúbulos son las vías de tren que atraviesan la ciudad celular, y las quinesinas son locomotoras microscópicas con dos 'patas' que caminan paso a paso cargando vesículas sobre la vía férrea.",
      keyTakeaway:
        "El citoesqueleto no es un andamio estático de madera; se arma y desarma en segundos según las necesidades de división, movimiento o soporte celular.",
    },
    proteinsAndFactors: [
      { name: "Actina G (globular) y Actina F (filamentosa)", role: "Polimerizan en microfilamentos con polaridad (+ y -); forman el anillo contráctil en citocinesis animal." },
      { name: "Alfa y Beta Tubulina", role: "Forman heterodímeros que se ensamblan en 13 protofilamentos para crear el cilindro hueco del microtúbulo." },
      { name: "Quinesina (Kinesina)", role: "Motor molecular que viaja hacia el extremo plus (+) de los microtúbulos (transporte anterógrado, del centro a la periferia)." },
      { name: "Dineína", role: "Motor molecular retrógrado que viaja hacia el extremo minus (-) de los microtúbulos (hacia el centrosoma o núcleo)." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Diámetros clave: Microfilamentos (7 nm) < Filamentos intermedios (8-12 nm) < Microtúbulos (25 nm).",
        "2. Inestabilidad dinámica: Los microtúbulos crecen y se acortan rápidamente en su extremo positivo mediado por el casquete de GTP.",
        "3. Filamentos intermedios específicos de tejido: Queratina (células epiteliales), Vimentina (tejido conectivo), Desmina (músculo), Neurofilamentos (neuronas) y Láminas nucleares (núcleo).",
      ],
      technicalTerms: [
        { term: "Inestabilidad dinámica", definition: "Transición rápida entre polimerización (crecimiento) y catástrofe (despolimerización) en microtúbulos." },
        { term: "Anterógrado vs Retrógrado", definition: "Anterógrado: tráfico desde el centro hacia la membrana (+); Retrógrado: desde la periferia hacia el centro (-)." },
        { term: "Citocalasina y Colchicina", definition: "Drogas que despolimerizan microfilamentos de actina (citocalasina) o microtúbulos (colchicina)." },
      ],
      examTraps: [
        "Los filamentos intermedios NO tienen polaridad (+/-) ni usan proteínas motoras; son puramente mecánicos.",
        "La colchicina detiene la mitosis en metafase al impedir la polimerización de microtúbulos del huso acromático.",
      ],
    },
    advancedClinical: {
      caseTitle: "Quimioterapia con Taxol (Paclitaxel)",
      clinicalApplication:
        "El paclitaxel estabiliza los microtúbulos impidiendo su desensamblaje, lo cual congela el huso mitótico y mata selectivamente a las células cancerosas en rápida división.",
      toxinOrDrugTarget: "Beta-tubulina de microtúbulos mitóticos.",
    },
    quiz: [
      {
        question: "¿Cuál de los componentes del citoesqueleto está formado por cilindros huecos de tubulina de aproximadamente 25 nm de diámetro?",
        options: ["Microtúbulos", "Microfilamentos de actina", "Filamentos intermedios de queratina", "Fibras de colágeno"],
        answerIndex: 0,
        explanation: "Los microtúbulos son las estructuras más gruesas (25 nm), compuestas por 13 protofilamentos de dímeros de tubulina.",
        conceptTested: "Componentes del citoesqueleto",
      },
    ],
  },

  // 11: Centrosoma, Centríolos y Cilios/Flagelos
  "tema-11": {
    summary: [
      "El centrosoma es el principal Centro Organizador de Microtúbulos (MTOC) de la célula animal; contiene un par de centríolos perpendiculares (diplosoma) rodeados de material pericentriolar.",
      "Estructura del centríolo: Cilindro formado por 9 tripletes de microtúbulos periféricos sin microtúbulos centrales (patrón 9x3 + 0).",
      "Cilios y flagelos: Estructuras locomotoras compuestas por un axonema con 9 dobletes periféricos y 1 par central (patrón 9+2), ancladas en un corpúsculo basal o cinetosoma (9x3 + 0).",
    ],
    analogy: {
      title: "La Rueda de Carreta y los Motores Fuera de Borda",
      story:
        "Mira el corte transversal de un centríolo: parece la rueda de una carreta con 9 radios inclinados, cada uno con 3 tubos soldados (9 tripletes). En los cilios de las vías respiratorias, esos tubos se convierten en brazos flexibles con remos de dineína que baten rítmicamente al unísono, como remeros de una galera que expulsan el polvo y la mucosidad fuera de tus pulmones.",
      keyTakeaway:
        "El centrosoma organiza el huso durante la mitosis animal; las células vegetales carecen de centríolos típicos y forman husos anastrales.",
    },
    proteinsAndFactors: [
      { name: "Gamma-tubulina", role: "Forma anillos en el material pericentriolar donde se nuclean y nacen los nuevos microtúbulos." },
      { name: "Dineína ciliar", role: "Brazos motores adosados a los dobletes que hidrolizan ATP provocando el deslizamiento y flexión ciliar." },
      { name: "Nexina", role: "Proteína elástica de enlace que interconecta los dobletes periféricos para transformar el deslizamiento en flexión." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Fórmulas estructurales indispensables: Centríolos y corpúsculos basales = 9x3 + 0 (tripletes). Axonema de cilios y flagelos = 9x2 + 2 (dobletes y par central).",
        "2. Centrosomas en vegetales: Las angiospermas (plantas con flores) NO poseen centríolos; tienen MTOCs difusos y su mitosis es anastral (sin ásteres).",
        "3. Cinetosoma o cuerpo basal: Base del cilio que deriva directamente de un centríolo modificado.",
      ],
      technicalTerms: [
        { term: "Diplosoma", definition: "Par de centríolos dispuestos perpendicularmente entre sí dentro del centrosoma." },
        { term: "Axonema", definition: "Esqueleto microtubular interno de cilios y flagelos con disposición 9+2." },
        { term: "Huso anastral", definition: "Huso mitótico carente de ásteres y centríolos, típico de vegetales superiores." },
      ],
      examTraps: [
        "El flagelo de los espermatozoides humanos es EUCARIOTA (microtúbulos de tubulina 9+2 y dineína), completamente distinto al flagelo bacteriano (flagelina y rotor protónico).",
        "Los centríolos son organoides SIN MEMBRANA.",
      ],
    },
    advancedClinical: {
      caseTitle: "Síndrome de Kartagener (Discinesia Ciliar Primaria)",
      clinicalApplication:
        "Mutaciones genéticas en la dineína ciliar impiden el batido de los cilios, causando bronquiectasias crónicas, sinusitis recurrente, esterilidad masculina por espermatozoides inmóviles y situs inversus.",
      toxinOrDrugTarget: "Brazos de dineína ciliar y axonema 9+2.",
    },
    quiz: [
      {
        question: "¿Cuál es la disposición geométrica de los microtúbulos en el corte transversal de un centríolo o corpúsculo basal?",
        options: ["9 tripletes periféricos sin microtúbulos centrales (9x3 + 0)", "9 dobletes periféricos y 2 microtúbulos centrales (9+2)", "13 protofilamentos concéntricos", "6 pares helicoidales"],
        answerIndex: 0,
        explanation: "Tanto el centríolo como el corpúsculo basal comparten la arquitectura clásica de 9 tripletes periféricos (9x3 + 0).",
        conceptTested: "Ultraestructura del centríolo",
      },
    ],
  },

  // 12: Ribosomas Celulares (70S y 80S)
  "tema-12": {
    summary: [
      "Los ribosomas son complejos ribonucleoproteicos (ARN ribosomal + proteínas) desprovistos de membrana celular encargados de la traducción y síntesis de proteínas.",
      "Ribosoma 70S (Procariotas, mitocondrias y cloroplastos): Subunidad mayor 50S (ARNr 23S y 5S) + Subunidad menor 30S (ARNr 16S).",
      "Ribosoma 80S (Citosol y RER de células eucariotas): Subunidad mayor 60S (ARNr 28S, 5.8S y 5S) + Subunidad menor 40S (ARNr 18S).",
      "Actividad Peptidil transferasa: Ribozima (ARNr 23S en 70S / ARNr 28S en 80S) que cataliza la formación del enlace peptídico.",
    ],
    analogy: {
      title: "La Impresora 3D de Lectura Molecular",
      story:
        "Imagina una impresora 3D compacta formada por dos mitades que abrazan una cinta perforada: la cinta es el ARN mensajero. La mitad inferior (subunidad menor) sostiene la cinta y comprueba que las letras coincidan; la mitad superior (subunidad mayor) toma las materias primas (aminoácidos) y los suelda uno tras otro como eslabones de una cadena usando una pinza de soldadura química (la peptidil transferasa).",
      keyTakeaway:
        "El ribosoma es una ribozima: la catálisis del enlace peptídico no la hace una proteína, sino el propio ARN ribosomal que actúa como enzima viva.",
    },
    proteinsAndFactors: [
      { name: "ARNr 23S / 28S (Peptidil transferasa)", role: "Actividad catalítica que une covalentemente el grupo amino de un aminoácido con el carboxilo del anterior." },
      { name: "Sitios A, P y E", role: "Sitio A (aminoacil, entra el ARNt), Sitio P (peptidil, retiene la cadena en crecimiento) y Sitio E (exit, salida del ARNt desacilado)." },
      { name: "Factores de iniciación, elongación y terminación (IF, EF, RF)", role: "Proteínas auxiliares que coordinan el avance del ribosoma sobre el ARNm consumiendo GTP." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Unidades Svedberg (S): Miden el coeficiente de sedimentación ultracentrífuga según forma, masa y fricción; por eso las sumas no son lineales (50S + 30S = 70S; 60S + 40S = 80S).",
        "2. Polisomas / Polirribosomas: Múltiples ribosomas leyendo en fila india la misma molécula de ARNm para sintetizar muchas copias de la misma proteína a la vez.",
        "3. Origen endosimbionte: Que las mitocondrias y cloroplastos tengan ribosomas 70S demuestra su parentesco evolutivo directo con las bacterias.",
      ],
      technicalTerms: [
        { term: "Svedberg (S)", definition: "Unidad de tasa de sedimentación centrífuga que refleja tamaño, densidad y forma hidrodinámica." },
        { term: "Polisoma", definition: "Cadena de ribosomas que traducen simultáneamente una sola hebra de ARN mensajero." },
        { term: "Peptidil transferasa", definition: "Ribozima integrada en la subunidad mayor que forma el enlace peptídico." },
      ],
      examTraps: [
        "Los ribosomas NO tienen membrana celular; se consideran organoides u organelos no membranosos.",
        "El ARNr 5S eucariota es el único que se transcribe FUERA del nucleolo (en el nucleoplasma por la ARN polimerasa III).",
      ],
    },
    advancedClinical: {
      caseTitle: "Mecanismo del Cloranfenicol y Macrólidos",
      clinicalApplication:
        "El cloranfenicol se une específicamente al centro peptidil transferasa de la subunidad 50S procariota deteniendo la síntesis de proteínas bacterianas sin afectar al ribosoma 80S humano.",
      toxinOrDrugTarget: "ARNr 23S de la subunidad ribosomal 50S.",
    },
    quiz: [
      {
        question: "¿Qué tipo de ribosomas encontramos en el citoplasma de las bacterias, así como en el interior de mitocondrias y cloroplastos?",
        options: ["Ribosomas 70S", "Ribosomas 80S", "Ribosomas 100S", "Ribosomas 40S"],
        answerIndex: 0,
        explanation: "Los ribosomas 70S son característicos de procariotas y de las organelas de origen endosimbiótico.",
        conceptTested: "Clasificación ribosomal 70S vs 80S",
      },
    ],
  },

  // 13: Inclusiones Citoplasmáticas
  "tema-13": {
    summary: [
      "Las inclusiones son acúmulos inertes de sustancias de reserva metabólica o productos de desecho que residen libres en el citosol desprovistas de membrana celular.",
      "Inclusiones de reserva en animales: Glucógeno (gránulos beta y alfa abundantes en hepatocitos y fibras musculares) y Gotas lipídicas de triglicéridos.",
      "Inclusiones en vegetales y otros: Granos de almidón (en amiloplastos), cristales minerales de oxalato de calcio (rafidios y drusas) y gránulos de pigmentos (melanina, lipofuscina).",
    ],
    analogy: {
      title: "La Despensa de Frascos y el Depósito de Chatarra",
      story:
        "Imagina un taller artesanal: en un rincón hay sacos apilados con harina y azúcar listos para cuando haya hambre (el glucógeno y las gotas de grasa); en otro rincón hay montones de virutas de metal y serrín compactado que no molestan pero no hacen ningún trabajo activo (los cristales de oxalato y pigmentos de lipofuscina). Esos sacos son las inclusiones.",
      keyTakeaway:
        "A diferencia de las organelas vivas, las inclusiones son componentes inertes, estáticos y sin actividad metabólica intrínseca propia.",
    },
    proteinsAndFactors: [
      { name: "Glucógeno sintasa y Glucógeno fosforilasa", role: "Enzimas citosólicas que ensamblan o desdoblan los gránulos de glucógeno según el estado energético." },
      { name: "Perilipinas", role: "Proteínas de superficie que recubren las gotas lipídicas para regular el acceso de las lipasas a los triglicéridos." },
      { name: "Lipofuscina ('Pigmento del envejecimiento')", role: "Residuo insoluble de peroxidación lipídica lisosomal acumulado en células senescentes." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Gránulos de glucógeno: Partículas densas visibles al microscopio electrónico; partículas beta aisladas en músculo y rosetas alfa en hígado.",
        "2. Gotas lipídicas: Esferas de lípidos neutros hidrofóbicos (triglicéridos y ésteres de colesterol) rodeadas por una monocapa lipídica anfipática.",
        "3. Cristales vegetales: Drusas (esféricos espinosos) y rafidios (agujas afiladas) de oxalato cálcico que disuaden a los herbívoros.",
      ],
      technicalTerms: [
        { term: "Inclusión citoplásmica", definition: "Sustancia no viva acumulada transitoriamente en el citoplasma sin membrana unitaria." },
        { term: "Lipofuscina", definition: "Pigmento pardo-amarillento formado por restos no degradables acumulados con la edad celular." },
        { term: "Rafidios", definition: "Cristales aciculares de oxalato de calcio presentes en vacuolas o citosol vegetal." },
      ],
      examTraps: [
        "Las inclusiones NO son organelas; carecen de membrana y no realizan metabolismo activo.",
        "El glucógeno animal equivale funcionalmente al almidón vegetal como almacén de glucosa.",
      ],
    },
    advancedClinical: {
      caseTitle: "Enfermedades por Almacenamiento de Glucógeno (Glucogenosis)",
      clinicalApplication:
        "En la enfermedad de Von Gierke, la ausencia de la enzima hepática glucosa-6-fosfatasa genera una acumulación masiva y tóxica de inclusiones de glucógeno que agranda el hígado (hepatomegalia) y produce hipoglucemia severa.",
      toxinOrDrugTarget: "Metabolismo de degradación de inclusiones de glucógeno.",
    },
    quiz: [
      {
        question: "¿Cuál de las siguientes estructuras citoplasmáticas se clasifica como una inclusión inerte sin membrana celular?",
        options: ["Gránulos de glucógeno hepático", "Mitocondria", "Aparato de Golgi", "Peroxisoma"],
        answerIndex: 0,
        explanation: "El glucógeno es un polímero inerte acumulado en el citosol como reserva energética, desprovisto de membrana.",
        conceptTested: "Identificación de inclusiones celulares",
      },
    ],
  },

  // 14: Retículo Endoplasmático Rugoso (RER)
  "tema-14": {
    summary: [
      "El RER (o ergastoplasma) es un sistema de cisternas membranosas aplanadas intercomunicadas, cubiertas externamente por ribosomas 80S mediante riboforinas I y II.",
      "Continuidad estructural: Su membrana externa es físicamente continua con la membrana externa de la carioteca (envoltura nuclear).",
      "Funciones capitales: Síntesis y translocación de proteínas destinadas a exportación (secreción), a la membrana plasmática o a los lisosomas; N-glucosilación inicial.",
    ],
    analogy: {
      title: "La Fábrica Textil Automatizada de Exportación",
      story:
        "Imagina un edificio de talleres textiles gigantes conectados entre sí: en el techo exterior hay miles de obreros (ribosomas) tejiendo cordones de lana (péptidos). A medida que tejen, meten el cordón por un agujero hacia el interior del taller (el lumen del RER), donde inspectores de calidad con tijeras cortan sobrantes, planchan la prenda y le pegan la primera etiqueta de calidad (un azúcar por N-glucosilación).",
      keyTakeaway:
        "Las proteínas que van a salir de la célula o a formar membranas se sintetizan en el RER, mientras que las proteínas citosólicas se sintetizan en ribosomas libres.",
    },
    proteinsAndFactors: [
      { name: "Riboforinas I y II", role: "Glucoproteínas transmembrana exclusivas del RER que fijan la subunidad mayor 60S del ribosoma a la membrana." },
      { name: "Partícula de Reconocimiento de Señal (SRP)", role: "Complejo que identifica la secuencia señal hidrofóbica del péptido naciente y frena la traducción hasta anclarse al translocón." },
      { name: "Translocón (Sec61)", role: "Canal acuoso transmembrana por donde el péptido ingresa al lumen del retículo." },
      { name: "Oligosacariltransferasa", role: "Transfiere un oligosacárido precursor de 14 azúcares desde el dolicol fosfato a residuos de asparagina (N-glucosilación)." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Secuencia Señal: Tramo inicial de 15-30 aminoácidos hidrofóbicos que marca a la proteína para entrar al RER.",
        "2. Control de calidad y Chaperonas: Las proteínas mal plegadas son retenidas por BiP y calnexina; si no se corrigen se expulsan al citosol para destruirse en el proteasoma (degradación ERAD).",
        "3. Destino de síntesis: Proteínas de exportación (ej. insulina, anticuerpos), proteínas de membrana y enzimas hidrolíticas lisosomales.",
      ],
      technicalTerms: [
        { term: "Riboforina", definition: "Proteína receptora de membrana del RER que ancla físicamente a los ribosomas 80S." },
        { term: "N-glucosilación", definition: "Adición de oligosacáridos al átomo de nitrógeno del aminoácido asparagina dentro del lumen del RER." },
        { term: "Dolicol fosfato", definition: "Lípido de membrana del RER sobre el cual se ensambla el oligosacárido antes de transferirlo a la proteína." },
      ],
      examTraps: [
        "Las células con abundante RER son células SECRETORAS de proteínas (como las células plasmáticas que producen anticuerpos o las acinares del páncreas).",
        "La membrana externa del núcleo está tachonada de ribosomas porque se continúa con el RER.",
      ],
    },
    advancedClinical: {
      caseTitle: "Estrés del Retículo y Diabetes Tipo 2",
      clinicalApplication:
        "La sobreproducción desmedida de insulina sobrecarga la maquinaria de plegamiento del RER de las células beta pancreáticas, provocando 'estrés del retículo' y apoptosis de las células productoras de insulina.",
      toxinOrDrugTarget: "Chaperonas luminales BiP/GRP78 y vía UPR (Respuesta a Proteínas Desplegadas).",
    },
    quiz: [
      {
        question: "¿Qué proteínas de membrana fijan los ribosomas a la superficie externa de las cisternas del retículo endoplasmático rugoso?",
        options: ["Riboforinas I y II", "Porinas", "Clatrinas", "Tubulinas"],
        answerIndex: 0,
        explanation: "Las riboforinas I y II son marcadores moleculares del RER que anclan la subunidad mayor del ribosoma.",
        conceptTested: "Estructura del RER y riboforinas",
      },
    ],
  },

  // 15: Retículo Endoplasmático Liso (REL)
  "tema-15": {
    summary: [
      "El REL está constituido por una intrincada red tridimensional de túbulos membranosos lisos que carecen por completo de ribosomas y riboforinas.",
      "Síntesis lipídica: Fabrica fosfolípidos de membrana, colesterol, ceramidas y hormonas esteroideas (testosterona, estrógenos, cortisol).",
      "Detoxificación celular: Degrada sustancias lipofílicas tóxicas, alcohol, fármacos e insecticidas mediante la superfamilia enzimática del Citocromo P450.",
      "Retículo sarcoplásmico: REL altamente especializado en fibras musculares esqueléticas y cardíacas que almacena y libera iones de calcio (Ca2+) para la contracción.",
    ],
    analogy: {
      title: "La Refinería Química, la Planta de Desintoxicación y el Embalse de Calcio",
      story:
        "Imagina los tubos curvos de una refinería de aceites: aquí no se hace ropa ni libros (no hay ribosomas), sino grasas de alta pureza (lípidos y hormonas esteroides). Al mismo tiempo, en un sector anexo funciona una planta de tratamiento de aguas que neutraliza venenos, alcohol y medicamentos para volverlos solubles en agua y expulsarlos por la orina. Y en los músculos, es un embalse de compuertas ultrarrápidas que liberan calcio para mover la maquinaria.",
      keyTakeaway:
        "El REL abunda de forma extraordinaria en los hepatocitos (hígado) para la desintoxicación y en las gónadas (testículos y ovarios) para la síntesis de hormonas sexuales.",
    },
    proteinsAndFactors: [
      { name: "Citocromo P450 (CYP450)", role: "Enzima hemo que hidroxila toxinas liposolubles para volverlas hidrosolubles y excretables." },
      { name: "Glucosa-6-fosfatasa", role: "Enzima de la cara luminal del REL hepático que desfosforila la glucosa libre para que pueda salir a la sangre.", },
      { name: "Bomba SERCA (Ca2+-ATPasa)", role: "Bomba que secuestra activamente Ca2+ del citosol hacia el lumen del retículo sarcoplásmico para relajar el músculo." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Funciones fundamentales del REL: Síntesis de lípidos (colesterol, triglicéridos, fosfolípidos), detoxificación hepática, reservorio de Ca2+ y glucogenólisis (etapa final).",
        "2. Tolerancia a fármacos: El uso continuado de barbitúricos o sedantes induce la proliferación masiva de membranas de REL y enzimas CYP en los hepatocitos.",
        "3. Glucosa-6-fosfatasa: Exclusiva del REL de hígado y riñón; el músculo carece de ella y por eso su glucógeno no puede elevar la glucemia en sangre.",
      ],
      technicalTerms: [
        { term: "Retículo sarcoplásmico", definition: "Denominación del REL especializado en células musculares cuya misión es el almacenamiento y liberación de calcio." },
        { term: "Detoxificación", definition: "Modificación química de toxinas xenobióticas para aumentar su solubilidad y facilitar su eliminación renal o biliar." },
        { term: "SERCA", definition: "Bomba de calcio dependiente de ATP presente en la membrana del retículo sarcoplásmico." },
      ],
      examTraps: [
        "El músculo esquelético NO puede liberar glucosa libre a la sangre porque carece de la enzima glucosa-6-fosfatasa en su REL.",
        "La síntesis de hormonas esteroideas (derivadas del colesterol) ocurre en el REL, NUNCA en el RER.",
      ],
    },
    advancedClinical: {
      caseTitle: "Interacción entre Fármacos y Alcohol",
      clinicalApplication:
        "El consumo crónico de alcohol hipertrofia el REL hepatocítico elevando la actividad del citocromo P450, lo que acelera el metabolismo de anestésicos y requiere dosis mayores para lograr efecto clínico.",
      toxinOrDrugTarget: "Isoformas de la superfamilia Citocromo P450 (CYP2E1).",
    },
    quiz: [
      {
        question: "¿En cuál de las siguientes organelas se lleva a cabo la desintoxicación de fármacos y la síntesis de lípidos y hormonas esteroideas?",
        options: ["Retículo Endoplasmático Liso (REL)", "Retículo Endoplasmático Rugoso (RER)", "Lisosomas", "Peroxisomas"],
        answerIndex: 0,
        explanation: "El REL es el centro enzimático especializado en síntesis lipídica y biotransformación de sustancias tóxicas mediante el citocromo P450.",
        conceptTested: "Funciones cardinales del REL",
      },
    ],
  },

  // 16: Aparato de Golgi y Secreción Celular
  "tema-16": {
    summary: [
      "El aparato o complejo de Golgi está formado por dictiosomas (pilas de 4 a 8 cisternas aplanadas y curvadas con vesículas asociadas).",
      "Polaridad estructural definida: Cara cis (o de formación, convexa, orientada al retículo) y Cara trans (o de maduración, cóncava, orientada a la membrana celular).",
      "Funciones centrales: O-glucosilación terminal, fosforilación y sulfatación de proteínas, empaquetamiento, clasificación y despacho en vesículas de secreción y lisosomas primarios.",
      "Biogénesis de estructuras: Forma el acrosoma del espermatozoide, genera los lisosomas primarios y sintetiza la pectina y hemicelulosa de la pared vegetal.",
    ],
    analogy: {
      title: "El Centro Logístico de Envíos Postales",
      story:
        "Imagina la sede central de mensajería: los camiones llegan por la puerta de descarga (cara cis) con paquetes a medio armar del retículo. Los operarios revisan las etiquetas, añaden códigos de barra especiales (marcaje con manosa-6-fosfato), envuelven los paquetes en cajas selladas (vesículas) y los despachan por la rampa de salida (cara trans): unos van al basurero municipal (lisosomas), otros a reforzar la pared exterior y otros se exportan fuera de la ciudad.",
      keyTakeaway:
        "El Golgi es la estación de clasificación molecular definitiva de la célula: sin él, las proteínas producidas en el retículo se extraviarían sin destino asignado.",
    },
    proteinsAndFactors: [
      { name: "Cubiertas COP-II", role: "Vesículas de transporte anterógrado que llevan cargas desde el RER hacia la cara cis del Golgi." },
      { name: "Cubiertas COP-I", role: "Vesículas de transporte retrógrado que devuelven proteínas residentes desde el Golgi hacia el RER." },
      { name: "Manosa-6-fosfato (M6P)", role: "Marcaje fosforilado específico añadido en el cis-Golgi a las enzimas destinadas a convertirse en lisosomas." },
      { name: "Clatrina", role: "Recubre vesículas que emergen de la red trans-Golgi destinadas a lisosomas o endosomas." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Dictiosoma: Unidad funcional del Golgi compuesta por cisternas cis, mediales, trans y la red trans-Golgi (TGN).",
        "2. Formación del acrosoma: El acrosoma de la cabeza del espermatozoide es un lisosoma gigante especializado formado por la fusión de vesículas del aparato de Golgi.",
        "3. Secreción constitutiva vs Secreción regulada: La constitutiva es continua (ej. colágeno a matriz); la regulada requiere una señal hormonal o nerviosa previa con pico de Ca2+ (ej. insulina o neurotransmisores).",
      ],
      technicalTerms: [
        { term: "Dictiosoma", definition: "Apilamiento individual de sáculos membranosos discoidales del complejo de Golgi." },
        { term: "O-glucosilación", definition: "Unión covalente de azúcares al grupo hidroxilo (-OH) de serina o treonina en el Golgi." },
        { term: "Acrosoma", definition: "Vesícula apical del espermatozoide derivada del Golgi que almacena enzimas para degradar la zona pelúcida del óvulo." },
      ],
      examTraps: [
        "En células vegetales, el Golgi forma la lámina media durante la telofase sintetizando pectina (fragmoplasto).",
        "El marcaje con manosa-6-fosfato dirige enzimas hacia los LISOSOMAS, no hacia la secreción externa.",
      ],
    },
    advancedClinical: {
      caseTitle: "Enfermedad de Células I (Mucolipidosis II)",
      clinicalApplication:
        "Falla genética en la enzima que añade manosa-6-fosfato en el Golgi: las hidrolasas ácidas no son rotuladas para los lisosomas y se secretan por error a la sangre, dejando a los lisosomas vacíos e incapaces de degradar desechos.",
      toxinOrDrugTarget: "GlcNAc-fosfotransferasa del cis-Golgi.",
    },
    quiz: [
      {
        question: "¿Qué estructura especializada en la cabeza del espermatozoide se origina a partir de vesículas del Aparato de Golgi?",
        options: ["Acrosoma", "Pieza intermedia mitocondrial", "Axonema flagelar", "Corpúsculo polar"],
        answerIndex: 0,
        explanation: "El acrosoma es una vesícula lisosomal gigante rica en hialuronidasa que proviene de la fusión de cisternas del Golgi.",
        conceptTested: "Biogénesis del acrosoma por el Golgi",
      },
    ],
  },

  // 17: Lisosomas y Digestión Celular
  "tema-17": {
    summary: [
      "Los lisosomas son vesículas esféricas delimitadas por membrana simple formadas por gemación del aparato de Golgi, que contienen más de 50 hidrolasas ácidas.",
      "pH ácido interno óptimo (pH 4.5 - 5.0): Mantenido activamente por una bomba de protones (H+-ATPasa) que introduce H+ desde el citosol con gasto de ATP.",
      "Digestión celular: Heterofagia (degradación de sustancias fagocitadas del exterior como bacterias) y Autofagia (reciclaje de organelas celulares envejecidas o dañadas).",
      "Autólisis: Rotura masiva de todos los lisosomas que digiere a la propia célula tras su muerte programada o necrosis.",
    ],
    analogy: {
      title: "El Estómago de Bolsillo y la Planta de Reciclaje",
      story:
        "Imagina un reactor químico blindado lleno de ácido concentrado y enzimas destructoras. Si se rompiera dentro de la sala, disolvería todo; por eso su pared es ultra-resistente y está forrada de azúcares por dentro. Todo lo viejo o peligroso se arroja a ese reactor (la autofagia). Si una bacteria invade la célula, los glóbulos blancos la capturan y la arrojan dentro del reactor para deshacerla por completo.",
      keyTakeaway:
        "El pH ácido del lisosoma es un doble seguro: si una hidrolasa se escapa por accidente al citosol (que tiene pH 7.2), queda casi inactiva y no destruye la célula viva.",
    },
    proteinsAndFactors: [
      { name: "Bomba H+-ATPasa vacuolar (V-ATPasa)", role: "Bombea protones hacia el interior del lisosoma gastando ATP para sostener el pH en 4.5 - 5.0." },
      { name: "Fosfatasa ácida", role: "Enzima marcadora citoquímica clásica utilizada para identificar lisosomas al microscopio." },
      { name: "LAMPs (Proteínas de membrana asociadas a lisosomas)", role: "Glucoproteínas muy glicosiladas que forman un escudo protector interno contra las propias hidrolasas ácidas." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Lisosoma primario vs secundario: Primario = recién brotado del Golgi, inactivo, con hidrolasas; Secundario (o heterofagosoma/autofagosoma) = fusionado con material a digerir en proceso activo.",
        "2. Autofagia y premio Nobel de Yoshinori Ohsumi (2016): Mecanismo crucial de supervivencia celular durante el ayuno que elimina mitocondrias dañadas (mitofagia).",
        "3. Cuerpo residual: Lisosoma con material que no pudo digerirse por completo; puede expulsarse por exocitosis o acumularse como lipofuscina.",
      ],
      technicalTerms: [
        { term: "Heterofagia", definition: "Digestión lisosomal de material exógeno incorporado por fagocitosis o pinocitosis." },
        { term: "Autofagia", definition: "Digestión y degradación de componentes y organelos endógenos de la propia célula para reciclaje de nutrientes." },
        { term: "Autólisis", definition: "Autodigestión de toda la célula ocasionada por la rotura generalizada de sus propios lisosomas." },
      ],
      examTraps: [
        "Los lisosomas son característicos de células ANIMALES; en vegetales la vacuola central cumple una función digestiva análoga.",
        "El pH óptimo de las enzimas lisosomales es ÁCIDO (alrededor de 4.8 a 5.0), no neutro.",
      ],
    },
    advancedClinical: {
      caseTitle: "Enfermedad de Tay-Sachs",
      clinicalApplication:
        "Deficiencia de la hidrolasa lisosomal beta-hexosaminidasa A que impide degradar el gangliósido GM2; este lípido se acumula masivamente en las neuronas cerebrales provocando retraso psicomotor severo, ceguera y muerte temprana.",
      toxinOrDrugTarget: "Beta-hexosaminidasa A lisosomal.",
    },
    quiz: [
      {
        question: "¿Qué valor de pH aproximado requieren las hidrolasas lisosomales para su actividad catalítica óptima?",
        options: ["Ácido (alrededor de 4.5 a 5.0)", "Neutro exacto (7.0)", "Alcalino (8.5 a 9.0)", "Fuertemente básico (12.0)"],
        answerIndex: 0,
        explanation: "Las enzimas lisosomales son hidrolasas ácidas y dependen del pH ~5.0 generado por la bomba de protones.",
        conceptTested: "Condiciones de funcionamiento lisosomal",
      },
    ],
  },

  // 18: Peroxisomas y Glioxisomas
  "tema-18": {
    summary: [
      "Los peroxisomas son microcuerpos delimitados por membrana simple que contienen oxidasas productoras de peróxido de hidrógeno (H2O2) y catalasa para descomponerlo.",
      "Reacción de la Catalasa: Descompone el tóxico H2O2 en agua y oxígeno puro (2 H2O2 -> 2 H2O + O2), protegiendo a la célula del estrés oxidativo mortal.",
      "Beta-oxidación de ácidos grasos de cadena muy larga (VLCFA): Corta cadenas lipídicas largas para que luego la mitocondria pueda aprovecharlas.",
      "Glioxisomas: Peroxisomas modificados presentes en semillas vegetales oleaginosas que transforman lípidos almacenados en azúcares (Ciclo del glioxilato) durante la germinación.",
    ],
    analogy: {
      title: "El Escuadrón Antibombas y el Desactivador de Fuego",
      story:
        "Cuando la célula desarma grasas pesadas o alcohol, produce un residuo químico peligroso y explosivo: agua oxigenada concentrada (peróxido de hidrógeno). Para que no dañe nada, todo se realiza dentro de un cuarto de contención (el peroxisoma). Allí adentro, un desactivador especializado (la catalasa) neutraliza el agua oxigenada al instante en dos sustancias inofensivas: agua pura y oxígeno fresco.",
      keyTakeaway:
        "Sin peroxisomas, la acumulación de peróxidos y ácidos grasos tóxicos destruiría las vainas de mielina del sistema nervioso.",
    },
    proteinsAndFactors: [
      { name: "Catalasa", role: "Enzima antioxidante que convierte el peróxido de hidrógeno en agua y oxígeno; suele formar un cristal denso en el centro del peroxisoma." },
      { name: "Urato oxidasa", role: "Degrada el ácido úrico en la vía de catabolismo de purinas de muchos mamíferos." },
      { name: "Peroxinas (PEX)", role: "Proteínas de importación que reconocen las señales PTS (secuencia SKL) e ingresan proteínas citosólicas al peroxisoma." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Ciclo del Glioxilato (Glioxisomas): Permite a las plántulas en germinación convertir triglicéridos en sacarosa antes de desarrollar hojas fotosintéticas.",
        "2. Fotorrespiración en plantas: El peroxisoma vegetal coopera estrechamente con el cloroplasto y la mitocondria para metabolizar el fosfoglicolato.",
        "3. Biogénesis de plasmalógenos: Lípidos con enlace éter indispensables para la formación normal de la mielina en el cerebro.",
      ],
      technicalTerms: [
        { term: "Catalasa", definition: "Hemoenzima antioxidante por excelencia encargada de degradar el peróxido de hidrógeno tóxico." },
        { term: "Glioxisoma", definition: "Variedad de peroxisoma vegetal que posee enzimas para convertir lípidos en glúcidos mediante el ciclo del glioxilato." },
        { term: "Estrés oxidativo", definition: "Desbalance donde la producción de especies reactivas del oxígeno (ROS) supera la capacidad antioxidante celular." },
      ],
      examTraps: [
        "Los glioxisomas son EXCLUSIVOS de células VEGETALES (especialmente semillas oleaginosas) y hongos; no existen en animales.",
        "El H2O2 NO se genera en los lisosomas, sino en los PEROXISOMAS.",
      ],
    },
    advancedClinical: {
      caseTitle: "Síndrome de Zellweger (Trastorno Biogénico Peroxisomal)",
      clinicalApplication:
        "Mutación en genes PEX que impide ensamblar peroxisomas; los pacientes acumulan ácidos grasos de cadena muy larga en el cerebro e hígado, provocando disfunción neurológica letal en la infancia.",
      toxinOrDrugTarget: "Complejos receptores PEX de translocación peroxisomal.",
    },
    quiz: [
      {
        question: "¿Qué enzima indispensable del peroxisoma neutraliza el peróxido de hidrógeno tóxico convirtiéndolo en agua y oxígeno libre?",
        options: ["Catalasa", "Amilasa", "ADN polimerasa", "Pepsina"],
        answerIndex: 0,
        explanation: "La catalasa descompone rápidamente dos moléculas de H2O2 en 2 H2O y O2.",
        conceptTested: "Función de la catalasa en peroxisomas",
      },
    ],
  },

  // 19: Vacuola Vegetal y Turgencia (Tonoplasto)
  "tema-19": {
    summary: [
      "La vacuola central de las células vegetales adultas es un compartimento gigante delimitado por una membrana simple especializada llamada tonoplasto.",
      "Llega a ocupar del 80% al 90% del volumen total de la célula madura, desplazando al núcleo y al citoplasma contra la pared celular periférica.",
      "Funciones principales: Regulación osmótica y mantenimiento de la presión de turgencia que da soporte a las hojas y tallos no leñosos; almacén de agua, iones, nutrientes, toxinas y pigmentos hidrosolubles (antocianinas).",
    ],
    analogy: {
      title: "El Globo de Agua Gigante Dentro de la Caja de Madera",
      story:
        "Imagina una caja de madera rígida (la pared celular) con un globo de agua gigante adentro (la vacuola rodeada por el tonoplasto). Si llenas el globo a presión, aprieta las paredes de la caja haciéndola completamente rígida (turgencia). Si el globo pierde agua, se arruga y el contenido se desploma (marchitez). Gracias a ese globo inflado, los girasoles y las flores se mantienen erguidos mirando al sol.",
      keyTakeaway:
        "La turgencia vacuola-pared es el esqueleto hidrostático de todas las plantas herbáceas del planeta.",
    },
    proteinsAndFactors: [
      { name: "H+-ATPasa y H+-Pirofosfatasa del Tonoplasto", role: "Bombas que acidifican el jugo vacuolar y generan el gradiente para acumular solutos por transporte activo secundario." },
      { name: "Acuaporinas del tonoplasto (TIPs)", role: "Canales de agua ultra-eficientes que equilibran los cambios osmóticos en segundos." },
      { name: "Antocianinas", role: "Pigmentos flavonoides vacuolares hidrosolubles responsables de los colores rojo, púrpura y azul en pétalos y frutos." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Tonoplasto: Membrana semipermeable con transportadores que mantiene una altísima presión osmótica interna en el jugo vacuolar.",
        "2. Turgencia vs Plasmólisis: En agua dulce el agua entra por ósmosis y la vacuola infla la célula (turgencia); en sequía o salinidad el agua sale y la vacuola se colapsa despegando el citoplasma de la pared (plasmólisis).",
        "3. Función degradativa: Contiene hidrolasas ácidas equivalentes a los lisosomas animales para reciclar macromoléculas vegetales.",
      ],
      technicalTerms: [
        { term: "Tonoplasto", definition: "Membrana biológica unitaria que limita la vacuola central vegetal." },
        { term: "Turgencia", definition: "Presión hidrostática ejercida por el contenido celular contra la pared celular elástica." },
        { term: "Antocianinas", definition: "Pigmentos glucosídicos hidrosolubles almacenados en la vacuola cuyo color cambia según el pH del jugo vacuolar." },
      ],
      examTraps: [
        "Las antocianinas se disuelven en el AGUA de la vacuola; los carotenoides y la clorofila son lípidos insolubles alojados en los PLASTIDIOS.",
        "La membrana de la vacuola vegetal se denomina TONOPLASTO, nunca carioteca.",
      ],
    },
    advancedClinical: {
      caseTitle: "Estrés Hídrico y Salinidad en Agricultura",
      clinicalApplication:
        "Los suelos con exceso de sales reducen el potencial hídrico externo; el agua abandona la vacuola por ósmosis provocando plasmólisis masiva y muerte de los cultivos por deshidratación celular.",
      toxinOrDrugTarget: "Gradiente osmótico y transportadores iónicos del tonoplasto.",
    },
    quiz: [
      {
        question: "¿Cómo se llama la membrana unitaria semipermeable que delimita la gran vacuola central en las células vegetales?",
        options: ["Tonoplasto", "Carioteca", "Glucocálix", "Mesosoma"],
        answerIndex: 0,
        explanation: "El tonoplasto es la membrana especializada que regula el tránsito de agua e iones entre el citosol y el jugo vacuolar.",
        conceptTested: "Membrana de la vacuola vegetal",
      },
    ],
  },

  // 20: Mitocondria: Ultraestructura y ATP
  "tema-20": {
    summary: [
      "Organela de doble membrana semiautónoma encargada de la respiración celular aeróbica y la producción de la mayor parte del ATP mediante fosforilación oxidativa.",
      "Membrana externa: Lisa y muy permeable gracias a abundantes porinas transmembrana.",
      "Membrana interna: Muy impermeable, replegada en crestas mitocondriales; contiene la cadena transportadora de electrones, la enzima ATP sintasa (complejo FoF1) y el fosfolípido cardiolipina.",
      "Matriz mitocondrial (mitosol): Aloja el Ciclo de Krebs (ácido cítrico), beta-oxidación de ácidos grasos, ADN circular bicatenario desnudo (ADNmt) y mitorribosomas 70S.",
    ],
    analogy: {
      title: "La Central Hidroeléctrica y Represa Celular",
      story:
        "Imagina una represa hidroeléctrica: los electrones de los nutrientes actúan como bombas que arrojan agua (protones H+) hacia el espacio entre dos muros (el espacio intermembrana). El agua acumulada a presión solo puede salir por una única turbina giratoria: la ATP sintasa. Conforme los protones caen por el vórtice de la turbina, esta gira a toda velocidad acoplando fosfatos para recargar millones de baterías de ATP.",
      keyTakeaway:
        "La hipótesis quimiosmótica de Peter Mitchell demostró que el ATP no se produce por choque químico directo, sino por el empuje físico del gradiente electroquímico de protones que hace girar a la ATP sintasa.",
    },
    proteinsAndFactors: [
      { name: "Complejos I, II, III y IV de la Cadena Respiratoria", role: "Transportan electrones desde NADH y FADH2 hasta el oxígeno final bombeando protones al espacio intermembrana." },
      { name: "ATP sintasa (Complejo Fo-F1)", role: "Turbina rotatoria transmembrana que sintetiza ATP a partir de ADP y fosfato inorgánico (Pi) impulsada por la fuerza protón-motriz." },
      { name: "Cardiolipina (difosfatidilglicerol)", role: "Fosfolípido anfipático con 4 colas de ácido graso exclusivo de la membrana interna que asegura su extrema impermeabilidad iónica." },
      { name: "Citocromo c", role: "Proteína periférica móvil de transporte de electrones que, si se libera al citosol, activa la cascada de caspasas para la apoptosis celular (muerte programada)." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Teoría Endosimbiótica (Lynn Margulis): Las mitocondrias descienden de una alfa-proteobacteria aerobia fagocitada por una célula protoeucariota ancestral.",
        "2. Herencia mitocondrial: En el ser humano es 100% de origen materno, transmitida a través del óvulo (las mitocondrias del espermatozoide son destruidas tras la fecundación).",
        "3. Semiautonomía: Posee su propio genoma circular cerrado y sintetiza 13 proteínas de su cadena respiratoria con sus propios mitorribosomas 70S.",
      ],
      technicalTerms: [
        { term: "Fuerza protón-motriz", definition: "Gradiente electroquímico de protones acumulado en el espacio intermembrana que empuja el rotor de la ATP sintasa." },
        { term: "Cardiolipina", definition: "Fosfolípido doble exclusivo de la membrana interna mitocondrial y de bacterias que previene fugas de H+." },
        { term: "Mitofagia", definition: "Autofagia selectiva para destruir y reciclar mitocondrias despolarizadas o dañadas." },
      ],
      examTraps: [
        "El aceptor final de electrones en la cadena respiratoria es el OXÍGENO MOLECULAR (O2), que al reducirse se convierte en AGUA (H2O).",
        "El ciclo de Krebs ocurre en la MATRIZ MITOCONDRIAL; la cadena respiratoria en las CRESTAS (membrana interna).",
      ],
    },
    advancedClinical: {
      caseTitle: "Intoxicación por Cianuro y Monóxido de Carbono",
      clinicalApplication:
        "El cianuro inhibe irreversiblemente al Complejo IV (citocromo c oxidasa) bloqueando de golpe la respiración celular; la producción de ATP colapsa en segundos ocasionando asfixia química a nivel celular.",
      toxinOrDrugTarget: "Hemo a3 y centros de cobre del Complejo IV.",
    },
    quiz: [
      {
        question: "¿En qué compartimento de la mitocondria se localizan los complejos de la cadena transportadora de electrones y la ATP sintasa?",
        options: ["Crestas de la membrana interna", "Membrana externa lisa", "Espacio intermembrana", "Matriz o mitosol"],
        answerIndex: 0,
        explanation: "La membrana interna y sus crestas alojan toda la maquinaria proteica de la fosforilación oxidativa.",
        conceptTested: "Localización de la fosforilación oxidativa",
      },
    ],
  },

  // 21: Plastidios y Cloroplasto
  "tema-21": {
    summary: [
      "Los plastidios son organelas vegetales semiautónomas con doble membrana derivadas de protoplastidios: Cloroplastos (fotosíntesis), Cromoplastos (pigmentos carotenoides atractivos) y Leucoplastos (almacén incoloro, ej. amiloplastos con almidón).",
      "Cloroplasto: Estructura de triple membrana (externa, interna y membrana tilacoidal).",
      "Tilacoides y Granas: Sacos aplanados membranosos apilados en granas que contienen la clorofila y fotosistemas (Fase luminosa o fotoquímica).",
      "Estroma: Espacio fluido interior que contiene la enzima RuBisCO, ADN circular plastidial, plastorribosomas 70S y las enzimas del Ciclo de Calvin-Benson (Fase oscura o biosintética).",
    ],
    analogy: {
      title: "La Cocina Solar y los Paneles Fotovoltaicos",
      story:
        "Imagina una fábrica de alimentos impulsada por energía solar: en los techos hay pilas ordenadas de platos verdes reflectantes (las granas de tilacoides con clorofila). Esos paneles capturan la luz del sol, rompen moléculas de agua liberando oxígeno y generan energía inmediata. En el piso de la cocina (el estroma), los cocineros (la enzima RuBisCO) toman dióxido de carbono del aire y lo unen en sacos de azúcar comestible (glucosa).",
      keyTakeaway:
        "La fotosíntesis en los cloroplastos es el motor biosférico primario que introduce la energía solar a las cadenas tróficas terrestres y oxigena la atmósfera.",
    },
    proteinsAndFactors: [
      { name: "Clorofilas a y b", role: "Pigmentos tetrapirrólicos con magnesio central anclados a la membrana tilacoidal que absorben luz azul y roja." },
      { name: "RuBisCO (Ribulosa-1,5-bisfosfato carboxilasa/oxigenasa)", role: "La enzima más abundante del planeta; fija el CO2 atmosférico sobre la ribulosa en el estroma." },
      { name: "Fotosistemas II (P680) y I (P700)", role: "Complejos antena que fotolizan el agua (Fotólisis de Hill en el lumen) y producen NADPH y ATP." },
    ],
    cepreDeepDive: {
      concepts: [
        "1. Fotólisis del Agua (Complejo liberador de oxígeno): Ocurre en el lumen tilacoidal del Fotosistema II; produce electrones para la cadena, protones y libera gas O2.",
        "2. Fase fotoquímica vs Fase biosintética: La fase luminosa ocurre en la membrana del tilacoide; la fijación de carbono (Ciclo de Calvin) se efectúa en el estroma.",
        "3. Interconversión de plastidios: Los leucoplastos o cloroplastos maduran a cromoplastos en los frutos que maduran (ej. del verde al rojo en el tomate).",
      ],
      technicalTerms: [
        { term: "RuBisCO", definition: "Enzima estromática primordial encargada de fijar el CO2 inorgánico en materia orgánica." },
        { term: "Grana", definition: "Pila ordenada discoidal de tilacoides interconectados por lamelas estromáticas." },
        { term: "Fotólisis de Hill", definition: "Ruptura fotoquímica del agua catalizada por manganeso en el lumen tilacoidal que desprende oxígeno." },
      ],
      examTraps: [
        "El oxígeno liberado en la fotosíntesis proviene del AGUA (H2O), NUNCA del dióxido de carbono (CO2).",
        "La enzima RuBisCO y el ciclo de Calvin operan en el ESTROMA, no en los tilacoides.",
      ],
    },
    advancedClinical: {
      caseTitle: "Herbicidas Bloqueadores del Fotosistema II (Atrazina)",
      clinicalApplication:
        "La atrazina se une al sitio de unión de la plastoquinona en el Fotosistema II interrumpiendo el transporte de electrones; la planta muere por incapacidad de generar ATP y NADPH.",
      toxinOrDrugTarget: "Proteína D1 del Fotosistema II vegetal.",
    },
    quiz: [
      {
        question: "¿En qué compartimento del cloroplasto se encuentra la enzima RuBisCO y se realiza el Ciclo de Calvin para fijar el CO2?",
        options: ["En el estroma fluido", "En la membrana del tilacoide", "En el espacio intermembrana", "En el interior del grano de almidón"],
        answerIndex: 0,
        explanation: "El estroma equivale al citosol del cloroplasto y contiene las enzimas solubles del ciclo de Calvin.",
        conceptTested: "Localización del ciclo de Calvin en cloroplastos",
      },
    ],
  },
};
