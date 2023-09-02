let livros = {
    titulo: 'Senhor dos anéis',
    ano: 1954,
    volume: 3,
    autor: 'J.R.R Tolkien'
}

console.log("Meu livro preferido é: " + livros.titulo);

// Exemplo 2: Objeto contendo array e outro objeto
let cliente = {
    nome: 'Frederico',
    apelido: 'Kiko',
    idade: 22,
    telefones: ['11-2222-3333', '11-96666-5555'],
    medidas: {
        peso: 75,
        altura: 1.80
    }
}

console.log(cliente.nome);
console.log(cliente.idade + ' anos.')
console.log(cliente.telefones[1])
console.log(cliente.medidas.altura)
