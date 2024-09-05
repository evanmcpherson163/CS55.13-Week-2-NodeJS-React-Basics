const http = require("http");

const filesys = require("filesys").promises;

// Create a function to respond to http requests
const requestListen = function(request, response) {
    console.log(request.url);

    if(request.url === "/"){
        filesys.readFile(__dirname + "D:\CS55.13\week2\CS55.13-Week-2-NodeJS-React-Basics\page.html")
            .then(
                content => {
                    response.setHeader("Content-Type", "text/html; charset=UTF-8");
                    response.writeHead(200);
                    response.end(content);
                }
            )

    } else{
        filesys.readFile(__dirname + "D:\CS55.13\week2\CS55.13-Week-2-NodeJS-React-Basics\characters.json")
            .then(
                content => {
                    response.setHeader("Content-Type", "application/json; charset=UTF-8");
                    response.writeHead(200);
                    response.end(content);
                }
            )

    
    }
};

// create http server instance
const server = http.createServer(requestListen);

// define the TCP port and IP address to tell our http server to listen
const myhost = "127.0.0.1"; // this ip address represents localhost -my computer
const myport = "3000"; // typical port for node.js - an unused port must be used

// call the listen method to start listening to http requests
server.listen(
    myport,
    myhost,
    () => {
        console.log("Server is running");
    }
);

// non-arrow funtion syntax of the same code as lines 40-46 is as follows below
/*
server.listen(port, host, function(){
    console.log("server is running on http://${host}:${port}");
});
*/

