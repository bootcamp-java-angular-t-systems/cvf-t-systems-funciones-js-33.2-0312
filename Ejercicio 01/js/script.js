function calcularAreaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}

function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function calcularAreaCuadrado(lado) {
    return Math.pow(lado, 2);
}

function calcularArea() {
    const figuraSeleccionada = document.getElementById("figura").value;
    const inputContainer = document.getElementById("inputContainer");
    const resultadoElement = document.getElementById("resultado");

    // Limpiar inputContainer y resultado
    inputContainer.innerHTML = "";
    resultadoElement.innerHTML = "";

    switch (figuraSeleccionada) {
        case "circulo":
            inputContainer.innerHTML = '<label for="radio">Radio:</label><input type="number" id="radio">';
            break;

        case "triangulo":
            inputContainer.innerHTML = '<label for="base">Base:</label><input type="number" id="base"><br>' +
                                       '<label for="altura">Altura:</label><input type="number" id="altura">';
            break;

        case "cuadrado":
            inputContainer.innerHTML = '<label for="lado">Lado:</label><input type="number" id="lado">';
            break;

        default:
            resultadoElement.textContent = "Figura no reconocida. Inténtalo de nuevo.";
            return;
    }

    // Muestra el botón y espera a que el usuario haga clic
    inputContainer.innerHTML += '<br><button onclick="calcular()">Calcular</button>';
}

function calcular() {
    const figuraSeleccionada = document.getElementById("figura").value;
    const resultadoElement = document.getElementById("resultado");

    switch (figuraSeleccionada) {
        case "circulo":
            const radioCirculo = parseFloat(document.getElementById("radio").value);
            const areaCirculo = calcularAreaCirculo(radioCirculo);
            resultadoElement.textContent = `El área del círculo es: ${areaCirculo.toFixed(2)}`;
            break;

        case "triangulo":
            const baseTriangulo = parseFloat(document.getElementById("base").value);
            const alturaTriangulo = parseFloat(document.getElementById("altura").value);
            const areaTriangulo = calcularAreaTriangulo(baseTriangulo, alturaTriangulo);
            resultadoElement.textContent = `El área del triángulo es: ${areaTriangulo.toFixed(2)}`;
            break;

        case "cuadrado":
            const ladoCuadrado = parseFloat(document.getElementById("lado").value);
            const areaCuadrado = calcularAreaCuadrado(ladoCuadrado);
            resultadoElement.textContent = `El área del cuadrado es: ${areaCuadrado.toFixed(2)}`;
            break;

        default:
            resultadoElement.textContent = "Figura no reconocida. Inténtalo de nuevo.";
            break;
    }
}
