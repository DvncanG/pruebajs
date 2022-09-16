 let nume1=parseInt(prompt("Introduce un número"));
 let numero2=parseInt(prompt("Introduce otro número"));

 alert("El numero es:"+(nume1+numero2));
 document.write("el número es "+(nume1+numero2));

 let numeroo1=5
 let numeroo2=8
 let numeroo = document.getElementById("numero");

 if(numeroo1<numeroo2){
     alert("El numero 1 es menor que el numero 2")
     console.log("El numero 1 es menor que el numero 2")
     numeroo.innerHTML+=("El numero 1 es menor que el numero 2 ")
 }
 if(numeroo2>0){
     alert("El numero 2 es positivo")
     console.log("El numero 2 es positivo")
     numeroo.innerHTML+=("El numero 2 es positivo ")
 }
 if(numeroo1<0 || numeroo1!=0){
     alert("El numero 1 es negativo o distinto de cero")
     console.log("El numero 1 es negativo o distinto de cero")
     numeroo.innerHTML+=("El numero 1 es negativo o distinto de cero ")
 }
 if(numeroo1+1<numeroo2){
     alert("Incrementar en 1 el valor del numero 1 no lo hace mayor o igual que el numero 2")
     console.log("Incrementar en 1 el valor del numero 1 no lo hace mayor o igual que el numero 2")
     numeroo.innerHTML+=("Incrementar en 1 el valor del numero 1 no lo hace mayor o igual que el numero 2 ")
 }
//Pares e Impares
 let valor = 0;
 let numero = document.getElementById("numero");
 let numero1=parseInt(prompt("Introduce un número"));
 let contador = 0;
 let pares = 0;
 let impares = 0;
 let sumaP = 0;
 let sumaI = 0;
 while(numero1!=0){
     if(numero1%2==0){
         if(numero1>valor){
             valor=numero1
             sumaP+=valor
         }
         pares++;
         contador++
     }else{
         impares++
         contador++
         sumaI+=valor
     }
   
     numero1=parseInt(prompt("Introduce un número"));
 }
 alert("El numero mayor es "+valor);
 console.log("El numero mayor es "+valor);
 numero.innerHTML+=("El numero mayor es "+valor);
 numero.innerHTML+=("Hay "+pares+" numeros pares");
 numero.innerHTML+=("Hay "+impares+" numeros impares");
 numero.innerHTML+=("La suma de los numeros pares es "+sumaP);
 numero.innerHTML+=("La cantidad de numero han sido "+contador);
 numero.innerHTML+=("La suma de los numeros impares es "+sumaI);
 numero.innerHTML+=("La suma de pares e impares es "+(sumaP+sumaI));

//Realizar un programa que calcule el salario de un trabajador, para ello pediremos el número de horas trabajadas y el precio de la hora. Si el trabajador trabajas más de 40 horas semanales, se considera que trabaja horas extras. Las horas extras se pagan a 1.5
let horas = parseInt(prompt("Introduce las horas trabajadas"));
let precio = parseInt(prompt("Introduce el precio de la hora"));
let salario = horas*precio;
if(horas>40){
    salario+=((horas-40)*precio*1.5)
}
alert("El salario es "+salario);
console.log("El salario es "+salario);





