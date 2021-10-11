const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active);
    if(active) {event.currentTarget.setAttribute('arial-label', 'Fechar Menu');
    }
    else{
        event.currentTarget.setAttribute('arial-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

//////////////////////////////////////////////////////////////////////////////////


let currentDivIndex = 0,
    itens = document.querySelectorAll(".talks");


document.body.onresize = function() {
    let botaoNext = document.getElementById("avancar")
    let botaoBack = document.getElementById("voltar")

    if (document.body.clientWidth < 531) {
        itens[1].classList.remove("selected");;
        botaoNext.setAttribute("onclick", "mobileNext()");
        botaoBack.setAttribute("onclick", "mobileBack()");
    }
    else{
        botaoNext.setAttribute("onclick", "nextDiv()");
        botaoBack.setAttribute("onclick", "backDiv()");
    }
};

function mobileNext(){
    document.querySelector("#voltar").style = "display: flex";
    currentDivIndex++

    itens[currentDivIndex -1].classList.remove("selected");
    
    if (currentDivIndex == (itens.length -1)){
        itens[currentDivIndex].classList.add("selected")
        document.querySelector("#avancar").style = "display: none";
    }else{
        itens[currentDivIndex].classList.add("selected");
    }
    
}

function mobileBack(){
    document.querySelector("#avancar").style = "display: flex";
    currentDivIndex--

    itens[currentDivIndex + 1].classList.remove("selected")

    if(currentDivIndex == 0){
        itens[currentDivIndex].classList.add("selected");
        document.querySelector("#voltar").style = "display: none";
    }else{
        itens[currentDivIndex].classList.add("selected");
    }
    
}

function nextDiv(){

    document.querySelector("#voltar").style = "display: flex";
    currentDivIndex++

    itens[currentDivIndex -1].classList.remove("selected");
    
    if (currentDivIndex == (itens.length - 2)){
        itens[currentDivIndex + 1].classList.add("selected")
        document.querySelector("#avancar").style = "display: none";
    }else{
        itens[currentDivIndex + 1].classList.add("selected");
    }
    
}

function backDiv(){
    document.querySelector("#avancar").style = "display: flex";

    if(currentDivIndex < (itens.length - 1)){
        itens[currentDivIndex + 1].classList.remove("selected");
    }else if(currentDivIndex == (itens.length - 1)){
        itens[currentDivIndex - 1].classList.add("selected");
    }
    

    currentDivIndex--
    if(currentDivIndex == 0){
        itens[currentDivIndex].classList.add("selected");
        document.querySelector("#voltar").style = "display: none"
        
    }
    else{
        itens[currentDivIndex].classList.add("selected");
    } 
    console.log(currentDivIndex)
    console.log(itens)
}

//////////////////////////////////////////////////////////////////////////////////

function abrirModal(modalID){
    const modal = document.getElementById(modalID)
    modal.classList.add("mostrar");
    modal.addEventListener("click", (e) => {
        if(e.target.id == modalID || e.target.className == "fechar"){
            modal.classList.remove("mostrar")
        }
    
    });
}    

const btmInsc = document.querySelector(".botaoInscreva-se");
btmInsc.addEventListener("click", () => abrirModal("modal-inscreva"))

function enviar(){
    let inputName = document.querySelector(".name").value;
    let inputEmail = document.querySelector(".email").value;
    let resposta = document.querySelector(".resposta");

    if(inputName != "" && inputEmail != ""){ 
        resposta.innerHTML = "Parabéns!!! Mas por enquanto esse modal não envia informação."
        resposta.classList.add("error")
        
    }else{
        resposta.innerHTML = "Preencha todos os campos"
    }
}