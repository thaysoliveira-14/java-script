/*
Crie um objeto que represente um carro com propriedades como modelo, cor, ano, etc. Utilize for...in para imprimir as propriedades e seus valores.
*/

let carro = {
    marca: 'Citröen',
    modelo: 'C4 Lounge',
    cor: 'Branco',
    ano: 2014
}

for(let veiculo in carro) {
    console.log(`${veiculo}: ${carro[veiculo]}`)
}