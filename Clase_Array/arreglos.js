var animales = ["torguga leon","oso pato","bisonte volador","dragon"]
console.log(animales)

console.log(animales[0])

//Agregar elementos a un arreglo 

animales[4]="oso perro"
console.log(animales)

//Método push: agrega un elemento a un arreglo siempre hasta el final
//Se pueden incluir varios elementos en un solo push separados por comas ","
animales.push("pinguino foca","salamandra de fuego")
console.log(animales)

//Método poo() -> elimina el ultimo elemento del arreglo 
animales.pop()
console.log(animales)

//Método splice -> desplazar/eliminar uno o varios elementos recorriendo el arreglo
//valor 1, saber en que posicion va a eliminar el elemento
//valor 2, para saber cuantos elementos se van a eliminar
//valor 3, es el elemento nuevo que se va a insertar 
//Nota: si el segundo valor es 0, sólo desplaza los elementos
animales.splice(3,0,"erizo jabalí")
console.log(animales)

//Recorrer un arreglo con ciclo for

console.log(animales.length)
for (var i = 0; i < animales.length; i++){
    console.log(animales[i])
}

//Arreglo dentro de un arreglo

var pokemones = [["pikachu","caterpie"],["chimeco","sceptile"],["greninja","goomy"]]
console.log(pokemones[0][1])


//Variable objeto (diccionario)
var persona = {
//   key   :  value
    nombre : "Boris",
    edad   : 23,
    cel    : "1234567890",
    nueva :{
        nombre : "123455"
    },
    pokemonos : {
        primera : ["pikachu","charmander","squirtle","bulbasaur"],
        segunda : ["chikorita","cyndaquil","totodile"],
        tercera : ["treecko"],
        cuarta : {
            iniciales : ["twrtuig","piplup","chimchar"],
            salvajes : ["lo que sea"]
        }
    }
}
var boton = document.getElementById("boton")
var input = document.getElementById("input")
//Mostrar elementos
function valorObjeto(){
    if(input.value===persona.nueva.nombre){
        console.log("si sirve")
    }else{console.log("no sirve")}
}
boton.addEventListener('click', valorObjeto)
console.log(persona)
console.log(persona.edad)
console.log(persona.edad, persona.pokemonos.primera[0])