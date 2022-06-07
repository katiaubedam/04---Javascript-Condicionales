let weekDay = prompt("Escribe un día de la semana").toLowerCase()

// Versión con switch

switch (weekDay) {
    case "lunes": case "martes": case "miércoles": case "jueves": case "viernes": 
        console.log(`Hoy es ${weekDay}`)
        break;
    case "sábado": case "domingo":
        console.log(`Hoy es fin de semana`)
        break;
    default:
        console.log(`No es un día de la semana`)
}

// Versión en if else

if (weekDay == "lunes" || weekDay == "martes" || weekDay == "miércoles" || weekDay == "jueves" || weekDay == "viernes") {
    console.log(`Hoy es ${weekDay}`)
} else if (weekDay == "sábado" || weekDay == "domingo") {
    console.log(`Hoy es fin de semana`)
} else {
    console.log(`No es un día de la semana`)
}