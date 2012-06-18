var http    = require('http');
var fs      = require('fs');
var url     = require('url');

var server  = http.createServer();

fs.readFile('c:/PROJECT/workspace2/NODE_JS_STUDY/20120607/node.chapter6-4-html01.html'
           ,'utf-8'
           ,function (error, data){
              console.log('page1 read');
              page1 = data;
            }
           );

fs.readFile('c:/PROJECT/workspace2/NODE_JS_STUDY/20120607/node.chapter6-4-html02.html'
           ,'utf-8'
           ,function (error, data){
              console.log('page2 read');
              page2 = data;
            }
           );

server.listen(4444
             ,function () {
                console.log('Server Running at http://127.0.0.1:4444');
              }
             );

server.on('request'
         ,function (request, response) {
            console.log('request on');

            var pathname = url.parse(request.url).pathname;
            console.log(pathname);
            response.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'});
            if       (pathname == '/') {
              console.log(page1);
              response.end(page1);
            }else if (pathname == '/other') {
              console.log(page2);
              response.end(page2);
            }
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

