'use strict'

const pagina = document.querySelector('body');
const formulario = document.querySelector('form');
const campoPalpite = document.querySelector('#palpite');
const resultado = document.querySelector('#resultado');


// Crie uma constante para o elemento de imagem
const imagem = document.querySelector('#imagem')

// Variáveis para os arquivos de imagem
let faustao = "../faustao.gif";
let miseravi = "../miseravi.gif";
// Gerar valores aleatório



let numeroAleatorio = parseInt(Math.random() * 11);
console.log(numeroAleatorio);

// Detetando o acionamento do formulário para capturar e analisar o palpite

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Anulando o comportamento padrão do evento
    imagem.src = faustao;
    imagem.src = miseravi;

    // Capturando o palpite(Valor do campo)
    let palpite = campoPalpite.value

    // Comparando palpite com o numero aleatório do computador
    if (palpite == numeroAleatorio) {
        resultado.textContent = "Parabéns, você acertou! 😉"
        resultado.style.color = "blue"
        resultado.style.animation = "tada 3s"
        document.body.style.backgroundColor = "lightblue"
        imagem.src = miseravi;
        // imagem.setAttribute("src", miseravi);
        
    } else {
        resultado.textContent = "Infelizmente você errou!😢"
        resultado.style.color = "red"
        resultado.style.animation = "shakeX 3s"
        document.body.style.backgroundColor = "salmon";
        imagem.src = faustao;
    }

})