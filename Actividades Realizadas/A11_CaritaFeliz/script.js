let contenedor = document.getElementById("rating");

// Genera varios elementos del mismo tipo
for (let i = 1; i < 10; i++) {
    let imagen = document.createElement("img");
    imagen.src = "resources/alegre.png";
    contenedor.appendChild(imagen);
    imagen.classList.add("item");
    imagen.setAttribute("pos", i);
    imagen.id = "item-" + i;

    //Agregar Evento al objeto (Cambio de imagen)
    imagen.addEventListener("mouseover", function() {
       let posicion = parseInt(this.getAttribute("pos"));
       console.log(posicion);
       for (let j = 1; j < 10; j++) {
            const nuevo = document.getElementById("item-" + j);
            nuevo.src = "resources/alegre.png";
       }
       for (let j = 1; j <= posicion; j++) {
            const nuevo = document.getElementById("item-" + j);
            nuevo.src = "resources/libro-abierto.png";
       }
    });
}
