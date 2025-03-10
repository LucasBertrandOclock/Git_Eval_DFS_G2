// Variables
let players = [];
let currentPlayerIndex = 0;
let gameBoard = [];
let gameStarted = false;

// Case Types: 0 = normal, 1 = bonus, -1 = malus
const boardSize = 50;
const board = document.getElementById('board');
const rollButton = document.getElementById('roll-dice');
const currentTurn = document.getElementById('current-turn');
const message = document.getElementById('message');

// Lancer du dé
function rollDice() {
    const dice = Math.floor(Math.random() * 6) + 1;
    let player = players[currentPlayerIndex];
    let currentPosition = player.position + dice;

    // Vérification si le joueur dépasse 50
    if (currentPosition > boardSize) {
        currentPosition = 25; // Retour à la case 25
    }

    // Appliquer l'effet de la case
    if (gameBoard[currentPosition - 1] === 1) {
        currentPosition += Math.floor(Math.random() * 6) + 1; // Avance de X cases
    } else if (gameBoard[currentPosition - 1] === -1) {
        currentPosition -= Math.floor(Math.random() * 6) + 1; // Recule de X cases
    }

    // Mettre à jour la position du joueur
    player.position = currentPosition;

    // Mettre à jour l'affichage
    updateGameInfo();

    // Vérification de la victoire
    if (player.position === boardSize) {
        message.textContent = `${player.name} a gagné la partie !`;
        gameStarted = false;
        rollButton.disabled = true;
    } else {
        // Passer au joueur suivant
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        currentTurn.textContent = `${players[currentPlayerIndex].name}'s Tour`;
    }
}