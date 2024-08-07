// Función para validar el correo electrónico
function validarEmail(email) {
    const atSymbolIndex = email.indexOf('@');
    const dotSymbolIndex = email.lastIndexOf('.');

    if (atSymbolIndex > 0 && 
        dotSymbolIndex > atSymbolIndex + 1 && 
        dotSymbolIndex < email.length - 1) {
        return true;
    }
    return false;
}

// Manejador del formulario
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener el valor del formulario
    const email = document.getElementById('email').value;

    // Validar el correo electrónico
    const esValido = validarEmail(email);

    // Mostrar el resultado
    const resultado = esValido ? "El correo electrónico es válido." : "El correo electrónico no es válido.";
    document.getElementById('resultado').textContent = resultado;
});
