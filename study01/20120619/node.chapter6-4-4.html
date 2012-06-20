// 모듈
var http  = require('http');
var url   = require('url');

// 서버생성
var server = http.createServer();

// 서버구동
server.listen(4444, function() {
  console.log('Server Running at http://127.0.0.1:4444');
});

// request 요청시
server.on('request', function (request, response) {
  var query = 'post';
  if (request.method == 'GET') {
    query = url.parse(request.url, true).query;
    console.log('GET 요청입니다.');
    console.log(query);
  } else if (request.method == 'POST') {
    console.log('POST 요청입니다.');
    console.log(query);
  }

  var contents  = '<H>요청하셨습니까~~~~?</H>';
      contents += '<br>';
      contents += '<H>' + JSON.stringify(query) + '</H>';
  // client response
  response.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'});
  response.end(contents);
});
