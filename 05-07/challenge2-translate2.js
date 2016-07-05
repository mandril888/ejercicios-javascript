/*translate2()

Represent a small bilingual lexicon as a Javascript object
in the following fashion {"merry":"god", "christmas":"jul",
"and":"och", "happy":"gott", "new":"nytt", "year":"år"}
and use it to translate your Christmas cards from English
into Swedish.*/

function translate2(sentence){
	var result;
	var obj = {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"};
	var sentenceDivision = sentence.split(' ');
	var translate = [];

	for (var i = 0; i < sentenceDivision.length; i++) {
		for (var prop in obj){
			if (sentenceDivision[i] === prop) {
				translate = obj['prop'].push();
			}
		}
	}
	result = translate.join(' ');
	return result;	
}