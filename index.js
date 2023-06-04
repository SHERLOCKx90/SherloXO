var currentPlayer = "X";
var moves = 0;
var board = ["", "", "", "", "", "", "", "", ""];

function makeMove(cell) {
    if (board[cell] === "") {
        board[cell] = currentPlayer;
        document.getElementsByClassName("cell")[cell].innerText = currentPlayer;
        moves++;

        if (checkWin()) {
            document.getElementById("status").innerText = "Player " + currentPlayer + " wins!";
            disableBoard();
        } else if (moves === 9) {
            document.getElementById("status").innerText = "It's a draw!";
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            document.getElementById("status").innerText = "Player " + currentPlayer + "'s turn";
        }
    }
}

function checkWin() {
    var winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (var i = 0; i < winningCombinations.length; i++) {
        var [a, b, c] = winningCombinations[i];
        if (board[a] === currentPlayer && board[b] === currentPlayer && board[c] === currentPlayer) {
            return true;
        }
    }

    return false;
}

function disableBoard() {
    var cells = document.getElementsByClassName("cell");
    for (var i = 0; i < cells.length; i++) {
        cells[i].onclick = null;
    }
}
