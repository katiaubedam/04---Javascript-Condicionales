let menu = prompt("Escoge una opción: \n a) Comprar la Play 5 \n b) Comprar la Xbox \n c) Comprar la Switch")

// Versión if else

if (menu === "a") {
    console.log("Te mola Sony")
} else if (menu === "b") {
    console.log("Te mola Microsoft")
} else if (menu === "c") {
    console.log("Te mola Nintendo")
} else {
    console.log("La opción elegida no es válida")
}


// versión switch

switch (menu) {
    case "a":
        console.log("Te mola Sony")
        break;
    case "b":
        console.log("Te mola Microsoft")
        break;
    case "c":
        console.log("Te mola Nintendo")
        break;
    default:
        console.log("La opción elegida no es válida")
}