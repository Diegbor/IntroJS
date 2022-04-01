var body = document.getElementById("body")
var mostrar = document.getElementById("mostrar")
var nombre = document.getElementById("nombre")
var direccion = document.getElementById("direccion")
var telefono = document.getElementById("telefono")
var pizza = document.getElementById("pizza")
var boton = document.getElementById("boton")
var pina = document.getElementById("pina")
var queso = document.getElementById("queso")
var respuestaNombre = document.getElementById("respuestaNombre")
var respuestaTelefono = document.getElementById("respuestaTelefono")
var respuestaDireccion = document.getElementById("respuestaDireccion")

function ordenarPizza(){
    respuestaNombre.innerHTML = nombre.value
    respuestaTelefono.innerHTML = telefono.value
    respuestaDireccion.innerHTML = direccion.value

    var formatPizza = pizza.value.toUpperCase()
    if(formatPizza === "CON"){
        // var imagenPizza = document.createElement('img')
        // imagenPizza.src = "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/11/como-hacer-pizza-hawaiana.jpg"
        // mostrar.append(imagenPizza)
        pina.classList.remove('none')
        queso.classList.add('none')
    }else if(formatPizza=== "SIN"){
        // var imagenPizza = document.createElement('img')
        // imagenPizza.src = "https://i0.wp.com/irecetasfaciles.com/wp-content/uploads/2019/08/pizza-de-jamon-queso-y-tocino.jpg?fit=900%2C574&ssl=1"
        // mostrar.append(imagenPizza)
        queso.classList.remove('none')
        pina.classList.add('none')
    }else{
        // var error = document.createElement('p')
        // error.innerHTML = "Información incorrecta"
        // mostrar.append(error)
        queso.classList.add('none')
        pina.classList.add('none')
    }
//     var newImg = document.createElement('img')
//     newImg.src = 'https://media.vandal.net/i/640x360/11-2019/201911161716873_1.jpg'
//     body.append(newImg)
}

boton.addEventListener('click', ordenarPizza)