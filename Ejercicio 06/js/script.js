function count(numero) {
    if (isNaN(numero) || !Number.isInteger(numero) || numero < 0) {
        return "numero no valido, tiene que ser un numero positivo";
    }

    if (numero === 0) {
        return 1;
    }

    let cifras = 0;
    while (numero > 0) {
        cifras++;
        numero = Math.floor(numero / 10);
    }

    return cifras;
}

function contarCifras() {
    const numeroInput = document.getElementById("numeroInput");
    const resultadoElement = document.getElementById("resultado");

    const numero = parseInt(numeroInput.value);

    const resultadoCifras = count(numero);
    resultadoElement.textContent = `El numero de cifras de ${numero} es: ${resultadoCifras}`;
}
