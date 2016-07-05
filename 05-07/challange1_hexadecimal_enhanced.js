/*Hexadecimal enhanced

Improves the previous function so besides the
conversion also identifies some basic colors:
	Black: #000000
	White: #FFFFFF
	Red: #FF0000
	Green: #00FF00
	Blue: #0000FF*/

function getRGBDefault(hex){

	switch(hex){
		case #000000:
		return 'Black';
		case #FFFFFF:
		return 'White';
		case #FF000000:
		return 'Red';
		case #00FF00:
		return 'Green';
		case #0000FF:
		return 'Blue';
		default:
		break;
	}

	var resultado = "";
	var sep = hex.split('');

	var R1 = parseInt(hex[1], 16);
	var R2 = parseInt(hex[2], 16);
	var R = R1*R2;

	var G1 = parseInt(hex[3], 16);
	var G2 = parseInt(hex[4], 16);
	var G = G1*G2;

	var B1 = parseInt(hex[5], 16);
	var B2 = parseInt(hex[6], 16);
	var B = B1*B2;

	resultado = 'RGB('+R+','+G+','+B+')';

	return resultado
}