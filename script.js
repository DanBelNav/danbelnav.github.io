function verificarPassword() {
    const input = document.getElementById('passwordInput').value;
    const errorMsg = document.getElementById('mensaje-error');
    
    if (input === "1234") {
        document.getElementById('pantalla-login').classList.add('oculto');
        document.getElementById('contenido-secreto').classList.remove('oculto');
    } else {
        errorMsg.style.display = 'block';
    }
}

function cerrarSesion() {
    document.getElementById('passwordInput').value = '';
    document.getElementById('mensaje-error').style.display = 'none';
    document.getElementById('contenido-secreto').classList.add('oculto');
    document.getElementById('pantalla-login').classList.remove('oculto');
}

function cambiarModo() {
    document.body.classList.toggle('modo-oscuro');
}

// Detectar tecla Enter
document.getElementById("passwordInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        verificarPassword();
    }
});