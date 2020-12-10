function criaPost (){
    const criaTitulo = document.getElementById('titulo-post')
    const criaTituloValue = criaTitulo.value
    console.log(criaTituloValue)

    const criaAutor = document.getElementById('autor-post')
    const criaAutorValue = criaAutor.value
    console.log(criaAutorValue)

    const criaConteudo = document.getElementById('conteudo-post')
    const criaConteudoValue = criaConteudo.value
    console.log(criaConteudoValue)

    const post = {
        titulo: criaTitulo.value,
        autor: criaAutor.value,
        conteudo: criaConteudo.value,
        
    }
    console.log(post)
    
    

    if(criaAutorValue, criaAutorValue, criaConteudoValue){
        const container = document.getElementById('container-de-posts')
        container.innerHTML += `<h1>${criaTituloValue}</h1>`
        container.innerHTML += `<p><strong>${criaAutorValue}</strong></p>`
        container.innerHTML += `<p>${criaConteudoValue}</p>`
    } else {
        alert("Por favor, preencha os campos!")
    }

}   


