const buttonforeach = document.getElementById ("buttonforeach")

const lista = ["kiwi" , "pera" , "guanabana" , "pomelo" , "piña" , "manzana" , "limon"]

const contenedor = document.getElementById ("elementos")
function actualizarHTML (){
    let resultHTML = ""
    // for (let i = 0; i < lista.length; i++) {
    //     resultHTML += "<span>" +lista[i] + "</span>"
    // }
    lista.forEach ((elementos, index) => {
        resultHTML += `<span id = "buttonforeach ${index}"> ${elementos}</span>`
    })
    contenedor.innerHTML = resultHTML
}
actualizarHTML()
 

lista.forEach ((value, index) => {
    console.log ("valor:" + value)
    console
    .log ("indice:" + index)
    console.log ("")
})