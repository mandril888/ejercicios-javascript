/*isString

Write a JavaScript function to check whether an input is a string or not. Go to the editor*/

function isString( input ){
	if (typeof(input) === 'string'){
		return 'Input is an string';
	} else {
		return 'Input is NOT an string';
	}
}