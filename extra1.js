//const prompt = require("prompt-sync")({ sigint: true });

// Gestión de inventario de una tienda
// Eres encargado de una tienda y tienes un inventario inicial de productos. La lista de productos es:
// let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
// Debes realizar las siguientes acciones:
// 1.
// Agregar un nuevo producto "Impresora" al inventario usando el método adecuado.
// 2.
// Comprobar si "Tablet" está en el inventario y mostrar un mensaje adecuado.
// 3.
// Eliminar el primer producto del inventario.
// 4.
// Mostrar la lista actualizada de productos en una sola cadena, separados por comas.

let tienda = [
    "laptop",
    "teclado",
    "mouse",
    "monitor"
]

 tienda.push("impresora");
 console.log (tienda);

console.log(tienda.includes ("tablet"));

let listaCambiada = tienda.shift();


console.log("producto sacado:" + " " + listaCambiada);

let listaActualizada = tienda.join(" ");

console.log(listaActualizada);