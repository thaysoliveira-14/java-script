/*
Declare um objeto com informações pessoais (nome, idade, cidade, etc.) e use for...in para imprimir cada propriedade e seu valor
*/

let dadosPessoais = {
    nome: 'Thays',
    idade: 22,
    cidade: 'Goiânia'
}

for(let dados in dadosPessoais) {
    console.log(`${dados}: ${dadosPessoais[dados]}`)
}