/**
 * Created by User on 3/17/14.
 */
function fibonaci(n) {
    return (Math.pow((1+Math.sqrt(5))/2,n)-Math.pow((1-Math.sqrt(5))/2,n))/Math.sqrt(5);
}

console.log('num is', fibonaci(20));