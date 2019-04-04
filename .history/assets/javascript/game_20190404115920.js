var numberOfWins = 0;
var numberOfLosses = 0;

function newGame() {

    document.getElementById("logos").src = "../../assets/image/nba-logo.png";

    var teams =
    [
        "Atlanta Hawks",
        "Boston Celtics",
        "Brooklyn Nets",
        "Charlotte Hornets",
        "Chicago Bulls",
        "Cleveland Cavaliers",
        "Dallas Mavericks",
        "Denver Nuggets",
        "Detroit Pistons",
        "Golden State Warriors",
        "Houston Rockets",
        "Indiana Pacers",
        "Los Angeles Clippers",
        "Los Angeles Lakers",
        "Memphis Grizzlies",
        "Miami Heat",
        "Milwaukee Bucks",
        "Minnesota Timberwolves",
        "New Orleans Pelicans",
        "New York Knicks",
        "Oklahoma City Thunder",
        "Orlando Magic",
        "Philadelphia 76ers",
        "Phoenix Suns",
        "Portland Trail Blazers",
        "Sacramento Kings",
        "San Antonio Spurs",
        "Toronto Raptors",
        "Utah Jazz",
        "Washington Wizards"
    ];

    var acceptableGuesses = "1234567890qwertyuiopasdfghjklzxcvbnm";

    var correctTeam = teams[Math.floor(Math.random() * teams.length)];

    var teamToGuess = correctTeam.toLocaleLowerCase();

    console.log(teamToGuess);
    console.log(correctTeam);

    var blanks = "";
    var numberOfLivesRemaining = 7;
    var lettersAlreadyGuessed = "";

    var numberOfWinsDisplay = document.getElementById("numberOfWinsDisplay");
    var numberOfLossesDisplay = document.getElementById("numberOfLossesDisplay");
    var blanksDisplay = document.getElementById("blanksDisplay");
    var numberOfLivesRemainingDisplay = document.getElementById("numberOfLivesRemainingDisplay");
    var lettersAlreadyGuessedDisplay = document.getElementById("lettersAlreadyGuessedDisplay");


    //fill in spaces automatically
    for(var i = 0; i < correctTeam.length; i++) {
        if(correctTeam[i] != " ") {
            blanks += "_ ";
        }
        else {
            blanks += "  "
        }
    }

    blanksDisplay.textContent = blanks;

    // blanks.replace(2) = "a";

    

    document.onkeyup = function(event) {

        if (blanks.indexOf("_") != -1 && numberOfLivesRemaining > 0){ 

            var userGuess = event.key;

            console.log(correctTeam);

            console.log(userGuess);

            console.log(teamToGuess.indexOf(userGuess));

            console.log(acceptableGuesses.indexOf(userGuess));

            if(lettersAlreadyGuessed.indexOf(userGuess) == -1) {
                lettersAlreadyGuessed += userGuess + " ";
                lettersAlreadyGuessedDisplay.textContent = lettersAlreadyGuessed;
            }
            
            if(acceptableGuesses.indexOf(userGuess) != -1) {
                if(teamToGuess.indexOf(userGuess) != -1) {

                    
                    for (var i = 0; i < correctTeam.length; i++) {

                        if (userGuess === teamToGuess.charAt(i)) {
                            console.log(correctTeam.charAt(i).toLocaleLowerCase());
                            blanks = blanks.replaceAt(i*2,correctTeam.charAt(i));
                            blanksDisplay.textContent = blanks;
                        }
                    }
                    console.log(blanks);
                }
                else {
                    numberOfLivesRemaining--;
                    numberOfLivesRemainingDisplay.textContent = numberOfLivesRemaining;
                }
            }
            else {
                alert("press a lexicographic key");
            }

            console.log("hi")
    
    }

        if(blanks.indexOf("_") == -1) {
            numberOfWins++;
            numberOfWinsDisplay.textContent = numberOfWins;
            alert("You got it! It's the " + correctTeam + "!");
            document.getElementById("logos").src = "assets/images/" + correctTeam.split()[-1].toLocaleLowerCase() + ".png";
            newGame();
        }

        if(numberOfLivesRemaining == 0) {
            numberOfLosses++;
            numberOfLossesDisplay.textContent = numberOfLosses;
            alert("You didn't get it! It's the " + correctTeam + "!");
            document.getElementById("logos").src = "assets/images/" + correctTeam.split()[-1].toLocaleLowerCase() + ".png";
            newGame();

        }
    }

}

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

window.onload = function() {
    newGame();
}

// var computerChoices = ["r", "p", "s"];

// var numberOfTies = 0;
// var numberOfWins = 0;
// var numberOfLosses = 0;

// var userDisplay = document.getElementById("user-input");
// var computerDisplay = document.getElementById("computer-input");
// var wins = document.getElementById("user-wins");
// var losses = document.getElementById("user-losses");
// var ties = document.getElementById("user-ties");



// // This function is run whenever the user presses a key.
// document.onkeyup = function(event) {

//     // Determines which key was pressed.
//     var userGuess = event.key;

//     // Randomly chooses a choice from the options array. This is the Computer's guess.
//     var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//     // Alerts the key the user pressed (userGuess).
//     alert("User guess: " + userGuess);

//     // Alerts the Computer's guess.
//     alert("Computer guess: " + computerGuess);


    

//     userDisplay.textContent = userGuess;
//     computerDisplay.textContent = computerGuess;

//     if(userGuess == "r" && computerGuess == "r") {
//     numberOfTies++;
//     ties.textContent = numberOfTies;
//     }
//     else if(userGuess == "r" && computerGuess == "p") {
//     numberOfLosses++;
//     losses.textContent = numberOfLosses;
//     }
//     else if(userGuess == "r" && computerGuess == "s") {
//     numberOfWins++;
//     wins.textContent = numberOfWins;
//     }
//     else if(userGuess == "p" && computerGuess == "r") {
//     numberOfWins++;
//     wins.textContent = numberOfWins;
//     }
//     else if(userGuess == "p" && computerGuess == "p") {
//     numberOfTies++;
//     ties.textContent = numberOfTies;
//     }
//     else if(userGuess == "p" && computerGuess == "s") {
//     numberOfLosses++;
//     losses.textContent = numberOfLosses;
//     }
//     else if(userGuess == "s" && computerGuess == "r") {
//     numberOfLosses++;
//     losses.textContent = numberOfLosses;
//     }
//     else if(userGuess == "s" && computerGuess == "p") {
//     numberOfWins++;
//     wins.textContent = numberOfWins;
//     }
//     else if(userGuess == "s" && computerGuess == "s") {
//     numberOfTies++;
//     ties.textContent = numberOfTies;
//     }
//     else {
//     alert("Input either 'r','p', or 's'");
//     }
// }