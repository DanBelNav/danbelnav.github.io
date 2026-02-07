// Efecto de Header: Se esconde al bajar, aparece al subir
let ubicacionPrincipal = window.pageYOffset;

window.onscroll = function() {
    let desplazamientoActual = window.pageYOffset;
    
    if (ubicacionPrincipal >= desplazamientoActual) {
        document.querySelector(".navbar").style.top = "0";
    } else {
        document.querySelector(".navbar").style.top = "-100px";
    }
    ubicacionPrincipal = desplazamientoActual;
}

// Suavizado extra para los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});