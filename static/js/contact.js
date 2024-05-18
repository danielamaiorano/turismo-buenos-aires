function validarFormulario() {
    debugger;
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;
    let motivo = document.getElementById('motivo').value;
    let mensaje = document.getElementById('mensaje').value;
    let isValid = true;
    if (nombre.trim() == '') {
        //alert('Por favor, ingresa tu nombre.');
        document.getElementById("msgErrorNombre").style.display = "inline";
        isValid = false;
    }

    if (email.trim() == '') {
        alert('Por favor, ingresa tu correo electrónico.');
        return false;
    }

    if (telefono.trim() == '') {
        alert('Por favor, ingresa tu número de teléfono.');
        return false;
    }

    if (motivo.trim() == '') {
        alert('Por favor, selecciona un motivo de contacto.');
        return false;
    }

    if (mensaje.trim() == '') {
        alert('Por favor, ingresa tu mensaje.');
        return false;
    }

    return isValid;
}