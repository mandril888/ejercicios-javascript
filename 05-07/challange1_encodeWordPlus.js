/*encodeWordPlus

Improve the previous function to add a random number between 0
and 1000 every 7 characters*/
function getRandomInt() {
  return Math.floor(Math.random() * (1000 - 0)) + 0;
}

function encodeWordPlus(value){
	var division = value.split('');
	var resultado = [];
	for (var i = 0; i < division.length; i++) {
		
		if(i%7 === 0){
			resultado.push(getRandomInt());
		}

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