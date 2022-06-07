let helados = parseInt(prompt("¿Cuántos helados quieres comprar?"))
let precio = helados * 2

// Creo que hay 2 formas de entender este problema
// Una sería sumando un helado si helados > 10
// Y otra, como he hecho yo, restando - 2 del precio
// (En ambos casos, "nos regalan uno")

if (helados > 10) {
    precio -= 2
}

console.log(`${helados} helado(s) te sale(n) por ${precio} euros`)