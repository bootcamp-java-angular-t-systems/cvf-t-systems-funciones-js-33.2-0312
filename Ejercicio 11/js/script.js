function rellenarArrayAleatorio(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * 100);
    }
}

function multiplicarArrays(array1, array2) {
    const resultado = [];

    for (let i = 0; i < Math.min(array1.length, array2.length); i++) {
        resultado[i] = array1[i] * array2[i];
    }

    return resultado;
}

const dimension = parseInt(prompt("Tamaño del array:"));
const arrayOriginal = new Array(dimension);
const arrayCopia = new Array(dimension);

rellenarArrayAleatorio(arrayOriginal);
arrayCopia.splice(0, arrayOriginal.length, ...arrayOriginal);
rellenarArrayAleatorio(arrayCopia);
const arrayResultado = multiplicarArrays(arrayOriginal, arrayCopia);

console.log("Array Original:", arrayOriginal.join(', '));
console.log("Array Copia:", arrayCopia.join(', '));
console.log("Array Resultado (multiplicacion):", arrayResultado.join(', '));
