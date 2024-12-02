const startButton = document.getElementById('start-btn');
const gameAreaElement = document.getElementById('game-area');

/* Listens for a mouse click to start game */
startButton.addEventListener('click', startGame);

function startGame() {
    console.log('Started');
    /* Hides start button when clicked */
    startButton.classList.add('hide');
    gameAreaElement.classList.remove('hide');
}