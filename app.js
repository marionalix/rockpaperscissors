// Jeu Pierre-Papier-Ciseaux

// Scores des joueurs
let humanScore = 0;
let computerScore = 0;

// Création des éléments de l'interface
const choices = ["Rock", "Paper", "Scissors"];
const buttons = choices.map((choice, index) => {
  const btn = document.createElement("button");
  btn.textContent = choice;
  btn.classList.add("btn");
  btn.onclick = () => playRound(index);
  return btn;
});
const resultDiv = document.createElement("div");
resultDiv.classList.add("result");
const body = document.body;

// Conteneur principal
const container = document.createElement("div");
container.classList.add("game-container");
buttons.forEach((btn) => container.appendChild(btn));
container.appendChild(resultDiv);
body.appendChild(container);

// Génère un choix aléatoire pour l'ordinateur
function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

// Joue un tour du jeu
function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    resultDiv.textContent = "Égalité !";
  } else if ((humanChoice + 1) % 3 === computerChoice) {
    computerScore++;
    resultDiv.textContent = "Computer win !";
  } else {
    humanScore++;
    resultDiv.textContent = "Human win !";
  }

  console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);

  checkWinner();
}

// Vérifie si un joueur a gagné la partie
function checkWinner() {
  if (humanScore === 5 || computerScore === 5) {
    resultDiv.textContent =
      humanScore === 5
        ? `Félicitations, vous avez gagné ${humanScore} à ${computerScore} !`
        : `Désolé, vous avez perdu ${computerScore} à ${humanScore}.`;

    buttons.forEach((btn) => btn.remove());
  }
}

// Ajout du style CSS
document.head.insertAdjacentHTML(
  "beforeend",
  `
<style>
  body {
	font-family: Arial, sans-serif;
	text-align: center;
	background-color: #f4f4f4;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	margin: 0;
  }
  .game-container {
	background: white;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .btn {
	margin: 10px;
	padding: 10px 20px;
	font-size: 18px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background 0.3s;
  }
  .btn:nth-child(1) { background: #ff6b6b; color: white; }
  .btn:nth-child(2) { background: #4ecdc4; color: white; }
  .btn:nth-child(3) { background: #556270; color: white; }
  .btn:hover {
	opacity: 0.8;
  }
  .result {
	margin-top: 20px;
	font-size: 24px;
	font-weight: bold;
  }
</style>
`
);
