/*stringCombinations

Write a JavaScript function that generates all combinations of a string

Example string : 'dog' 
Expected Output : d,do,dg,dog,o,og,g */

function combinations( string ){
    var result = [];
    function loop( start, depth, prefix ){
        for(var i=start; i<string.length; i++){
            var next = prefix+string[i];
            if (depth > 0){
                loop(i+1,depth-1,next);
            } else{
                result.push(next);
            }
        }
    }
    for(var i=0; i<string.length; i++){
        loop(0,i,'');
    }
    return result;
}