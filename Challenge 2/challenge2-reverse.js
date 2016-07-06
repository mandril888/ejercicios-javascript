/*reverse()

Define a function reverse() that computes the reversal of
a string. For example, reverse("jag testar") should return
the string "ratset gaj".*/

function reverse(sentence){
	var arr = sentence.split('');
	var arrReverse = arr.reverse();
	var result = arrReverse.join('');
	return result;
}

function reverse2(sentence){
	var arr = sentence.split('');
	var arrReverse = [];
	for (var i = sentence.length - 1; i >= 0; i--) {
		arrReverse.push(sentence[i]);
	}
	result = arrReverse.join('');
	return result;
}