//1. Crear una función que muestre "¡Hola, mundo!" en la consola.
function holaMundo() { 
   console.log("¡Hola Mundo!");
   return;
}
holaMundo();

//2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludo(nombre){
    console.log(`¡Hola ${nombre}!`);
    return;
}
saludo("Daniela");

//3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function dobleNumero(numero){
   return 2*parseInt(numero);
}

console.log(`El doble del número es: ${dobleNumero(9)}`);

//4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(numero1, numero2, numero3){
    return (parseFloat(numero1)+parseFloat(numero2)+parseFloat(numero3))/3;
}

console.log(`El promedio es: ${promedio(8.8, 7.0, 9.3)}`);

//5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function comparacionMayor(numero1, numero2){
    return parseInt(numero1) > parseInt(numero2) ? parseInt(numero1) : parseInt(numero2);
}

console.log(`El número mayor es: ${comparacionMayor(35,78)}`);

//6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function cuadradoNumero(numero){
    return parseInt(numero)*parseInt(numero);
}

console.log(`El cuadrado del número es: ${cuadradoNumero(5)}`);
