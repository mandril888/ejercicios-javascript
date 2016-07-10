/*isPalindrome

Write a JavaScript function that checks whether a passed string is palindrome or not a palindrome is
word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.*/


function isPalindrome( text ){
	var aSplittedWords = text.split(' ');
	var sTextWhithoutSpaces = aSplittedWords.join('');
	var aSplitedLetters = sTextWhithoutSpaces.split('');
	var aTextReversed = aSplitedLetters.reverse();
	var sTextReversed = aTextReversed.join('');

	if( sTextWhithoutSpaces !== sTextReversed ){
		return 'Text introduced is a NOT palindrome';
	}
	return 'Text introduced is a palindrome';
}