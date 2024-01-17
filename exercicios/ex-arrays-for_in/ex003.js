/*
Tenha um array de objetos (por exemplo, representando pessoas) e use for...in para imprimir o nome e a idade de cada pessoa.
*/

let pessoas = [
    {nome: 'Thays Oliveira' , idade: 22},
    {nome: 'Auro Júnior' , idade: 32},
    {nome: 'Gabriel Oliveira' , idade: 1}
]

for(let dados in pessoas) {
    let pessoa = pessoas[dados]
    if(pessoa.idade > 1){
    console.log(`${pessoa.nome} de ${pessoa.idade} anos de idade.`)
    } else {
        console.log(`${pessoa.nome} de ${pessoa.idade} ano de idade.`)
    }
}