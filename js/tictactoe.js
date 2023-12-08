document.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById("board");
    const cells = [];
  
    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
  
    // Create the Tic Tac Toe board
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.index = i;
      cell.addEventListener("click", handleCellClick);
      cells.push(cell);
      board.appendChild(cell);
    }
  
    // Handle cell click event
    function handleCellClick(event) {
      const index = event.target.dataset.index;
  
      // Check if the cell is already clicked or if the game is over
      if (gameBoard[index] === "" && !isGameOver()) {
        gameBoard[index] = currentPlayer;
        updateBoard();
        if (isWinner()) {
          alert(`${currentPlayer} wins!`);
          resetGame();
        } else if (isBoardFull()) {
          alert("It's a draw!");
          resetGame();
        } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
      }
    }
  
    // Update the visual representation of the board
    function updateBoard() {
      cells.forEach((cell, index) => {
        cell.textContent = gameBoard[index];
      });
    }
  
    // Check if there is a winner
    function isWinner() {
      const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
      ];
  
      return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return gameBoard[a] !== "" && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c];
      });
    }
  
    // Check if the board is full (a draw)
    function isBoardFull() {
      return gameBoard.every(cell => cell !== "");
    }
  
    // Check if the game is over
    function isGameOver() {
      return isWinner() || isBoardFull();
    }
  
    // Reset the game
    function resetGame() {
      gameBoard = ["", "", "", "", "", "", "", "", ""];
      currentPlayer = "X";
      updateBoard();
    }
  });
  