// Array with all available computer choices
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Our function that chooses a random letter form the array, gets user input, checks if they match, then either adds to wins or subtracts guesses remaining and eventually a loss
$(document).ready(function() {
	
	var compChoice = letters[1 + Math.floor(Math.random()*letters.length)];
	var wins = 0;
	var losses = 0;


	document.onkeyup = function(event) {

		var userChoice = String.fromCharCod(event.keycod).tolowercase();

		if (userChoice === compChoice) {

			$("wins").html(wins++);
			// select another random letter

		} else {



		}
	}

});