function decimalABinario(numero) {
    if (isNaN(numero) || !Number.isInteger(numero)) {
        return "Por favor, introduce un número decimal entero válido.";
    }

    if (numero < 0) {
        return "No convertimos números negativos a binario.";
    }

    if (numero === 0) {
        return "0";
    }

    let binario = "";
    while (numero > 0) {
        binario = (numero % 2) + binario;
        numero = Math.floor(numero / 2);
    }

    return binario;
}

function convertirDecimalABinario() {
    const numeroInput = document.getElementById("numeroInput");
    const resultadoElement = document.getElementById("resultado");

    const numero = parseInt(numeroInput.value);

    const binario = decimalABinario(numero);
    resultadoElement.textContent = `El número binario de ${numero} es: ${binario}`;
}
