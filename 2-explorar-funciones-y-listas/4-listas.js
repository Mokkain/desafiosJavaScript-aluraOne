//1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

/*2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion 
con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'. */
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

/*4. Crea una función que muestre en la consola todos los elementos de la lista 
"lenguagesDeProgramacion" por separado. */
function LenguajesDeProgramacionSeparado (){
   for(let contador=0; contador<=lenguagesDeProgramacion.length; contador++){
      console.log(lenguagesDeProgramacion[contador]);
   }
   return;
}
LenguajesDeProgramacionSeparado();

/*5.Crea una función que muestre en la consola todos los elementos de la lista 
"lenguagesDeProgramacion en orden inverso. */
function LenguajesDeProgramacionInverso (){
   for (let contador2=lenguagesDeProgramacion.length-1; contador2>=0; contador2--){
      console.log(lenguagesDeProgramacion[contador2]);
   }
   return;
}
LenguajesDeProgramacionInverso();

//6. Crea una función que calcule el promedio de los elementos en una lista de números.
let numeros = [18, 5, 14, 20, 12, 56, 35];
let sumatoria=0;

function calcularPromedio(lista){
   for(let i=0; i<lista.length; i++){
      sumatoria+=lista[i];
   }
   return sumatoria/lista.length;
}

let resultadoPromedio=calcularPromedio(numeros);
console.log(`El resultado del promedio es: ${resultadoPromedio}`);

//7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
let numeroMayor = numeros[0];
let numeroMenor = numeros[0];

function busquedaNumero (lista){
for(let i=0; i<lista.length; i++){
   if (lista[i]>numeroMayor){
      numeroMayor=lista[i];
   }
   if (lista[i]<numeroMenor){
      numeroMenor=lista[i];
   }
}
console.log(`El número mayor es: ${numeroMayor} y el número menor es: ${numeroMenor}`);
return;
}

busquedaNumero(numeros);

//8. Crea una función que devuelva la suma de todos los elementos en una lista.
let acumulador=0;

function suma(lista){
   for(let i=0; i<lista.length; i++){
      acumulador+=lista[i];
   }
   console.log(`La suma de todos los elementos es: ${acumulador}`);
}
suma(numeros);

/*9.Crea una función que reciba una lista como parámetro y retorne el índice de un elemento 
también pasado como parámetro. Si ese elemento no existe en la lista, retorna -1. */
function posicion(lista, elemento){
   for(let i=0; i<lista.length; i++){
      if(lista[i]===elemento){
         return i; // Retorna el índice del elemento encontrado
      }
   }
   return -1; // Retorna -1 si el elemento no se encuentra en la lista
}
console.log(posicion(numeros, 5));

/*10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva 
lista con la suma de los elementos uno a uno.  */
let numeros1=[7,3,9,13];
let numeros2=[5,2,11,21];
let sumaAmbasListas=[];

function sumatoriaDoble(lista1, lista2){
   for(let i=0; i<lista1.length; i++){
      if (lista1[i] != lista2 [i]){
         sumaAmbasListas[i] = lista1[i]+lista2[i];
      }
   }
      console.log(sumaAmbasListas);
}
sumatoriaDoble(numeros1, numeros2);

/*11. Crea una función que reciba una lista de números y devuelva una nueva lista con el 
cuadrado de cada número. */
let cuadrados=[];

function cuadradoNumero(lista){
   for(let i=0; i<lista.length; i++){
      cuadrados[i] = lista[i]*lista[i];
   }
   console.log(cuadrados);
}
cuadradoNumero(numeros1);
