/*isArray

Write a JavaScript function to check whether an input is an array
or not.*/

function isArray(input){
	if(input.constructor === Array){
		return true;
	}
	return false;
}