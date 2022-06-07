let input = prompt("Entras en un parque de atracciones. Todo parece muy animado y alegre. ¿Qué decides hacer? \n a) Subirte a la montaña rusa \n b) Sentarte en un banco").toLowerCase()

if (input === "a") {
    input = prompt ("En apenas unos minutos la montaña rusa arranca. Tras las primeras curvas, subidas y bajadas gritas de la emoción. Pero de repente, en mitad de un looping el tren se detiene en seco. Parece que ha habido una avería. ¿Qué decides hacer? \n a) Tratar de escapar por tu cuenta \n b) Esperar a que lleguen los bomberos").toLowerCase()

    if (input === "a") {
        alert ("Tras mucho esfuerzo, logras zafarte de las medidas de sujección de la montaña rusa. Inmediatamente tras hacerlo, caes al vacío y mueres. ¿Qué esperabas estando en mitad de un looping? FIN.")
    } else if (input === "b") {
        alert ("Esperas horas y horas y no sucede nada. Notas como toda la gente subida a la montaña rusa se pone cada vez más nerviosa. Después, logras enterarte por boca de alguien de que por lo visto Ayuso ha privatizado los bomberos de la comunidad y no irán a rescatarte salvo que pagues la tasa correspondiente. Como eres pobre, jamás te rescatan, y mueres. FIN.")
    } else {
        alert("La opción introducida no es válida, y como no hemos dado loops, tendrás que volver a ejecutar el script")
    }

} else if (input === "b") {
    input = prompt ("Te sientas a esperar pacíficamente en un banco cercano, mientras no para de pasar gente sonriente. De repente, un niño mareado pasa cerca de ti y sin que lo puedas evitar, te vomita en los pies. ¿Qué decides hacer? \n a) Echar la bronca al niño \n b) Tomártelo con humor").toLowerCase()

    if (input === "a") {
        alert ("Lanzas toda tu agresividad contra el pobre niño, quien sigue muy mareado y no parece prestarte atención. En mitad de tu perorata, la criatura se desploma contra el suelo. Sus padres aparecen, alarmados, comprobando que el niño no tiene pulso. Resulta que tenía una grave enfermedad. Los padres te denuncian por omisión de socorro y acabas con una pena de 10 años de cárcel. FIN.")
    } else if (input === "b") {
        alert ("Sin darle más importancia, bromeas con el niño que acaba de potarte encima y os acabáis haciendo amigos. Os montáis juntos en varias atracciones y lo pasáis genial, hasta que te preguntas que dónde estarán los padres de la criatura. Pides auxilio al personal del parque, sin éxito. Finalmente, decides hacerte cargo del niño y adoptarlo, lo cual acaba con tu vida profesional y social. Pero hey, ¡tienes un niño! FIN.")
    } else {
        alert("La opción introducida no es válida, y como no hemos dado loops, tendrás que volver a ejecutar el script")
    }
} else {
    alert("La opción introducida no es válida, y como no hemos dado loops, tendrás que volver a ejecutar el script")
}