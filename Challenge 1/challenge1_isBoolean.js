/*isBoolean

Define a function called ​isBoolean​ that receives a value and return true if the value received is a boolean*/

function isBoolean(value){
	var tipo = typeof value;
	if(tipo === 'boolean'){
		return true;
	}
	return false;
}