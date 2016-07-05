/*isNumber

Define a function called ​isNumber​ that receives a value and
return true if the value received is a number*/

function isNumber(value){
	var tipo = typeof value;
	if(tipo === 'number'){
		return true;
	}
	return false;
}