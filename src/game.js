let gameBoard = [];

function initBoard() {
  gameBoard = Array(boardSize).fill(0);
  placeSpecialCases(1, 3);
  placeSpecialCases(-1, 3);
  renderBoard();
}
