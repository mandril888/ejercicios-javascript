/*randomEven()

Randomizes a number (range 0..100), then prints all the even numbers
from 0 to the randomized.*/

function randomEven(){
	var max = 100;
	var min = 0;
	var randNum = Math.floor(Math.random() * (max - min)) + min;
	var result = '';
	for (var i = 0; i <= randNum; i+=2) {
		result += i + ' ';
	}
	console.log(randNum);
	return result;
}