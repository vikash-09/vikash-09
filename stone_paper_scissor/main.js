const playerScore = document.getElementById("playerScore");
const playerChoice = document.getElementById("playerChoice");

const computerScore = document.getElementById("computerScore");
const computerChoice = document.getElementById("computerChoice");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");

const resultText = document.getElementById("resultText");

const allGameImg = document.querySelectorAll("img");

const selections = {
    Rock: { name:'Rock' , defeat:'Scissors'},
    Paper:  { name:'Paper' , defeat:'Rock'},
    Scissors: { name:'Scissors' , defeat:'Paper'}
};

let computerSelect = ' ';
let playerScoreNumber = 0;
let computerScoreNumber = 0;


function updateScore(playerSelect){
    console.log(playerSelect, computerSelect);
    const select = selections[playerSelect]
    if(playerSelect === computerSelect){
        resultText.textContent = "It's a tie !";
        document.body.style.backgroundColor = "blue";
    }
    else if(select.defeat.indexOf(computerSelect) > -1){
        resultText.textContent = "You Won !";
        document.body.style.backgroundColor = "green";
        playerScoreNumber++;
        playerScore.textContent = playerScoreNumber;

    }

    else{
        resultText.textContent = "You Lost !";
        document.body.style.backgroundColor = "red";
        computerScoreNumber++;
        computerScoreNumber.textContent = computerScoreNumber;
    }
}
//computer selection

function computerRandomSelect()
{
    const computerSelectNumber = Math.random();

    if(computerSelectNumber < 0.3){
        computerSelect = 'Rock';
    }
    else if(computerSelectNumber <= 0.7){
        computerSelect = 'Paper';
    }
    else{
        computerSelect = 'Scissors';
    }
    displayComputerSelect(computerSelect);
}

//computer selection and styling button

function displayComputerSelect(computerSelect){

    switch(computerSelect){
        case 'Rock':
        computerRock.classList.add('selected');
        computerChoice.textContent = '--- Rock';
        break;

        case 'Paper':
        computerPaper.classList.add('selected');
        computerChoice.textContent = '--- Paper';
        break;

        case 'Scissors':
        computerScissors.classList.add('selected');
        computerChoice.textContent = '--- Scissors';
        break;

        default:
        break;
}
}


//playerimg remover


function resetSelected(){
          
    allGameImg.forEach((img) => {
        img.classList.remove('selected')
    })

}

 //player selection

function select(playerSelect){
    resetSelected();

    switch(playerSelect){
            case 'Rock':
            playerRock.classList.add('selected');
            playerChoice.textContent = '--- Rock';
            break;

            case 'Paper':
            playerPaper.classList.add('selected');
            playerChoice.textContent = '--- Paper';
            break;

            case 'Scissors':
            playerScissors.classList.add('selected');
            playerChoice.textContent = '--- Scissors';
            break;

            default:
                break;
    }
    computerRandomSelect();
    updateScore(playerSelect);
}