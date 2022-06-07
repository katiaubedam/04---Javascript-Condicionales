let num = parseInt(prompt("Escribe un número"))

//Confío en que se puede usar Math.abs ya que hemos visto ya otras funciones de Math similares

if (num >= 0) {
    console.log(num)
} else {
    console.log(`El valor absoluto de ${num} es ${Math.abs(num)}`)
}