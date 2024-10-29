 // Function to get and return computer choice
const getCompChoice = () => {
    let num = Math.floor(Math.random() * 3);
    
    if (num === 0){
        compChoice = "rock";
    } else if (num === 1){
        compChoice = "paper";
    } else if (num === 2){
        compChoice = "scissors";
    }
    return compChoice;
}

// Function to get and return human choice
const getHumanChoice = () => {
    let humanChoice = prompt("Rock, Paper, or Scissors?", "").toLowerCase();

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    } else {
        console.error("Invalid input");
        return getHumanChoice(); // Retry if input is invalid
    }
}

const playRound = (humanChoice, compChoice) => {
    if (humanChoice === compChoice) {
        console.log("It's a tie!");
        return 0; // No score change
    }

    // Rock beats scissors, scissors beat paper, paper beats rock
    if (
        (humanChoice === "rock" && compChoice === "scissors") ||
        (humanChoice === "paper" && compChoice === "rock") ||
        (humanChoice === "scissors" && compChoice === "paper")
    ) {
        console.log(`${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${compChoice}; you win this round!`);
        return 1; // Human wins
    } else {
        console.log(`${compChoice.charAt(0).toUpperCase() + compChoice.slice(1)} beats ${humanChoice}; you lose this round.`);
        return -1; // Computer wins
    }
}

const playGame = () => {

    let humanScore = 0;
    let compScore = 0;

    for (let i = 0; i < 5; i++) { // Play 5 rounds
        const humanChoice = getHumanChoice();
        const compChoice = getCompChoice();
        const result = playRound(humanChoice, compChoice);

        if (result === 1) {
            humanScore++;
        } else if (result === -1) {
            compScore++;
        }
    }

    console.log(`Final Score: You: ${humanScore} - Computer: ${compScore}`);
}

// Start game
playGame();