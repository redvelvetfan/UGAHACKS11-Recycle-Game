// Game State
let currentRound = 1;
let score = 0;
const totalRounds = 10;
let currentItemIndex = 0;

// Items database - using GIF URLs
const items = [
    { name: "Plastic Bottle", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWkyeW43NHYyMWt0aGRuNGlocjllcG01Njh5ZXA3ZXdmZ3Nlb3VidCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/HObxK0n8RINVI1O2Wi/giphy.gif", recyclable: true },
    { name: "Pizza Box", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3lxYzhpNm45bDlmNWRvbzlwdGlqNG8zeWd2Y2tkOGFzeWVob3VzayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0HlNR17ZDCsUiCsM/giphy.gif", recyclable: false },
    { name: "Aluminum Can", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzc5Z3A1cHpzc2QxOGs3OWJzMHd0ZjA4ZXJicDJzcXNleXV1bGFyMSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o85xAdjwg9SKmZmgg/giphy.gif", recyclable: true },
    { name: "Styrofoam Cup", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXhxOHVnZ2ZvMDNuMTFlY2p2MnNpYXRqODZhcTE5dHJoaDBqcmk5dCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/tyttpGZhlk9bwLx45m8/giphy.gif", recyclable: false },
    { name: "Glass Jar", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExenFqdDNleXRkY2NuNDNkZ3ZzaTEzdGY0dmtkZnZwOWZ5cml4dTlkNyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/FLHcRZPfnoaDk72p1A/giphy.gif", recyclable: true },
    { name: "Batteries", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHRoY2Ztc2FsNzFyc2s5cjEzNG5tMW1yd3U1NGNja3oyZTNkZ3ltdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7aOkCi7RGdaPC/giphy.gif", recyclable: false },
    { name: "Cardboard Box", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3Y3NmZrZjducnB0bTR3NHNlMjVrMTVtM2J1b3lic3IyZ2h6dWgwZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1yMPysZFNUHBMNQR4V/giphy.gif", recyclable: true },
    { name: "Plastic Bag", image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzA5dDZiOHF2ZWV3ZzY1MWx3bWg3bjFpMGNseDQ5ODlqZ2Z0a2ZxMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZpQs6m3fuJZpzoBdHA/giphy.gif", recyclable: false },
    { name: "Newspaper", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmdxaWs3YzV4bGg2dnFxdnM0MmJnOGVxa3p2aWpqN2pyMm1veWlkeiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mHfIgrxD2Meyjw5Sgi/giphy.gif", recyclable: true },
    { name: "Light Bulb", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3U5ZHlsdnEzN2JmOWNjcG5oeW04cXNiZGg1bmZoa242cTNzdWRrZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Yd9BNyMoC6d6NFZ1iW/giphy.gif", recyclable: false }
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
const landingScreen = document.getElementById('landing-screen');
const titleScreen = document.getElementById('title-screen');
const gameScreen = document.getElementById('game-screen');
const resultsScreen = document.getElementById('results-screen');

const startButton = document.getElementById('start-button');
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
    landingScreen.classList.remove('active');
    titleScreen.classList.remove('active');
    gameScreen.classList.remove('active');
    resultsScreen.classList.remove('active');
    screen.classList.add('active');
}

// Show instructions screen
function showInstructions() {
    showScreen(titleScreen);
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
    
    // Use actual image source
    cardImage.src = item.image;
    cardImage.alt = item.name;
    
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
        resultFace.textContent = '🎉';
        resultTitle.textContent = 'Amazing!';
        resultMessage.textContent = `You're a recycling champion! You got ${score} out of 10 correct!`;
    } else {
        resultFace.textContent = '🌱';
        resultTitle.textContent = 'Keep Learning!';
        resultMessage.textContent = `You got ${score} out of 10. Practice makes perfect!`;
    }
    
    showScreen(resultsScreen);
}

// Event Listeners
startButton.addEventListener('click', showInstructions);
playButton.addEventListener('click', initGame);
playAgainButton.addEventListener('click', initGame);

recyclableBtn.addEventListener('click', () => handleAnswer(true));
notRecyclableBtn.addEventListener('click', () => handleAnswer(false));

snapButton.addEventListener('click', handleSnap);