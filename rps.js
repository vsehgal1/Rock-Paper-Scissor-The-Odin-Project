var playerScore = 0;
var computerScore = 0;
const results = document.querySelector('#results');
const btnStart = document.querySelector("#btnStart");
const scrs = document.createElement('id');
const scoreTrack = document.querySelector('#scoreTrack')

btnStart.addEventListener('click', () => {
    document.getElementById('btnStart').style.visibility = 'hidden';

    const btnRock = document.createElement('button');
    btnRock.textContent = 'Rock'
    const btnPaper = document.createElement('button');
    btnPaper.textContent = 'Paper'
    const btnScissor = document.createElement('button');
    btnScissor.textContent = 'Scissor'

    const arena = document.querySelector('#arena');

    arena.appendChild(btnRock);
    arena.appendChild(btnPaper);
    arena.appendChild(btnScissor);

    scrs.innerHTML = "Player " + playerScore + " - " + computerScore + " Computer";
    scoreTrack.appendChild(scrs);

    btnRock.onclick = () => (round('rock', computerPlay()));
    btnPaper.onclick = () => (round('Paper', computerPlay()));
    btnScissor.onclick = () => (round('Scissor', computerPlay()));

})

function ending(tag) {
    alert(tag + ' has won the game!');
    alert('Refreshing!');
    location.reload();
}


// Game starts here
var VALUES = ['rock', 'paper', 'scissor'];
function computerPlay() {
    return VALUES[Math.floor(Math.random() * Math.floor(3))];
}

function round(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    switch (true) {
        case (player == 'rock' && computer == 'paper'):
            return loser(player, computer);
        case (player == 'paper' && computer == 'scissor'):
            return loser(player, computer);
        case (player == 'scissor' && computer == 'rock'):
            return loser(player, computer);
        case (player == 'rock' && computer == 'scissor'):
            return winner(computer, player);
        case (player == 'paper' && computer == 'rock'):
            return winner(computer, player);
        case (player == 'scissor' && computer == 'paper'):
            return winner(computer, player);
        case (player == computer):
            return sameVal(player, computer);
    }

}
function winner(str1, str2) {
    str1 = str1.charAt(0).toUpperCase() + str1.slice(1);
    str2 = str2.charAt(0).toUpperCase() + str2.slice(1);
    const win = document.createElement('p')
    win.textContent = "You Win! " + str2 + " beats " + str1
    playerScore += 1;
    scrs.textContent = "Player " + playerScore + " - " + computerScore + " Computer";
    results.appendChild(win)
    if (playerScore === 5) {
        ending('Player');
    }
    else if (computerScore === 5) {
        ending('Computer');
    }

}

function sameVal(str1, str2) {
    str1 = str1.charAt(0).toUpperCase() + str1.slice(1);
    str2 = str2.charAt(0).toUpperCase() + str2.slice(1);
    const same = document.createElement('p')
    same.textContent = "Same values! " + str2 + " and " + str1
    scrs.textContent = "Player " + playerScore + " - " + computerScore + " Computer";
    results.appendChild(same)
    if (playerScore === 5) {
        ending('Player');
    }
    else if (computerScore === 5) {
        ending('Computer');
    }

}

function loser(str1, str2) {
    str1 = str1.charAt(0).toUpperCase() + str1.slice(1);
    str2 = str2.charAt(0).toUpperCase() + str2.slice(1);
    const los = document.createElement('p');
    los.textContent = "You Lose! " + str2 + " beats " + str1
    computerScore += 1;
    scrs.textContent = "Player " + playerScore + " - " + computerScore + " Computer";
    results.appendChild(los);
    if (playerScore === 5) {
        ending('Player');
    }
    else if (computerScore === 5) {
        ending('Computer');
    }
}

        // function game() {
        //     var i;
        //     for (i = 1; i < 6; i++) {
        //         console.log("Round: "+ i);
        //         let val = prompt("Enter rock, paper, scissor: ");
        //         console.log("------------------------------");
        //         let comp_val = computerPlay();
        //         console.log("Computer did "+ comp_val);
        //         console.log(round(val,comp_val));
        //         console.log('\n');
        //     }
        // }