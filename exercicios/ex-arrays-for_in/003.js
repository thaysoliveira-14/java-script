let livros = [
    { titulo: 'Ponto de Inflexão' , autor: 'Flávio Augusto', ano: 2019 },
    { titulo: 'Seja um líder de heróis' , autor: 'Leandro Moreira' , ano: 2019 },
    { titulo: 'Oração: O Exercício Contínuo da Fé' , autor: 'João Calvino' , ano: 2016 }
]

for(let i = 0; i < livros.length; i++) {
    let livro = livros[i]
    console.log(`Livro ${i + 1}`)
    console.log(`Título: ${livro.titulo}`)
    console.log(`Autor: ${livro.autor}`)
    console.log(`Ano de Publicação: ${livro.ano}`)
    console.log(`------------------------------------`)
}