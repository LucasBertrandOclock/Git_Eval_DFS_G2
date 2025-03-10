let gameBoard = [];
let players = [];
let currentPlayerIndex = 0;
let gameStarted = false;

const playerInfo = document.getElementById('player-info');
const rollButton = document.getElementById('roll-button');
const startButton = document.getElementById('start-button');

const boardSize = 50;
const board = document.getElementById('board');

function initBoard() {
  gameBoard = Array(boardSize).fill(0);
  placeSpecialCases(1, 3);
  placeSpecialCases(-1, 3);
  renderBoard();
}

function placeSpecialCases(type, count) {
  let placed = 0;
  while (placed < count) {
    const position = Math.floor(Math.random() * (boardSize - 1)) + 1;
    if (gameBoard[position] === 0) {
      gameBoard[position] = type;
      placed++;
    }
  }
}

function renderBoard() {
  board.innerHTML = "";
  for (let i = 0; i < boardSize; i++) {
    const cell = document.createElement("div");
    if (gameBoard[i] === 1) {
      cell.style.backgroundColor = "lightgreen";
    } else if (gameBoard[i] === -1) {
      cell.style.backgroundColor = "lightcoral";
    }
    cell.innerHTML = i + 1;
    board.appendChild(cell);
  }
}




// Initialiser les joueurs
function startGame() {
    const playerCount = prompt("Combien de joueurs (2-4) ?");
    players = [];
    for (let i = 0; i < playerCount; i++) {
        const playerName = prompt(`Nom du joueur ${i + 1}:`);
        players.push({ name: playerName, position: 0 });
    }
    gameStarted = true;
    currentPlayerIndex = 0;
    rollButton.disabled = false;
    initBoard();
    updateGameInfo();
}

// Mettre à jour les informations du jeu
function updateGameInfo() {
    playerInfo.innerHTML = '';
    players.forEach((player, index) => {
        playerInfo.innerHTML += `${player.name}: ${player.position} <br>`;
    });
}
// Événements
rollButton.addEventListener('click', () => {
    if (gameStarted) {
        rollDice();
    }
});

startButton.addEventListener('click', startGame);