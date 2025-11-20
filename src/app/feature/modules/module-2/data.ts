export const MODULO2_DATA = {
  presentacion: {
    titulo: "Mòdulo 2: El aire que se eleva – Transferencia de Calor y Convección",
descripcion: "Detrás de cada corriente de aire hay un motor silencioso: el calor. En este módulo aprenderás cómo la energía solar calienta la superficie de la Tierra, generando movimientos verticales de aire que dan origen a la convección. Este fenómeno no solo transporta calor, sino también vapor de agua e isótopos hacia las capas superiores de la atmósfera. \n\n A partir de simulaciones, imágenes satelitales y la observación de los monsones — grandes sistemas de circulación impulsados por el calor— comprenderás cómo el aire se eleva, cómo se enfría y cómo este ciclo alimenta la dinámica global de la atmósfera. El calor no solo se siente, también se mueve. Descubre cómo da vida al aire que asciende.",
    boton:{
    titulo: "Empezar →",
    ruta: "/modulo-2/observar-fenomeno"
    }
  },
  observarFenomeno: {
    titulo: "MÓDULO 2: EL AIRE QUE SE ELEVA – TRANSFERENCIA DE CALOR Y CONVECCIÓN",
    descripcion: "El calor impulsa los grandes movimientos del aire. Descubramos cómo la energía solar genera el ascenso del vapor de agua que alimenta la atmósfera.",
    textoBoton: "Descubrir cómo",
  },
  explicarObservado: {
    1: {
      titulo: "Todo comienza con el sol",
      items: [
        {
          descripcion: "La superficie de la Tierra absorbe la radiación solar y se calienta. Este calor se transfiere al aire que está en contacto directo con ella. \n\n Al calentarse, el aire se expande, su densidad disminuye y, por ser más ligero que el aire circundante, asciende. Este movimiento vertical de ascenso de aire caliente es el motor fundamental de la convección."
        },
      ],
      imagen: "assets/modulo-2/M2_celda_convectiva.gif",
    },
    2: {
      modales: [
        {
          titulo: '¿Cómo se transporta el calor?',
          descripcion: 'La transferencia de calor es el proceso físico mediante el cual la energía térmica se transporta de un sistema de mayor temperatura a uno de menor temperatura. En la atmósfera, este balance energético se mantiene por tres mecanismos:\n\nHaz clic sobre cada proceso para ver un ejemplo',
          botonesModales: [
            {
              titulo: "Conducción",
              descripcion: "Contacto Directo. El suelo caliente transfiere su energía térmica directamente a la capa de aire que lo toca, de la misma forma que una sartén caliente cocina los alimentos.",
              imagen: "assets/modulo-2/M2_conduccion.gif",
              anterior: null,
              siguiente: "radiacion"
            },
            {
              titulo: "Radiación",
              descripcion: "Ondas de Energía. El Sol emite radiación de onda corta que calienta la Tierra. A su vez, la Tierra irradia energía de onda larga (calor infrarrojo) de vuelta al espacio.",
              imagen: "assets/modulo-2/M2_radiacion.gif",
              anterior: "conduccion",
              siguiente: "conveccion"
            },
            {
              titulo: "Convección",
              descripcion: "Movimiento del Fluido. El aire, calentado por conducción y radiación desde la superficie, asciende y transporta físicamente ese calor a niveles más altos y fríos de la atmósfera.",
              imagen: "assets/modulo-2/M2_conveccion.gif",
              anterior: "radiacion",
              siguiente: null
            }
          ]
        },
      ],
    },
    3: {
      transicion: {
      titulo: "De los tres, ¿Cúal es el que mueve el aire?",
      descripcion: "Los tres procesos ocurren al mismo tiempo, pero tienen roles diferentes para el movimiento del aire:\n\nLa Conducción: Es importante, pero solo calienta la finísima capa de aire que está en contacto directo con el suelo.\nLa Radiación: Calienta la superficie y algunas partes de la atmósfera, pero es la convección el único mecanismo que \nfísicamente transporta ese aire caliente y húmedo desde la superficie hacia lo alto de la atmósfera.\n\nPor lo tanto, para entender cómo asciende el vapor de agua...\n...la CONVECCIÓN es el proceso clave que debemos estudiar.",
      botones:{
        titulo: 'Entender como →',
        ruta: '/modulo-2/entender-fenomeno'
      }
    }
    }
  },
  entenderFenomeno: {
    1: {
      titulo: "Convección",
      descripcion: "La convección es el mecanismo de transporte de calor dominante en la troposfera.\n\n Ocurre cuando el aire caliente y menos denso asciende, se enfría en las alturas, y el aire más frío y denso desciende para tomar su lugar. Este ciclo constante, conocido como celda convectiva, transporta verticalmente calor, humedad y energía.",
      imagen: "assets/modulo-2/M2_cumulonimbus_colores_corregidos.gif",
    },
    2: {
      titulo: "Convección Profunda",
      descripcion: "En los trópicos, la energía solar es tan intensa que las corrientes ascendentes pueden 'perforar' toda la troposfera hasta alcanzar la tropopausa (la 'tapa' de la atmósfera, ~17 km).\n\n A esto se le llama Convección Profunda.",
      imagen: "assets/modulo-2/ConveccionProfunda.png",
      },
    3: {
      titulo: "Los Monzones",
      descripcion: 'Este fenómeno domina el clima de verano en lugares como India y el sudeste asiático, y también ocurre en Norteamérica',
      imagen: "assets/modulo-2/Monzon.png",
      items: [
        {
          descripcion: "Un flujo suave y ordenado donde las partículas del fluido se mueven en capas paralelas sin mezclarse entre sí."
        },
      ],
    },
    4: {
      modales: [
        {
          titulo: 'Evidencias',
          descripcion: "Ahora, veamos los datos reales. Estos GIFs (generados con datos de MLS a ~17 km) muestran los 'puntos calientes' de vapor de agua durante las temporadas de monzón.\n\nSon la prueba de que la convección profunda está transportando activamente la humedad a la alta atmósfera",
          botonesModales: [
            {
              titulo: "Norteamerica",
              descripcion: "Observa la 'mancha' de humedad que se forma sobre México y el suroeste de EE. UU. en verano. Es el resultado directo de la convección monzónica.",
              imagen: "assets/modulo-2/M2_norteamerica.gif",
              anterior: null,
              siguiente: "asia"
            },
            {
              titulo: "Asia",
              descripcion: "El monzón más potente del mundo. Mira la inmensa piscina de vapor de agua sobre India e Indonesia, bombeada directamente a la tropopausa.",
              imagen: "assets/modulo-2/M2_asia.gif",
              anterior: "norteamerica",
              siguiente: null
            },
          ]
        },
      ],
    },
  },
  horaExplorar: {
    titulo: '¡Hora de explorar!',
    descripcion: 'Ahora que entiendes el concepto de convección, es tu turno de verlo en acción. Usa el simulador de PhET "Formas y Cambios de Energía" para experimentar cómo la transferencia de calor pone en movimiento un fluido.',
    simulaciones: [
      {
        titulo: "Simulación",
        descripcion: "Dentro del simulador, ve a la pestaña 'Sistemas'.\n Coloca un calentador debajo del recipiente con agua.\nObserva atentamente cómo se forman las corrientes. Fíjate en el movimiento del fluido caliente (rojo) y el fluido frío (azul).\nPregúntate: ¿Lo que ves en el simulador coincide con lo que aprendimos sobre el ascenso de aire caliente?",
        enlace: "https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_es.html",
      },
    ]

  },
  pruebaConocimiento: {
    titulo: "Práctica Módulo 2",
    descripcion: "Ejercicios interactivos para reforzar lo aprendido."
  },
  encuestaSatisfaccion: {
    titulo: "Prueba Final Módulo 2",
    descripcion: "Evalúa tus conocimientos con esta prueba."
  }
};
