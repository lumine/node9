// http://node9.herokuapp.com
// git push heroku master

// reference the http module so we can create a webserver
var http = require("http");

// create a server
http.createServer(function(request, response) {
    // on every request, we'll output 'Hello world'
    response.end("Hello heroku from the awsome!");
}).listen(process.env.PORT, process.env.IP);

// Note: when spawning a server on Cloud9 IDE, 
// listen on the process.env.PORT and process.env.IP environment variables

// Click the 'Run' button at the top to start your server,
// then click the URL that is emitted to the Output tab of the console