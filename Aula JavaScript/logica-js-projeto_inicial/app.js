alert('Bem Vindo ao jogo do número secreto')
let numeroMaximo = 1000;
let chute;
let tentativas = 0;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
console.log(numeroSecreto)

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número de 1 a ${numeroMaximo}`)
        if (chute==numeroSecreto){          
        } else {
            if (chute > numeroSecreto) {
                alert('O número é menor!')
            } else {
                alert('O número é maior!')
            }
        } tentativas++
}
let palavraTentaiva = tentativas > 1 ? 'tentativas' : 'tentativa' 
alert(`Parabéns você acertou o número sercreto ${numeroSecreto} com ${tentativas} ${palavraTentaiva}` );
