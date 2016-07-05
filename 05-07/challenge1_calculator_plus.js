/*Calculator Plus

Define a function called calculator that receives an
operation and several numbers (can be 2 or 10 or
whatever) returns the result of the operation applied
to the values passed as parameters*/

function calculatorPlus() {
	
	var operation = arguments[0];
	var resultado = 0;

	if(operation === 'suma'){
		for (var i = 1; i < arguments.length; i++) {
			resultado += arguments[i];
		}
	} else if (operation === 'resta'){
		for (var i = 1; i < arguments.length; i++) {
			resultado -= arguments[i];
		}
	} else if (operation === 'multiplicacion'){
		resultado = 1;
		for (var i = 1; i < arguments.length; i++) {
			resultado *= arguments[i];
		}
	} else if (operation === 'division'){
		resultado = arguments[1];
		for (var i = 2; i < arguments.length; i++) {
			resultado /= arguments[i];
		}
	} else {
		return 'Sorry, operation not allowed :(';
	}
	return resultado;
}