let num = parseInt(prompt("Escribe un número de 3 cifras"))
let centenas
let decenas
let unidades


if (num > 99 && num < 1000) {
    centenas = parseInt(num / 100)
    decenas = parseInt((num % 100) / 10)
    unidades = num % 10

    if (unidades % 2 == 0 && decenas % 2 == 0 && centenas % 2 == 0){
        console.log("Todos los números son pares")
    } else if (unidades % 2 != 0 && decenas % 2 != 0 && centenas % 2 != 0){
        console.log("Todos los números son impares")
    } else {
        console.log("Hay números pares e impares")
    }

} else {
    console.log ("No es número de 3 cifras")
}