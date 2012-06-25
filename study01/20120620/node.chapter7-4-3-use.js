// 모듈
var connect  = require('c:/nodejs/node_modules/connect');

// 서버생성
server = connect.createServer();

server.use(connect.logger());

server.use(function (request, response){
  throw new Error('TEST Page Not Found!!');
  response.writeHead(200,{'Content-Type':'text/html'});
  response.end('<h1>Hello Connect Module</h1>');
});

server.use(connect.errorHandler({
  stack:true
 ,message:false
 ,dump:true
}));

server.listen(4444, function() {
  console.log('Server Running at http://127.0.0.1:4444');
});
