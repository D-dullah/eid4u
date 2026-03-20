function hideAllScreens() {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
}

// Show specific screen
function showScreen(screenId) {
    hideAllScreens();
    document.getElementById(screenId).classList.add('active');
}

// Question 1 - YES
function answer1Yes() {
    showScreen('screen3');
}

// Question 1 - NO
function answer1No() {
    showScreen('screen2-sad');
}

// Continue to Question 2
function goToQuestion2() {
    showScreen('screen3');
}

// Question 2 - YES (Completed Sawm)
function answer2Yes() {
    showScreen('screen4-yes');
}

// Question 2 - NO (Didn't complete Sawm)
function answer2No() {
    showScreen('screen4-no');
}