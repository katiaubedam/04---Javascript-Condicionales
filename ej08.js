let num1 = parseInt(prompt("Escribe un número"))
let num2 = parseInt(prompt("Escribe otro número"))

if (num1 > num2) {
    console.log(`${num1} es mayor que ${num2}`)
} else if (num1 == num2) {
    console.log(`${num1} es igual que ${num2}`)
} else {
    console.log(`${num1} es menor que ${num2}`)
}