function rellenarArray(array, min, max) {
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

function mostrarArrayYSuma(array) {
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        console.log(`Posicion ${i + 1}: ${array[i]}`);
        suma += array[i];
    }

    console.log(`Suma de todos los valores: ${suma}`);
}

const tamanoArray = parseInt(prompt("Introduce el tamaño del array:"));

const arrayAutocompleted = new Array(tamanoArray);
rellenarArray(arrayAutocompleted, 0, 9);
mostrarArrayYSuma(arrayAutocompleted);
