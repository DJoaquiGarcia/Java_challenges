function convertToFahrenheit() {
    const celsius = document.getElementById('celsius').value;
    if (celsius === '') {
        document.getElementById('result').innerText = 'Por favor, ingrese una temperatura en grados Celsius.';
        return;
    }
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    document.getElementById('result').innerText = `${celsius}°C son ${fahrenheit.toFixed(2)}°F.`;
}

function convertToCelsius() {
    const fahrenheit = document.getElementById('fahrenheit').value;
    if (fahrenheit === '') {
        document.getElementById('result').innerText = 'Por favor, ingrese una temperatura en grados Fahrenheit.';
        return;
    }
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('celsius').value = celsius.toFixed(2);
    document.getElementById('result').innerText = `${fahrenheit}°F son ${celsius.toFixed(2)}°C.`;
}
