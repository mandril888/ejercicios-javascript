/*charFreq()

Write a function charFreq() that takes a string and builds a frequency
listing of the characters contained in it. Represent the frequency listing
as a Javascript object. Try it with something like
charFreq("abbabcbdbabdbdbabababcbcbab").*/

function charFreq(word){
	var currentCaracter;
	var freqCharacters = {};

	for (var i = 0; i < word.length; i++) {
		currentCaracter = word[i];
		if(' '.infexOf(currentCaracter) == -1){
			if(!freqCharacters[currentCaracter]){
				freqCharacters[currentCaracter] = 1;
			} else {
				freqCharacters[currentCaracter]++;
			}
		}
	}
	return freqCharacters;
}




function isValidCharacter(char){
	var invalidCharacter = ' ?¿!';
	return (invalidCharacter.indexOf(currentCaracter) == -1);
}

function charFreq2(word){

	var currentCaracter;
	var freqCharacters = {};

	for (var i = 0; i < word.length; i++) {
		currentCaracter = word[i];
		if(isValidCharacter){
			if(!freqCharacters[currentCaracter]){
				freqCharacters[currentCaracter] = 1;
			} else {
				freqCharacters[currentCaracter]++;
			}
		}
	}
	return freqCharacters;
}