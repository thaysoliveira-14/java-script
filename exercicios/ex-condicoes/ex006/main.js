function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoNascimento = document.getElementById('ano').value
    var resultado = document.getElementById('resultado')

    if(anoNascimento == '' || anoNascimento > ano) {
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(anoNascimento)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sexo[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'imagens/masc-crianca.png')
            } else if(idade < 18) {
                //Adolescente
                img.setAttribute('src', 'imagens/masc-adolescente.png')
            } else if(idade < 65) {
                //Adulto
                img.setAttribute('src', 'imagens/masc-adulto.png')
            } else{
                //Idoso
                img.setAttribute('src', 'imagens/masc-idoso.png')
            }
        } else {
            genero = 'Mulher'
            if(idade >=0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'imagens/fem-crianca.png')
            } else if(idade < 18) {
                //Adolescente
                img.setAttribute('src', 'imagens/fem-adolescente.png')
            } else if(idade < 65) {
                //Adulto
                img.setAttribute('src', 'imagens/fem-adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/fem-idosa.png')
            }
        }

        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        resultado.appendChild(img)
        
    }

}