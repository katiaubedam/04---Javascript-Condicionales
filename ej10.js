let num1 = parseInt(prompt("Escribe un número"))
let num2 = parseInt(prompt("Escribe otro número"))

if (num1 === num2) {
    console.log(0)
} else if (num1 % 6 === num2 % 6) {
    if (num1 > num2) {
        console.log(num2)
    } else {
        console.log(num1)
    }
} else {
    if (num1 > num2) {
        console.log(num1)
    } else {
        console.log(num2)
    }
}