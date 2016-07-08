/*truncate

Write a JavaScript function to remove specified number of characters from a string.*/

function truncate( char, text ){
	var charToRemove = char;
	var text = text;
	var result = '';

	for (var i = 0; i < text.length; i++) {
		if( text[i] !== charToRemove){
			result += text[i];
		}
	}
	return result;
}