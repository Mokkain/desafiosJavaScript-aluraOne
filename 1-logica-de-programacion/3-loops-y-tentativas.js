//1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let contador = 1;

while (contador <=10) {  
    alert(`El número es: ${contador}`);    
    contador ++;
    } 

//2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let contador = 10;

while (contador >=0) {
    alert(`El número es: ${contador}`);  
    contador --;
}
    
/*3. Crea un programa de cuenta regresiva. Pide un número y cuenta desde ese número hasta 0
 utilizando un bucle 'while' en la consola del navegador. */
let contador = 0;
let numeroUsuario = prompt("Ingresa un número positivo por favor: ");
contador = numeroUsuario;

while (contador >= 0) {  
    console.log(contador);    
    contador --;
} 

/*4. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número 
utilizando un bucle 'while' en la consola del navegador. */
let contador = 0;
let numeroUsuario = prompt("Ingresa un número positivo por favor: ");

while (contador <= numeroUsuario) {  
    console.log(contador);    
    contador ++;
} 