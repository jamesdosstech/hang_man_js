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
    let displayedImage = document.getElementById('image');
    let lives = 5;
    let counter = 0;
    let correctLetters = [];
    let wrongLetters = []
    let word;
    const lossVoiceLine = new Audio('assets/images/your_father.mp3');
    const winVoiceLine = new Audio('assets/images/forcestrong.mp3');

    //display start button
    start.innerHTML = '<button class="button-container">Start</button>';

    const randomizeWord = () => {
        // correctLetters = [];
        word = wordList[Math.floor(Math.random() * wordList.length)].toLocaleLowerCase();
        console.log('randomized word ' + word)
        // replace letters of word with underscore
        for (i = 0; i < word.length; i++) {
            correctLetters[i] = '_';
        }
        console.log('this is the word ' + word)
    }

    const changeImage = () => {
        console.log(`life count ${lives}`)
        if(lives == 5) {
            displayedImage.innerHTML = "<img src='./assets/images/start_image.jpg' />";
        }if(lives == 4) {
            displayedImage.innerHTML = "<img src='./assets/images/one_limb.jpg' />";
        }if(lives == 3) {
            displayedImage.innerHTML = "<img src='./assets/images/limb_2_ready.jpg' />";
        }if(lives == 2) {
            displayedImage.innerHTML = "<img src='./assets/images/limb_2_gone.gif' />";
        }if(lives == 1) {
            displayedImage.innerHTML = "<img src='./assets/images/darth_vader_1.jpg' />";
        }if(lives == 0) {
            displayedImage.innerHTML = "<img src='./assets/images/darth_vader_2.jpg' />";
        }
    }
    
    // check letters
    const checkLetters = () => {
        document.onkeydown = (e) => {
            if (start.innerHTML) {
                //if button is visibil no input will trigger
                return
            } else {
                // changeImage();
                // guess letter
                let userGuess = e.key.toLocaleLowerCase();
                let found = false;
                //if correct input, insert correct letter to empty word string
                for(i = 0; i < word.length; i++) {
                    if (userGuess === word[i]) {
                        console.log('userguess ' + userGuess)
                        correctLetters[i] = userGuess;
                        found = true;
                        displayedWord.innerHTML = correctLetters.join(' ');
                    }
                }
                if (found) {
                    winLossCondition();
                    counter++;
                    changeImage();
                    displayedScore.innerHTML = `Score Board: ${counter}`;
                } else if (!found) {
                    winLossCondition(e);
                    wrongLetters.push(userGuess);
                    displayedLetters.innerHTML = `Wrong Letters: ${wrongLetters.join(' ')}`;
                    lives -= 1;
                    changeImage();
                    displayedLives.innerHTML = `Lives Left: ${lives}`;
                };
            }
        }    
    }

    const winLossCondition = (e) => {
        if(lives > 0 && correctLetters.join('') === word ) {
            correctLetters = [];
            winVoiceLine.play();
            displayedWord.innerHTML = 'you win';
            start.innerHTML = '<button class="button-container">Next</button>';
            wrongLetters = [];
            winVoiceLine.play();
            // randomizeWord();
        }if (lives <= 0) {
            displayedWord.innerHTML = 'you lose';
            wrongLetters = [];
            correctLetters = [];
            counter = 0;
            lives = 6;
            start.innerHTML = '<button class="button-container">Restart</button>';
            lossVoiceLine.play();
        }
    }

    const game = () => {
        // randomizeWord();
        checkLetters();
    }

    //functions
    const startGame = (b) => {
        randomizeWord();
        changeImage();
        game(word, correctLetters);
        start.innerHTML = '';
        wrongLetters = [];
        // displayedWord.innerHTML = '';
        displayedWord.classList.add('container');
        displayedLetters.classList.add('container');
        displayedLives.classList.add('container');
        displayedRules.classList.add('container');
        displayedScore.classList.add('container');
        displayedWord.innerHTML = b.join(' ');
        displayedLetters.innerHTML = `Wrong Letters: `;
        displayedRules.innerHTML = 'Type Any Letter and Attempt to Guess The Correct Star Wars Name'
        displayedLives.innerHTML = `Lives Left: ${lives}`;
        displayedScore.innerHTML = `Score Board: ${counter}`;
        // console.log('guessed letters' + e)

        // game();
    }
    
    //event listeners
    start.addEventListener('click', function() {
        startGame(correctLetters)
    })
}
