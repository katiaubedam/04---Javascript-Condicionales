let examen1 = parseInt(prompt("Escribe la nota del primer examen"))
let examen2 = parseInt(prompt("Escribe la nota del segundo examen"))
let examenFinal = parseInt(prompt("Escribe la nota del examen final"))
let mejorExamen = examen1

if (examen2 > examen1) {
    mejorExamen = examen2
}

let notaFinal = mejorExamen + examenFinal

if (notaFinal < 5) {
    console.log("Tu calificación es: Suspenso")
} else if (notaFinal < 6) {
    console.log("Tu calificación es: Suficiente")
} else if (notaFinal < 7) {
    console.log("Tu calificación es: Bien")
} else if (notaFinal < 9) {
    console.log("Tu calificación es: Notable")
} else if (notaFinal < 10) {
    console.log("Tu calificación es: Sobresaliente")
} else {
    console.log("Tu calificación es: Matrícula de Honor")
}