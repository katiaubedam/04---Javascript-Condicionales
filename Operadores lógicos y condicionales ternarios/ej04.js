let password = prompt("Escribe una contraseña")

if (password.length >= 8) {
    console.log("Tu contraseña es segura")
} else {
    console.log("Tu contraseña no es segura, debes introducir 8 caracteres como mínimo")
}