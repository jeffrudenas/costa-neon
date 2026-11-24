// pega as classes das caixas criadas no html
const progresso = document.querySelector('.progresso');
const porcentagem = document.querySelector('.porcentagem');
const textoDica = document.querySelector('.texto-dica');

window.addEventListener('message', function (evento) {
    const dados = evento.data;
    //aqui ele começa a pegar os dados do loading e contabilizar de 0 a 100%
    if (dados.eventName === 'loadProgress') {
        // cria a const pronto q seria Math.round(dados.loadFraction * 100) (ou seja: pronto é quando a fração atinge 100%)
        const pronto = Math.round(dados.loadFraction * 100);
        progresso.style.width = pronto + '%';
        porcentagem.textContent = pronto + '%';
    }
});
//aqui vai o texto das dicas
const dicas = [
    'Amor à vida: seu personagem tem medo de morrer. Aja como ele agiria.',
    'Nada de metagaming: o que você viu na live ou no Discord, seu personagem não sabe.',
    'A voz aqui é por distância: chegue perto para conversar.',
    'Aperte F8 para abrir o console do FiveM.',
];
// na programação, sempre começa com 0, nunca com 1.
let atual = 0;

// aqui fala q se é atual, então proxima sera atual + 1 (ou seja, atual = 0, 0 + 1 = 1, passa pra proxima frase)
function trocarDica() {
    atual = atual + 1;
    if (atual === dicas.length) {
        atual = 0;
    }
    textoDica.textContent = dicas[atual];
}

//aqui seta o intervalo de tempo em ms setInterval(trocarDica, 8000);
textoDica.textContent = dicas[0];
setInterval(trocarDica, 8000);