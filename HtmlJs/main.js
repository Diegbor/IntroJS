// var parrafo = document.getElementById("parrafo")
// var titulo = document.getElementById("titulo")
// var boton = document.getElementById("boton")
// var input = document.getElementById("input")
// var body = document.getElementById("body")
// var respuesta = document.getElementById("respuesta")

// console.log(parrafo)
// console.log(titulo)

//innerHTML -> permite modificar el contenido de una etiqueta de tipo texto
// function cambiar(){
//     titulo.innerHTML = "Hola mundo desde JS"
//     parrafo.innerHTML = "Estamos aprendiendo esto"
//Acceder al valor que el usuario ingresa en el input
//     respuesta.innerHTML = input.value
// }

// boton.addEventListener('click',cambiar)
//Crear elemento 
// var nuermoParrafo = document.createElement("p")
//Dar valor al elemento 
// nuermoParrafo.innerHTML = "Cree esta etiqueta"
//Agregarlo al body
// body.append(nuermoParrafo)

//classlist nos permite acceder a todas sus clases en forma de arreglo
// console.log(respuesta.classList)

//Agregar clase a un objeto
// respuesta.classList.add("red")
// console.log(respueta.classList)
//Eliminar una clase
// titulo.classList.remove("black")

//Ejercicio de la clase
var body = document.getElementById("body")
var nombre = document.getElementById("nombre")
var direccion = document.getElementById("direccion")
var telefono = document.getElementById("telefono")
var pizza = document.getElementById("pizza")
var boton = document.getElementById("boton")

var nom = document.getElementById("nom")
var dir = document.getElementById("dir")
var tel = document.getElementById("tel")
var pina = document.getElementById("pina")

function ordenar(){
    nom.innerHTML = nombre.value
    dir.innerHTML = direccion.value
    tel.innerHTML = telefono.value
    
    pizza = pizza.value.toUpperCase()
    if(pizza.value==="CON"){
        var imagenPizza = document.createElement("img")
        imagenPizza.src = "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/11/como-hacer-pizza-hawaiana.jpg"
        document.querySelector(".mostrar").appendChild(imagenPizza)
    }else if(pizza.value==="SIN"){
        var imagenPizza = document.createElement("img")
        imagenPizza.src = "https://i0.wp.com/irecetasfaciles.com/wp-content/uploads/2019/08/pizza-de-jamon-queso-y-tocino.jpg?fit=900%2C574&ssl=1"
        document.querySelector(".mostrar").appendChild(imagenPizza)
    }else{
        var error = document.createElement("p")
        error.innerHTML = "Información incorrecta"
        document.querySelector(".mostar").appendChild(error)
    }
}

boton.addEventListener('click',ordenar)