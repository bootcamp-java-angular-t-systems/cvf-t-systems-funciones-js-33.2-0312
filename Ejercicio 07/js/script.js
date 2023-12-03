function convertirMoneda() {
    const cantidadEurosInput = document.getElementById("cantidadEurosInput");
    const monedaSelect = document.getElementById("monedaSelect");
    const resultadoElement = document.getElementById("resultado");

    const cantidadEuros = parseFloat(cantidadEurosInput.value);
    const monedaDestino = monedaSelect.value;

    if (isNaN(cantidadEuros) || cantidadEuros <= 0) {
        resultadoElement.textContent = "Valor introducido no valido";
        return;
    }

    let tasaCambio, monedaDestinoNombre;

    switch (monedaDestino) {
        case "libras":
            tasaCambio = 0.86;
            monedaDestinoNombre = "Libras";
            break;
        case "dolares":
            tasaCambio = 1.28611;
            monedaDestinoNombre = "Dólares";
            break;
        case "yenes":
            tasaCambio = 129.852;
            monedaDestinoNombre = "Yenes";
            break;
        default:
            resultadoElement.textContent = "Moneda de destino no valida";
            return;
    }
    
    const cantidadConvertida = cantidadEuros * tasaCambio;

    resultadoElement.textContent = `${cantidadEuros} euros son ${cantidadConvertida.toFixed(2)} ${monedaDestinoNombre}.`;
}
