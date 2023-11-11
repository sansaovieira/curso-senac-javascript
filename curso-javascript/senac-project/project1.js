let square = document.getElementById('square')

const colors = ['blue', 'green', 'orange'];
const meanings = ['Azul significa Harmonia e Maturidade', 'Verde significa Saúde e Esperança', 'Laranja significa Força e Energia']

square.style.display = 'flex';
square.style.justifyContent = 'center'
square.style.marginTop = '10%'

for(let i = 0; i < 3; i++) {
    let newDiv = document.createElement('div');

    newDiv.style.backgroundColor = colors[i];
    newDiv.style.cursor = 'pointer';
    newDiv.style.border = '3px solid black';
    newDiv.style.width = '100px';
    newDiv.style.height = '100px';
    newDiv.style.margin = '10px';

    newDiv.addEventListener('click', () =>{
        document.body.style.backgroundColor = colors[i];
        document.body.style.transition = '2s'
        document.body.style.tabSize = '20px'

        let h2 = document.createElement('h2');
        h2.style.textAlign = 'center';
        h2.textContent = meanings[i];
        h2.style.color = 'white';

        let h2Existente = document.querySelector('h2');
        if(h2Existente) {
            h2Existente.remove();
        }

        document.body.appendChild(h2);
    });

    square.appendChild(newDiv)
}