async function buscarEndereco (cep){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML="";
    try{
        var consultaCep = await (await fetch(
            `https:/viacep.com.br/ws/${cep}/json`)).json();
        if (consultaCep.erro){throw Error('CEP não encontrado')} 
        var cidade = document.getElementById('cidade');
        var bairro = document.getElementById('bairro');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        cidade.value = consultaCep.localidade;
        logradouro.value = consultaCep.logradouro;
        estado.value = consultaCep.uf;
        bairro.value = consultaCep.bairro;
        console.log(consultaCep);
        return consultaCep;

    } catch(erro){
        mensagemErro.innerHTML='<p>CEP Inválido, tente novamente.</p>';
    console.log(erro)
    }
}
// let ceps = ['26281200', '26281050'];
// let conjuntoCeps = ceps.map(valores=> buscarEndereco(valores));
// Promisse.all(conjuntoCeps).then(respostas=>console.log(respostas));

var cep = document.getElementById('cep');
cep.addEventListener('focusout', ()=> buscarEndereco(cep.value));