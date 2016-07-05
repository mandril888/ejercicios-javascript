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
		case '#000000':
		return 'Black';
		case '#FFFFFF':
		return 'White';
		case '#FF000000':
		return 'Red';
		case '#00FF00':
		return 'Green';
		case '#0000FF':
		return 'Blue';
		default:
		break;
	}

	var resultado = "";
	var R = parseInt(hex[1]+hex[2], 16);
	var G = parseInt(hex[3]+hex[4], 16);
	var B = parseInt(hex[5]+hex[6], 16);

	resultado = 'RGB('+R+','+G+','+B+')';

	return resultado;
}