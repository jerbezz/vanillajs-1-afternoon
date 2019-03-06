let gameProgress = []

function play(val){
    let playerTurn = document.getElementById('player')
    let playerValue = document.getElementById(val)
    

    if(playerTurn.innerText === "O"){
        playerTurn.innerText = "X"
        playerValue.innerText = "O"
        gameProgress[val] = "O"
    } else if(playerTurn.innerText === "X"){
        playerTurn.innerText = "O"
        playerValue.innerText = "X"
        gameProgress[val] = "X"
    } 
    
    let sqr1 = gameProgress[0]
    let sqr2 = gameProgress[1]
    let sqr3 = gameProgress[2]
    let sqr4 = gameProgress[3]
    let sqr5 = gameProgress[4]
    let sqr6 = gameProgress[5]
    let sqr7 = gameProgress[6]
    let sqr8 = gameProgress[7]
    let sqr9 = gameProgress[8]
    
    
        if(sqr1==='X' && sqr1 !== undefined && sqr1 === sqr2 && sqr1 === sqr3){
            alert('x wins')
        } else if (sqr4 === 'X' && sqr4 !== undefined && sqr4 === sqr5 && sqr4 === sqr6){
            alert('x wins')
        } else if (sqr7 === 'X' && sqr7 !== undefined && sqr7 === sqr8 && sqr7 === sqr9){
            alert('x wins')
        } else if (sqr1 === 'X' && sqr1 !== undefined && sqr1 === sqr4 && sqr1 === sqr7){
            alert('x wins')
        } else if (sqr2 === 'X' && sqr2 !== undefined && sqr2 === sqr5 && sqr2 === sqr8){
            alert('x wins')
        } else if (sqr3 === 'X' && sqr3 !== undefined && sqr3 === sqr6 && sqr3 === sqr9){
            alert('x wins')
        } else if (sqr1 === 'X' && sqr1 !== undefined && sqr1 === sqr5 && sqr1 === sqr9){
            alert('x wins')
        } else if (sqr3 === 'X' && sqr3 !== undefined && sqr3 === sqr5 && sqr3 === sqr7){
            alert('x wins')
        } else if(sqr1==='O' && sqr1 !== undefined && sqr1 === sqr2 && sqr1 === sqr3){
            alert('O wins')
        } else if (sqr4 === 'O' && sqr4 !== undefined && sqr4 === sqr5 && sqr4 === sqr6){
            alert('O wins')
        } else if (sqr7 === 'O' && sqr7 !== undefined && sqr7 === sqr8 && sqr7 === sqr9){
            alert('O wins')
        } else if (sqr1 === 'O' && sqr1 !== undefined && sqr1 === sqr4 && sqr1 === sqr7){
            alert('O wins')
        } else if (sqr2 === 'O' && sqr2 !== undefined && sqr2 === sqr5 && sqr2 === sqr8){
            alert('O wins')
        } else if (sqr3 === 'O' && sqr3 !== undefined && sqr3 === sqr6 && sqr3 === sqr9){
            alert('O wins')
        } else if (sqr1 === 'O' && sqr1 !== undefined && sqr1 === sqr5 && sqr1 === sqr9){
            alert('O wins')
        } else if (sqr3 === 'O' && sqr3 !== undefined && sqr3 === sqr5 && sqr3 === sqr7){
            alert('O wins')
        } else if (sqr1 !== undefined && sqr2 !== undefined && sqr3 !== undefined && sqr4 !== undefined && sqr5 !== undefined && sqr6 !== undefined && sqr7 !== undefined && sqr8 !== undefined && sqr9 !== undefined){
            alert('CAT has won the game')    
        }
}
    


