//Criando um array vazio para armazenar os números
let numeros = []

function adicionar() {
    // Obtém o elemento input com o ID 'numero'
    let numInput = document.getElementById('numero');
    // Obtém o valor do input
    let num = numInput.value
    // Obtém os elementos HTML necessários
    let conteiner = document.getElementById('conteiner')
    let btFinalizar = document.getElementById('fin')

    if(num == '' || num < 1 || num > 100 ) {
        alert("Por favor, digite um número entre 1 e 100.")
    } else {
        let resultado = document.getElementById('resultado')
        // Limpa o conteúdo da div#resultado
        resultado.innerHTML = ''

        // Verifica se o número já está no array
        if(numeros.includes(Number(num))){
            alert("Este número já foi adicionado!")
        } else {
            // Adiciona o número digitado ao array
            numeros.push(Number(num))
            // Cria um parágrafo para exibir o número adicionado
            let item = document.createElement('p')
            item.textContent = `Valor ${num} adicionado`

            // Adiciona o parágrafo à div#conteiner
            conteiner.appendChild(item)
            conteiner.style.display = 'inline-block'
            // Limpa o valor do input
            numInput.value = ''

            // Exibe o botão "Finalizar"
            let btFinalizar = document.getElementById('fin')
            btFinalizar.style.display = 'inline-block'
        }
        
    }
    
}

function finalizar() {
    let resultado = document.getElementById('resultado')
    // Ordena o array de números
    numeros.sort()
    // Obtém o maior número
    let numMaior = numeros[numeros.length - 1]
    // Calcula a soma dos números
    let soma = numeros.reduce((acc, curr) => acc + curr, 0);
    // Limpa o conteúdo da div#resultado
    resultado.innerHTML = ''
    // Exibe as informações sobre os números digitados
    resultado.innerHTML += `• Ao todo temos ${numeros.length} números cadastrados.<br>`
    resultado.innerHTML += `• O menor valor informado foi ${numeros[0]}.<br>`
    resultado.innerHTML += `• O maior valor informado foi ${numMaior}.<br>`
    resultado.innerHTML += `• A soma dos valores digitados é ${soma}.<br>`
    resultado.innerHTML += `• A média dos valores digitados é ${(soma / numeros.length).toFixed(2)}.`
}



