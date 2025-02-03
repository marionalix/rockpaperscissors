// app.js

// 0 Pierre
// 1 Papier 
// 2 Ciseaux


let humanScore=0;
let computerScore=0;

function getComputerChoice() {
	let computer=Math.floor(Math.random() * 3);
	console.log(computer);
	return computer;
}

function getHumanChoice() {
	let human=prompt("Veuillez sélectionner Pierre 0 Papier 1 ou Ciseaux 2");
	console.log(human);
	return human;
}

function playRound() {
	let humanRez=getHumanChoice();
	let computerRez=getComputerChoice();
	
	if(humanRez==computerRez) {
		console.log("Egalité");
	}
	else if ((humanRez==0 && computerRez==2) || (humanRez==1 && computerRez==0) || (humanRez==2 && computerRez==1))  {
		humanScore++;
		console.log("Human win !");
	}
	else if ((humanRez==0 && computerRez==1) || (humanRez==1 && computerRez==2) || (humanRez==2 && computerRez==0))  {
		computerScore++;
		console.log("Computer win !");
	}
	else {
		console.log("non pris en compte !!!");
	}
	
	console.log(`Human score ${humanScore}, Computer score ${computerScore}`);
}

function playGame() {
	let i=0;
	for(i=0; i<5; i++) {
		playRound();
	}
}

playGame();
