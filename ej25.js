let input = prompt("Dile algo a Bob")

if (input.indexOf('?') != -1 && input.indexOf('!') != -1) {
    console.log("Bob responde: '¡Eh, tranquilizate! Yo sé lo que me hago'")
} else if (input.indexOf('?') != -1) {
    console.log("Bob responde: '¡Claro!'")
} else if (input.indexOf('!') != -1) {
    console.log("Bob responde: '¡Eh, tranquilízate!'")
} else if (input == "") {
    console.log("Bob responde: 'Con que esas tenemos...'")
} else {
    console.log("Bob responde: 'Sin más'")
}