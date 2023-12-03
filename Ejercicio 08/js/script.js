function rellenarValores(array) {
    for (let i = 0; i < array.length; i++) {
        const valor = prompt(`Introduce un valor para la posicion ${i + 1}:`);
        array[i] = parseFloat(valor);
    }
}

function mostrarArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Índice ${i}: ${array[i]}`);
    }
}

const inputs = new Array(10);
rellenarValores(inputs);
mostrarArray(inputs);
