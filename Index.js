const botonDesplegable = document.getElementById("desplegable");

const menuDesplegable = document.querySelector(".menu-desplegable");

botonDesplegable.addEventListener("click", function(e){

    e.stopPropagation();

    menuDesplegable.classList.toggle("active");

});



document.addEventListener("click", function(e){

    if(
        !menuDesplegable.contains(e.target) &&
        !botonDesplegable.contains(e.target)
    ){

        menuDesplegable.classList.remove("active");

    }

});


const header = document.querySelector(".header");

window.addEventListener("scroll", function(){

    if(window.scrollY > 40){

        header.classList.add("header-scroll");

    }else{

        header.classList.remove("header-scroll");

    }

});


const enlaces = document.querySelectorAll('a[href^="#"]');

enlaces.forEach(function(enlace){

    enlace.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


window.addEventListener("load", function(){

    const heroContent = document.querySelector(".content-hero");

    const heroImage = document.querySelector(".img-hero");

    heroContent.classList.add("show-hero");

    heroImage.classList.add("show-hero");

});