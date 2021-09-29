//variáveis com as torres
const towerSec = document.getElementById("container_torres")
const tower1 = document.getElementById("torre1")
const tower2 = document.getElementById("torre2")
const tower3 = document.getElementById("torre3")
const towers = document.getElementsByClassName("torre")
let torre = ""
let disco = ""

//variáveis com os discos
const redDisk = document.querySelector(".dVermelho")
const greenDisk = document.querySelector(".dVerde")
const blueDisk = document.querySelector(".dAzul")
const yellowDisk = document.querySelector(".dAmarelo")

//*******função para descobrir a torre clicada*****//


for (let i=0; i<towers.length; i++){
    towers[i].addEventListener("click", pegarTorre)
}
//função que pega atorre clicada
function pegarTorre(evt){ 
   ultimo(evt.currentTarget)
   torre = evt.currentTarget
} 
//função que retorna o último filho da torre clicada
function ultimo(evt){
    disco = evt.lastElementChild
    console.log(disco)
}



//*******função que move os discos*****//

for (let i=0; i<towers.length; i++){
    towers[i].addEventListener("click", moverDisco)
}
function moverDisco(torre,disco){
    torre.appendChild(disco)
}


// yellowDisk.addEventListener("click", function(){
//     tower2.appendChild(yellowDisk)
// })
// blueDisk.addEventListener("click", function(){
//     tower2.appendChild(blueDisk)
// })
// greenDisk.addEventListener("click", function(){
//     tower2.appendChild(greenDisk)
// })
// redDisk.addEventListener("click", function(){
//     tower2.appendChild(redDisk)
// })


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


// const discoAtual = tower1.addEventListener("click", function(){
//     let verificar = temFilho(tower1)
//     let newArr = tower1.children
//     let ultima
//     if (verificar === true){
//         ultima = newArr[newArr.length -1]
//     } else {
//         console.log("não tem disco")
//     }
//     console.log(ultima)
//     return ultima
// })

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

// function temFilho(retorno){
//    return retorno.children.length!== 0
// }

// //função que diz quantos discos tem na torre
// function quantosDiscos(evt){
//     console.log(evt.childElementCount)
//     const numerosDeDiscos = evt.childElementCount
// }