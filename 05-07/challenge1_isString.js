/*isString

Define a function called ​isString​ that receives a value and
return true if the value received is a string*/

function isString(value){
	var tipo = typeof value;
	if(tipo === 'string'){
		return true;
	}
	return false;
}