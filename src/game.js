let gameBoard = [];

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
