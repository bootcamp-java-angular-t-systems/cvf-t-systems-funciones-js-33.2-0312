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

function generarPrimoAleatorio(min, max) {
    let numeroAleatorio;
    do {
        numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (!esPrimo(numeroAleatorio));
    
    return numeroAleatorio;
}

const tamanoArray = parseInt(prompt("Introduce el tamaño del array:"));

const arrayPrimos = [];
for (let i = 0; i < tamanoArray; i++) {
    const primo = generarPrimoAleatorio(2, 100);
    arrayPrimos.push(primo);
}

console.log("Array de primos:", arrayPrimos.join(', '));
const mayorNumero = Math.max(...arrayPrimos);
console.log("El numero mas grande es:", mayorNumero);
