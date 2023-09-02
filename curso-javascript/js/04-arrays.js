let alunos = ['António', 'Aline', 'Nicolas', 'Thais'];
console.log(alunos[2]);
console.log(alunos[0]);

/**
 * O acesso aos dados individuais do array, é feito através do
 * nome do array e do ÍNDICE correspondente à posição do dado.
 */

let nomeArtistas = ['Michael Jackson', 'Brandy', 'Trey Songzs', 'Jassie J']
console.log(`Os artistas que eu mais gosto são: ${nomeArtistas[0]} e ${nomeArtistas[3]}  e o que eu menos gosto é ${nomeArtistas[2]}`);

// Matrizes (arrays com 2 ou mais dimensões)
let linguagens = [
    ['HTML', 'CSS 3', 'JS'],
    ['PHP', 'ASP.Net', 'Java', 'Python']
]

console.log(`${linguagens[0][1]} -> é para estilos e ${linguagens[1][0]} -> é para o back-end.`);