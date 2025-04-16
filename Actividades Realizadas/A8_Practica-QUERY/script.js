    const images = [
        "https://c4.wallpaperflare.com/wallpaper/383/154/335/jdm-car-simple-background-mazda-rx-7-wallpaper-preview.jpg",
        "https://wallpapers.com/images/hd/anime-car-background-7uoovzqog7dt622s.jpg",
        "https://c4.wallpaperflare.com/wallpaper/77/450/408/japanese-cars-datsun-240z-datsun-japan-wallpaper-preview.jpg",
        "https://s0.smartresize.com/wallpaper/180/416/HD-wallpaper-jdm-vehicles.jpg",
        "https://wallpapercave.com/wp/wp8320342.jpg"
    ];

    let currentIndex = 0;

    let cajitaIMG = document.querySelector(".slide-img");
    let sig = document.querySelector(".botonsig");
    let ant = document.querySelector(".botonanterior");

    ant.style.display = "none";

    sig.addEventListener("click", function() {
        currentIndex++;
        cajitaIMG.setAttribute("src", images[currentIndex]);

        if (currentIndex === images.length - 1) {
            sig.style.display = "none";
        }
        ant.style.display = "inline-block";
    });

    ant.addEventListener("click", function() {
        currentIndex--;
        cajitaIMG.setAttribute("src", images[currentIndex]);
        if (currentIndex === 0) {
            ant.style.display = "none";
        }
        sig.style.display = "inline-block";
    });

        // function updateSlider() {
        //     document.getElementById("sliderImage").src = images[currentIndex];
        //     document.getElementById("prevBtn").disabled = currentIndex === 0;
        //     document.getElementById("nextBtn").disabled = currentIndex === images.length - 1;
        // }

        // function nextSlide() {
        //     if (currentIndex < images.length - 1) {
        //         currentIndex++;
        //         updateSlider();
        //     }
        // }

        // function prevSlide() {
        //     if (currentIndex > 0) {
        //         currentIndex--;
        //         updateSlider();
        //     }
        // }
