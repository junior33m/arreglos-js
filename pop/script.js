const popButton = document.getElementById("popBtn")
const resetButton = document.getElementById("resetBtn")
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

 
function miFuncionDeReseteo(){
    elementos = ["kiwi" , "pera" , "guanabana" , "pomelo" , "piña" , "manzana" , "limon"]
    actualizarHTML()
}

actualizarHTML()

popButton.addEventListener("click", miFuncionDePop)
resetButton.addEventListener("click", miFuncionDeReseteo)