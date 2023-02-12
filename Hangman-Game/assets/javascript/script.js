window.onload = function() {
    let wordList = ['Skywalker', 'Stormtrooper'];

    //declarations
    //html
    const start = document.getElementById('button');
    let displayedWord = document.getElementById('word');
    let displayedLives = document.getElementById('lives');
    let displayedScore = document.getElementById('score');
    let displayedLetters = document.getElementById('letters');
    let displayedRules = document.getElementById('rules');
    //alphabet
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let lives = 5;
    let counter = 0;
    let correctLetters = [];
    let wrongLetters = []

    let lossVoiceLine = new Audio('assets/images/your_father.mp3');
    let winVoiceLine = new Audio('assets/images/forcestrong.mp3');

    //display start button
    start.innerHTML = '<button>Start</button>';
    
    //testing
    let test = 'testing '

    // random word
    let word = wordList[this.Math.floor(this.Math.random() * wordList.length)].toLocaleLowerCase();
    // replace letters of word with underscore
    for (i = 0; i < word.length; i++) {
        console.log(correctLetters[i]);
        correctLetters[i] = '_';
    }

    //losing conditon
    
    // check letters
    const checkLetters = () => {
        document.onkeydown = (e) => {
            // guess letter
            let userGuess = e.key.toLocaleLowerCase();
            let found = false;
            for(i = 0; i < word.length; i++) {
                if (userGuess === word[i]) {
                    console.log('userguess ' + userGuess)
                    correctLetters[i] = userGuess;
                    found = true;
                    displayedWord.innerHTML = correctLetters.join(' ')
                }
            }
            if (found) return;
            // if wrong letter send it to wrong letter bank and subtract lives
            if (wrongLetters.indexOf(userGuess) < 0){
                wrongLetters.push(userGuess);
                displayedLetters.innerHTML = `Wrong Letters: ${wrongLetters.join(' ')}`;
                lives--;
                displayedLives.innerHTML = `Lives Left: ${lives}`;
            }
        }
    }

    const game = () => {
        checkLetters()
    }

    //functions
    const startGame = (b) => {
        game();
        displayedWord.innerHTML = b.join(' ');
        displayedLetters.innerHTML = `Wrong Letters: `;
        displayedRules.innerHTML = 'Type Any Letter and Attempt to Guess The Correct Star Wars Name'
        displayedLives.innerHTML = `Lives Left: ${lives}`;
        displayedScore.innerHTML = 'Score Board: ';
        // console.log('guessed letters' + e)

        // game();
    }
    
    //event listeners
    start.addEventListener('click', function() {
        startGame(correctLetters, lives)
    })
}
