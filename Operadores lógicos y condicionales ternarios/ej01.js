let edad = parseInt(prompt("¿Cuántos años tiene tu hije mayor?"))
let dif = parseInt(prompt("¿Cuántos años se lleva con tu hije menor?"))

if (edad - dif >= 18) {
    console.log("Es mayor de edad")
} else {
    console.log("Es menor de edad")
}