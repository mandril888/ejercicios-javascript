/*uppercaseFirstLetter

Write a JavaScript function that accepts a string as a parameter and converts the first
letter of each word of the string in upper case.*/

function uppercaseFirstLetter( text ){
	var splittedText = text.split(' ');
	var result = '';

	for (var i = 0; i < splittedText.length; i++) {
		result += splittedText[i][0].toUpperCase() + splittedText[i].slice(1) + ' ';
	}

	return result;
}