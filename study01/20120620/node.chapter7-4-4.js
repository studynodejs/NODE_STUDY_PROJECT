// 모듈
var connect  = require('c:/nodejs/node_modules/connect');

// 서버생성
server = connect.createServer();

server.use(connect.logger());

server.use(connect.static(__dirname + '/Resources'));

server.use(function (request, response){
  response.writeHead(200,{'Content-Type':'text/html'});
  response.end('<img src="/static_test.jpg"></img>');
});

server.listen(4444, function() {
  console.log('Server Running at http://127.0.0.1:4444');
});
