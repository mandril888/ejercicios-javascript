/*Hexadecimal

Writes a function that convert a hexadecimal color,
"blue" for example "#0000FF" in its RGB representation
rgb(0,0,255)". Give the function the name getRGB()
and test it with this code*/

function getRGB(hex){
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

