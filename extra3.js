//const prompt = require("prompt-sync")({ sigint: true });

// Simulador de una cola de atención al cliente
// Simula una cola de atención al cliente donde los clientes llegan y son atendidos uno por uno. Tienes una lista inicial de clientes en espera y un bucle que los atiende de a uno. Realiza lo siguiente:
// 1. Mientras haya clientes en la cola, atiende a cada uno y muéstralo por consola.
// 2. Si el nombre del cliente es "VIP", muéstralo con prioridad indicando un mensaje especial.
// 3. Al final, muestra cuántos clientes fueron atendidos en total.
// Lista inicial de clientes: ["Ana", "Carlos", "VIP", "Sofía", "Juan"].



let clientes = [
    "Ana",
    "Carlos",
    "VIP",
    "Sofía",
    "Juan"
]

let vip= clientes.splice(2, 1)[0];
console.log(clientes); // le sacamos el Vip, poniendo 0 en su lugar, para luego ponerlo primero. 

clientes.unshift(vip); //lo ponemos primero. sin modificar a Ana como segundo lugar

let clienteAtendidos = 0

for (let i= 0; i < clientes.length; i++) {
     let cliente = clientes[i];

     if( cliente === vip) {
        console.log("¡Que placer volverlo a ver!" + vip);
     } else{
        console.log("Le toca atencion a:" + cliente); 
     }

     clienteAtendidos++  //Esto es igual a totalatendidos + 1 (empieza en 0 y luego agregra uno y asi en cada bucle.)
}

console.log("Total de clientes atendidos en el dia de hoy:" + clienteAtendidos);
