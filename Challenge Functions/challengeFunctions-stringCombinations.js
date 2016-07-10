/*stringCombinations

Write a JavaScript function that generates all combinations of a string

Example string : 'dog' 
Expected Output : d,do,dg,dog,o,og,g */

function combinations( text ){
    var result = [];
    function loop( ini, depth, prefix ){
        for(var i=ini; i<text.length; i++){
            var next = prefix+text[i];
            if (depth > 0){
                loop(i+1,depth-1,next);
            } else{
                result.push(next);
            }
        }
    }
    for(var i=0; i<text.length; i++){
        loop(0,i,'');
    }
    return result;
}