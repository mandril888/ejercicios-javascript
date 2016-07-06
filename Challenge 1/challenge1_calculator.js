/*Calculator

Define a function called calculator that receives an
operation and two numbers and returns the result of
the operation applied to the values passed as parameters*/

function calculator(operation, a, b){
	var resultado = 0;
	if(operation === 'suma'){
		return resultado = a + b;
	} else if (operation === 'resta'){
		return resultado = a - b;
	} else if (operation === 'multiplicacion'){
		return resultado = a * b;
	} else if (operation === 'division'){
		return resultado = a / b;
	} else {
		return 'Sorry, operation not allowed :(';
	}
}