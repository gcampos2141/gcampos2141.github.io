let arreglo = ["#900C3F", "#C70039", "#FF5733", "#FFC300", "#DAF7A6"];
let contenedor = document.querySelector(".container");

for (let i = 0; i < 200; i++) {
    let cuadrado = document.createElement("div");
    cuadrado.classList.add("square");
    contenedor.appendChild(cuadrado);
    cuadrado.addEventListener("mouseover", function colorRand() {
        let colorAleatorio = arreglo[Math.floor(Math.random() * arreglo.length)];
        cuadrado.style.backgroundColor = colorAleatorio;
        cuadrado.style.pointerEvents = "none";
    });

    cuadrado.addEventListener("mouseout", function colorEnd() {
        cuadrado.style.background = "#111";
    });
}