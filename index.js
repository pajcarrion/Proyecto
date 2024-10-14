const botonesVisit = document.querySelectorAll(".boton_card_1");
const popups = document.querySelectorAll(".popup");


//Botones
const botonRegistro = document.querySelector('#boton_registro');
const botonVisit1 = document.querySelector('#boton_visit');
const botonVisit2 = document.querySelector('#boton_visit2');
const botonVisit3 = document.querySelector('#boton_visit3');
const botonLearnAcco = document.querySelector('#boton_learnAcco');
const botonLearnTransport = document.querySelector('#boton_learnTrans');
const botonFavorites = document.querySelector("#boton_favorites");
const botonPlaces = document.querySelector('#boton_places');
const botonLogin = document.querySelector('#boton_login');


// Modales y contenedores
const popupRegistro = document.querySelector('#register');
const popupLogin = document.querySelector('#login');
const popUp = document.querySelector('#popUp1');
const popUp2 = document.querySelector('#popUp2');
const popUp3 = document.querySelector('#popUp3');
const popUpAcco = document.querySelector('#popUpAcco');
const popUpTransport = document.querySelector('#popUpTrans');
const contenedorCards = document.querySelector('#contenedor_card');

//X para cerrar Popups
const spans = document.querySelectorAll('.cerrar');

//Variables para guardar los colores orignales de los botones
let botonOriginalColor = botonVisit1.style.backgroundColor;
let botonOriginalRegistro = botonRegistro.style.backgroundColor;
let botonOriginalAcco = botonLearnAcco.style.backgroundColor;
let botonOriginalTransport = botonLearnTransport.style.backgroundColor;


// Listeners y Funciones para hacer visible los modales y cambiar el color del botón mientras esté presionado
botonVisit1.addEventListener('click', function aparecePopup() {
    popUp.style.display = 'block';
    botonVisit1.style.backgroundColor = "Orange";
});

botonVisit2.addEventListener('click', function aparecePopup() {
    popUp2.style.display = 'block';
    botonVisit2.style.backgroundColor = "Orange";
});

botonVisit3.addEventListener('click', function aparecePopup() {
    popUp3.style.display = 'block';
    botonVisit3.style.backgroundColor = "Orange";
});

botonRegistro.addEventListener('click', function aparecePopup() {
    popupRegistro.style.display = 'block';
    botonRegistro.style.backgroundColor = "Orange";
});

botonLearnAcco.addEventListener('click', function aparecePopup() {
    popUpAcco.style.display = 'block';
    botonLearnAcco.style.backgroundColor = "Orange";
});

botonLearnTransport.addEventListener('click', function aparecePopup() {
    popUpTransport.style.display = 'block';
    botonLearnTransport.style.backgroundColor = "Orange";
})

botonFavorites.addEventListener('click', function ocultarCards(){
    contenedorCards.style.visibility = 'hidden';
})

botonPlaces.addEventListener('click', function mostrarCards(){
    contenedorCards.style.visibility = 'visible';
})

botonLogin.addEventListener('click', function mostrarLogin(){
    popupLogin.style.display = 'block';


})

  // Usar foreach para agrupar los modales para ocultarlos con la X. Se añade parentElement para identificar cualquier contenedor padre que posea el span. Se agrega la función la posibilidad de volver al color original del botón.
spans.forEach(span => {
    span.addEventListener('click', function cierraPopupX() {
        span.parentElement.parentElement.style.display = 'none';
        botonesVisit.forEach(boton => {
            boton.style.backgroundColor = botonOriginalColor;
            botonRegistro.style.backgroundColor = botonOriginalRegistro;
            botonLearnAcco.style.backgroundColor = botonOriginalAcco;
            botonLearnTransport.style.backgroundColor = botonOriginalTransport;
        });     
    });
});


// Funcion para cerrar el modal presionando por fuera de él en alguna parte aleatoria de la pantalla.
window.addEventListener('click', function(event) {
    popups.forEach(popUp => {
    if (event.target == popUp) {
        popUp.style.display = 'none'; 
        botonesVisit.forEach(boton => {
        boton.style.backgroundColor = botonOriginalColor;
        botonRegistro.style.backgroundColor = botonOriginalRegistro; 
        botonLearnAcco.style.backgroundColor = botonOriginalAcco;
        botonLearnTransport.style.backgroundColor = botonOriginalTransport;
        });
    }
    });
});

// Función para que los botones en el nav genere un scroll directo al section que aluda el botón. Se agrega un behavior, para darle suavidad a la acción de scroll.
function scrollHasta(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    }
}