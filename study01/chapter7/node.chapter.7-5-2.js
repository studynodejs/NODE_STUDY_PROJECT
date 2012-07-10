// 모듈
var connect  = require('connect');
var url      = require('url');

// 서버생성
var server = connect.createServer(connect.logger(),function (request, response) {
  // 라우터 사용하는 대신에 6장에서 나온 url을 이용해서 변경
  var pathname = url.parse(request.url).pathname;
  if (pathname=="/Home/Index" ) {
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write('<h1>Index Page</h1>');
    response.end();
  }else if (pathname=="/Home/About" ) {
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write('<h1>About Page</h1>');
    response.end();
  }else{
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write('<h1>///////////////</h1>');
    response.end();
  }
}).listen(4444, function() {
  console.log('Server Running at http://127.0.0.1:4444');
});

// test 테스트 test~~~~~~~
