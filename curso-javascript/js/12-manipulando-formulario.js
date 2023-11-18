'use strict';

// Selecionando os elementos: 
const formulario = document.querySelector('form');
const campoNome = formulario.querySelector('#nome');
const campoNota1 = formulario.querySelector('#nota1');
const campoNota2 = formulario.querySelector('#nota2');

// Selecionando a tabela e seus elementos:
const tabela = document.querySelector('table');
const corpoTabela = tabela.querySelector('tbody');

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    /**
     * Verificando se a tabela está oculta, ou seja
    // se ela tem o atributi hidden
     */
    if(tabela.hasAttribute("hidden")) {
        // Se estiver, removemos o atributo
        tabela.removeAttribute("hidden")
    }

    // Capturando os dados digitados:
    let nome = campoNome.value
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);

    // Calculando a média:
    let media = (nota1 + nota2) / 2;

    // Verificando a situação do aluno de acordo a média
    let situacao, cor;

    if(media >= 7) {
        situacao = "Aprovado(a)!"
        cor = "ap"
    } else {
        situacao = "Reprovado(a)!"
        cor = "rep"
    }

    
    /**
     * Renderizando os dados na Tabela:
     * Rotinas para criar uma nova linha e colunas para exibição dos dados no corpo da tabela
     */

    // 1) Criar elemento 
    const linha = document.createElement('tr');
    linha.classList.add(cor);
    // 2) Montar o conteúdo do elemento 
    linha.innerHTML = `<td>${nome}</td>
                      <td>${media}</td>
                    <td>${situacao}</td>`
    // 3) Adicionar na área da página desejada
    corpoTabela.appendChild(linha);

    // Resetar formulário
    formulario.reset();
    // Devolver o foco/cursor para o nome
    campoNome.focus();

})

