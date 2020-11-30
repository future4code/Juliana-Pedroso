// Exercícios de interpretação de código

// 1.
a = 10
b = 10

console.log(b) // imprime valor de b (20)

b = 5 
console.log(a,b) // imprime valor de a e novo valor de b (10, 10)

// 2.
a = 10
b = 20
c = a
b = c
a = b

console.log(a, b, c) // imprime valores de a e os novos valores atribuídos ao b e ao c (10, 10, 10)

// Exercícios de escrita de código

// 1.
let nome
let idade

console.log(typeof nome) // imprime undefined
console.log(typeof idade) // imprime undefined

// o console imprime undefined porque não foi atribuído nenhum valor as variáveis nome e idade

const nomeUsuario = prompt("Qual é o seu nome?")
const idadeUsuario = prompt("Qual é a sua idade?")

console.log(typeof nomeUsuario)
console.log(typeof idadeUsuario)

// dessa vez, o console imprime os tipos como (string)

console.log(prompt("Olá " + nomeUsuario + "," + " você tem " + idadeUsuario + " anos "))

//2.
const livroFavorito = prompt("Qual é o seu livro preferido?")
const ultimoLivro = prompt("Qual foi seu último livro lido?")
const autor = prompt("Insira o nome de algum autor")
const personagem = prompt("Qual personagem mais te marcou?")
const recomendacao = prompt("Qual livro você indicaria?")

console.log(prompt("Seu livro favorito é: " + livroFavorito))
console.log(prompt("Seu último livro lido foi: " + ultimoLivro))
console.log(prompt("Seu autor mencionado foi: " + autor))
console.log(prompt("O personagem que mais te marcou foi: " + personagem))
console.log(prompt("Sua recomendação é: " + recomendacao))

console.log(livroFavorito, ultimoLivro, autor, personagem, recomendacao)
console.log

//3.
let comidasFavoritas = ["strognoff", "feijoada", "lasanha", "batata recheada", "pizza"]
console.log("Essas são as minhas comidas preferidas:")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])
console.log(comidasFavoritas[5])

comidasFavoritas = prompt("Qual a sua comida favorita?")
console.log(prompt(comidasFavoritas[1]))

//4.

const perguntas = ["Você prefere frio?", "Você gosta de cerveja?", "Seu animal preferido é gato?"]
const respostas = [true, false, true]

console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[2])