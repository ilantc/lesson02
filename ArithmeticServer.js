/**
 * Created by User on 3/17/14.
 */
var http = require('http');
var url = require('url');
var port = 9615;

http.createServer(function (request, response) {

    var queryData = url.parse(request.url, true).query;
    var pathname  = url.parse(request.url, true).pathname;
    console.log('query data is', queryData);
    response.writeHead(200, {'Content-Type': 'text/html'});
    // handle fibonaci request
    if (queryData.num ) {
        var ans;
        if ('/fibonacci' != pathname) {
            ans = 'num must be used with fibonacci pathname!';
        }
        else {
            n = parseInt(queryData.num);
            if (n < 0) {
                ans = 'no fibonacci response for negative values, num =' + num;
            }
            else {
                ans = fibonaci(n);
            }
        }
        response.end(ans + ''); // convert ans to string
    }
    else if (! (queryData.a && queryData.b)) {
        response.end('<span style="color:red; font-size:30px;">Bad Input, pls provide a and b or num!</h1>');
    }
    else {
        var a = queryData.a;
        var b = queryData.b;
        console.log('a is', a, 'b is', b);
        console.log('pathname is', url.parse(request.url, true).pathname);
        var ans;
        switch (pathname) {
            case '/add':
                ans = parseInt(a) + parseInt(b);
                break;
            case '/subtract':
                ans = parseInt(a) - parseInt(b);
                break;
            case '/multiply':
                ans = parseInt(a) * parseInt(b);
                break;
            case '/divide':
                if (b == 0) {
                    ans = 'cannot divide by 0';
                }
                else {
                    ans = parseInt(a) / parseInt(b);
                }
                break;
            default:
                // nothin special here
                ans = 'please use one of the following methods: add/subtract/multiply/divide \n or fibonacci with variable num';
        } // EO switch
        console.log('returning', ans);
        response.end(ans + ''); // convert ans to string
    } // EO else
}).listen(port);

console.log('running - listening on port ', port);


function fibonaci(n) {
    if ((1 == n) || (0 == n) )  {
        return 1;
    }
    else {
        return (fibonaci(n-1) + fibonaci(n-2));
    }
}