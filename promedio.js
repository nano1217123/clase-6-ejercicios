// promedio.js
// 3

let nombre = "Emiliano"

let nota = 4.0;
let nota1 = 3.6;
let nota2 = 5.0;

let promedio = (nota + nota1 + nota2) / 3;

console.log(`Nombre del estudiante: ${nombre}`)
console.log(`Notas: ${nota},${nota1},${nota2}`)
console.log(`promedio: ${promedio.toFixed(1)}`)

if (promedio >= 3.5) {
    console.log("aprobo")
}else{
    console.log("reprobo")
}