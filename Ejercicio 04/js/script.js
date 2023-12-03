function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else if (numero < 0) {
        return "No definido";
    } else {
        var total = 1; 
        for (var i = 1; i <= numero; i++) {
            total = total * i; 
        }
        return total;
    }
}

function calcularFactorial() {
    const numeroInput = document.getElementById("numeroInput");
    const resultadoElement = document.getElementById("resultado");

    const numero = parseInt(numeroInput.value);

    if (isNaN(numero)) {
        resultadoElement.textContent = "Por favor, introduce un número válido.";
        return;
    }

    const resultadoFactorial = factorial(numero);
    resultadoElement.textContent = `El factorial de ${numero} es: ${resultadoFactorial}`;
}
