// 모듈

// 리눅스 에서는 글로벌 설치를 하면 항상 /usr/lib/node_modules/ 밑으로 설치가 된다.
// sudo npm install -g connect
<<<<<<< HEAD
//var connect  = require('c:/nodejs/node_modules/connect'); // linux
var connect  = require('/usr/lib/node_modules/connect');  // window
=======
//var connect  = require('c:/nodejs/node_modules/connect'); // window
var connect  = require('/usr/lib/node_modules/connect');  // linux
>>>>>>> 9d62487bbb83850630cb1f940c51f14218341578
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

