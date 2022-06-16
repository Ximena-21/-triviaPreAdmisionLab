    //definimos las preguntas dentro de una matriz, compuesta por objetos de cada pregunta, y esta con sus respectivas propiedades
    //es decir, usamos arrays, y objetos para definir un diccionario de preguntas
const preguntas = [
    {  
        contenido: "Cuál es el país mas grande de latinoamerica?",
        respuestas: [
          {id: "a", respuesta: "Brasil"},
          {id: "b", respuesta: "Colombia"},
          {id: "c", respuesta: "Argentina"},
          {id: "d", respuesta: "Venezuela"},
        ],
        correcta: "a", 
    },
    {
        contenido: "Cuál es la Cápital de Afganistan?",
        respuestas: [
          {id: "a", respuesta: "Tripolia"},
          {id: "b", respuesta: "Kabul"},
          {id: "c", respuesta: "Argel"},
          {id: "d", respuesta: "Islamabaol"},
        ],
        correcta: "b", 
    },
   {
        contenido: "País más poblado del mundo?",
        respuestas: [
          {id: "a", respuesta: "Nepal"},
          {id: "b", respuesta: "Kenia"},
          {id: "c", respuesta: "china"},
          {id: "d", respuesta: "India"},
        ],
        correcta: "c", 
    },
];


    //inicializamos la variable contenedor, trayendo del html, el div creadopara guardar
    //cada pregunta
const contenedor = document.querySelector(".contenedorPreguntas");

    //creamos un elemento <div>, haciendo uso del metodo .createElement, 
    //el cual permite crear elementos desde js en el documento html
const cajaPregunta = document.createElement('div');
    //le asignamos una clase al elemento <div> que acabamos de crear
    //con el metodo className
cajaPregunta.className = "pregunta";


    //inicializamos una variable let, para establecer el index de la pregunta
    //a la cual queremos acceder
let preguntaActual = 0;
    
//instanciamos una variable para registrar que se tenga seleccionada una rta, 
    //si no esta seleccionada toma el valor false
let registroRespuestaActual = false;
    
//instaciamos una variable let para puntaje, como acumulador de puntaje
let puntaje = 0;



    //establecemos una funcion que nos renderice cada pregunta que compone el diccionario de preguntas
function renderizarPregunta () {
    

    //cada vez que rendericemos una pregunta, se requiere que no haya ninguna repsuesta seleccionada
    //es decir limpie el registro anterior
    registroRespuestaActual = false;
    //declaramos la variable pregunta, para poder acceder a cada elemento de la lista (diccionario de preguntas)
    //mediante su index(preguntaAcutal), el cual va a cambiande acuerdo a la funcion "siguientePregunta"
    const pregunta = preguntas[preguntaActual];
    
    //instanciamos una variable contenido haciendo uso del template strings, lo cual            
    //nos permite concatenar en linea, y haciendo uso de los elemento html
    //y definimos lo que va a ir dentro de cada elemento,haciendo uso de la variable pregunta 
    //y accediento a sus propiedades como un objeto
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

    //haciendo uso de la propiedad .innerHTML, sobreescribimos todo el contenido de la variable contenido, 
    //en el elemento html "cajaPregunta" creado anteriormente
  cajaPregunta.innerHTML = contenido;
    //con el metodo .appendChild, agregamos como hijo todo el contenido dentro de "cajaPregunta" al 
    //div que creamos en html y llamamos en js (contenedor)
  contenedor.appendChild(cajaPregunta);

    //instanciamos una varianle que nos guarde el "button", creado en la variable contenido
    //con el querySelector mediante el id(#)
  const siguiente = cajaPregunta.querySelector('#siguiente')
  //le asignamos un escuchador que ejecute la funcion siguientePregunta
  siguiente.addEventListener('click',siguientePregunta)




  //para que cada opcion de respuesta se le aplique la funcion de verificar respuesta accedemos a todos mediante 
    //el metodo (querySelectorAll), lo cual nos regresa una lista de todos los elementos que tienen esta clase
  const listaBotonesRtas = cajaPregunta.querySelectorAll('.respuesta');
    //luego esta lista que nos devuelve la convertimos en un array para poder acceder a ella mediante metodosArray,
    //usando el .from
  const arrayBotonesRtas = Array.from(listaBotonesRtas);
    //luego a este array le aplicamos el metodo .forEach, lo cual nos va a permitir recorrer cada elemento que
    //conforma ese arary (arrayBotonesRtas), y aplicarle la funcion a cada uno
  arrayBotonesRtas.forEach((boton)=>{
    //dentro de la funcion, le asignamos un evento(addEventListener), a cada boton(elementodel arrayBotonesRtas)
    //que al darle click nos ejecute la funcion verificarRespuesta <Linea 155>
    boton.addEventListener('click',verificarRespuesta)
  });
  
};


    //establecemos  una funcion que podamos asignar para que al darle click, nos lleve a la pregunta siguiente
function siguientePregunta () {

    //reasignamos el valor de la variable preguntaActual, definida en la linea 51
    //donde le decimos que sea igual al valor declarado + 1 (es decir, que aumente en uno cada vez 
    //que se ejecute esta funcion )
  preguntaActual = preguntaActual + 1;

    //condicionamos mediante el uso de if-else, que si el valor de preguntaActual es mayor al largo
    //de todo nuestro dicccionario (preguntas), se ejecute la funcion renderizarfinal <linea 143>
    if (preguntaActual>preguntas.length -1){
        renderizarFinal();
    //de lo contrario ejecute la funcion renderizarPregunta <Linea 61>
  } else {
        renderizarPregunta() 
  };
};

renderizarPregunta();




    //creamos una funcion para cuando ya no hayan mas preguntas, es decir se cumpla la condicion de
    //la funcion siguientePregunta, nos envie a la pagina final (puntaje)
function renderizarFinal () {
    //establecemos la ruta con el uso de la propiedad location.href
    //nos permite redirigirnos a otra pagina desde js
  location.href = './puntaje.html';
};





    //creamos una funcion que nos permitiera validar si la repsuesta es correcta y si es correcta
    //tuviera una accion de cambio en su estilo
function verificarRespuesta (evento) {

    //registroRespuestaActual representa que no se ha seleccionado ninguna rta y por lo tanto
    //se va a ejecutar la funcion  bajo las condiciones estabkecidas <linea 175>
  if (registroRespuestaActual == false) {
    
        //declaramos esta variable para poder identificar la respuesta que se ha cliqueado
        //mediante el evento que se genera al hacer click, y accediendo a su propiedad target
        //que nos permite identificar a quien estamos llamando
        const botonClickeado = evento.target;
        //volvemos a inicializar la variable pregunta para poder saber a que pregunta es la
        //la que estamos contestando
        const pregunta = preguntas[preguntaActual];
    

        //condicionamos que si el id del boton cliqueado es igual a la propiedad "correcta" 
        //de la pregunta (pregunta.correcta), 
        if (botonClickeado.id == pregunta.correcta) {
            //si se cumple la condicion coja el boton cliqueado, acceda a su estilo
            //y a su propiedaad background y lo pinte de verde
        botonClickeado.style.background = '#53BF9D';
        //ademas reasigne a la variable puntaje y le sume 100
        puntaje = puntaje + 100;
        } else {
            //si no se cumple la condicion solo pinte al la rta selecionada de rojo
        botonClickeado.style.background = '#F94C66';
        }

        //se reasigna el valor de la varible regustroRespuestaActual a true, lo que quiere decir 
        //que ya hay una rtaseleccionada por lo tanto no seleccione mas
                    //sino se hiciera esto podria pintar todas las rtas
        registroRespuestaActual = true;
    };

    console.log(puntaje);
    //enviamos la variable puntaje final al localStorage y se va a guardar como puntaje
    //para poder acceder a ella desde otras paginas
    localStorage.setItem('puntajeFinal',puntaje);
};