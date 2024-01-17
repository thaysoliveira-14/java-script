let array = ['Meu ', 'nome ', 'é ', 'Thays ', 'Oliveira ', 'Sousa ', 'Vasconcelos ']
let nomeCompleto = ' '
for(let indice in array) {
    nomeCompleto += array[indice]
}

console.log(nomeCompleto)