let temperatura = parseInt(prompt("Escribe la temperatura"))
let tipo = prompt("¿Deseas convertirlo a Celsius o a Farenheit? (C/F)")
let resultado

if (tipo === "F") {
    resultado = (temperatura * 9 / 5) + 32
    console.log(`La temperatura en Farenheit es ${resultado}`)
} else if (tipo === "C") {
    resultado = (temperatura - 32) * 5 / 9
    console.log(`La temperatura en Celsius es ${resultado}`)
} else {
    console.log("No has especificado un tipo válido")
}