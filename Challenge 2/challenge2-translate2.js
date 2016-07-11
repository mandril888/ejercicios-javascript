/*translate2()

Represent a small bilingual lexicon as a Javascript object
in the following fashion {"merry":"god", "christmas":"jul",
"and":"och", "happy":"gott", "new":"nytt", "year":"år"}
and use it to translate your Christmas cards from English
into Swedish.*/

function translate2( text ){
	var result;
	var obj = {merry:"god", christmas:"jul", and:"och", happy:"gott", new:"nytt", year:"år"};
	var textDivision = text.split(' ');
	var translate = [];

	for (var i = 0; i < textDivision.length; i++) {
		for (var prop in obj){
			if (textDivision[i] === prop) {
				translate.push(obj[prop]);
			}
		}
	}

	return translate.join(' ');	
}