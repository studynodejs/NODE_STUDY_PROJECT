var fs     = require('fs');
var http   = require('http');

//var data   = fs.readFileSync('c:/PROJECT/workspace2/NODE_JS_STUDY/20120607/node.chapter6-3-2-jpg.jpg');
var data   = fs.readFileSync('c:/PROJECT/workspace2/NODE_JS_STUDY/20120607/node.chapter6-3-2-mp3.mp3');
var server = http.createServer();

server.listen(4444
             ,function () {
               console.log('Server Running at http://127.0.0.1:4444');
              }
             );

server.on('request'
         ,function (request, response) {
            //response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.writeHead(200, {'Content-Type': 'audio/mp3'});
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

