document.addEventListener("DOMContentLoaded", () => {

    const filtros = document.querySelectorAll(".filters button");

    filtros.forEach(boton => {

        boton.addEventListener("click", () => {

            filtros.forEach(item => {
                item.classList.remove("activo");
            });

            boton.classList.add("activo");

        });

    });

    const tarjetas = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entradas) => {

        entradas.forEach(entrada => {

            if(entrada.isIntersecting){

                entrada.target.classList.add("mostrar");

            }

        });

    },{
        threshold:0.15
    });

    tarjetas.forEach(card => {
        observer.observe(card);
    });

    const botonesProducto = document.querySelectorAll(".card button");

    botonesProducto.forEach(boton => {

        boton.addEventListener("click", () => {

            window.location.href = "producto.html";

        });

    });

});

const botonDesplegable = document.getElementById("desplegable");
const menuDesplegable = document.querySelector(".menu-desplegable");

const contactoBtn = document.getElementById("contacto-btn");
const contactDropdown = document.querySelector(".contact-dropdown");

if(contactoBtn && contactDropdown){

    contactoBtn.addEventListener("click", function(e){

        e.stopPropagation();

        contactDropdown.classList.toggle("active");

    });

    document.addEventListener("click", function(e){

        if(
            !contactDropdown.contains(e.target) &&
            !contactoBtn.contains(e.target)
        ){

            contactDropdown.classList.remove("active");

        }

    });

}

botonDesplegable.addEventListener("click", function() {

    menuDesplegable.classList.toggle("active");

    console.log(menuDesplegable.classList);

});