let examen1 = parseInt(prompt("Escribe la nota del primer examen"))
let examen2 = parseInt(prompt("Escribe la nota del segundo examen"))
let examenFinal = parseInt(prompt("Escribe la nota del examen final"))
let mejorExamen

examen2 > examen1 ? mejorExamen = examen2 : mejorExamen = examen1

let notaFinal = mejorExamen + examenFinal

notaFinal < 5 
? console.log("Tu calificación es: Suspenso")
: notaFinal < 6
? console.log("Tu calificación es: Suficiente")
: notaFinal < 7
? console.log("Tu calificación es: Bien")
: notaFinal < 9
? console.log("Tu calificación es: Notable")
: notaFinal < 10
? console.log("Tu calificación es: Sobresaliente")
: console.log("Tu calificación es: Matrícula de Honor")