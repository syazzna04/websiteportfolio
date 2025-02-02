document.addEventListener('DOMContentLoaded', () => {
    // Animated Greeting (Homepage) - Ensure the class is added in HTML

    // Mini-Game (Homepage)
    const guessInput = document.getElementById('guess');
    const submitGuessButton = document.getElementById('submit-guess');
    const gameMessage = document.getElementById('game-message');
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 0;

    if (submitGuessButton) {
        submitGuessButton.addEventListener('click', () => {
            const userGuess = parseInt(guessInput.value);
            attempts++;

            if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
                gameMessage.textContent = 'Please enter a valid number between 1 and 10.';
            } else if (userGuess === randomNumber) {
                gameMessage.textContent = `✨ You guessed it in ${attempts} tries! ✨`;
                randomNumber = Math.floor(Math.random() * 10) + 1; // Reset the game
                attempts = 0;
            } else if (userGuess < randomNumber) {
                gameMessage.textContent = 'Too low! Try again.';
            } else {
                gameMessage.textContent = 'Too high! Try again.';
            }
            guessInput.value = '';
        });
    }
});

// Add this to your script.js
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Show first slide
    slides[0].classList.add('active');

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Change slide every 3 seconds
    setInterval(nextSlide, 3000);
});

function toggleMenu() {
    document.querySelector(".mobile-menu").classList.toggle("show");  // Toggle menu visibility
}
