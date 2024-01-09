function carregar(){
    const horaAtual = new Date()
    var hora = horaAtual.getHours()
    var minutos = horaAtual.getMinutes()
    const horaFormatada = `Agora são ${hora} horas e ${minutos} minutos`
    var imagem = document.getElementById('imagem')
    document.getElementById('p-horas').innerHTML = horaFormatada

    if(hora >= 0 && hora < 12) {
        imagem.src = 'imagens/manha.png'
        document.body.style.backgroundColor = 'rgb(236, 218, 167)'
    } else if(hora >= 12 && hora < 18) {
        imagem.src = 'imagens/tarde.png'
        document.body.style.backgroundColor = 'rgb(214, 124, 40)'
    } else {
        imagem.src = 'imagens/noite.png'
        document.body.style.backgroundColor = 'rgb(70, 70, 70)'
    }
}
