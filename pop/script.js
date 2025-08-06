const popButton = document.getElementById("popBtn")
const resetButton = document.getElementById("resetBtn")
const Shift= document.getElementById("Shift")
let elementos = ["kiwi" , "pera" , "guanabana" , "pomelo" , "piña" , "manzana" , "limon"]

const contenedor = document.getElementById ("elementos")
function actualizarHTML (){
    let resultHTML = ""
    for (let i = 0; i < elementos.length; i++) {
        resultHTML += "<span>" +elementos[i] + "</span>"
        
    }
    contenedor.innerHTML = resultHTML
}

function miFuncionDePop(){
 elementos.pop()
    actualizarHTML()
 }
 function miFuncionDeShift(){
    elementos.shift()
    actualizarHTML()
 }

 
function miFuncionDeReseteo(){
    elementos = ["kiwi" , "pera" , "guanabana" , "pomelo" , "piña" , "manzana" , "limon"]
    actualizarHTML()
}

actualizarHTML()

Shift.addEventListener("click", miFuncionDeShift)
popButton.addEventListener("click", miFuncionDePop)
resetButton.addEventListener("click", miFuncionDeReseteo)