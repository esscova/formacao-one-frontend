// FILTRAGEM E EXIBICAO - CATEGORIAS/DISPONIBILIDADE

// selecionando todos os botoes de classe btn
const botoes = document.querySelectorAll('.btn')

// adicionando evento listener de clique em cada botao chamando a funcao filtrarLivros
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    // funcao quando um botao e clicado
    const elementoBtn = document.getElementById(this.id)
    // recebe o id do botao clicado

    const categoria = elementoBtn.value
    // recebe o valor do botao clicado

    let livrosFiltrados = (categoria == 'disponivel') ? filtrarPorDisponibilidade() : FiltrarPorCategoria(categoria)
    // filtragem com base na categoria ou disponibilidade


    exibirOsLivrosNaTela(livrosFiltrados)

    
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}

function FiltrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}