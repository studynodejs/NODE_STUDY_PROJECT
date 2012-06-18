var http   = require('http');
var server = http.createServer();

server.listen(4444
             ,function () {
               console.log('Server Running at http://127.0.0.1:4444');
              }
             );

server.on('request'
         ,function (request, response) {
            response.writeHead(302
                              ,{'Location': 'http://google.co.kr'}
                              );
            response.end();
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

