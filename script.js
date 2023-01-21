const moto1 = {
    nome: "Ninja 300",
    cilindrada: 300,
    esporte: true,
    coresDisponiveis:  ["verde", "azul", "vermelho"]
}

const moto2 = {
    nome: "Fazer 150",
    cilindrada: 149,
    esporte: false,
    coresDisponiveis:  ["verde", "azul", "vermelho"]
}

const moto3 = {
    nome: "twister",
    cilindrada: 249,
    esporte: false,
    coresDisponiveis:  ["verde", "azul", "vermelho"]
}

const moto4 = {
    nome: "CBR 1000",
    cilindrada: 1000,
    esporte: true,
    coresDisponiveis:  ["verde", "azul", "vermelho"]
}

const moto5 = {
    nome: "Hayabusa",
    cilindrada: 1340,
    esporte: true,
    coresDisponiveis:  ["verde", "azul", "vermelho"]
}

// //media de cilindradas
// let MediaCc = ((moto1.cilindrada+moto2.cilindrada+moto3.cilindrada+moto4.cilindrada+moto5.cilindrada)/5)

// //true or false todas esportivas
// console.log(moto1.esporte && moto2.esporte && moto3.esporte && moto4.esporte && moto5.esporte)

let arrayDeMotos = []

if (moto1.esporte === true){
    arrayDeMotos.push(moto1)
}
    else{
    alert(`${moto1.nome} não puxada`)
}

if (moto2.esporte === true){
    arrayDeMotos.push(moto2)
}
// else{
//     alert(`${moto1.nome} não puxada`)
// }

if (moto3.esporte === true){
    arrayDeMotos.push(moto3)
}
// else{
//     alert(`${moto1.nome} não puxada`)
// }

if (moto4.esporte === true){
    arrayDeMotos.push(moto4)
}
// else{
//     alert(`${moto1.nome} não puxada`)
// }

if (moto5.esporte === true){
    arrayDeMotos.push(moto5)
}
// else{
//     alert(`${moto1.nome} não puxada`)
// }

// for (let moto of arrayDeMotos) {
//     for (let propriedade in moto){
//         console.log(`${propriedade}: ${moto[propriedade]}`)
//     }
//     console.log(`-----`)
    
// }

// function recebeObjetoDevolveString (obj) {
//    for( let propriedade in obj){
//     console.log(`${propriedade}: ${obj[propriedade]}`)
//    }
// }

// recebeObjetoDevolveString(moto2)

// 4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.

function recebeArrayObjEString (arrObj,str){
    let variavelArmazenamento = []
    for (let indice of arrObj){
        if (indice.nome == str){
            variavelArmazenamento = indice
        }
    }
    
    if (variavelArmazenamento == []){
        alert(`modelo de moto "${str}" não encontrado.`)
    } else{
        for (let item in variavelArmazenamento){
            if(variavelArmazenamento[item] == str){
                console.log(` Modelo de moto "${variavelArmazenamento[item]}" encontrado`)
            }
        }
    }
}

recebeArrayObjEString (arrayDeMotos,"Ninja 300")


const moto1Html = document.getElementById("Ninja-cilindrada")
                           
let moto1Modific = document.getElementById("Ninja")
moto1Modific.innerHTML += `<p>Modelo: <a href="">Ninja 300</a></p>
<p id="Ninja-cilindrada">Cilindradas: 300cc</p><p>Esportiva: true</p><p>Cores disponíveis: "verde", "azul", "vermelho"</p>"`

let moto2Modific = document.getElementById("CBR")
moto2Modific.innerHTML += `<p>Modelo: <a href="">CBR 1000</a></p>
<p>Cilindrada: 1000cc</p>
<p>Esportiva: true</p>
<p>Cores disponíveis: "verde", "azul", "vermelho"</p>"`

let moto3Modific = document.getElementById("Hayabusa")
moto3Modific.innerHTML += `<p>Modelo: <a href="">Hayabusa</a></p>
<p>Cilindrada: 1340cc</p>
<p>Esportiva: true</p>
<p>Cores disponíveis: "verde", "azul", "vermelho"</p>`

