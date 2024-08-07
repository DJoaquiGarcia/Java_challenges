function sortHouse() {
    let puntosGryffindor = 0;
    let puntosSlytherin = 0;
    let puntosHufflepuff = 0;
    let puntosRavenclaw = 0;

    const respuestas = [
        document.getElementById('question1').value,
        document.getElementById('question2').value,
        document.getElementById('question3').value,
        document.getElementById('question4').value,
        document.getElementById('question5').value,
    ];

    respuestas.forEach(respuesta => {
        switch (respuesta) {
            case 'a': puntosGryffindor++; break;
            case 'b': puntosSlytherin++; break;
            case 'c': puntosHufflepuff++; break;
            case 'd': puntosRavenclaw++; break;
        }
    });

    let casa = '';
    let maxPuntos = Math.max(puntosGryffindor, puntosSlytherin, puntosHufflepuff, puntosRavenclaw);

    if (maxPuntos === puntosGryffindor) {
        casa = 'Gryffindor';
    } else if (maxPuntos === puntosSlytherin) {
        casa = 'Slytherin';
    } else if (maxPuntos === puntosHufflepuff) {
        casa = 'Hufflepuff';
    } else if (maxPuntos === puntosRavenclaw) {
        casa = 'Ravenclaw';
    }

    document.getElementById('result').innerText = '¡Felicidades! ¡Has sido seleccionado para ' + casa + '!';
}
