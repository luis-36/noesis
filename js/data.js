/* Noesis quiz data — same content as original */
window.NOESIS = {
  tests: [
    {
      slug: "vinculo",
      index: "01",
      name: "Vínculo",
      axis: "Cómo te unes",
      promise: "La forma en que amas cuando nadie te está mirando.",
      intro:
        "Seis escenas íntimas. No hay respuesta correcta: hay un patrón. Al final, tu lectura nombra cómo te acercas, cómo sostienes y cómo te vas.",
      minutes: 4,
      fallbackTrait: "ancla",
      traits: [
        {
          id: "ancla",
          name: "Ancla",
          kicker: "Constancia",
          portrait:
            "Eliges profundidad sobre teatro. Cuando alguien importa, te quedas — no como sacrificio, como clima. El otro te siente tierra firme, a veces más de lo que tú te permites sentir.",
          lines: [
            "La lealtad te sale antes que la pose.",
            "El conflicto no te echa: te pide claridad.",
            "Tu riesgo es cargar tú lo que debería ser de dos.",
          ],
        },
        {
          id: "espejo",
          name: "Espejo",
          kicker: "Sintonía",
          portrait:
            "Lees al otro antes de hablarte. Afinas el tono de la habitación y te vuelves habitable. Es un don raro. También es una forma de desaparecer un poco para que el vínculo quepa.",
          lines: [
            "Captas el clima antes de que tenga nombre.",
            "Das espacio sin que se lo pidan.",
            "Tu trabajo ahora: no traducir tanto. Ocupar.",
          ],
        },
        {
          id: "horizonte",
          name: "Horizonte",
          kicker: "Autonomía",
          portrait:
            "El cariño no te pide desaparecer. Quieres cerca, no fusionado. Quien te ama bien entiende tu silencio como respeto, no como huida — y tú estás aprendiendo a explicarlo sin armadura.",
          lines: [
            "Necesitas aire para poder volver.",
            "La presión te cierra más que el desacuerdo.",
            "Tu puente: avisar antes de alejarte.",
          ],
        },
        {
          id: "marea",
          name: "Marea",
          kicker: "Intensidad",
          portrait:
            "Sientes en oleaje, no en línea. Cuando entras, entras del todo. El otro te vive como clima: calor, lluvia, claridad. Lo que pides no es drama. Es que te encuentren a la misma profundidad.",
          lines: [
            "La tibieza te resulta más fría que el frío.",
            "Nombras pronto lo que otros postergan.",
            "Tu cuidado: que la ola no se lleve el muelle.",
          ],
        },
      ],
      questions: [
        {
          prompt: "Alguien que te importa tarda horas en responder.",
          options: [
            { label: "Sigo con lo mío. Si importa, vuelve.", trait: "horizonte" },
            { label: "Le escribo con calma para saber si está bien.", trait: "ancla" },
            { label: "El cuerpo se me adelanta al mensaje.", trait: "marea" },
            { label: "Ajusto el tono a cómo suele ser esa persona.", trait: "espejo" },
          ],
        },
        {
          prompt: "En un desacuerdo que duele, lo primero que haces es…",
          options: [
            { label: "Bajar la fiebre. Entender antes de defender.", trait: "espejo" },
            { label: "Decir la verdad entera, aunque tiemble.", trait: "marea" },
            { label: "Pedir un receso y volver cuando esté nítido.", trait: "horizonte" },
            { label: "Quedarme en la mesa hasta que se aclare.", trait: "ancla" },
          ],
        },
        {
          prompt: "El domingo por la mañana, juntos, te sientes bien si…",
          options: [
            { label: "Hay un plan compartido, aunque sea pequeño.", trait: "ancla" },
            { label: "Cada uno ocupa su espacio y se cruzan.", trait: "horizonte" },
            { label: "Hay una conversación que no cabe en un chat.", trait: "marea" },
            { label: "El otro está a gusto. Yo me acomodo.", trait: "espejo" },
          ],
        },
        {
          prompt: "Cuando te enamoras de verdad…",
          options: [
            { label: "Se nota en cómo reorganizo el tiempo.", trait: "ancla" },
            { label: "Se nota en la intensidad, no en el anuncio.", trait: "marea" },
            { label: "Se nota en lo que dejo de forzar.", trait: "horizonte" },
            { label: "Se nota en cómo empiezo a hablar como nosotros.", trait: "espejo" },
          ],
        },
        {
          prompt: "Lo que más te cansa en una relación es…",
          options: [
            { label: "Tener que adivinar lo que no se dice.", trait: "marea" },
            { label: "Que el otro necesite pruebas constantes.", trait: "horizonte" },
            { label: "Sentir que sostengo yo el clima entero.", trait: "espejo" },
            { label: "Que lo importante se posponga una y otra vez.", trait: "ancla" },
          ],
        },
        {
          prompt: "Si tu forma de amar pudiera pedirle una sola cosa al otro…",
          options: [
            { label: "Que no traduzca mi silencio como abandono.", trait: "horizonte" },
            { label: "Que se quede cuando se ponga serio.", trait: "ancla" },
            { label: "Que no baje el volumen de lo que siento.", trait: "marea" },
            { label: "Que me recuerde que también ocupo sitio.", trait: "espejo" },
          ],
        },
      ],
    },
    {
      slug: "mente",
      index: "02",
      name: "Mente",
      axis: "Cómo razonas",
      promise: "No un ranking. Un retrato de cómo piensas cuando aprieta el reloj.",
      intro:
        "Cuatro problemas de precisión y dos de estilo. El número que verás es una estimación lúdica — la lectura nombra tu manera de entrar al problema, que es lo que de verdad te distingue.",
      minutes: 5,
      fallbackTrait: "analitico",
      traits: [
        {
          id: "analitico",
          name: "Analítico",
          kicker: "Despiece",
          portrait:
            "Antes de decidir, abres el problema. Ves piezas, no niebla. Te fías de la estructura más que del destello. Quien trabaja contigo agradece que no improvises el cimiento.",
          lines: [
            "Separar es tu forma de respetar lo complejo.",
            "El atajo te resulta sospechoso, no tentador.",
            "Tu borde: a veces el mapa tarda más que el territorio.",
          ],
        },
        {
          id: "sintetico",
          name: "Sintético",
          kicker: "Conjunto",
          portrait:
            "Unes lo que otros dejan en carpetas distintas. Ves el patrón entero y recién después los nudos. Es una mente de arquitectura: menos catálogo, más edificio.",
          lines: [
            "Las analogías te llegan antes que las fórmulas.",
            "Agrupas rápido. A veces demasiado.",
            "Tu rigor está en la forma, no en el inventario.",
          ],
        },
        {
          id: "lateral",
          name: "Lateral",
          kicker: "Puerta rara",
          portrait:
            "Entras por donde el plano no indica puerta. El problema se te aparece torcido y por eso lo resuelves. Molestas un poco a quien necesita el procedimiento. Vale la pena.",
          lines: [
            "Si la pregunta está mal hecha, la cambias.",
            "Te aburre repetir un método que ya funcionó.",
            "Tu cuidado: no confundir original con exacto.",
          ],
        },
        {
          id: "preciso",
          name: "Preciso",
          kicker: "Filo",
          portrait:
            "El error te molesta más que la lentitud. Prefieres una respuesta nítida a una brillante. En un mundo de opiniones, eres el que pregunta las unidades.",
          lines: [
            "Mides dos veces. Cortas una.",
            "La ambigüedad te pide más datos, no más fe.",
            "Tu don es que se puede construir encima.",
          ],
        },
      ],
      questions: [
        {
          prompt: "¿Qué número sigue? 3 · 9 · 27 · 81 · —",
          hint: "Precisión",
          options: [
            { label: "162", correct: false, trait: "sintetico" },
            { label: "243", correct: true, trait: "preciso" },
            { label: "218", correct: false, trait: "lateral" },
            { label: "324", correct: false, trait: "analitico" },
          ],
        },
        {
          prompt: "Un problema no tiene puerta obvia. ¿Por dónde entras?",
          hint: "Estilo",
          options: [
            { label: "Lo desarmo en partes hasta que una ceda.", trait: "analitico" },
            { label: "Busco un caso parecido en otro campo.", trait: "sintetico" },
            { label: "Cambio la pregunta hasta que sea contestable.", trait: "lateral" },
            { label: "Defino términos y reglas antes de moverme.", trait: "preciso" },
          ],
        },
        {
          prompt:
            "Si 5 máquinas tardan 5 minutos en hacer 5 piezas, ¿cuánto tardan 100 máquinas en hacer 100 piezas?",
          hint: "Precisión",
          options: [
            { label: "100 minutos", correct: false, trait: "sintetico" },
            { label: "20 minutos", correct: false, trait: "analitico" },
            { label: "5 minutos", correct: true, trait: "preciso" },
            { label: "1 minuto", correct: false, trait: "lateral" },
          ],
        },
        {
          prompt: "Todos los analistas son precisos. Algunos precisos son lentos. Entonces…",
          hint: "Precisión",
          options: [
            { label: "Algunos analistas son lentos.", correct: false, trait: "sintetico" },
            { label: "Ningún analista es lento.", correct: false, trait: "preciso" },
            { label: "No se puede concluir.", correct: true, trait: "analitico" },
            { label: "Todos los lentos son analistas.", correct: false, trait: "lateral" },
          ],
        },
        {
          prompt: "Completa la serie: 1 · 1 · 2 · 3 · 5 · 8 · —",
          hint: "Precisión",
          options: [
            { label: "11", correct: false, trait: "lateral" },
            { label: "13", correct: true, trait: "preciso" },
            { label: "12", correct: false, trait: "sintetico" },
            { label: "16", correct: false, trait: "analitico" },
          ],
        },
        {
          prompt: "Tienes diez minutos para un problema difícil. ¿Qué haces con el tiempo?",
          hint: "Estilo",
          options: [
            { label: "Cinco en entender, cinco en resolver.", trait: "analitico" },
            { label: "Una hipótesis fuerte y la persigo.", trait: "lateral" },
            { label: "Un marco limpio aunque no llegue al final.", trait: "preciso" },
            { label: "Busco el parecido con algo que ya resolví.", trait: "sintetico" },
          ],
        },
      ],
    },
    {
      slug: "esfera",
      index: "03",
      name: "Esfera",
      axis: "Cómo te leen",
      promise: "El efecto que dejas en una sala cuando aún no has hablado.",
      intro:
        "Seis escenas de grupo. No hay rol correcto: hay una firma. Al final, tu lectura nombra cómo ocupas el espacio y cómo mueves (o no) la sala.",
      minutes: 4,
      fallbackTrait: "observador",
      traits: [
        {
          id: "observador",
          name: "Observador",
          kicker: "Lectura",
          portrait:
            "Entras y lees. Ves quién tira, quién se retrae, dónde está el nudo. Hablas poco al principio porque estás mapeando. Cuando intervienes, suele ser en el punto exacto.",
          lines: [
            "Preferís entender antes de mover.",
            "El ruido te cansa más que el silencio.",
            "Tu don: nombrar lo que el grupo aún no ve.",
          ],
        },
        {
          id: "catalizador",
          name: "Catalizador",
          kicker: "Movimiento",
          portrait:
            "La sala se mueve cuando tú te mueves. Propones, conectas, sacas del bucle. A veces cansas a quien quería quedarse en la queja. Casi siempre vales la pena.",
          lines: [
            "Te aburre el estancamiento más que el conflicto.",
            "Empujas de la idea al hecho.",
            "Tu cuidado: no arrastrar a quien aún no está listo.",
          ],
        },
        {
          id: "diplomatico",
          name: "Diplomático",
          kicker: "Puente",
          portrait:
            "Haces que quepan más personas en la misma frase. Traduces, suavizas sin mentir, sostienes el hilo cuando se tensa. El grupo te usa como cemento — a veces sin notarlo.",
          lines: [
            "Prefieres que el grupo avance a ganar la ronda.",
            "Tu riesgo: suavizar de más lo que debía nombrarse.",
          ],
        },
        {
          id: "polar",
          name: "Polar",
          kicker: "Posición",
          portrait:
            "Tomas posición. El resto se ordena alrededor — a favor, en contra, con alivio. No dejas la sala en gris. Es un tipo de honestidad que algunos llaman dureza y otros, oxígeno.",
          lines: [
            "Prefieres el desacuerdo nítido a la paz opaca.",
            "La ambigüedad colectiva te irrita.",
            "Tu puente: la posición no tiene que ser un veredicto.",
          ],
        },
      ],
      questions: [
        {
          prompt: "Entras a una reunión donde nadie se conoce del todo. ¿Qué haces primero?",
          options: [
            { label: "Escucho un rato. Mapeo quién tira de qué.", trait: "observador" },
            { label: "Rompo el hielo con una pregunta útil.", trait: "catalizador" },
            { label: "Presento a dos personas que deberían hablarse.", trait: "diplomatico" },
            { label: "Digo para qué estoy y qué espero de la hora.", trait: "polar" },
          ],
        },
        {
          prompt: "Alguien interrumpe a otra persona, una y otra vez.",
          options: [
            { label: "Le devuelvo la palabra a quien la perdió.", trait: "diplomatico" },
            { label: "Lo nombro con claridad, sin teatro.", trait: "polar" },
            { label: "Cambio el formato para que deje de pasar.", trait: "catalizador" },
            { label: "Espero a ver si el grupo lo corrige solo.", trait: "observador" },
          ],
        },
        {
          prompt: "Te invitan a un plan de último minuto que no te apetece.",
          options: [
            { label: "Digo que no, con una razón breve.", trait: "polar" },
            { label: "Voy un rato si alguien concreto me importa.", trait: "diplomatico" },
            { label: "Propongo otra cosa que sí me sume.", trait: "catalizador" },
            { label: "Agradezco y me quedo fuera, sin drama.", trait: "observador" },
          ],
        },
        {
          prompt: "En un grupo, tu lugar natural es…",
          options: [
            { label: "El que ve el patrón y habla poco.", trait: "observador" },
            { label: "El que empuja a pasar de la queja al hecho.", trait: "catalizador" },
            { label: "El que sostiene que nadie quede fuera.", trait: "diplomatico" },
            { label: "El que dice lo que el resto está evitando.", trait: "polar" },
          ],
        },
        {
          prompt: "Cuando el ambiente se pone tenso, tu cuerpo pide…",
          options: [
            { label: "Aire. Observar un segundo más.", trait: "observador" },
            { label: "Mover. Cambiar de tarea o de sitio.", trait: "catalizador" },
            { label: "Traducir. Encontrar la frase puente.", trait: "diplomatico" },
            { label: "Cortar. Nombrar el nudo y seguir.", trait: "polar" },
          ],
        },
        {
          prompt: "Lo que más te importa que recuerden de ti en un grupo es…",
          options: [
            { label: "Que entendí lo que no se dijo.", trait: "observador" },
            { label: "Que hice que pasara algo.", trait: "catalizador" },
            { label: "Que se pudo seguir juntos.", trait: "diplomatico" },
            { label: "Que no disfracé lo que pensaba.", trait: "polar" },
          ],
        },
      ],
    },
  ],

  partner: {
    kicker: "Socio de Noesis",
    name: "Instituto Vespera",
    line: "Cuatro semanas para leer lo que tu entorno no dice.",
    body: "Un programa de atención sostenida: vínculo, criterio y presencia social. El mismo triángulo que acabas de recorrer, con práctica.",
    cta: "Conocer el programa",
  },

  vesperaWeeks: [
    {
      num: "01",
      title: "Semana de vínculo",
      body: "Cómo te acercas, cómo pides, cómo te vas. Práctica, no teoría de pareja.",
    },
    {
      num: "02",
      title: "Semana de criterio",
      body: "Atención sostenida. Menos ruido, más corte limpio en lo que piensas.",
    },
    {
      num: "03",
      title: "Semana de esfera",
      body: "Presencia en grupo. Leer la sala sin desaparecer en ella.",
    },
    {
      num: "04",
      title: "Semana de cruce",
      body: "Los tres ejes en una sola forma de estar. El retrato que Noesis nombra, ensayado.",
    },
  ],
};

window.NOESIS.getTest = function (slug) {
  return this.tests.find((t) => t.slug === slug);
};

window.NOESIS.score = function (test, answers) {
  const counts = new Map();
  let correct = 0;
  let scored = 0;
  test.questions.forEach((q, i) => {
    const opt = q.options[answers[i]];
    if (!opt) return;
    if (opt.trait) counts.set(opt.trait, (counts.get(opt.trait) || 0) + 1);
    if (typeof opt.correct === "boolean") {
      scored += 1;
      if (opt.correct) correct += 1;
    }
  });
  let best = test.fallbackTrait;
  let max = -1;
  for (const [id, n] of counts) {
    if (n > max) {
      max = n;
      best = id;
    }
  }
  const trait = test.traits.find((t) => t.id === best) || test.traits[0];
  const score =
    test.slug === "mente" && scored > 0
      ? Math.round((correct / scored) * 100)
      : Math.round((max / test.questions.length) * 100);
  return { trait, score, correct, scored };
};
