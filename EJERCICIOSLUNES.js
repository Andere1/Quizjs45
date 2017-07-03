//EJERCICIO 1
var num1=0;
var num2=0;
var num3=0;

num1= prompt("Ingresa el primer número");
num2= prompt("Ingresa el segundo número");
num3= prompt("Ingresa el tercer número");

if(num1>num2 && num1>num3 && num2<num3){
   console.log ("El mayor es "+num1+" El menor es"+num2);
   }
else if(num1>num2 && num1>num3 && num3<num2){
  console.log ("El mayor es "+num1+" El menor es"+num3);
}
else if(num2>num1 && num2>num3 && num1<num3){
  console.log ("El mayor es "+num2+" El menor es"+num1);}
else if(num2>num1 && num2>num3 && num3<num1){
  console.log ("El mayor es "+num2+" El menor es"+num3);}
  else if(num3>num1 && num3>num2 && num1<num2){
  console.log ("El mayor es "+num3+" El menor es"+num1);}
else if(num3>num1 && num3>num2 && num2<num1){
  console.log ("El mayor es "+num3+" El menor es"+num2);}


//ejercicio2
var myArray = [15,29,78,29,40,20,18,100,70,68];

for (var i = 0; i < myArray.length; i++) {
  var num=(myArray[i]);
 if (i%2){
    console.log("Posicion par"+num);
  }

}


//EJERCICIO 3
var myArray = [1,2,3,4,5,6,7,8,9,0];
var invertida = myArray.reverse();

console.log(invertida);
