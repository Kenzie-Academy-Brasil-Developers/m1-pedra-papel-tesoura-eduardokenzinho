/* Desenvolva seu código abaixo */
    let Pedra = "pedra"
    let Papel = "papel"
    let Tesoura = "tesoura"

function playRockPaperScissor(player1, player2){
    if(player1 == "pedra" && player2 == "papel"){
        return 'Jogador 2 venceu!'
    }else if(player1 == "papel" && player2 == "pedra"){
        return 'Jogador 1 venceu!'
    }else if(player1 == "pedra" && player2 == "pedra"){
        return 'Empate!'
    }else if(player1 == "papel" && player2 == "papel"){
        return 'Empate!'
    }else if(player1 == "tesoura" && player2 == "papel"){
        return 'Jogador 1 venceu!'
    }else if(player1 == "papel" && player2 == "tesoura"){
        return 'Jogador 2 venceu!'
    }else if(player1 == "papel" && player2 == "papel"){
        return 'Empate!'
    }else if(player1 == "tesoura" && player2 == "tesoura"){
        return 'Empate!'
    }else if(player1 == "tesoura" && player2 == "pedra"){
        return 'Jogador 2 venceu!'
    }else if(player1 == "pedra" && player2 == "tesoura"){
        return 'Jogador 1 venceu!'
    }
}
console.log (playRockPaperScissor);