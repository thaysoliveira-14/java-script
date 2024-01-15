function calcular() {
    let numero = document.getElementById('numero').value
    let tabuada = document.getElementById('select-tabuada')

    if(numero == '') {
        alert('[ERRO] Por favor, insira um número!')
    } else{
        let n = Number(numero)
        let c = 1
        tabuada.innerHTML = ''

        for(c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tabuada.appendChild(item)
            tabuada.style.display = 'inline'
        }

    }
}

