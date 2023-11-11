let aluno = 'Domingos'
let nota1 = 5.47
let nota2 = 1
let faltas = 12;
let limiteDeFaltas = 10;
let media = (nota1 + nota2) / 2;
let mediaMinima = 5;

console.log(`Faltas: ${faltas}`);

// Operador LÓGICO && (END)

if(media >= mediaMinima && faltas <= limiteDeFaltas) {
    resultado = 'Aprovado(a)'
} else {
    resultado = 'Reprovado(a)'
}

console.log(`O aluno ${aluno}, de media: ${media.toFixed(2)} foi ${resultado}!`);


// Exemplo 3: Condicional ENCADEADA (if, else if, else)

/** Desempenho
    - Média menor que 3? PÉSSIMO
    - Média menor que 5? RUIM
    - Média menor que 7? REGULAR
    - Média menor que 9? BOM
    - Nenhuma das condições anteriores? ÓTIMO
 */

if(media < 3) {
    console.log('PÉSSIMO(A)');
} else if(media < 5 ) {
    console.log('RUIM');
} else if(media < 7) {
    console.log('REGULAR');
} else if(media < 9) {
    console.log('BOM');
} else {
    console.log('ÓTIMO');
}