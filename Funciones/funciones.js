//Estructura de una funcion 

function nombre(){
    //Bloque de codigo
}

//Funciones sin parametro

function saludo(){
    console.log("Hola mundo")
}
saludo()

//funciones con parametros
function saludo_parametro(persona){
    console.log(persona)
    console.log("hola mundo "+ persona)
}
saludo_parametro("Diego")

var hola = [1,2,3,4]
console.log(typeof hola)

//Funcion para saber el tipo de valor del parametro

function parametro(valor){
    if(typeof valor === "string"){
        console.log("Es una cadena")
    }else if(typeof valor === "number"){
        console.log("Es un numero")
    }else if (typeof valor === "boolean"){
        console.log("Es un booleano")
    }else if(typeof valor === "object"){
        console.log("Es un arreglo")
    }
}
parametro([1,2,3,4])

//Funcion para saber el area de un cuadrado
function cuadrado (n1){
    n1 = prompt("Dame un numero")
    n1=parseFloat(n1)
    var area = n1*n1
    console.log("El area del cuadrado es: "+area)
}
cuadrado()
//Funcion para saber el area de un rectangulo
function rectangulo (n1,n2){
    n1 = prompt("Dame un numero")
    n1=parseFloat(n1)
    n2=prompt("Dame otro numero")
    n2=parseFloat(n2)
    var area = n1*n2
    console.log("El area del rectangulo es: "+area)
}
rectangulo()
//Funcion para saber el area de un circulo
function circulo(radio){
    radio = prompt("Dame el radio")
    radio = parseFloat(radio)
    console.log("El area del circulo es: "+ radio*radio*3.141516)
}
circulo()
//Funcion para saber el area de un rombo
//Saber si un numero es negativo, cero o positivo
//Saber si la letra es vocal o consonante
//Piedra papel o tijera