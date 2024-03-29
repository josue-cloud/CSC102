
// creates a function to run when the playButton is clicked
function playButton() {
    //creates allert message to be displayed on the screen for when the fuction is called
    alert('Let the games begin!');

    // Initializes and resets the game

    resetGame();
}

// waits for playButton function to be called.
document.getElementById('playButton').addEventListener('click', playButton);

// Initialize the game board as an array with 9 null squares
const board = Array(9).fill(null);

// Set the initial turn to 'X'
let currentTurn = 'X';

// Generate the game board on the page. For each element in the array,
// it creates a div with an id equal to its index in the array.

document.getElementById('board').innerHTML = board
    .map((_, i) => `<div id="${i}"></div>`)
    .join('');
// Add an event listener to the 'reset' button that will reset the game when clicked
document.getElementById('reset').addEventListener('click', resetGame);

// Add an event listener to each cell of the game board that will handle the turn when clicked
document.querySelectorAll('#board > div').forEach(div => div.addEventListener('click', handleTurn));

// Function to handle a player's turn
function handleTurn(event) {
    const id = event.target.id;
// If the clicked cell is empty
    if (board[id] === null) {
        board[id] = currentTurn;
        event.target.textContent = currentTurn;
        //creates a function to be called when a player wins
        if (checkWin()) {
            //displays the current turn and announces the winner
            alert(currentTurn + ' wins!');
            //resets game after there is a winner
            resetGame();
            //if there is no winner, create alert message
        } else if (board.every(cell => cell !== null)) {
            //create alert message when there is a tie
            alert('Tie!');
            //resets game after there is a tie
            resetGame();
            //if the game is still being played, go to next turn whether it is X or O
        } else {
            currentTurn = currentTurn === 'X' ? 'O' : 'X';
        }
    }
}
// Function to check if the current player has won
function checkWin() {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    return lines.some(line => line.every(i => board[i] === currentTurn));
}
// Function to reset the game
function resetGame() {
    board.fill(null);
    currentTurn = 'X';
// Clear the display of all cells
    document.querySelectorAll('#board > div').forEach(div => {
        div.textContent = '';
    });
}
