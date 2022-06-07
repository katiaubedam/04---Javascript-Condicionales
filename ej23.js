let year = parseInt(prompt("Indica un año"))

if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0) ) {
    console.log(`El año ${year} es bisiesto`)
} else {
    console.log(`El año ${year} no es bisiesto`)
}