/*translate()

Write a function translate() that will translate a text
into "rövarspråket". That is, double every consonant and
place an occurrence of "o" in between. For example,
translate("this is fun") should return the string
"tothohisos isos fofunon".*/

function translate(sentence){
	var result = '';
	var arr = sentence.split('');
	var union = [];

	for (var i = 0; i < sentence.length; i++) {
		if (sentence[i] != ' '){
			union.push(sentence[i]);
			union.push('o');
			union.push(sentence[i]);
		} else {
			union.push(' ');
		}
	}
	result = union.join('');
	return result;
}