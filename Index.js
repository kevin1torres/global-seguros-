const botonDesplegable = document.getElementById("desplegable");
const menuDesplegable = document.querySelector(".menu-desplegable");

botonDesplegable.addEventListener("click", function() {

    menuDesplegable.classList.toggle("active");

    console.log(menuDesplegable.classList);

});