const botonDesplegable = document.getElementById("desplegable");
const menuDesplegable = document.querySelector(".menu-desplegable");
const contactoBtn = document.getElementById("contacto-btn");
const contactDropdown = document.querySelector(".contact-dropdown");

botonDesplegable.addEventListener("click", function() {

    menuDesplegable.classList.toggle("active");

    console.log(menuDesplegable.classList);

});

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
