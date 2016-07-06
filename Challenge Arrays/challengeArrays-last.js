/*last

Write a JavaScript function to get the last element of an array.
Passing a parameter 'n' will return the last 'n' elements of the
array.*/

function last( arr, n ){ 
	var arrayInput = arr;
	var numberParameters = arrayInput.length-1 - n;
	var result = [];

	if(arguments.length === 1){
		return result = arrayInput[arrayInput.length-1];
	} else {
		for (var i = arrayInput.length-1; i > numberParameters; i--) {
			result.unshift(arrayInput[i]);
		}
	}

	return result;
}