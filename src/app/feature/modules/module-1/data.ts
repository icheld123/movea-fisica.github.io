export const MODULO1_DATA = {
  observarFenomeno: {
    titulo: "MÓDULO 1: EL GRAN RÍO DEL CIELO",
    descripcion: "¿Sabías que la atmósfera está compuesta de fluidos gaseosos como el vapor de agua y que cambian constantemente? Observa el fenómeno Brewer-Dobson, un proceso crucial en la circulación atmosférica global.",
    textoBoton: "Descubrir cómo",
  },
  explicarObservado: {
    titulo: "Un Océano de Aire Organizado: La Circulación Global",
    descripcion: "Aunque el movimiento del aire puede parecer caótico, a gran escala se organiza en gigantescos patrones de circulación que distribuyen el calor desde el ecuador hacia los polos. Estas son las tres células principales en cada hemisferio:",
    celulas: [
      {
        nombre: "Célula de Hadley (0° a 30°)",
        descripcion: "El motor del trópico. El aire caliente y húmedo asciende en el ecuador, se enfría, y luego desciende en las zonas subtropicales."
      },
      {
        nombre: "Célula de Ferrel (30° a 60°)",
        descripcion: "La célula de las latitudes medias. No es impulsada directamente por la temperatura, sino que actúa como un engranaje entre las otras dos células, con un movimiento promedio de aire superficial hacia los polos."
      },
      {
        nombre: "Célula Polar (60° a 90°)",
        descripcion: "En los polos, el aire frío y denso desciende y se desplaza hacia latitudes más bajas."
      }
    ],
    imagen: "assets/modulo-1/celulas-hadley-2.jpg",
    textoBoton: "Ver la evidencia",
    creditos: "Imagen tomada de: https://4.bp.blogspot.com/_KGhu7uNajfQ/TMGw_HD4mWI/AAAAAAAAARs/Wv8JyFezFDk/s1600/celulas-hadley-2.jpg",
    modales: [
      {
        titulo: 'Evidencia del Transporte Atmosférico: La Señal del "Tape Recorder"',
        descripcion: 'El "tape recorder" atmosférico es un término análogo utilizado para describir la "grabación" de las variaciones estacionales de un trazador químico (como el vapor de agua) en las masas de aire que ascienden lentamente en la estratosfera tropical. A medida que el aire sube, transporta consigo la firma de la concentración del trazador presente en la tropopausa, creando un patrón vertical que, al ser visualizado en el tiempo, se asemeja a las bandas de una cinta magnética. Este fenómeno constituye una de las evidencias más directas del lento ascenso de la célula de Hadley hacia la estratosfera.',
        botonesModales: [
          {
            titulo: "Zona Tropical",
            descripcion: "En el trópico, bajo el dominio de la célula de Hadley, observamos la señal canónica del tape recorder. Las bandas diagonales ascendentes muestran cómo el aire, al elevarse, transporta la firma estacional del vapor de agua hacia la estratosfera. Este patrón es la evidencia directa del lento ascenso que define la rama ascendente de la circulación Brewer- Dobson.",
            imagen: "assets/modulo-1/zona-tropical-2005-2015.png",
            anterior: null,
            siguiente: "latitudes-medias"
          },
          {
            titulo: "Latitudes Medias",
            descripcion: "En las latitudes medias, la señal de ascenso desaparece. La dinámica aquí está dominada por la célula de Ferrel, que se caracteriza por un movimiento de aire superficial hacia los polos y un descenso de aire estratosférico. El gráfico muestra un fuerte ciclo estacional, pero sin la propagación vertical vista en el trópico, indicando una ausencia de ascenso neto a gran escala hacia la estratosfera.",
            imagen: "assets/modulo-1/zonas-medias-2004-2015.png",
            anterior: "zona-tropical",
            siguiente: "zona-polar"
          },
          {
            titulo: "Zona Polar",
            descripcion: "En las regiones polares, el aire es extremadamente seco, una característica del dominio de la célula Polar. Este es el punto de descenso principal de la circulación Brewer- Dobson. El aire que ha viajado por la estratosfera pierde su humedad y desciende de nuevo a la troposfera, por lo que no se observa ninguna señal de ascenso, sino un fuerte ciclo anual influenciado por el vórtice polar.",
            imagen: "assets/modulo-1/zonas-polares-2005-2015.png",
            anterior: "latitudes-medias",
            siguiente: null
          }
        ]
      },

    ]
  },
  entenderFenomeno: {
    titulo: 'Evidencia del Transporte Atmosférico: La Señal del "Tape Recorder"',
    descripcion: 'El "tape recorder" atmosférico es un término análogo utilizado para describir la "grabación" de las variaciones estacionales de un trazador químico (como el vapor de agua) en las masas de aire que ascienden lentamente en la estratosfera tropical. A medida que el aire sube, transporta consigo la firma de la concentración del trazador presente en la tropopausa, creando un patrón vertical que, al ser visualizado en el tiempo, se asemeja a las bandas de una cinta magnética. Este fenómeno constituye una de las evidencias más directas del lento ascenso de la célula de Hadley hacia la estratosfera.',
    botonesModales: [
      {
        titulo: "Zona Tropical",
        descripcion: "En el trópico, bajo el dominio de la célula de Hadley, observamos la señal canónica del tape recorder. Las bandas diagonales ascendentes muestran cómo el aire, al elevarse, transporta la firma estacional del vapor de agua hacia la estratosfera. Este patrón es la evidencia directa del lento ascenso que define la rama ascendente de la circulación Brewer- Dobson.",
        imagen: "assets/modulo-1/zona-tropical-2005-2015.png",
        anterior: null,
        siguiente: "latitudes-medias"
      },
      {
        titulo: "Latitudes Medias",
        descripcion: "En las latitudes medias, la señal de ascenso desaparece. La dinámica aquí está dominada por la célula de Ferrel, que se caracteriza por un movimiento de aire superficial hacia los polos y un descenso de aire estratosférico. El gráfico muestra un fuerte ciclo estacional, pero sin la propagación vertical vista en el trópico, indicando una ausencia de ascenso neto a gran escala hacia la estratosfera.",
        imagen: "assets/modulo-1/zonas-medias-2004-2015.png",
        anterior: "zona-tropical",
        siguiente: "zona-polar"
      },
      {
        titulo: "Zona Polar",
        descripcion: "En las regiones polares, el aire es extremadamente seco, una característica del dominio de la célula Polar. Este es el punto de descenso principal de la circulación Brewer- Dobson. El aire que ha viajado por la estratosfera pierde su humedad y desciende de nuevo a la troposfera, por lo que no se observa ninguna señal de ascenso, sino un fuerte ciclo anual influenciado por el vórtice polar.",
        imagen: "assets/modulo-1/zonas-polares-2005-2015.png",
        anterior: "latitudes-medias",
        siguiente: null
      }
    ]
  },
  horaExplorar: {
    titulo: 'Hora de explorar',
    descripcion: 'El movimiento del aire, su temperatura y presión están conectados. Para complementar la teoría, experimenta tú mismo con estos conceptos en los simuladores interactivos de PhET Colorado.',
    simulaciones: [
      {
        titulo: "Estados de la materia",
        descripcion: "Observa cómo se comportan las partículas al cambiar la temperatura. ¿Qué le pasa al 'aire' cuando se calienta?",
        enlace: "https://phet.colorado.edu/sims/html/states-of-matter/latest/states-of-matter_all.html?locale=es",
      },
      {
        titulo: "Propiedades de los gases",
        descripcion: "Explora la relación entre la presión y la temperatura en un gas como el aire.",
        enlace: "https://phet.colorado.edu/sims/html/gas-properties/latest/gas-properties_all.html?locale=es_PE",
      },
      {
        titulo: "Baja presión",
        descripcion: "Descubre cómo cambia la presión con la altitud en un fluido.",
        enlace: "https://phet.colorado.edu/sims/html/under-pressure/latest/under-pressure_all.html?locale=es",
      }
    ]

  },
  pruebaConocimiento: {
    titulo: "Práctica Módulo 1",
    descripcion: "Ejercicios interactivos para reforzar lo aprendido."
  },
  encuestaSatisfaccion: {
    titulo: "Prueba Final Módulo 1",
    descripcion: "Evalúa tus conocimientos con esta prueba."
  }
};
