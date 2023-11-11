'use strict' 

/**
    Principais comandos de repetição
        - while ============> ENQUATO
        - do / while =======> FAÇA / ENQUANTO
        - for ==============> PARA

        OBS: Normalmente os comandos são controlados por meio de uma variável contadora.
 */

// Exemplo 1: while

// let i = 1
// while(i <= 5) {
//     console.log(`contador vale ${i}`);
//     i++;
// }

// Exemplo 2: do / while

// let i = 1

// do {
//     alert('Hey...')
//     i++ // Incremento
// } while( i <= 10);

// Exemplo 3: for

// for(let i = 1; i <= 50; i++) {
//     console.log(`I vale: ${i}`);
// }

// Loop for/in: útil para objetos


// let pessoa = {
//     nome: 'Fulano da Silva',
//     idade: 25,
//     cidade: 'São Paulo' 
// } 

// for(let dados in pessoa) {
//     // console.log(dados);
//     console.log(pessoa[dados]);
// }


let pessoas = [
    {
        nome: 'Sansão Vieira',
        idade: 25
    },

    {
        nome: 'João Domingos',
        idade: 45
    },

    {
        nome: 'Luís Cardoso',
        idade: 33
    }
]

for(let pessoa of pessoas) {
    console.log(pessoa); 
}