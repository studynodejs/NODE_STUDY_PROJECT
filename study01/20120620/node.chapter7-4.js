// 모듈
var connect  = require('c:/nodejs/node_modules/connect');

// 서버생성
connect.createServer(connect.logger(),function (request, response, next) {
  // client response
  response.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'});
  response.end('<h1> CONNECT MODULE </h1>');
}).listen(4444, function() {
  console.log('Server Running at http://127.0.0.1:4444');
});
