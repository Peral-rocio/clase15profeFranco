//const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 2: Eliminar al último invitado
// Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"]. El último invitado no puede asistir. Elimina al último invitado y muestra quién fue eliminado y el estado actualizado de la lista.

let invitados = [
    "sofia",
    "carlos",
    "andres",
    "pablo",
    "micaela",
    "aldana",
    "Ester",
]
let eliminado = invitados.pop();

console.log(invitados);
console.log(eliminado);

