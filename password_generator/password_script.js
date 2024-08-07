// Función para generar una contraseña aleatoria
function generarContrasena(longitud, incluirMayusculas, incluirNumeros, incluirSimbolos) {
    const minusculas = 'abcdefghijklmnopqrstuvwxyz';
    const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let caracteres = minusculas;
    if (incluirMayusculas) {
        caracteres += mayusculas;
    }
    if (incluirNumeros) {
        caracteres += numeros;
    }
    if (incluirSimbolos) {
        caracteres += simbolos;
    }

    let contrasena = '';
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres[indiceAleatorio];
    }
    return contrasena;
}

// Manejador del formulario
document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const longitud = parseInt(document.getElementById('length').value);
    const incluirMayusculas = document.getElementById('uppercase').checked;
    const incluirNumeros = document.getElementById('numbers').checked;
    const incluirSimbolos = document.getElementById('symbols').checked;

    const contrasena = generarContrasena(longitud, incluirMayusculas, incluirNumeros, incluirSimbolos);
    document.getElementById('resultado').textContent = `Contraseña generada: ${contrasena}`;
});
