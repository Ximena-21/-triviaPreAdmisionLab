    //obtener los elementos html, instanciando las variables
const usuario = document.getElementById("usuario");
const btnIniciar = document.getElementById("botonIniciar");



  //definimos la funcion que va a ejecutar que se ingrese un nombre y nos lo guarde.
function iniciar () {

    //se guarda el valor del elemento input dentro de una constante
    const nombreUsuario = usuario.value;


    //se hace una condicion para evitar que si el input es vacio se ejcute la funcion(enviarnos a pag-siguiente) 
    if (nombreUsuario == "") {
        //le ponemos una alert 
        alert("Por Favor Ingresa Un Nombre");

        return;
    };


//es neecsario almacenar esta constante que continene el valor del elemento(usuario), 
//dentro de un diccionario (localStorage), lo cual nos va a permitir acceder a ella desde otro archivo js
localStorage.setItem("usuario",nombreUsuario);

//definimos dentro de la funcion, a donde nos desplazaremos al darle click
//con el uso de "location.href" nos permite movernos a otra pagina(la que le indiquemos en la ruta)
location.href = './paginas/categorias.html';

};


//asignamos al elemento boton (btnIniciar), un escuchador de eventos(.addEventListener)
//que al darle 'click' nos ejecute la funcion iniciar
btnIniciar.addEventListener("click",iniciar);