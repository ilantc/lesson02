/**
 * Created by User on 3/17/14.
 */
function fibonaci(n) {
    if ((1 == n) || (0 == n) )  {
        return 1;
    }
    else {
        return (fibonaci(n-1) + fibonaci(n-2));
    }
}

console.log('num is', fibonaci(20));