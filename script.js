console.log("Js script file is working");

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