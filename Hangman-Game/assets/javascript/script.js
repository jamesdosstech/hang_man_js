window.onload = function() {
    let wordList = [ 
        {
            id: 0,
            title: 'Skywalker'
        },
        {
            id: 1,
            title: 'Stormtrooper'
        }
    ];

    //declarations
    const start = document.getElementById('button');
    let word = document.getElementById('word');
    let lives = document.getElementById('lives');
    let score = document.getElementById('score');
    let letters = document.getElementById('letters');
    let rules = document.getElementById('rules');
    let wordLetters = [
        'A',
        'B',
        'C',
        "D", 
        "E", 
        "F", 
        "G", 
        "H", 
        "I", 
        "J", 
        "K", 
        "L", 
        "M", 
        "N", 
        "O", 
        "P", 
        "Q", 
        "R", 
        "S", 
        "T", 
        "U", 
        "V", 
        "W", 
        "X", 
        "Y", 
        "Z"
    ]
    let miss = 2;
    let mismatch = 0
    let hit = false;
    let wins = 0;
    var guesses = [];

    let lossVoiceLine = new Audio('assets/images/your_father.mp3');
    let winVoiceLine = new Audio('assets/images/forcestrong.mp3');

    //display start button
    start.innerHTML = '<button>Start</button>';
    
    //testing
    let test = 'testing '

    // random word
    let randomWordFromList = wordList[this.Math.floor(this.Math.random() * wordList.length)].title;
    let stringifyWord = JSON.stringify(randomWordFromList);
    let randomWordLength = stringifyWord.length;
    // let randomWordLetters = randomWord.Length
    let randomWordLetters = stringifyWord.split();

    // takes random word after split and replaces letters with underscore then returns randomWordLetters
    for (let i = 0; i < randomWordLength; i++) {
        randomWordLetters[i] = '_';
    }

    const game = () => {
        document.onkeydown = (e) => {
            // guess letter
            let userGuess = e.key;
            guesses.push(' ' + userGuess);

            //print letters guessed
            letters.innerHTML = `Letters guessed: ${guesses}`

            for (i = 0; i < randomWordLength; i++) {
                if (userGuess == stringifyWord.charAt(i)) {
                    console.log(stringifyWord.charAt(i))
                }
            }

            // miss counter
            if (hit == false) {
                miss--;
                lives.innerHTML = `Lives Left ${miss}`;
            }

            // game loss
            // if (miss === 0) {
            //     lossVoiceLine.play();
            // }
            
        }
    }

    //functions
    const startGame = (a, b, c, d, e) => {
        game();
        word.innerHTML = b.join(' ');
        rules.innerHTML = 'Type Any Letter and Attempt to Guess The Correct Star Wars Name'
        lives.innerHTML = 'Lives Left ' + c;
        score.innerHTML = 'Score Board ' + d;
        console.log('guessed letters' + e)

        // game();
    }
    
    //event listeners
    start.addEventListener('click', function() {
        startGame(test, randomWordLetters, miss, wins, guesses)
    })

    
}
