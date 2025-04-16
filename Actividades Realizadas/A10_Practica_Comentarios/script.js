let arreglo = [];

function crearNota(event) {
    if (event.key === "Enter" && event.target.value !== "") {
        // Crear un nuevo objeto comentario
        const nuevoComentario = {
            texto: event.target.value,
            likes: 0
        };

        // Agregar el nuevo comentario al arreglo
        arreglo.push(nuevoComentario);

        // Limpiar el input
        event.target.value = "";

        // Actualizar la lista de notas
        actualizarNotas();
    }
}

// Función para actualizar las notas en el contenedor
function actualizarNotas() {
    let contenedor = document.querySelector(".contenedor");
    contenedor.innerHTML = ""; // Limpiar el contenedor antes de redibujar

    arreglo.forEach((i, index) => {
        let caja = document.createElement("div"); // Crear un div
        caja.textContent = i.texto; // Agregar el texto de la nota
        caja.style.padding = "10px";
        caja.style.border = "1px solid black";
        caja.style.margin = "5px";

        let botonLike = document.createElement("button"); // Botón LIKE
        botonLike.textContent = `-- LIKE (${i.likes}) --`;
        botonLike.style.marginLeft = "10px";

        let botonEliminar = document.createElement("button"); // Botón ELIMINAR
        botonEliminar.textContent = "-- ELIMINAR --";
        botonEliminar.style.marginLeft = "10px";

        // Evento para aumentar likes
        botonLike.addEventListener("click", () => {
            arreglo[index].likes++;
            actualizarNotas(); // Actualizar la vista
        });

        // Evento para eliminar la nota
        botonEliminar.addEventListener("click", () => {
            arreglo.splice(index, 1); // Eliminar el comentario del arreglo
            actualizarNotas(); // Redibujar la lista
        });

        caja.appendChild(botonLike);
        caja.appendChild(botonEliminar);
        contenedor.appendChild(caja);
    });
}

// Agregar el event listener al input
document.getElementById("entrada").addEventListener("keydown", crearNota);
