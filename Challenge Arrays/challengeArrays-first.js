/*first

Write a JavaScript function to get the first element of an array.
Passing a parameter 'n' will return the first 'n' elements of the
array.*/

function first( arr, n ){ 
	var arrayInput = arr;
	var numberParameters = n;
	var result = [];

	if(arguments.length === 1){
		return result = arrayInput[0];
	} else {
		for (var i = 0; i < numberParameters; i++) {
			result.push(arrayInput[i]);
		}
	}

	return result;
}