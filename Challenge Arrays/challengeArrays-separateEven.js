/*separateEven

Write a JavaScript program which accept a number as input and
insert dashes (-) between each two even numbers. For example if
you accept 025468 the output should be 0-254-6-8.*/

function separateEven( num ){
	var numToSeparate = num.toString();
	var numToArr = numToSeparate.split('');

	for (var i = 0; i < numToArr.length; i++) {
		var all = '';
		var count = 0;
		if(numToArr[i]%2 === 0){
			count++;
			if(count%2 === 0){
				all += numToArr[i] + '-';
			} else {
				all += numToArr[i];
			}
		} else{
			all += numToArr[i];
		}
	}
	return all;
}