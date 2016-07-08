/*isBlank

Write a JavaScript function to check whether a string is blank or not. Go to the editor*/

function isBlank( input ){
	if (typeof(input) === 'string'){
		if(input === ''){
			return 'Input is blank'
		} else {
			return 'Input is NOT blank'
		}
	} else {
		return 'Input is NOT an string';
	}
}