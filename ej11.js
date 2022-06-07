let num1 = parseInt(prompt("Escribe un número entre 25 y 75"))
let num2 = parseInt(prompt("Escribe otro número entre 25 y 75"))

let num1Digit1 = parseInt(num1 / 10)
let num1Digit2 = parseInt(num1 % 10)

let num2Digit1 = parseInt(num2 / 10)
let num2Digit2 = parseInt(num2 % 10)

if (num1Digit1 === num2Digit1 || num1Digit1 === num2Digit2) {
    console.log(`Hay un dígito en común entre los dos números (${num1Digit1})`)
}

if (num1Digit2 === num2Digit1 || num1Digit2 === num2Digit2) {
    console.log(`Hay un dígito en común entre los dos números (${num1Digit2})`)
}