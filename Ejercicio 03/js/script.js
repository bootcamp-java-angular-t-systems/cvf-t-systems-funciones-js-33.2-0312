function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

function verificarPrimo() {
    const numeroInput = document.getElementById("numeroInput");
    const resultadoElement = document.getElementById("resultado");

    const numero = parseInt(numeroInput.value);

    if (isNaN(numero)) {
        resultadoElement.textContent = "Por favor, introduce un número válido.";
        return;
    }

    const esPrimoResultado = esPrimo(numero);

    if (esPrimoResultado) {
        resultadoElement.textContent = `${numero} es un número primo.`;
    } else {
        resultadoElement.textContent = `${numero} no es un número primo.`;
    }
}
