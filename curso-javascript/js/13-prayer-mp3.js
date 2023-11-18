'use strict'

const lista = document.querySelector('#lista-de-musicas');
const reprodutor = document.querySelector('audio');

lista.addEventListener("change", () => {

    /* Selecionando o options dentro da lista */
    let musicasSelecionada = lista.options[lista.selectedIndex];
    console.log(musicasSelecionada);

    /**
     * Associando o value do option//9musicaSelecionada
     * ao src do elemento audio (reprodutor)
     */
    reprodutor.src = musicasSelecionada.value;

    /**
     * Reproduzindo a música selecionada somente se o valor de
     * musicaSelecionada diferente de vázio.
     */

    if(musicasSelecionada.value !== "") {
        reprodutor.play();
    }
})