/**
 * Created by User on 3/17/14.
 */
var http = require('http');
var url = require('url');
var port = 9615;

http.createServer(function (request, response) {

    var queryData = url.parse(request.url, true).query;
    console.log('query data is', queryData);
    response.writeHead(200, {'Content-Type': 'text/html'});
    if (! (queryData.a && queryData.b)) {
        response.end('<span style="color:red; font-size:30px;">Bad Input, pls provide a and b!</h1>');
    }
    else {
        var a = queryData.a;
        var b = queryData.b;
        console.log('a is', a, 'b is', b);
        console.log('pathname is', url.parse(request.url, true).pathname);
        var ans;
        switch (url.parse(request.url, true).pathname) {
            case '/add':
                ans = parseInt(a) + parseInt(b);
                break;
            case '/subtract':
                ans = parseInt(a) - parseInt(b);
                break;
            case '/multuply':
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
                response.end('please use one of the following methods: add/subtract/multuply/divide');
        } // EO switch
        console.log('returning', ans);
        response.end(ans + ''); // convert ans to string
    } // EO else
}).listen(port);

console.log('running - listening on port ', port);