function playGame(){

    let HumanScore = 0

    let computerScore = 0

    for (let i =0; i<5; i++){

        function get_human_choice(){
            let sceltaUtente= Number(prompt("Digit 0 if you want to choose rock, 1 if you want to choose paper, 2 if you want to choose scissors"))
                if (sceltaUtente == 0){
                    return "rock"
                }
                else if (sceltaUtente == 1){
                    return "paper"
                }
                else if (sceltaUtente == 2) {
                    return "scissors"
                }
                else {
                    throw new Error("Error! Value not valid")
                }
        }

        function get_computer_choice(min,max){
        const minCeiled = Math.ceil(min)
        const maxFloored = Math.floor(max)
        let risultato = Math.floor(Math.random()* (maxFloored - minCeiled + 1) + minCeiled)
            if (risultato == 0){
                return "paper"
            }
            else if (risultato == 1){
                return "rock"
            }
            else {
                return "scissors"
            }
        }

        function playRound(humanChoice, computerChoice) {
            if (humanChoice == "rock" && computerChoice == "scissors"){
                return `You Win! Rock beats Scissors. Your score is ${HumanScore += 1}`
            }

            else if (humanChoice == "paper" && computerChoice == "rock"){
                return `You Win! Paper beats Rock. Your score is ${HumanScore += 1}`
            }

            else if (humanChoice == "scissors" && computerChoice == "paper"){
                return `You Win! Scissors beats Paper. Your score is ${HumanScore += 1}`
            }

            else if (computerChoice == "rock" && humanChoice == "scissors"){
                return `You Lose! Rock beats Scissors. Computer score is ${computerScore += 1}`
            }

            else if (computerChoice == "scissors" && humanChoice == "paper"){
                return `You Lose! Scissors beats Paper. Computer score is ${computerScore += 1}`
            }

            else if (computerChoice == "paper" && humanChoice == "rock"){
                return `You Lose! Paper beats rock. Computer score is ${computerScore += 1}`
            }

            else {
                return "It's a draw"
            }
        }
  
        const humanSelection = get_human_choice();
        const computerSelection = get_computer_choice(0,3);
  
        console.log(playRound(humanSelection, computerSelection));
    }
    if (HumanScore > computerScore){
        return "Congratulations! You Win"

}       

    else if (computerScore > HumanScore){
        return "Oh No! Computer Wins"
        }
    
        else{
            return "It's a draw"
        }
}
console.log(playGame())