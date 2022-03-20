/* CLASE
var num1 = 30
var num2 = 5

var num3 = num1 + num2

Mostrar valores
Alert es muy invasivo, es mala practica usarlo 
alert(num3)
console.log(num3)

Entradas de datos

var pregunta = prompt("Ingresa tu nombre: ")
console.log(pregunta)*/

//EJERCICIOS
//Ejercicio 1
/*var Nombre = prompt("Ingresa tu Nombre: ")
var Apellido = prompt("Ahora ingresa tu Apellido: ")
var Telefono = prompt("Ahora ingresa tu Telefono: ")
var Direccion = prompt("Ahora ingresa tu Direccion: ")

console.log("Tú te llamas "+Nombre+" "+Apellido+" con dirección en "+Direccion+" y tu telefono es "+Telefono)

//Ejercicio 2
var añoNacimiento = prompt("Ingresa tu año de nacimiento: ")

console.log("Actualmente tienes o vas a cumplir "+ (2022-añoNacimiento)+" años")

//CLASE 2
//Si no tiene parentecis sólo regresa el tipo de valor
console.log("Tipo de dato: " + typeof Telefono)

//Si tiene parentesis ejerce una acción en el dato, lo modifica
console.log(parseInt(Telefono))*/

//EJERCICIO 3
// var usuarioKelvin = prompt("Dame una temperatura en grados Kelvin: ")
// var Kelvin = parseFloat(usuarioKelvin)
// var Celsius = Kelvin - 273.15
// var Fahrenheit = (Celsius*(9/5))+32
// alert("La temperatura "+Kelvin+" °K es igual a "+Fahrenheit+" °F, y en celsius es "+Celsius+" °C")

//EJERCICIO 4
// var nombreUsuario = prompt("Ingresa tu nombre de usuario ")
// var edad = prompt("Ingresa tu edad ")
// edad = parseFloat(edad)
// var edadPerro = (2*10.5)+((edad-2)*4)
// nombreUsuario = nombreUsuario.toLocaleUpperCase()
// alert("Tu nombre es "+nombreUsuario+" y tu edad "+edad+" en años perro son "+edadPerro)

//EJERCICIO 5
var respuesta = prompt("¿Eres bellisima/o?")
respuesta = respuesta.toLocaleUpperCase()
console.log(respuesta)
if(respuesta === "SI"){
    console.log("Ciertamente")
}else if(respuesta === "NO"){
    console.log("No te creo")
}else{
    console.log("No te entiendo")
}

//EJERCICIO 6
var numero = prompt("Dame un numero")
var reciduo = numero%2
if(reciduo === 0){
    console.log("El numero "+numero+" es divicible entre 2")
}else{console.log("El numero "+numero+" no es divicible entre 2")}

//EJERCICIO 7
if ((numero>0 && numero <=10)&&(numero <= 5)){
    console.log("Efectivamente está en el rango pero estas reprobado")
}else if ((numero>0 && numero <=10)&&(numero > 5 && numero <9)){
    console.log("Esta en el rango y eres regular")
}else if ((numero>0 && numero <=10) && (numero >= 9)){
    console.log("Estas en el rango y eres excelente")
}else{console.log("ERROR")}
