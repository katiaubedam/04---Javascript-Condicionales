let num1 = parseInt(prompt("Escribe un número"))
let num2 = parseInt(prompt("Escribe otro número"))

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log((num1 + num2) / 2)

if (num1 > num2) {
    console.log("Mayor: " + num1)
    console.log("Menor: " + num2)
} else if (num2 > num1) {
    console.log("Mayor: " + num2)
    console.log("Menor: " + num1)
}

