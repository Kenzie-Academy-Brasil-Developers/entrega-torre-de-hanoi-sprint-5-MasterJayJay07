//variáveis com as torres
const towerSec = document.getElementById("container_torres")
const tower1 = document.getElementById("torre1")
const tower2 = document.getElementById("torre2")
const tower3 = document.getElementById("torre3")
const towers = document.getElementsByClassName("torre")
let torre
let disco = ""

//variáveis com os discos
const redDisk = document.querySelector(".dVermelho")
const greenDisk = document.querySelector(".dVerde")
const blueDisk = document.querySelector(".dAzul")
const yellowDisk = document.querySelector(".dAmarelo")

function largura(box){
    return box.offsetWidth;
}

//*******função para descobrir a torre clicada*****//
function rodarJogo(evento){
    pegarTorre(evento)
    ultimo(evento)
}

//função que pega a torre clicada
function pegarTorre(evt){ 
   torre = evt.currentTarget
   console.log(torre)
} 
//função que retorna o último filho da torre clicada
function ultimo(){
    disco = torre.lastElementChild
    console.log(disco)
}



//*******função que move os discos*****//

// for (let i=0; i<towers.length; i++){
//     towers[i].addEventListener("click", rodarJogo)
// }
function moverDisco(evento){
    pegarTorre(evento)
    torre.appendChild(disco)
    disco=""
}

tower1.addEventListener("click", function(){
    if (disco===""){
        disco = tower1.lastElementChild
        return disco
    }
    if (disco!==""){
        tower1.appendChild(disco)
        disco=""
    }
    if (disco=="null"){
        disco=""
    }
})
tower2.addEventListener("click", function(){
    if (disco===""){
        disco = tower2.lastElementChild
        return disco
    }
    if (disco!==""){
        tower2.appendChild(disco)
        disco=""
    }    
    if (disco=="null"){
        disco=""
    }
})
tower3.addEventListener("click", function(){
    if (disco===""){
        disco = tower3.lastElementChild
        return disco
    }
    if (disco!==""){
        tower3.appendChild(disco)
        disco=""
    }
    if (disco=="null"){
        disco=""
    }
})



//botão reset

// botaoReset.addEventListener("click", function(){
//     tower1.appendChild(redDisk)
//     tower1.appendChild(greenDisk)
//     tower1.appendChild(blueDisk)
//     tower1.appendChild(yellowDisk)
// })


//clicar na torre
//verificar se a torre tem discos
//se não tiver, não fazer nada
//se tiver, pegar o ultimo elemento dela(disco menor)
//clicar numa torre pra adicionar esse elemento
//elementos maiores não podem ser inseridos em cima de elementos menores
//não pode mover elementos que estão numa posição abaixo de outro


/* <div class="torre" id="torre1">
            <div class="disco dVermelho"></div>
            <div class="disco dVerde"></div>
            <div class="disco dAzul"></div>
            <div class="disco dAmarelo"></div>
        </div>
        <div class="torre" id="torre2"></div>
        <div class="torre" id="torre3"></div>
    </div> */
// towerSec.createElement("div")
// towerSec.createElement("div")
// towerSec.createElement("div")
//função pra avaliar se tem filhos

function temFilho(retorno){
   return retorno.children.length!== 0
}

// //função que diz quantos discos tem na torre
// function quantosDiscos(evt){
//     console.log(evt.childElementCount)
//     const numerosDeDiscos = evt.childElementCount
// }