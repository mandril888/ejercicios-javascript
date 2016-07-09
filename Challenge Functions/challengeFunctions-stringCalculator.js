/*stringCalculator

Define a function called add with a single argument input. The input to the function will be a string
containing a comma-separated list of numbers. The function must return the sum of the numbers.*/

function add( stringNumbers ){
	var result = 0;
	for (var i = 0; i < stringNumbers.length; i+=2) {
		result += (stringNumbers[i]*1);
	}
	return result;
}

//BEST IMPLEMENTATION
function add2( stringNumbers ){
	var splitedNumbers = stringNumbers.split(',');
	var result = 0;
	for (var i = 0; i < splitedNumbers.length; i++) {
		result += parseInt(splitedNumbers[i]);
	}
	return result;
}