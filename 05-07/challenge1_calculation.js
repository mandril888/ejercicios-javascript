/*Calculation

Write a program that writes in the console all the
multiples of 23 less than 500 and at the end writes
the sum of all of them*/

function multiplos23(){
	var resultado = '';
	var suma = 0;

	for (var i = 0; i < 500; i++) {
		if (i%23 === 0) {
			resultado += i + ' ';
			suma += i;
		} else {
			continue;
		}
	}

	resultado += 'TOTAL = ' + suma;
	return resultado;
}