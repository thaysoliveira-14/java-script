/*
Crie um array de objetos, onde cada objeto represente um estudante com propriedades como nome, notas (um array) e calcule a média das notas para cada estudante usando um loop for...in.
*/

let estudantes = [
    {nome: 'Maria' , notas:[8, 10, 9, 7]},
    {nome:'João', notas:[6, 7, 9, 5]},
    {nome:'Ana', notas:[4, 3, 2, 5]}
]

for(let indice in estudantes) {
    let aluno = estudantes[indice]
    let somaNotas = 0

    for(let nota of aluno.notas){
    somaNotas += nota
    }

    let media = somaNotas / aluno.notas.length
    console.log(`${aluno.nome} - média: ${media}`)
    
}