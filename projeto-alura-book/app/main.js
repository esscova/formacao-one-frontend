// array vazio que será usado para armazenar os dados dos livros obtidos da API
let livros = [];

//  URL da API atribuida 
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

// chamada da funcao
getBuscarLivrosDaAPI();


async function getBuscarLivrosDaAPI (){
    // funcao assincrona para requisiçao de API e armazenamento
    
    const res = await fetch(endpointDaAPI);
    // Faz uma requisição assíncrona à URL especificada (endpointDaAPI) usando a função fetch(). O await é usado para esperar que a requisição seja concluída antes de continuar.

    livros = await res.json();
    // Assim que a resposta da requisição é obtida, ela é transformada em um objeto JavaScript usando o método json(). Os dados obtidos são armazenados na variável livros.

    livros = aplicarDesconto(livros);
    // variavel que recebe retorno de função

    exibirOsLivrosNaTela(livros);
    // chamada de funcao que exibira os dados da API no DOM
  
}
