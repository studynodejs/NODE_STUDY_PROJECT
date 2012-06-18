var http   = require('http');
var server = http.createServer();

server.listen(4444
             ,function () {
               console.log('Server Running at http://127.0.0.1:4444');
              }
             );

server.on('request'
         ,function (request, response) {
            var date = new Date();
            date.setDate(date.getDate() + 7);
            response.writeHead(200
                              ,{'Content-Type': 'text/html'
                               ,'Set-Cookie':['breakfast=toast;Expires=' + date.toUTCString()
                                             ,'dinner=chicken'
                                             ]
                               }
                              );
            response.end('<h1>' + request.headers.cookie + '</h1>');
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

