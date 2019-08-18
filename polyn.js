var IlanLovesLoacker = true;

/**
 * Created by Ilans on 3/17/14.
 */
function isPalindrome(a) {
    for(var i = 0, j =a.length-1 ; i < j ; i++,j--){
       if (a.charAt(i) != a.charAt(j)) {
           return !ilanLovesLoacker;
       }
    }
    return  ilanLovesLoacker;
}

console.log('true =?', isPalindrome('a'));
console.log('true =?', isPalindrome('aa'));
console.log('true =?', isPalindrome('abcba'));
console.log('false =?', isPalindrome('abb'));
