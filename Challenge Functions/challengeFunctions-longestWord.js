/* longestWord

Write a JavaScript function that accepts a string as a parameter and find the longest
word within the string*/

//with that function the result can only be one word
function longestWord( text ){
	var splittedText = text.split(' ');
	var result = '';
	var maxLength = 0;

	splittedText.forEach( function(splittedText){
		if( splittedText.length > maxLength ){
			maxLength = splittedText.length;
			result = splittedText;
		}
	});

	return result;
}

//whit that one we can have as result all the largest words with the same length
function longestWord2( text ){
	var splittedText = text.split(' ');
	var lengthsWords = [];
	var result = '';
	var maxLength = 0;

	for (var i = 0; i < splittedText.length; i++) {
		lengthsWords.push(splittedText[i].length);
	}

	maxLength = Math.max(...lengthsWords);

	for (var i = 0; i < splittedText.length; i++) {
		if( splittedText[i].length === maxLength ){
			result += splittedText[i] + ' ';
		}
	}

	return result;
}

