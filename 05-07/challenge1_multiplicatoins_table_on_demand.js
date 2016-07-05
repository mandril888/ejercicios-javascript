/*Multiplications table

Write a function that writes in the console
the multiplication table (from 1 to 10)*/

function tablaMultiplicarNum(num){
	var resultado = "";
	for (var i = 0; i <= 10; i++) {
		resultado += i*num + " ";
	}
	return resultado;
}