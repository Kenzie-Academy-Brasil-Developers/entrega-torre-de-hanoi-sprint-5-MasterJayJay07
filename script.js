//criação das torres
const towerSec = document.getElementById("container_torres")
for (let i=1; i<4; i++){
    let tor = document.createElement("div")
    tor.classList.add("torre")
    tor.id = `torre${i}`
    towerSec.appendChild(tor)
}


//variáveis com as torres
const tower1 = document.getElementById("torre1")
const tower2 = document.getElementById("torre2")
const tower3 = document.getElementById("torre3")
const towers = document.getElementsByClassName("torre")
const botaoReset = document.getElementById("botao_reset")
let torre
let disco = ""


//criação dos discos
let namesDisks = ["dVermelho", "dVerde", "dAzul", "dAmarelo"]
for (let i=0; i<namesDisks.length; i++){
    let disk = document.createElement("div")
    disk.classList.add("disco")
    disk.classList.add(namesDisks[i])
    tower1.appendChild(disk)
}


//variáveis com os discos
const redDisk = document.querySelector(".dVermelho")
const greenDisk = document.querySelector(".dVerde")
const blueDisk = document.querySelector(".dAzul")
const yellowDisk = document.querySelector(".dAmarelo")



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

function moverDisco(evento){
    pegarTorre(evento)
    torre.appendChild(disco)
    disco=""
}

tower1.addEventListener("click", function(){
    if (disco===""){
        disco = tower1.lastElementChild
        disco.classList.add("selecionado")
        return disco
    }
    if (disco==null || disco==undefined){
        disco.classList.remove("selecionado")
        disco=""
    }
    if (disco!==""){
        tower1.appendChild(disco)
        disco.classList.remove("selecionado")
        disco=""
    }
})
tower2.addEventListener("click", function(){
    if (disco===""){
        disco = tower2.lastElementChild
        disco.classList.add("selecionado")
        return disco
    }
    if (disco==null || disco==undefined){
        disco.classList.remove("selecionado")
        disco=""
    }
    if (disco!==""){
        tower2.appendChild(disco)
        disco.classList.remove("selecionado")
        disco=""
    }    
})
tower3.addEventListener("click", function(){
    if (disco===""){
        disco = tower3.lastElementChild
        disco.classList.add("selecionado")
        return disco
    }
    if (disco==null || disco==undefined){
        disco.classList.remove("selecionado")
        disco=""
    }
    if (disco!==""){
        tower3.appendChild(disco)
        disco.classList.remove("selecionado")
        disco=""
    }
})


// botão reset
botaoReset.addEventListener("click", function(){
    tower1.appendChild(redDisk)
    tower1.appendChild(greenDisk)
    tower1.appendChild(blueDisk)
    tower1.appendChild(yellowDisk)
    disco.classList.remove("selecionado")
    disco=""
})


//função que diz se o elemento tem elementos filhos
function temFilho(retorno){
   return retorno.children.length!== 0
}


//função que diz quantos discos tem na torre
function quantosDiscos(evt){
    console.log(evt.childElementCount)
    const numerosDeDiscos = evt.childElementCount
}


//função que retorna a largura de um elemento
function largura(box){
    return box.offsetWidth;
}
