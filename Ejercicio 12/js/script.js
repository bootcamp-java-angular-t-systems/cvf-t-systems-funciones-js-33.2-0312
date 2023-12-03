function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 300) + 1;
}

const tamanoArray = parseInt(prompt("Indiica el tamaño del array:"));
const arrayOriginal = Array.from({ length: tamanoArray }, generarNumeroAleatorio);
const digito = parseInt(prompt("Introduce el numero pra buscarlo (0 a 9):"));

if (isNaN(digito) || digito < 0 || digito > 9) {
    console.log("El numero no es valido, por favor, escribe un numero entre este rangos (0-9).");
} else {
    const arrayFiltrado = arrayOriginal.filter(numero => numero % 10 === digito);
    console.log("Array Original:", arrayOriginal.join(', '));
    console.log(`Array Filtrado (nums que terminan en ${digito}):`, arrayFiltrado.join(', '));
}
