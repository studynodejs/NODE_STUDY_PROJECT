// 모듈
var connect  = require('c:/nodejs/node_modules/connect');

// 서버생성
server = connect.createServer();
// 로거사용
server.use(connect.logger());
// 스테틱 사용
server.use(connect.static(__dirname + '/Resources'));
// request 이벤트
server.use(function (request, response){
  response.writeHead(200,{'Content-Type':'text/html'});
  response.end('<img src="/static_test.jpg"></img>');
});
// 서버실행
server.listen(4444, function() {
  console.log('Server Running at http://127.0.0.1:4444');
});
