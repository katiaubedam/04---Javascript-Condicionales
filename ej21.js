let nombre = prompt("Indica tu nombre")
let ventas = parseInt(prompt("Indica la cantidad que has vendido en euros"))
let extra = 0

if (ventas > 500) {
    extra = ventas * 0.05
    console.log(`${nombre}, has vendido ${ventas}€ y has ganado un extra de ${extra}€`)
} else {
    console.log(`${nombre}, has vendido ${ventas}€`)
}