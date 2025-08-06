const textinput = document.getElementById("textinput")

const  resultado = document.getElementById("posicionresultado")
let elementos = ["kiwi" , "manzana" , "pera" , "limon" , "sandia"];

const contenedor = document.getElementById ("elementos")
function actualizarHTML (){
    let resultHTML = ""
    for (let i = 0; i < elementos.length; i++) {
        resultHTML += "<span>" +elementos[i] + "</span>"
        
    }
    contenedor.innerHTML = resultHTML
}

actualizarHTML()

function inserElemenmt(){
    const posicion = elementos.indexOf(textinput.value)
    resultado.innerText = posicion;
}
