    //traemos el dato guardado en la variable usuario en el localStorage con (.getItem)
const usuario = localStorage.getItem("usuario");

    //instanciar el elemento a modificar, traido desde el html
const msmCategorias = document.querySelector(".tituloCategorias");


    //al elemento que trajimos, con la propiedad .textContent, modificamos su 
    //contenido, el cual definimos usando un templateStrinng (nos permite concatenar variables y texto facilmente)
msmCategorias.textContent = `Hola ${usuario}! selecciona una categoría:`;

    //reiniciar el puntaje cada vez que se seleccione una categoria, seteando(guardando) 
    //el valor que queremos que tome, desde el localStorage.
localStorage.setItem ('puntajeFinal',0);
