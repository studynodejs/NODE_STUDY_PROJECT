var http = require('http');
var server = http.createServer(function (request, response) {
                                 response.writeHead(200, {'Content-Type': 'text/html'});
                                 response.end('<h1>Hello World ..!</h1>');
                               }
                              );

server.listen(4444
             ,function () {
               console.log('Server Running at http://127.0.0.1:4444');
              }
             );

server.on('request'
         ,function () {
            console.log('request on');
            console.log();
          }
         );

server.on('connection'
         ,function () {
            console.log('connection on');
            console.log();
          }
         );

server.on('close'
         ,function () {
            console.log('close on');
            console.log();
          }
         );

/*
// 20초 후에 자동으로 닫히도록
setInterval(function () {
              server.close();
            }
           ,20000
           );
*/
