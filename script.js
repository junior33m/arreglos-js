
const contenedor= document.getElementById("elemento")
const input= document.getElementById("textinput")

let elementos= []

function AgregarElemento(){
    if( input.value != ""){
        elementos.push( input.value)

        let resultado = ""
        for (let i = 0; i < elementos.length; i++) {
           resultado += " <span>" + elementos[i] + "</span>"
        }
        contenedor.innerHTML= resultado

    }

}

function ResetElemento() {
        elementos=[]
        contenedor.innerHTML=""
    }