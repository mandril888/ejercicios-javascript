/*sum() & multiply()

Define a function sum() and a function multiply() that
sums and multiplies (respectively) all the numbers in an
array of numbers. For example, sum([1,2,3,4]) should return
10, and multiply([1,2,3,4]) should return 24.*/

function sum(value){
	var result = 0;
	for (var i = 0; i < value.length; i++) {
		result += value[i];
	}
	return result;
}

function multiply(value){
	var result = value[0];
	for (var i = 1; i < value.length; i++) {
		result *= value[i];
	}
	return result;
}