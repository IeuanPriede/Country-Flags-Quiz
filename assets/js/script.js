const flags = [
    { country: "Latvia", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/800px-Flag_of_Latvia.svg.png"},
    { country: "Ghana", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/1200px-Flag_of_Ghana.svg.png"},
    { country: "Chile", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1200px-Flag_of_Chile.svg.png"},
    { country: "Laos", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/640px-Flag_of_Laos.svg.png"},
    { country: "Nicaragua", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/800px-Flag_of_Nicaragua.svg.png"},
    { country: "Oman", image: "data:image/png;base64,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"},
    { country: "Spain", image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/640px-Flag_of_Spain.svg.png"},
    { country: "Japan", image: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg"},
    { country: "Wales", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Wales.svg/800px-Flag_of_Wales.svg.png"}
]

let currentFlagIndex = 0
let startButton = document.getElementById('start-btn');
let gameAreaElement = document.getElementById('game-area');
let flagImage = document.getElementById("flag");
let optionsContainer = document.getElementById("options");
let resultText = document.getElementById("result");
let nextBtnElement = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score");
let scoreAreaElement = document.getElementById("score-area");
let questionCount = 0;
const maxQuestions = 10;

/* Listens for a mouse click to start game */
startButton.addEventListener('click', startGame);

/* Shuffle options */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startGame() {
    console.log('Started');
    questionCount = 0;
    score = 0;
    shuffle(flags);
    currentFlagIndex = 0;
    /* Hides start button when clicked */
    startButton.classList.add('hide');
    gameAreaElement.classList.remove('hide');
    loadQuestion();
}

function loadQuestion() {
    if (questionCount >= maxQuestions) {
        endGame();
        return;
    }

    /* Load question flags */
    flagImage.src = flags[currentFlagIndex].image;

    const correctAnswer = flags[currentFlagIndex].country;
    const allOptions = shuffle(
        flags
           .map((flag) => flag.country)
           .filter((country) => country !== correctAnswer)
           .slice(0,3)
           .concat(correctAnswer)
    );

    /* Clear options container each time for new answers */ 
    optionsContainer.innerHTML = "";
    /* Shuffles the options */
    shuffle(allOptions).forEach((option) => {
        /* Creates buttons for answers */
        const button = document.createElement("button");
        button.textContent = option;
        /* Checks answer when clicked */
        button.addEventListener("click", () => checkAnswer(option));
        /* Adds buttons to optionsContainer */
        optionsContainer.appendChild(button);
    });
}

let score = 0;
function checkAnswer(selectedOption) {
    const correctAnswer = flags[currentFlagIndex].country;
    if (selectedOption === correctAnswer) {
        resultText.textContent = "Correct!";
        resultText.style.color = "green";
        score++;
        scoreDisplay.textContent = `${score}`;
    } else {
        resultText.textContent = `Wrong! The correct answer is ${correctAnswer}`
        resultText.style.color = "red";
    }
    nextBtnElement.classList.remove('hide');
    optionsContainer.classList.add('hide');
}

nextBtnElement.addEventListener("click", () => {
    questionCount++;
    currentFlagIndex = (currentFlagIndex + 1) % flags.length;
    resultText.textContent = "";
    nextBtnElement.classList.add("hide");
    optionsContainer.classList.remove('hide');

    loadQuestion();
});

function endGame() {
    resultText.textContent = `Quiz Over! You scored ${score} out of ${maxQuestions}.`;
    flagImage.classList.add('hide');
    optionsContainer.classList.add('hide');
    scoreDisplay.classList.add('hide');
    scoreAreaElement.classList.add('hide');
    

    /* Restart button */
    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.addEventListener("click", () => {
        currentFlagIndex = 0;
        questionCount = 0;
        score = 0;
        scoreDisplay.textContent = score;

        resultText.textContent="";
        restartButton.remove();
        flagImage.classList.remove('hide');
        optionsContainer.classList.remove('hide');
        scoreAreaElement.classList.remove('hide');
        scoreDisplay.classList.remove('hide');
    });
    resultText.appendChild(restartButton); 
}

