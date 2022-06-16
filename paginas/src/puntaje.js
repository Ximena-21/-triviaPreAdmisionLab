//declaramos la variable que contiene al aelemento del html que va a guardar el texto
//del puntaje
const puntajeFinal = document.getElementById ("textoPuntaje");
/* console.log(puntajeFinal) */

//obtenemos del dicionarioLocal 'localStorage', el ususario y el puntaje que guardamos
const usuario = localStorage.getItem('usuario');
const puntaje = localStorage.getItem("puntajeFinal");


//mediante un templateString, concatenadmoms el mensaje que queremos que reciba el usuario
//le asignamos a la varibale puntajeFinal medinate el metodo textContent, que reescriba su contenidotexto
//que tenia en la estructura del html
puntajeFinal.textContent = `¡${usuario}! Tu puntaje es:  ${puntaje}`;