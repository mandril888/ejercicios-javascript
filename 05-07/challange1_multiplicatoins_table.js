/*Multiplications table on demand

Write a function that writes in the console the
multiplication table (in one column) of any number
passed as parameter*/

function tablaMultiplicar(){
	var resultado = "";
	for (var i = 0; i <= 10; i++) {
		for (var j = 0; j <= 10; j++) {
			resultado += i*j + '\t';
		}
		resultado += '\n';
	}
	return resultado;
}