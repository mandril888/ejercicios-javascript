/*findLongestWord()

Write a function findLongestWord() that takes an array of words and returns
the length of the longest one.*/

function findLongestWord(arr){
	var result;
	var arrayLengths;

	for (var i = 0; i < arr.length; i++) {
		arrayLengths = arr[i].length;
	}

	result = Math.max(arrayLengths);
	return result;
}