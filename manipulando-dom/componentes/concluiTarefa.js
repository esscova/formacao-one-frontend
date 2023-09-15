// Criação e configuração de um botão HTML
const BotaoConclui = ()=>{
    // criando elemento <button> no DOM
    const botaoConclui = document.createElement('button');
    // adicionando classe css
    botaoConclui.classList.add('check-button');
    // define o texto visivel dentro do botao
    botaoConclui.innerText = 'concluir';
    // adiciona ouvinte de evento para executar funçao em clique
    botaoConclui.addEventListener('click', concluirTarefa);
    
    return botaoConclui;
}

// funcao para manipular eventos
const concluirTarefa = (evento)=>{
    // obtém o elemento HTML que acionou o evento de clique
    const botaoConclui = evento.target;
    // obtém o elemento pai do botao
    const tarefaCompleta = botaoConclui.parentElement;
    // adiciona ou remove classe css, se ja estiver ele remove senao ele adiciona
    tarefaCompleta.classList.toggle('done');
}
export default BotaoConclui