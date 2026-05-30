const tarjetas = document.querySelectorAll(
    ".tarjeta-cobertura, .paso, .dato"
);

tarjetas.forEach(tarjeta => {

    tarjeta.addEventListener("mouseenter", () => {

        tarjeta.style.transform =
        "translateY(-8px)";

    });

    tarjeta.addEventListener("mouseleave", () => {

        tarjeta.style.transform =
        "translateY(0px)";

    });

});

const elementos = document.querySelectorAll(
    ".tarjeta-cobertura, .paso, .imagen-galeria, .dato"
);

const mostrarElementos = () => {

    elementos.forEach(elemento => {

        const posicion =
        elemento.getBoundingClientRect().top;

        const pantalla =
        window.innerHeight - 100;

        if(posicion < pantalla){

            elemento.classList.add(
                "mostrar"
            );

        }

    });

};

window.addEventListener(
    "scroll",
    mostrarElementos
);

mostrarElementos();