//const prompt = require("prompt-sync")({ sigint: true });

// Clasificación de palabras según su longitud
// Tienes una lista de palabras en una oración. Debes:
// 1. Dividir la oración en palabras individuales.
// 2. Clasificar las palabras en dos categorías:
// Cortas (menos de 5 letras)
//  Largas (5 letras o más)
// 3. Mostrar ambas listas de palabras clasificadas.
// 4. La oración es: "JavaScript es un lenguaje poderoso y versátil".

let oración = "JavaScript es un lenguaje poderoso y versátil";

let palabras= oración.split(" ");

let cortas = [];
let Largas = [];

for(let i = 0 ; i < palabras.length; i++){
    let palabra = palabras[i];

    if (palabra.length < 5){
    cortas.push(palabra);
} else if (palabras.length > 5){
    Largas.push(palabra);
}
}


console.log ("estas son las palabras largas" + " " + Largas.join( " - "));
console.log ("Estas son las palabras cortas" + " " + cortas.join (" - "));




