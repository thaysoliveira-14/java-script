function contagem() {
    let inicio = document.getElementById('inicio').value
    let fim = document.getElementById('fim').value
    let passo = document.getElementById('passo').value
    const resultado = document.getElementById('resultado')

    //Verificando se todos os campos estão preenchidos
    if(inicio == '' || fim == '' || passo == '') {
        alert('[ERRO] - Preencha os campos corretamente.')
    } else {
        resultado.innerHTML = 'Contando: <br>'
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)

        if(p <= 0) {
            alert('Passo inválido! Considerando PASSO = 1')
            p = 1
        }

        if(i < f){//Contagem progressiva
            for(let contador = i ; contador <= f ; contador += p) {
            resultado.innerHTML +=  ` ${contador} \u{1F449}`
        }

        } else { //Contagem regressiva
            for(let contador = i ; contador >= f ; contador -= p) {
            resultado.innerHTML +=  ` ${contador} \u{1F449}`
            }
    }
    resultado.innerHTML += `\u{1F3C1}`
    }
}



/*
var contador = Number(inicio)
        while(contador <= Number(fim)){
            resultado.innerHTML = `Passo n°${contador}`
            contador += Number(passo)
        }
*/