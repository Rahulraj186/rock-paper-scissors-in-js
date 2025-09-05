console.log("Js script file is working");

function getComputerChoice(){
   let options = [ "rock", "paper", "scissors"];
   let randomNum = Math.floor(Math.random() * 3);
   return options[randomNum]

}

console.log(getComputerChoice())