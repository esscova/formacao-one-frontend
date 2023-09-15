// criaçao e configuração de um botão para deletar tarefas


const BotaoDeleta = ()=>{
    // cria o elemento HTML <button>
    const botaoDeleta = document.createElement('button');
    // define o texto visivel do elemento
    botaoDeleta.innerText = 'deletar';
    // adiciona ouvinte de evento para executar funçao em clique
    botaoDeleta.addEventListener('click', deletarTarefa);
    return botaoDeleta;
}

// funcao para manipular eventos
const deletarTarefa = (evento)=>{
    // obtém o elemento HTML que acionou o evento de clique
    const botaoDeleta = evento.target;
    // obtém o elemento pai do botao
    const tarefaCompleta = botaoDeleta.parentElement;
    // remove a tarefa do DOM quando o botao é clicado
    tarefaCompleta.remove();
    return botaoDeleta;
}

export default BotaoDeleta