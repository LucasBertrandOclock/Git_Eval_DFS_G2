// Variables
let players = [];
let currentPlayerIndex = 0;
let gameStarted = false;

const playerInfo = document.getElementById('player-info');
const rollButton = document.getElementById('roll-button');
const startButton = document.getElementById('start-button');
const board = document.getElementById('board');


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
