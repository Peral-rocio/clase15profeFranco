//const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 1: Añadir personajes a una lista
// Tienes una lista de personajes de videojuegos ["Link", "Zelda"]. Agrega los personajes "Mario" y "Luigi" al final de la lista utilizando el método adecuado. Luego, muestra el array actualizado.

let personajesDeVideoJuegos = [
"Lara Croft",
"Kratos",
"Aloy",
"Ellie",
"GeraltDeRivia",
"Pikachu",
"Sonic",
]

personajesDeVideoJuegos.push("Mario", "Luigi");

console.log(personajesDeVideoJuegos);