/*1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de
 su altura en metros y peso en kilogramos, que se recibirán como parámetros. */
 let altura=1.54;
 let peso=53;
 let resultado1=calculoImc(altura,peso);

function calculoImc(altura, peso){
   return (peso)/(altura*altura);
}

console.log(`El IMC es: ${resultado1}`);

//2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
let contador=0;
let acumulador=0;
let numero=5;
let resultado2=factorial(numero);

function factorial(numero){
   contador=numero;
   acumulador=contador;
   if (contador<=numero){
        while (contador>1){
            contador --;
            acumulador*=contador;
        }
        return acumulador;
    }
}

console.log(`El factorial de ${numero} es ${resultado2}`);

/*3. Crea una función que convierta un valor en dólares, pasado como parámetro, y 
devuelva el valor equivalente en reales(moneda brasileña, si deseas puedes hacerlo con el 
valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80. */
let dolar = 5;
let cotizacionDolar=16.81;
let resultado=conversión(dolar);

function conversión(dolar){
   return (dolar*cotizacionDolar);
}

console.log(`${dolar} dolares equivalen a $${resultado} pesos mexicanos.`);

/*4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
utilizando la altura y la anchura que se proporcionarán como parámetros.*/
let altura = 12;
let anchura= 18;
areaPerimetro(altura,anchura);

function areaPerimetro(altura, anchura){
   let area = altura*anchura;
   let perimetro = 2*(altura+anchura);
   console.log(`La sala rectángular tiene el área de ${area} cm² y el perímetro de ${perimetro} cm`);
}

/*5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.*/
let radio = 25;
let pi = 3.14;
areaPerimetro(radio);

function areaPerimetro(radio){
   let area = pi*radio*radio;
   let perimetro = 2*pi*radio;
   console.log(`La sala rectángular tiene el área de ${area} cm² y el perímetro de ${perimetro} cm`);
}

//6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
let numero = 6;
contador=1;
tablaMultiplicar(numero);

function tablaMultiplicar(numero){
   while(contador<=10){
      let resultado = numero*contador;
      console.log(`${numero} x ${contador} = ${resultado} `);
      contador ++;
   }

}
