const form = document.getElementById("contactForm");

const nombre = document.getElementById("nombre");
const cedula = document.getElementById("cedula");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const celular = document.getElementById("celular");
const observaciones = document.getElementById("observaciones");

const contador = document.getElementById("contador");

const regexNombre =
/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

const regexNumeros =
/^[0-9]+$/;

const regexCorreo =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;


observaciones.addEventListener("input", () => {
    contador.textContent = observaciones.value.length;
});


nombre.addEventListener("input", () => {
    nombre.value = nombre.value.replace(
        /[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g,
        ""
    );
});

cedula.addEventListener("input", () => {
    cedula.value = cedula.value.replace(/\D/g, "");
});

telefono.addEventListener("input", () => {
    telefono.value = telefono.value.replace(/\D/g, "");
});

celular.addEventListener("input", () => {
    celular.value = celular.value.replace(/\D/g, "");
});

function setError(input, mensaje){

    input.parentElement
    .querySelector(".error")
    .textContent = mensaje;
}

function clearError(input){

    input.parentElement
    .querySelector(".error")
    .textContent = "";
}

form.addEventListener("submit", function(e){

    e.preventDefault();

    let valido = true;

    document
    .querySelectorAll(".error")
    .forEach(error => error.textContent = "");

    /* Nombre */

    if(nombre.value.trim() === ""){
        setError(nombre,"Ingrese sus nombres y apellidos");
        valido = false;
    }
    else if(!regexNombre.test(nombre.value)){
        setError(nombre,"Solo letras y espacios");
        valido = false;
    }

    if(!regexNumeros.test(cedula.value)){
        setError(cedula,"Solo números");
        valido = false;
    }

    if(cedula.value.length < 6){
        setError(cedula,"Mínimo 6 dígitos");
        valido = false;
    }

    /* Correo */

    if(!regexCorreo.test(correo.value)){
        setError(correo,"Correo inválido");
        valido = false;
    }

    /* Celular */

    if(celular.value.length !== 10){
        setError(
            celular,
            "Debe tener 10 dígitos"
        );
        valido = false;
    }

    document
    .querySelectorAll("select[required]")
    .forEach(select => {

        if(select.value === ""){

            setError(
                select,
                "Este campo es obligatorio"
            );

            valido = false;
        }
    });

    if(!document.getElementById("politica").checked){

        alert(
            "Debe aceptar el tratamiento de datos."
        );

        valido = false;
    }

    if(valido){

        alert(
            "Formulario enviado correctamente."
        );

        form.reset();
        contador.textContent = "0";
    }

});