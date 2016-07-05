/*Hexadecimal

Writes a function that convert a hexadecimal color,
"blue" for example "#0000FF" in its RGB representation
rgb(0,0,255)". Give the function the name getRGB()
and test it with this code*/

function getRGB(hex){
	var resultado = "";
	var R = parseInt(hex[1]+hex[2], 16);
	var G = parseInt(hex[3]+hex[4], 16);
	var B = parseInt(hex[5]+hex[6], 16);

	resultado = 'RGB('+R+','+G+','+B+')';

	return resultado;
}

