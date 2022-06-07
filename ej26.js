let input = prompt("Introduce piedra, papel o tijera").toUpperCase()

const PIEDRA = 1
const PAPEL = 2
const TIJERA = 3

let jugadaCPU = Math.floor(Math.random() * 3) + 1

if (input === "PIEDRA") {
    if (jugadaCPU === PIEDRA) {
        console.log(`Has sacado ${input}. La máquina ha sacado PIEDRA. Es un empate`)
    } else if (jugadaCPU === PAPEL) {
        console.log(`Has sacado ${input}. La máquina ha sacado PAPEL. Has perdido`)
    } else if (jugadaCPU === TIJERA) {
        console.log(`Has sacado ${input}. La máquina ha sacado TIJERA. Has ganado`)
    }
} else if (input === "PAPEL") {
    if (jugadaCPU === PIEDRA) {
        console.log(`Has sacado ${input}. La máquina ha sacado PIEDRA. Has ganado`)
    } else if (jugadaCPU === PAPEL) {
        console.log(`Has sacado ${input}. La máquina ha sacado PAPEL. Es un empate`)
    } else if (jugadaCPU === TIJERA) {
        console.log(`Has sacado ${input}. La máquina ha sacado TIJERA. Has perdido`)
    }
} else if (input === "TIJERA") {
    if (jugadaCPU === PIEDRA) {
        console.log(`Has sacado ${input}. La máquina ha sacado PIEDRA. Has perdido`)
    } else if (jugadaCPU === PAPEL) {
        console.log(`Has sacado ${input}. La máquina ha sacado PAPEL. Has ganado`)
    } else if (jugadaCPU === TIJERA) {
        console.log(`Has sacado ${input}. La máquina ha sacado TIJERA. Es un empate`)
    }
} else {
    console.log("No has introducido un comando válido")
}