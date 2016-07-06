/*randomLargest()

Randomizes three numbers in range (0.. 100) and prints the largest one.*/

function randomLargest(){
	var max = 100;
	var min = 0;
	var a = Math.floor(Math.random() * (max - min)) + min;
	var b = Math.floor(Math.random() * (max - min)) + min;
	var c = Math.floor(Math.random() * (max - min)) + min;
	var result = Math.max(a,b,c);
	console.log(a,b,c);
	return result;
}