// importando componentes de outros arquivos

import BotaoConclui from './componentes/concluiTarefa.js'
import BotaoDeleta from './componentes/deletaTarefa.js';

// funcao anonima para criar elemento html no DOM
const criarTarefa = (evento)=>{
    // retira evento padrao de recarregar a pagina
    evento.preventDefault();

    // seleciona elementos para manipular
    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');

    // captura valores de um elemento
    const valor = input.value; 
    
    // criaçao de novo elemento html no dom
    const tarefa = document.createElement('li');
    // adiciona classe css para o elemento 
    tarefa.classList.add('task');

    // template para o elemento html atribuido em variavel
    const conteudo = `<p class='content'>${valor}</p>`;

    // altera o conteudo do elemento html criado 
    tarefa.innerHTML = conteudo;

    // adiciona o elemento criado ao final do elemento pai 
    lista.appendChild(tarefa);
    
    // adiciona ao elemento pai e executa a funcao
    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());

    // limpa valores do campo de entrada
    input.value = "";
}

// selecionando elemento html
const novaTarefa = document.querySelector('[data-form-button]');

// manipulando o DOM a partir de evento 
novaTarefa.addEventListener('click', criarTarefa);





