//variáveis com as torres
const tower1 = document.getElementById("torre1")
const tower2 = document.getElementById("torre2")
const tower3 = document.getElementById("torre3")
let towers = document.getElementsByClassName("torre")

//variáveis com os discos
const redDisk = document.querySelector(".dVermelho")
const greenDisk = document.querySelector(".dVerde")
const blueDisk = document.querySelector(".dAzul")
const yellowDisk = document.querySelector(".dAmarelo")

//função pra avaliar se tem filhos
function temFilho(retorno){
   return retorno.children.length!== 0
}

//função de clique
const discoAtual = tower1.addEventListener("click", function(){
    let verificar = temFilho(tower1)
    let newArr = tower1.children
    let ultima
    if (verificar === true){
        ultima = newArr[newArr.length -1]
    } else {
        console.log("não tem disco")
    }
    console.log(ultima)
    return ultima
})

tower2.addEventListener("click", function(){
    console.log(discoAtual)
})



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