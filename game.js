
// Function to run when the playButton is clicked
function playButton() {
    alert('Let the games begin!');

    // Initialization code for your game can go here
    // For example, you can reset the game state:
    resetGame();
}

// Add event listener to the playButton
document.getElementById('playButton').addEventListener('click', playButton);


const board = Array(9).fill(null);
let currentTurn = 'X';

document.getElementById('board').innerHTML = board
    .map((_, i) => `<div id="${i}"></div>`)
    .join('');

document.getElementById('reset').addEventListener('click', resetGame);
document.querySelectorAll('#board > div').forEach(div => div.addEventListener('click', handleTurn));

function handleTurn(event) {
    const id = event.target.id;
    if (board[id] === null) {
        board[id] = currentTurn;
        event.target.textContent = currentTurn;
        if (checkWin()) {
            alert(currentTurn + ' wins!');
            resetGame();
        } else if (board.every(cell => cell !== null)) {
            alert('Tie!');
            resetGame();
        } else {
            currentTurn = currentTurn === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return lines.some(line => line.every(i => board[i] === currentTurn));
}

function resetGame() {
    board.fill(null);
    currentTurn = 'X';
    document.querySelectorAll('#board > div').forEach(div => {
        div.textContent = '';
    });
}
