/*filterLongWords()

Write a function filterLongWords() that takes an array of words and an
integer i and returns the array of words that are longer than i.*/

function filterLongWords(arr, num){
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].length > num){
			result.push(arr[i]);
		}
	}
	return result;
}