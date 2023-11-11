'use strict'

/** Exemplos */

/** Sintaxe 1 (tradicional)
 Função literal/anônima 
 */

 const exemplo1 = function(){
    console.log(' Função literal/anônima ');
};


/** Sintaxe 2 (tradicional)
 Função nomeada/declarada 
 */

function exemplo2(){
    console.log(' Função nomeada/declarada ');
};

/** Sintaxe 3 (moderna)
 Função flecha/seta (arrow function) 
 */

const exemplo3 = () => {
     console.log(' Função flecha/seta (arrow function) ');
 }

 exemplo1()
 exemplo2()
 exemplo3()


 /** Exemplo: Função com parâmetros */
 function soma(valor1, valor2) {
    /** Variável LOCAL: só existe DENTRO da função */
   let total =  valor1 + valor2

   // Retornamos para FORA da função o que foi calculado

   return total
 }

let resultado = soma(10, 5)
let outroResultado = soma(40, 24)
console.log(outroResultado);
console.log(resultado); // Da erro pois total não existe aqui.

console.log('<==============================>');


// Versão 1: (arrow function) 

// function dobra(valor) {
//     let valorDobrado = valor * 2;

//     return valorDobrado
// }


// Versão 2: (arrow function) 

// const dobra = (valor) => {
//     let valorDobrado = valor * 2;
//     return valorDobrado
// }

// Versão 3: (arrow function) 

// const dobra = valor => {
// return  valor * 2;
// }


// Versão 4: (arrow function) 

const dobra = valor => valor * 2;
    
    

let resultadoDobrado = dobra(20)

console.log(resultadoDobrado);

console.log('<==============================>');