document.addEventListener("DOMContentLoaded", function () {
    let boton = document.getElementById("boton");
    let searchInput = document.createElement("input");
    let movieList = document.getElementById("movieList");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("id", "searchMovie");
    searchInput.setAttribute("placeholder", "Buscar película...");
    searchInput.style.marginTop = "10px";
    document.querySelector(".container").insertBefore(searchInput, movieList);

    function mostrarPeliculas() {
        let movies = localStorage.getItem("movies");
        let moviesArray = movies ? JSON.parse(movies) : [];
        
        movieList.innerHTML = "";

        if (moviesArray.length === 0) {
            movieList.innerHTML = "<p>No hay películas registradas.</p>";
            return;
        }

        moviesArray.forEach((movie, index) => {
            let movieDiv = document.createElement("div");
            movieDiv.classList.add("movie");
            movieDiv.innerHTML = `
                <h3>${movie.title}</h3>
                <p><strong>Género:</strong> ${movie.genre}</p>
                <p><strong>Año:</strong> ${movie.year}</p>
                <p><strong>Calificación:</strong> ${movie.rating}</p>
            `;
            movieList.appendChild(movieDiv);
        });
    }

    function agregarPelicula() {
        let title = document.getElementById("movieTitle").value;
        let genre = document.getElementById("movieGenre").value;
        let year = document.getElementById("movieYear").value;
        let rating = document.getElementById("movieRating").value;
    
        if (title === "" || genre === "" || year === "" || rating === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }
    
        let movies = localStorage.getItem("movies");
        let moviesArray = movies ? JSON.parse(movies) : [];
        
        moviesArray.push({ title, genre, year, rating });
        localStorage.setItem("movies", JSON.stringify(moviesArray));
    
        document.getElementById("movieTitle").value = "";
        document.getElementById("movieGenre").value = "";
        document.getElementById("movieYear").value = "";
        document.getElementById("movieRating").value = "";
    
        alert("Película agregada correctamente");
        mostrarPeliculas();
    }

    function eliminarPelicula(index) {
        let movies = JSON.parse(localStorage.getItem("movies"));
        movies.splice(index, 1);
        localStorage.setItem("movies", JSON.stringify(movies));
        mostrarPeliculas();
    }

    function buscarPeliculas() {
        let filter = searchInput.value.toLowerCase();
        let movies = localStorage.getItem("movies");
        let moviesArray = movies ? JSON.parse(movies) : [];
        
        movieList.innerHTML = "";

        let filteredMovies = moviesArray.filter(movie => movie.title.toLowerCase().includes(filter));

        if (filteredMovies.length === 0) {
            movieList.innerHTML = "<p>No se encontraron películas.</p>";
            return;
        }

        filteredMovies.forEach((movie, index) => {
            let movieDiv = document.createElement("div");
            movieDiv.classList.add("movie");
            movieDiv.innerHTML = `
                <h3>${movie.title}</h3>
                <p><strong>Género:</strong> ${movie.genre}</p>
                <p><strong>Año:</strong> ${movie.year}</p>
                <p><strong>Calificación:</strong> ${movie.rating}</p>
            `;
            movieList.appendChild(movieDiv);
        });
    }

    boton.addEventListener("click", agregarPelicula);
    searchInput.addEventListener("input", buscarPeliculas);
    mostrarPeliculas();
});
