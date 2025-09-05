console.log("Js script file is working");

let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
   let options = [ "rock", "paper", "scissors"];
   let randomNum = Math.floor(Math.random() * 3);
   return options[randomNum]

}

console.log("Computer",getComputerChoice())

function getHumanChoice(){
    let choice =  prompt("Enter your choice")
    return choice;
}
console.log("Human", getHumanChoice())

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(computerChoice === humanChoice){
        console.log("its a tie")
    }else if(
        humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice =="paper"  && computerChoice == "rock" ||
        humanChoice == "scissors" && computerChoice == "paper"
    ){
        console.log("human wins");
        humanScore ++
    }else{
        console.log("computer wins");
        computerScore++
    }

    console.log(`computer: ${computerScore} humanscore: ${humanScore}`)
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection)