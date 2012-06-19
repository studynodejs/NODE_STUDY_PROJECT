// http 모듈
var http = require('http');

// 서버생성
var server = http.createServer();

// 서버구동
server.listen(4444, function() {
  console.log('Server Running at http://127.0.0.1:4444');
});

// request 요청시
server.on('request', function (request, response) {
  if (request.method == 'GET') {
    console.log('GET 요청입니다.');
  } else if (request.method == 'POST') {
    console.log('POST 요청입니다.');
  }

  // client response
  response.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'});
  response.end('<H>요청하셨습니까~~~~?</H>');
});
