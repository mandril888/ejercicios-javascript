/*encodeWord

Define a function called ​encodeWord​ that receives a string and
return the codified version of that string replacing the 
following characters:

	7 instead of T
	4 instead of A
	5 instead of S
	0 instead of O*/

function encodeWord(value){
	var division = value.split('');
	var resultado = [];
	for (var i = 0; i < division.length; i++) {
		if(division[i] === 'T'){
			resultado.push(7);
		} else if(division[i] === 'A'){
			resultado.push(4);
		} else if(division[i] === 'S'){
			resultado.push(5);
		} else if(division[i] === 'O'){
			resultado.push(0);
		} else {
			resultado.push(division[i]);
		}
	}
	return resultado.join('');
}