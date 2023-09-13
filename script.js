/* Desenvolva seu código abaixo */
    

function playRockPaperScissor(player1, player2){
    let Pedra = "Pedra"
    let Papel = "Papel"
    let Tesoura = "Tesoura"

    if(player1 == Pedra && player2 == Papel || player1 == Papel && player2 == Tesoura || player1 == Tesoura && player2 == Pedra){
        return 'Jogador 2 venceu!'
    }else if(player1 == Papel && player2 == Pedra || player1 == Tesoura && player2 == Papel || player1 == Pedra && player2 == Tesoura){
        return 'Jogador 1 venceu!'
    }else if(player1 == Pedra && player2 == Pedra || player1 == Papel && player2 == Papel || player1 == Tesoura && player2 == Tesoura){
        return 'Empate!'
    }}
console.log (playRockPaperScissor);