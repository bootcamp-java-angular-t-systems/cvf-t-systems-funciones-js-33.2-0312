function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarNumerosAleatorios() {
    const rangoMinimo = parseInt(prompt("Introduce el valor mínimo del rango:"));
    const rangoMaximo = parseInt(prompt("Introduce el valor máximo del rango:"));
    const cantidadNumeros = parseInt(prompt("Introduce la cantidad de números a generar:"));

    if (isNaN(rangoMinimo) || isNaN(rangoMaximo) || isNaN(cantidadNumeros)) {
        console.log("Por favor, introduce valores numéricos válidos.");
        return;
    }

    console.log(`Generando ${cantidadNumeros} números aleatorios en el rango [${rangoMinimo}, ${rangoMaximo}]:`);

    const resultadosElement = document.getElementById("resultados");
    resultadosElement.innerHTML = ""; 

    for (let i = 0; i < cantidadNumeros; i++) {
        const numeroAleatorio = generarNumeroAleatorio(rangoMinimo, rangoMaximo);
        resultadosElement.innerHTML += `<p>Número ${i + 1}: ${numeroAleatorio}</p>`;
    }
}

generarNumerosAleatorios();
