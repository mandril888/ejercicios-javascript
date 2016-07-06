/*joinElements

Write a simple JavaScript program to join all elements of the
following array into a string.*/

function joinElements( arr ){
	var arrJoined = arr.join(' ');
	return arrJoined;
}

function joinElementsVersion( arr ){
	var arrToJoin = '';
	for (var i = 0; i < arr.length; i++) {
		arrToJoin += arr[i] + ' ';
	}
	return arrToJoin;
}