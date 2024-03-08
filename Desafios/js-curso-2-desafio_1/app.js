let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do Desafio'

function verificarConsole() {
    console.log('Console clicado')
}
function verificarAlert() {
    alert('Eu amo JS')
}
function verificarPrompt() {
    let cidade = prompt('Diga o nome de uma cidade')
    alert(`Fui até ${cidade} e lembrei de você`)
    
}
function soma() {
    let n1 = Number(prompt('Digite um número'))
    let n2 = Number(prompt('Digite outro número'))
    let soma = (n1 + n2)
    alert(`A soma entre ${n1} e ${n2} è igual a ${soma}`)
}