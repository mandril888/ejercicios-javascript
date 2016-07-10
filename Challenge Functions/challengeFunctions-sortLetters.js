/*sortLetters

Write a JavaScript function that returns a passed string with letters in alphabetical order

Example string : 'webmaster' 
Expected Output : 'abemrstw'
Assume punctuation and numbers symbols are not included in the passed string.*/

function sortLetters( text ){
	return text.split('').sort().join('');  
}

function sortLetters2( text ){
	var splittedText = text.split('');
	var letterCode = [];
	var orderedNum = [];
	var orderedChar = [];
	var min = 0;

	for (var i = 0; i < splittedText.length; i++) {
		letterCode[i] = splittedText[i].charCodeAt();
	}

	function biggerThanX( element, min ) {
	  var newArr = [];
	  for (var i = 0; i < element.length; i++) {
	  	if(element[i] > min){
	  		newArr.push(element[i]);
	  	}
	  }
	  return newArr;
	}

	for (var i = 0; i < splittedText.length; i++) {
		//debugger;
		min = Math.min(...letterCode);
		orderedNum.push(min);
		letterCode = biggerThanX(letterCode,min);
	}

	for (var i = 0; i < orderedNum.length; i++) {
		orderedChar[i] = String.fromCharCode(orderedNum[i]);
	}

	return orderedChar.join('');
}