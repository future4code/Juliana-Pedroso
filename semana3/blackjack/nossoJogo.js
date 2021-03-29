/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const saudacao = alert("Olá, visitante! Bem-vindx ao jogo de Blackjack :)")
let cartaUsuario1 = []
let cartaUsuario2 = []


 if(confirm("Quer iniciar uma nova rodada?")){
    // o que fazer se o usuário clicar em "ok"

    const cartaUsuario1 = comprarCarta()
    const cartaUsuario2 = comprarCarta()
    const pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor
    console.log("Usuário - cartas: ", cartaUsuario1.texto, cartaUsuario2.texto, "- pontuação : ", pontuacaoUsuario)

    const cartaComputador1 = comprarCarta()
    const cartaComputador2 = comprarCarta()
    const pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor
    console.log("Computador - cartas: ", cartaComputador1.texto, cartaComputador2.texto, "- pontuação :", pontuacaoComputador)
   
    if(pontuacaoUsuario > pontuacaoComputador){
       console.log("Usuário venceu!")
    } else if(pontuacaoUsuario < pontuacaoComputador){
       console.log("Computador venceu!")
    } else {
       console.log("Empate!")
    }
    
 } else {
    // o que fazer se o usuário clicar em "cancelar"
      console.log("O jogo acabou!")
 }

 





