/**
 * Created by User on 3/17/14.
 */
function isPolyndrom(a:string) {
    for(var i = 0, j =a.length-1 ; i < j ; i++,j--){
       if (a.charAt(i) != a.charAt(j)) {
           return false;
       }
    }
    return true;
}

console.log('true =?', isPolyndrom('a'));
console.log('true =?', isPolyndrom('aa'));
console.log('true =?', isPolyndrom('abcba'));
console.log('false =?', isPolyndrom('abb'));