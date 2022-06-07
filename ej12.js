let resultado = parseInt(prompt("¿En qué resultado acabaste la carrera?"))

if (resultado === 1) {
    console.log("Ganaste")
} else {
    console.log("Lo importante es participar")
}


if (resultado === 1) {
    console.log("Medalla de oro")
} else if (resultado === 2) {
    console.log("Medalla de plata")
} else if (resultado === 3) {
    console.log("Medalla de bronce")
} else {
    console.log("Lo importante es participar")
}


switch (resultado) {
    case 1:
        console.log("Medalla de oro")
        break;
    case 2:
        console.log("Medalla de plata")
        break;
    case 3:
        console.log("Medalla de bronce")
        break;
    default:
        console.log("Lo importante es participar")
}


if (resultado >= 1 && resultado <=3) {
    console.log("Sube al podium")
} else {
    console.log("Se acabó la carrera")
}