function calcularBMI(peso, altura) {
    return peso / (altura * altura);
}

function interpretarBMI(bmi) {
    if (bmi < 18.5) {
        return "Bajo peso";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Peso normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}

document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
  
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    
    const bmi = calcularBMI(peso, altura);

    
    const resultado = `Su BMI es: ${bmi.toFixed(2)} (${interpretarBMI(bmi)})`;
    document.getElementById('resultado').textContent = resultado;
});
