window.onload = function() {
    let wordList = ['Skywalker', 'Stormtrooper', 'Amidala'];

    //declarations
    //html
    const start = document.getElementById('button');
    let displayedWord = document.getElementById('word');
    let displayedLives = document.getElementById('lives');
    let displayedScore = document.getElementById('score');
    let displayedLetters = document.getElementById('letters');
    let displayedRules = document.getElementById('rules');
    let lives = 5;
    let counter = 0;
    let correctLetters = [];
    let wrongLetters = []
    let word;
    let lossVoiceLine = new Audio('assets/images/your_father.mp3');
    let winVoiceLine = new Audio('assets/images/forcestrong.mp3');

    //display start button
    start.innerHTML = '<button>Start</button>';

    const randomizeWord = () => {
        correctLetters = [];
        word = wordList[Math.floor(Math.random() * wordList.length)].toLocaleLowerCase();
        console.log('randomized word ' + word)
        // replace letters of word with underscore
        for (i = 0; i < word.length; i++) {
            correctLetters[i] = '_';
        }
        console.log('this is the word ' + word)
    }
    //losing conditon
    
    // check letters
    const checkLetters = () => {
        document.onkeydown = (e) => {
            // guess letter
            console.log('check letters ' + word, correctLetters)
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
            if (found) {
                winLossCondition();
                counter++;
                displayedScore.innerHTML = `Score Board: ${counter}`;
            } else if (!found) {
                winLossCondition();
                wrongLetters.push(userGuess);
                displayedLetters.innerHTML = `Wrong Letters: ${wrongLetters.join(' ')}`;
                lives--;
                displayedLives.innerHTML = `Lives Left: ${lives}`;
                console.log(`lives ${lives--}`);
            };
        }    
    }

    const winLossCondition = () => {
        if(lives > 0 && correctLetters.join('') === word ) {
            console.log('win');
            displayedWord.innerHTML = 'you win';
            return;
            // randomizeWord();
        }else if (lives === 0) {
            console.log('loss')
        }
    }

    const game = () => {
        // randomizeWord();
        checkLetters();
    }

    //functions
    const startGame = (b) => {
        randomizeWord();
        game(word, correctLetters);
        // displayedWord.innerHTML = '';
        displayedWord.innerHTML = b.join(' ');
        displayedLetters.innerHTML = `Wrong Letters: `;
        displayedRules.innerHTML = 'Type Any Letter and Attempt to Guess The Correct Star Wars Name'
        displayedLives.innerHTML = `Lives Left: ${lives = 5}`;
        displayedScore.innerHTML = `Score Board: ${counter = 0}`;
        // console.log('guessed letters' + e)

        // game();
    }
    
    //event listeners
    start.addEventListener('click', function() {
        startGame(correctLetters)
    })
}
