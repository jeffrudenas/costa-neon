const personagens = [
    { nome: 'Rafa Monteiro', emprego: 'MECÂNICO', dinheiro: 2350, lugar: 'Oficina do Porto', cor: '#ff9a4d', reputacao: 2 },
    { nome: 'Duda Vasconcelos', emprego: 'PARAMÉDICA', dinheiro: 5120, lugar: 'Hospital Central', cor: '#ff3d8b', reputacao: 5 },
    { nome: 'Leo Batista', emprego: 'TAXISTA', dinheiro: 980, lugar: 'Praia do Farol', cor: '#2ec4b6', reputacao: 4 },
];

const nomesReputacao = ['', 'TRANQUILO', 'ENCRENQUEIRO', 'PERIGOSO', 'TEMIDO', 'LENDA'];

const retratos = document.querySelector('.retratos');
const nome = document.querySelector('.nome');
const detalhes = document.querySelector('.detalhes');

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

    retrato.addEventListener('click', function () {
        for (const outro of document.querySelectorAll('.retrato')) {
            outro.classList.remove('selecionado');
        }
        retrato.classList.add('selecionado');

        nome.textContent = personagem.nome.toUpperCase();
        detalhes.textContent = personagem.emprego + ' | R$ ' + personagem.dinheiro.toLocaleString('pt-BR') + ' | ' + personagem.lugar + ' | ' + nomesReputacao[personagem.reputacao];
    });
}