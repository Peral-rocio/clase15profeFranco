//const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 6: Buscar la última posición de un elemento repetido
// Tienes una lista de números [2, 5, 7, 2, 8, 7]. Encuentra y muestra la última posición en la que aparece el número 7.

let numeros = [
    "2",
    "5",
    "7",
    "2",
    "8",
    "7",
]

console.log(numeros.lastIndexOf("7"));//  devuelve 5