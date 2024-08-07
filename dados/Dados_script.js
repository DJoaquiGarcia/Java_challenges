
function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

function lanzarDados() {
    const dado1 = lanzarDado();
    const dado2 = lanzarDado();
    const suma = dado1 + dado2;
    return { dado1, dado2, suma };
}


document.getElementById('lanzarDadosBtn').addEventListener('click', function() {
    const resultado = lanzarDados();
    const mensaje = `Dado 1: ${resultado.dado1}, Dado 2: ${resultado.dado2}, Suma: ${resultado.suma}`;
    document.getElementById('resultado').textContent = mensaje;
});
