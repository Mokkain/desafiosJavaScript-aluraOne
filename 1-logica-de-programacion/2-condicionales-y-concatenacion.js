/*1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo",
muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!". */
let diaSemana = prompt("Ingresa el actual día de la semana: ");

if (diaSemana == "Sábado") {
    alert("¡Buen fin de semana!");
} else if (diaSemana == "Domingo"){
        alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!");
 }
    
/*2. Verifica si un número ingresado por el usuario es positivo o negativo. 
Muestra una alerta informativa. */
let numero = prompt("Ingresa un número: ");

if (numero >0) {
    alert("El número es positivo.");
} else if (numero == 0){
        alert("Es un número neutro");
} else {
    alert("El número es negativo");
}

/*3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100,
muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.". */
let puntuación = prompt("Ingresa tu puntuación del juego: ");

if (puntuación >=100) {
    alert("¡Felicidades, has ganado!");
} else {
    alert("Intenta nuevamente para ganar.");
 }
    
/*4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando
un template string para incluir el valor del saldo.*/

let saldoCuenta = 5800;
    alert(`El saldo de tu cuenta es: $${saldoCuenta}`); 

/*5. Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra 
una alerta de bienvenida usando ese nombre.*/

let nombreUsuario = prompt("Ingresa tu nombre: ");
    alert(`¡Bienvenid@ ${nombreUsuario}!`); 
   
    
