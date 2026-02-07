// Game State
let currentRound = 1;
let score = 0;
const totalRounds = 10;
let currentItemIndex = 0;

// Items database - you can add your own images here
const items = [
    { name: "Plastic Bottle", image: "🍾", recyclable: true },
    { name: "Pizza Box", image: "🍕", recyclable: false },
    { name: "Aluminum Can", image: "🥫", recyclable: true },
    { name: "Styrofoam Cup", image: "☕", recyclable: false },
    { name: "Glass Jar", image: "🫙", recyclable: true },
    { name: "Batteries", image: "🔋", recyclable: false },
    { name: "Cardboard Box", image: "📦", recyclable: true },
    { name: "Plastic Bag", image: "🛍️", recyclable: false },
    { name: "Newspaper", image: "📰", recyclable: true },
    { name: "Light Bulb", image: "💡", recyclable: false }
];

// Shuffle items for randomness
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

let gameItems = shuffleArray(items);

// DOM Elements
const titleScreen = document.getElementById('title-screen');
const gameScreen = document.getElementById('game-screen');
const resultsScreen = document.getElementById('results-screen');

const playButton = document.getElementById('play-button');
const playAgainButton = document.getElementById('play-again-button');

const card = document.getElementById('card');
const cardImage = document.getElementById('card-image');
const cardLabel = document.getElementById('card-label');
const resultOverlay = document.getElementById('result-overlay');
const resultIcon = document.getElementById('result-icon');

const recyclableBtn = document.getElementById('recyclable-btn');
const notRecyclableBtn = document.getElementById('not-recyclable-btn');
const choiceButtons = document.getElementById('choice-buttons');
const snapButtonContainer = document.getElementById('snap-button-container');
const snapButton = document.getElementById('snap-button');

const currentRoundDisplay = document.getElementById('current-round');
const scoreDisplay = document.getElementById('score');
const finalScoreDisplay = document.getElementById('final-score');
const resultFace = document.getElementById('result-face');
const resultTitle = document.getElementById('result-title');
const resultMessage = document.getElementById('result-message');

// Screen Management
function showScreen(screen) {
    titleScreen.classList.remove('active');
    gameScreen.classList.remove('active');
    resultsScreen.classList.remove('active');
    screen.classList.add('active');
}

// Initialize Game
function initGame() {
    currentRound = 1;
    score = 0;
    currentItemIndex = 0;
    gameItems = shuffleArray(items);
    updateDisplay();
    showScreen(gameScreen);
    
    // Small delay before showing first card
    setTimeout(() => {
        showNewCard();
    }, 300);
}

// Update display
function updateDisplay() {
    currentRoundDisplay.textContent = currentRound;
    scoreDisplay.textContent = score;
}

// Show new card
function showNewCard() {
    const item = gameItems[currentItemIndex];
    
    // Reset card position and state
    card.classList.remove('rise', 'slide-left', 'slide-right');
    card.style.transform = 'translateY(400px)';
    card.style.opacity = '0';
    
    // Set card content
    cardLabel.textContent = item.name;
    
    // For emojis, display directly. For actual images, use: cardImage.src = item.image;
    cardImage.textContent = item.image;
    cardImage.style.fontSize = '8rem';
    
    // Hide result overlay and snap button, show choice buttons
    resultOverlay.classList.remove('show');
    resultOverlay.classList.add('hidden');
    snapButtonContainer.classList.add('hidden');
    choiceButtons.classList.remove('hidden');
    
    // Trigger rise animation
    setTimeout(() => {
        card.classList.add('rise');
    }, 100);
}

// Handle answer selection
function handleAnswer(userChoice) {
    const item = gameItems[currentItemIndex];
    const isCorrect = userChoice === item.recyclable;
    
    // Update score
    if (isCorrect) {
        score++;
        updateDisplay();
    }
    
    // Show result
    showResult(isCorrect);
    
    // Hide choice buttons
    choiceButtons.classList.add('hidden');
    
    // After showing result, prepare for next round
    setTimeout(() => {
        slideCardAway(userChoice);
        
        setTimeout(() => {
            if (currentRound < totalRounds) {
                showSnapButton();
            } else {
                // Game over
                setTimeout(() => {
                    showResults();
                }, 1000);
            }
        }, 600);
    }, 1500);
}

// Show result (checkmark or X)
function showResult(isCorrect) {
    resultOverlay.classList.remove('hidden');
    resultIcon.classList.remove('correct', 'incorrect');
    
    if (isCorrect) {
        resultIcon.classList.add('correct');
    } else {
        resultIcon.classList.add('incorrect');
    }
    
    resultOverlay.classList.add('show');
}

// Slide card away
function slideCardAway(recyclableChoice) {
    resultOverlay.classList.remove('show');
    
    // Slide left if recyclable, right if not
    if (recyclableChoice) {
        card.classList.add('slide-left');
    } else {
        card.classList.add('slide-right');
    }
}

// Show snap button
function showSnapButton() {
    snapButtonContainer.classList.remove('hidden');
}

// Handle snap
function handleSnap() {
    snapButtonContainer.classList.add('hidden');
    currentRound++;
    currentItemIndex++;
    updateDisplay();
    
    setTimeout(() => {
        showNewCard();
    }, 300);
}

// Show results screen
function showResults() {
    const won = score >= 7;
    
    finalScoreDisplay.textContent = score;
    
    if (won) {
        resultFace.textContent = '😊';
        resultTitle.textContent = 'You Win!';
        resultMessage.innerHTML = `Great job! You scored <span id="final-score">${score}</span> out of 10!`;
    } else {
        resultFace.textContent = '😢';
        resultTitle.textContent = 'You Lose';
        resultMessage.innerHTML = `You scored <span id="final-score">${score}</span> out of 10. Try again!`;
    }
    
    showScreen(resultsScreen);
}

// Event Listeners
playButton.addEventListener('click', initGame);
playAgainButton.addEventListener('click', initGame);

recyclableBtn.addEventListener('click', () => handleAnswer(true));
notRecyclableBtn.addEventListener('click', () => handleAnswer(false));

snapButton.addEventListener('click', handleSnap);
