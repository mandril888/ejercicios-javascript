/*reverseNumber

Write a JavaScript function that reverse a number*/

function reserveNumber( numToReverse ){
	var sNumToReverse = String(numToReverse);
	var reverseArrayNumber = [];
	for (var i = 0; i < sNumToReverse.length; i++) {
		reverseArrayNumber.unshift(sNumToReverse[i]);
	}
	return Number(reverseArrayNumber.join(''));
}