const lista = document.querySelector('.notificacoes');

function notificar(titulo, texto) {
    const cartao = document.createElement('div');
    cartao.classList.add('notificacao');

    const linhaTitulo = document.createElement('p');
    linhaTitulo.classList.add('titulo');
    linhaTitulo.textContent = titulo;

    const linhaTexto = document.createElement('p');
    linhaTexto.classList.add('texto');
    linhaTexto.textContent = texto;

    cartao.appendChild(linhaTitulo);
    cartao.appendChild(linhaTexto);
    lista.prepend(cartao);

    setTimeout(function () {
        cartao.remove();
    }, 5000);
}

window.addEventListener('message', function (evento) {
    const dados = evento.data;

    if (dados.acao === 'notificar') {
        notificar(dados.titulo, dados.texto)
    }
});