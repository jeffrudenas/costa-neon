const personagens = [
    { nome: 'Rafa Monteiro', emprego: 'MECÂNICO', dinheiro: 2350, lugar: 'Oficina do Porto', cor: '#ff9a4d', reputacao: 2 },
    { nome: 'Duda Vasconcelos', emprego: 'PARAMÉDICA', dinheiro: 5120, lugar: 'Hospital Central', cor: '#ff3d8b', reputacao: 5 },
    { nome: 'Leo Batista', emprego: 'TAXISTA', dinheiro: 980, lugar: 'Praia do Farol', cor: '#2ec4b6', reputacao: 4 },
];

const nomesReputacao = ['', 'TRANQUILO', 'ENCRENQUEIRO', 'PERIGOSO', 'TEMIDO', 'LENDA'];

const retratos = document.querySelector('.retratos');
const nome = document.querySelector('.nome');
const detalhes = document.querySelector('.detalhes');

const todosRetratos = [];
let atual = 0;
let entrando = false;

function selecionar(posicao) {
    if (entrando) {
        return;
    }
    atual = posicao;

    for (const retrato of todosRetratos) {
        retrato.classList.remove('selecionado');
    }
    todosRetratos[posicao].classList.add('selecionado');

    const personagem = personagens[posicao];
    nome.textContent = personagem.nome.toUpperCase();
    detalhes.textContent = personagem.emprego + ' | R$ ' + personagem.dinheiro.toLocaleString('pt-BR') + ' | ' + personagem.lugar + ' | ' + nomesReputacao[personagem.reputacao];
}

function confirmar() {
    entrando = true;
    todosRetratos[atual].classList.add('confirmado');
    detalhes.textContent = 'Entrando na cidade...';
}

for (const personagem of personagens) {
    const retrato = document.createElement('div');
    retrato.classList.add('retrato');
    retrato.style.setProperty('--cor', personagem.cor);

    const foto = document.createElement('div');
    foto.classList.add('foto');
    foto.textContent = personagem.nome[0];

    const reputacao = document.createElement('img');
    reputacao.classList.add('reputacao');
    reputacao.src = 'img/reputacao-' + personagem.reputacao + '.svg';
    reputacao.alt = nomesReputacao[personagem.reputacao];

    retrato.appendChild(foto);
    retrato.appendChild(reputacao);
    retratos.appendChild(retrato);

    const posicao = todosRetratos.length;
    todosRetratos.push(retrato);

    retrato.addEventListener('click', function () {
        selecionar(posicao);
    });
}

selecionar(0);

document.addEventListener('keydown', function (evento) {
    if (evento.key === 'ArrowRight') {
        let proximo = atual + 1;
        if (proximo === todosRetratos.length) {
            proximo = 0;
        }
        selecionar(proximo);
    } else if (evento.key === 'ArrowLeft') {
        let anterior = atual - 1;
        if (anterior < 0) {
            anterior = todosRetratos.length - 1;
        }
        selecionar(anterior);
    } else if (evento.key === 'Enter') {
        confirmar();
    } else if (evento.key === 'Escape') {
        entrando = false;
        todosRetratos[atual].classList.remove('confirmado');
        selecionar(atual);
    }
});