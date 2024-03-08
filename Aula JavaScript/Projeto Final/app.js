let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio()
let tentaivas = 1;
// função de gerar número aleatório com listas, não permitindo que o mesmo número seja escolhido novamente 
function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumeroSorteados = [];
    }

    if (listaDeNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
   } else {
    listaDeNumeroSorteados.push(numeroEscolhido);
    console.log(listaDeNumeroSorteados)
    return numeroEscolhido;
   }
    
}
// função de exibição de texto na tela 
function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
//(feito só para facilitar o código)
function exibirTexto(){
    exibirTextoNaTela('h1', 'Bem vindo ao jogo do número secreto...')
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10')
}

exibirTexto()
// validção do botão chutar, onde dar a funcionalidade ao botão, e se acertar, o texto de de acerto é exibido, senão sera exibido as dicas 
function verificarChute() {
    let chute = document.querySelector('input').value
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'PARABÉNS');
        let palavraTentaiva = tentaivas > 1? 'tentativas' : 'tentativa' 
        let mensagemTentaiva = `Você acertou com o número secreto com ${tentaivas} ${palavraTentaiva}`
        exibirTextoNaTela('p', mensagemTentaiva);
        document.getElementById('reiniciar').removeAttribute('disabled')
        } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentaivas++;
        limparCampo()
    }
}
// função para validar o botão novo jogo 
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
// função para limpar o campo de chutes e reinicar o jogo 
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentaivas = 1;
    exibirTexto();
    document.getElementById('reiniciar').setAttribute('disabled', true )
}