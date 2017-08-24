window.onload = function() {
    // set array of random words
    var wordList = ["LUKESKYWALKER", "DARTHVADER","QUIGONJINN","YODA","JARJARBINKS","EMPIRE","JEDI","THEDARKSIDE","EMPEROR","TATOOINE","HOTH","XWING","REBELLION","THEFORCE","PADMEAMIDALA","LIGHTSABER","LEIAORGANA","HANSOLO","CHEWBACCA","OBIWANKENOBI","ATAT","STORMTROOPER"]
    var wordletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var wins = document.getElementById('wins');
    var word = document.getElementById('word');
    var lettersUsed = document.getElementById('lettersUsed');
    var lives = document.getElementById('lives');
    var hangman = document.getElementById('hangamn');

    myAudio = new Audio('');
    myAudio.loop = true;
    myAudio.play();

    var guesses = [];

    var word = wordList[Math.floor(Math.random() * wordList.length)];
    word = word.toLowerCase(); 
    console.log(word); 

    var wordlength = word.length;

    var wordletters = word.split();

    
    for (var i = 0; i < wordlength; i++) {
        wordletters[i] = "_";
    }

    

    document.getElementById("word").innerHTML = wordletters.join(' ');

    var badguess = 6;
    document.getElementById("lives").innerHTML = badguess;

    var mismatch = 0;

    var goodguess = false;

    var wins = 0;

    var loseSound = new Audio('assets/images/your_father.mp3');

    var winSound =new Audio('assets/images/forcestrong.mp3')

    
    document.onkeyup = function(event) {

        var userguess = event.key;
        useguess = userguess.toLowerCase(); 
        guesses.push(" " + userguess);
        document.getElementById("lettersUsed").innerHTML = guesses;

        
        for (i = 0; i < wordlength; i++) {
            if (word.charAt(i) == userguess){

                goodguess = true;

                wordletters[i] = userguess
            }
        }

        
        if (goodguess == false) {
            badguess--;
                document.getElementById("lives").innerHTML = badguess
        }

        document.getElementById("word").innerHTML = wordletters.join(' ');

        
        goodguess = false;

        if (badguess === 0) {
            document.getElementById("gamestatus").innerHTML = "You Have Failed Me for the Last Time!";
            loseSound.play();

            
            word = wordList[Math.floor(Math.random() * wordList.length)];
            word = word.toLowerCase();
            console.log(word);
            wordletters.length = word.length;
            wordlength = word.length;
            wordletters = word.split();
            guesses = [];
            document.getElementById("lettersUsed").innerHTML = guesses;

            for (i = 0; i < wordlength; i++) {
                wordletters[i] = "_";
            }
            document.getElementById("word").innerHTML = wordletters.join('');

            badguess = 5; 
            document.getElementById("lives").innerHTML = badguess;

            goodguess = false; 
            mismatch = 0;
        }

        for (i = 0; i <wordlength; i++) {
            if (word.charAt(i) != wordletters[i]) {
                mismatch++
            }
        }

       if (mismatch === 0) {
        document.getElementById("gamestatus").innerHTML = "You are the Chosen One!";
        winSound.play();
       

        wins++;
        document.getElementById("wins").innerHTML = wins;

       
        word = wordList[Math.floor(Math.random() * wordList.length)];
        word = word.toLowerCase();
        console.log(word);
        wordletters.length = word.length;
        wordlength = word.length;
        wordletters = word.split();
        guesses = [];
        document.getElementById("lettersUsed").innerHTML = guesses;

        for (i = 0; i < wordlength; i++) {
            wordletters[i] = "_";
        }
        document.getElementById("word").innerHTML = wordletters.join(' ');

        badguess = 9; 
        document.getElementById("lives").innerHTML = badguess;

        goodguess = false;
        mismatch = 0;
       } else {
        mismatch = 0;
       }


    }

}