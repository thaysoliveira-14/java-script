/*
Declare um array de objetos, cada um representando um produto com propriedades como nome, preço e quantidade em estoque. Utilize for...in para calcular o valor total do estoque (preço * quantidade) e imprima o resultado.
*/

let mercadorias = [
    {nome: "Camisa", preco: 30.5, estoque: 5},
    {nome: "Calça", preco: 129.87, estoque: 8},
    {nome: "Blusa", preco: 20, estoque: 10}
]

for(let indice in mercadorias) {
    let produto = mercadorias[indice]
    let estoque = produto.preco * produto.estoque

    console.log(`${produto.nome}: R$${estoque}`)
}