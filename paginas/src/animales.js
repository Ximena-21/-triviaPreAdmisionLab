// definicion de las preguntas como objetos - destro de cada objeto encontraremos un array con las respuestas.
const preguntas = [ 
  {
     contenido: "¿Cuál de los siguientes animales, no es un animal doméstico?",
      respuestas: [
        { id: "a", respuesta: "Gato"},
        { id: "b", respuesta: "Perro"},
        { id: "c", respuesta: "Conejillo de indias"},
        { id: "d", respuesta:"Avetruz"},
      ],
      correcta: "d",  
    },
    {
      contenido: "¿Cuál de los siguientes animales, no es un mamífero?",
      respuestas: [
        {id: "a", respuesta: "Vaca"},
        {id: "b", respuesta: "Serpiente"},
        {id: "c", respuesta: "Jirafa"},
        {id: "d", respuesta: "Rinoceronte"},
      ],
      correcta: "b"
    },
    {
      contenido: "¿Cuál de los siguientes animales, no es acuático?",
      respuestas: [
        {id: "a", respuesta: "Pinguino"},
        {id: "b", respuesta: "Huron"},
        {id: "c", respuesta: "Foca"},
        {id: "d", respuesta: "Camaleon"},
      ],
      correcta: "d"
    },
  
/*     {
      contenido:"cual de los siguientes animales no es acuatico?", 
       respuesta: [
        {id: "a", respuesta: "pinguino"},
        {id: "b", respuesta: "huron"},
        {id: "c", respuesta: "foca"},
        {id: "d", respuesta: "camaleon"},
      ],
      correcta:"d",
    }, */

];


const contenedor = document.querySelector(".contenedorPreguntas");
const cajaPregunta = document.createElement('div');
cajaPregunta.className = "pregunta";


let preguntaActual = 0;
let registroRespuestaActual = false; 
let puntaje = 0;



function renderizarPregunta () {

  registroRespuestaActual = false;
  const pregunta = preguntas[preguntaActual];

  
  const contenido = `
    <h4 class="textoPregunta">${pregunta.contenido}</h4>
    <div class = "contenedorRespuestas">
      <button class = "respuesta boton" id = "a">${pregunta.respuestas[0].respuesta}</button>
      <button class = "respuesta boton" id = "b">${pregunta.respuestas[1].respuesta}</button>
      <button class = "respuesta boton" id = "c">${pregunta.respuestas[2].respuesta}</button>
      <button class = "respuesta boton" id = "d">${pregunta.respuestas[3].respuesta}</button>
    </div>
    <button id="siguiente">Siguiente</button>
    `


  cajaPregunta.innerHTML = contenido;
  contenedor.appendChild(cajaPregunta);


  const siguiente = cajaPregunta.querySelector('#siguiente')
  siguiente.addEventListener('click',siguientePregunta)

  
  const listaBotonesRtas = cajaPregunta.querySelectorAll('.respuesta');
  const arrayBotonesRtas = Array.from(listaBotonesRtas);

  
  arrayBotonesRtas.forEach((boton)=>{
    boton.addEventListener('click',verificarRespuesta)
  });
};



function siguientePregunta () {

  preguntaActual = preguntaActual + 1;

    if (preguntaActual > preguntas.length-1){
    renderizarFinal();

  } else {
    renderizarPregunta()  
  };
};

renderizarPregunta();




function renderizarFinal () {

  location.href = './puntaje.html';
};





function verificarRespuesta (evento) {

  if (registroRespuestaActual == false) {

      const botonClickeado = evento.target;
      const pregunta = preguntas[preguntaActual];

      if (botonClickeado.id == pregunta.correcta) {
        botonClickeado.style.background = '#53BF9D';
        puntaje = puntaje + 100;
      } else {
        botonClickeado.style.background = '#F94C66';
      }
    
    registroRespuestaActual = true;
  };
  
   localStorage.setItem('puntajeFinal',puntaje);
};