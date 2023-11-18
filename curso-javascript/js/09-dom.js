"use strict"


/* Funções/métodos de seleção de elementos no DOM

 - getElementById()

Seleciona UM elemento através do ID

 - querySelector()

Seleciona UM elemento através de SELETORES (mesma lógica do CSS)

 
- querySelectorAll()

Seleciona VÁRIOS elementos através de SELETORES (mesma lógica do CSS)

 */
/* Exemplos de seleção no DOM */

// Exemplo 1: getElementById

const legenda = document.getElementById("legenda")


// Exemplo 2: querySelector()



const titulo = document.querySelector("h1")

console.log(titulo);

const sobreFront = document.querySelector("#sobre-front")
console.log(sobreFront);

 



// Mini-exercício

 /* Selecione e coloque na memória os elementos/conteúdo:

 - Back-end (use uma classe)

 -Editores de códigos (antes, coloque este elemento dentro de uma div, e use o seletor descendente para acessá-lo*/

 const sobreBack = document.querySelector(".sobre-back")
console.log(sobreBack);

 const editores = document.querySelector("div h2")
console.log(editores);

//Exemplo 3: quwerSelectorAll()
const subtittulos = document.querySelectorAll("h2");
console.log(subtittulos);
console.log(subtittulos [1]);

const varios = document.querySelectorAll("p,a");
console.log(varios);


/* Modificando elementos no DOM 
-Conteudo, nudança de tag, cores, criação de elementos) */

//Alterando o conteudo 
legenda.textContent = "DOM - Hierarquia Geral";

sobreFront.innerHTML = "<i>Front-End</i>";

//CSS INLINE via JavaScript
sobreBack.style.color = "red";
sobreBack.style.textAlign = "center";

//CSS usando classes via JavaScript
titulo.classList.add("destaque")


let listaDeEditores = [
    "VSCode",
    "Notepad++",
    "Sublime Text",
    "Atom",
    "Dreamweaver",
    "curso"
    
];

// Selecionando a lista vazia através de classe 
const lista = document.querySelector(".lista");
console.log(lista);


//Percorrer o array usando o loop for/of

for(let programa of listaDeEditores ){
    
    //1) Criar um novo elemento <li>
    let item = document.createElement("li");

    //2) Adicionar conteudo ao novo elemento
    item.innerHTML = programa;

    //3) adicionar a lista 
    lista.appendChild(item);
}
/* Adicionar atributo a diversos elementos */
const linksReferencias = document.querySelectorAll(".referencias li a");
console.log(linksReferencias);

for(let link of linksReferencias) {
    // "setando/colocando" o atributo "target" com o valor "_blank"
    link.setAttribute("target", "_blank");
}


















 

