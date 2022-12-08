//No logré reemplazar el objeto con index off y despues de perder pelo, probé de esta manera y resultó
let colores = [{color: "verde", id: 1},{color: "rojo", id: 2},{color: "azul", id: 3},{color: "amarillo", id: 4},{color: "purl", id: 5}]
console.log(colores)
let indicador = 3
let nuevoColor = {color: "rosa"}
nuevoColor.id = indicador

let identificar = colores.find(color => color.id == indicador)
console.log(identificar)
let indice = identificar.id
console.log(indice)
colores[indice-1] = nuevoColor
console.log(colores)
