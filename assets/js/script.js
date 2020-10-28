/* Tipos de acesso:

tag: getElementByTagName()
id: getElementById()
nome: getElementByNome()
classe: getElementByClassName()
seletor: querySelector()

e é uma linguagem case sensitive - que reconhece
letras maisculas e minusculas e é feito dessa maneira
CamelCase. 
*/


let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")


let emailOK = false
let assuntoOK = false /*Todos esses metodos que estão declarados como falso serve, para fazer envio de formulário fake, sem a necessidade de um banco de dados*/

let mapa = document.querySelector("#mapa")

email.style.width ="100%"
assunto.style.width="100%"

function validaEmail(){
    let txt = document.querySelector("#txtEmail")
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txt.innerHTML = "Email inválido!"
        txt.style.backgroundColor ="red"
    }else{
        txt.innerHTML ="Email válido!!"
        txt.style.backgroundColor = "green"
        emailOK = true
    }
    
}


function validaAssunto(){
    let txt = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){
       txt.innerHTML ="Texto muito grande favor diminua e tente novamente!"
        txt.style.backgroundColor ='red'
        txt.style.display ='block'
    }else{
        /* essa é outra forma de mostra mensagem para o usuário:
        txt.innerHTML ="Muito bem, texto válido"
        txt.style.backgroundColor ='green'*/ 

        txt.style.display ='none'
        assuntoOK = true
        
    }
}

function enviar(){
    if(emailOK == true && assuntoOK == true){
        alert("Formulário foi enviado com sucesso ;D.")
    }else{
        alert("Favor preencher o formulário corretamente!")
    }

}

function mapaZoom(){

    mapa.style.width = '800px'
    mapa.style.height = '600px'

}

function mapaNormal(){

    mapa.style.width = '400px'
    mapa.style.height = '250px'

}



