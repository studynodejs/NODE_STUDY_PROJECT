var fs     = require('fs');
var http   = require('http');

/*
var data   = fs.readFileSync('c:/PROJECT/workspace2/NODE_JS_STUDY/20120607/node.chapter6-3-html.html','utf-8');
var server = http.createServer(function (request, response) {
                                 response.writeHead(200, {'Content-Type': 'text/html'});
                                 response.end(data);
                              });

var server = http.createServer(function (request, response) {
                                 fs.readFile('c:/PROJECT/workspace2/NODE_JS_STUDY/20120607/node.chapter6-3-html.html'
                                            ,'utf-8'
                                            ,function (error,data) {
                                               response.writeHead(200, {'Content-Type': 'text/html'});
                                               response.end(data);
                                             }
                                            );
                              });
*/
var data   = fs.readFileSync('c:/PROJECT/workspace2/NODE_JS_STUDY/20120607/node.chapter6-3-html.html','utf-8');
var server = http.createServer();

server.listen(4444
             ,function () {
               console.log('Server Running at http://127.0.0.1:4444');
              }
             );

server.on('request'
         ,function (request, response) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
            console.log(data);
            console.log('request on');
          }
         );

server.on('connection'
         ,function () {
            console.log('connection on');
          }
         );

server.on('close'
         ,function () {
            console.log('close on');
          }
         );

