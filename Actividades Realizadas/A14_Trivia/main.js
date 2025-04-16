let resultado = document.getElementById("resultado");
preguntas = [];
puntuacion = 0;
index = 0;

datos();

// Función asincrónica para cargar las preguntas desde un archivo JSON
async function datos() { 
    try {
        // Realiza una petición al archivo "preguntas.json" y espera la respuesta
        preguntasjson = await fetch("preguntas.json");

        // Convierte la respuesta en un objeto JSON y lo almacena en "preguntas"
        preguntas = await preguntasjson.json();

        // Llama a la función para mostrar la primera pregunta en pantalla
        mostrarPregunta();
    } catch (error) { 
        // En caso de error (por ejemplo, si el archivo no se encuentra), se muestra en la consola
        console.log(error);
    }    
}

// Función para mostrar la pregunta actual y generar los botones de opciones
function mostrarPregunta() {
    // Inserta el texto de la pregunta actual en el elemento con ID "pregunta"
    document.getElementById("pregunta").textContent = preguntas[index].pregunta;

    // Selecciona el contenedor donde se agregarán las opciones de respuesta
    let cajaop = document.getElementById("opciones");
    cajaop.innerHTML = ""; // Limpia las opciones anteriores para evitar acumulación

    // Recorre el array de opciones de la pregunta actual
    preguntas[index].opciones.forEach(op => {
        // Crea un nuevo botón para cada opción de respuesta
        let boton = document.createElement("button");

        // Agrega una clase al botón para poder aplicarle estilos
        boton.classList.add("btn-opcion");

        // Establece el texto del botón como la opción actual
        boton.textContent = op;

        // Agrega un evento "click" al botón para llamar a "comprobPregunta" cuando se haga clic
        boton.addEventListener("click", function() {
            comprobPregunta(this); // Se pasa el botón clicado a la función
        });

        // Añade el botón creado dentro del contenedor de opciones
        cajaop.appendChild(boton);

        puntos = document.getElementById("puntuacion");
        puntos.innerHTML = "Puntuación: " + puntuacion;

    });
}

// Función para pasar a la siguiente pregunta
function sigPregunta() {  
    index++; // Incrementa el índice para avanzar a la siguiente pregunta

    // Inserta la nueva pregunta en el elemento con ID "pregunta"
    document.getElementById("pregunta").innerHTML = preguntas[index].pregunta;
    
    // Selecciona el contenedor de opciones y lo limpia para mostrar nuevas respuestas
    let cajaop = document.getElementById("opciones");
    cajaop.innerHTML = "";  
    resultado.innerHTML = "";  

    // Genera nuevamente los botones con las nuevas opciones de la pregunta actual
    preguntas[index].opciones.forEach(op => {
        let boton = document.createElement("button");
        boton.classList.add("btn-opcion"); // Agrega la clase al botón
        boton.textContent = op; // Establece el texto del botón

        // Agrega un evento "click" al botón para llamar a "comprobPregunta" cuando se seleccione una respuesta
        boton.addEventListener("click", function() {
            comprobPregunta(this); 
        });

        // Añade el botón dentro del contenedor de opciones
        cajaop.appendChild(boton);
    });    
};



function comprobPregunta(botonSeleccionado){ // Comprueba si la respuesta seleccionada es correcta
    const resCorrecta = preguntas[index].respuesta; //Se define la respuesta correcta en base el JSON
    const respuestas = document.querySelectorAll(".btn-opcion");

    // Deshabilita todos los botones para evitar cambios después de la selección
    respuestas.forEach(btn => btn.disabled = true); 

    if (resCorrecta === botonSeleccionado.textContent) { //Se verifica la respuesta

        // Se selecciona todos los botones para añadirles el ID de una respuesta incorrecta
        respuestas.forEach(btn => btn.setAttribute("id", "incorrecto"));

        // Al boton seleccionado se le añade el ID de una respuesta correcta
        botonSeleccionado.setAttribute("id", "correcto");

        resultado.textContent = "¡Correcto!";
        resultado.style.color = "green";

        puntuacion++;
        puntos.innerHTML= "Puntuación: " +puntuacion


    } else { // Si la respuesta seleccionada no es la correcta se entra al ELSE

        //Se recorrera cada uno de los botones para agregar el ID correspondiente
        document.querySelectorAll(".btn-opcion").forEach(btn => {
            btn.setAttribute("id", "incorrecto");
            if (btn.textContent === resCorrecta) {
                btn.setAttribute("id", "correcto");
            }
        });
        resultado.textContent = "Incorrecto";
        resultado.style.color = "red";

    }
}