//EJERCICIO 1
// var numeroCliente = prompt("Ingresa tu numero de cliente")
// numeroCliente = parseInt(numeroCliente)
// if(numeroCliente === 1000){
//     console.log("Ganaste un premio")
// }else{
//     console.log(numeroCliente+" lo sentimos, sigue participando")
// }

//EJERCICIO 2
// var numero1 = prompt("Ingresa un numero")
// var numero2 = prompt("Ingresa otro numero")
// numero1 = parseInt(numero1)
// numero2 = parseInt(numero2)
// if (numero1<numero2) {
//     console.log("El numero "+ numero1+" es menor")
// }else {
//     console.log("El numero "+ numero2+" es menor")
// }

//EJERCICIO 3
// var num1 = prompt("Ingresa un numero")
// var num2 = prompt("Ingresa un numero")
// var num3 = prompt("Ingresa un numero")
// num1 = parseInt(num1)
// num2 = parseInt(num2)
// num3 = parseInt(num3)
// if ((num1>num2) && (num1>num3)) {
//     console.log("El numero "+num1+" es el mayor")
// }else if ((num2>num1) && (num2>num3)) {
//     console.log("El numero "+num2+" es el mayor")
// }else if ((num3>num1) && (num3>num2)) {
//     console.log("El numero "+num3+" es el mayor")
// }else if((num1 === num2) && (num1>num3)){
//     console.log("El numero "+num1+" y el numero "+num2+ " son iguales y son mayores")
// }/*else if((num1 === num2) && (num1<num3)){
//     console.log("El numero "+num1+" y el numero "+num2+ " son iguales pero el mayor es el numero "+num3)
// }*/else if((num1 === num3) && (num1>num2)){
//     console.log("El numero "+num1+" y el numero "+num3+ " son iguales y son mayores")
// }/*else if ((num1 === num3) && (num1<num2)){
//    console.log("El numero "+num1+" y el numero "+num3+ " son iguales pero el mayor es el numero "+num2)
// }*/else if((num3 === num2) && (num2>num1)){
//     console.log("El numero "+num3+" y el numero "+num2+ " son iguales y son mayores")
// }//else if ((num3 === num2) && (num2<num1)){
//     console.log("El numero "+num2+" y el numero "+num3+ " son iguales pero el mayor es el numero "+num1)
// }

//EJERCICIO 4
// var dia = prompt("Ingresa que día es hoy")
// dia = dia.toLocaleUpperCase()
// if(dia==="LUNES"){
//     console.log("Vamos a iniciar bien la semanuki")
// }else if(dia === "VIERNES"){
//     console.log("Vamos a pistear")
// }else if(dia === "SABADO" || dia === "DOMINGO"){
//     console.log("Vamos a descansar")
// }else if (dia === "MARTES" || dia === "MIERCOLES" || dia === "JUEVES"){
//     console.log("¿Trabajando duro o durando en el trabajo?")
// }else {
//     console.log("No se en que dia vives")
// }

//EJERCICIO 5
// var topping = prompt("Qué toping quieres en tu helado? ->OREO ->KITKAT ->BROWNIE ->NINGUNO")
// topping = topping.toLocaleUpperCase()
// if(topping === "OREO"){
//     console.log("Tu helado con topping de OREO te va a costar $60")
// }else if(topping === "KITKAT"){
//     console.log("Tu helado con topping de KITKAT te va a costar $65")
// }else if(topping === "BROWNIE"){
//     console.log("Tu helado con topping de BROWNIE te va a costar $70")
// }else if(topping === "NINGUNO"){
//     console.log("Tu helado con ningun topping te va a costar $50")
// }else{
//     console.log("Ese topping no lo tenemos toma tu helado con ningun topping, te va a costar $50")
// }

//EJERCICIOS FOR
//EJERCICIO 1
for (i = 0; i <= 100; i++) {
    if(i%2 === 0){
        console.log(i+" es par")
    }else{
        console.log(i+" es impar")
    }
}
for(j = 0; j <= 100; j++){
    if(j%3 === 0 && j%5 === 0){
        console.log(j+"-> FizzBozz")
    }else if(j%5 === 0){
        console.log(j+"-> Fizz")
    }else if(j%3 === 0){
        console.log(j+"-> Bozz")
    }else{
        console.log(j)
    }
}