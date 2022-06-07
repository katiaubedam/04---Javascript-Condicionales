let temperatura = parseInt(prompt("Escribe la temperatura actual"))

if (temperatura > 40 || temperatura < 10) {
    console.log("Vete a otro sitio")
} else if (temperatura > 30 && temperatura < 40) {
    console.log("Enciende el aire acondicionado")
} else if (temperatura > 20 && temperatura < 30) {
    console.log("No hagas nada")
} else if (temperatura > 10 && temperatura < 20) {
    console.log("Enciende la calefacción")
}