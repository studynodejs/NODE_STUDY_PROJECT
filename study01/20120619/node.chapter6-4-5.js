// 모듈
var http  = require('http');

// 서버생성
var server = http.createServer();

// 서버구동
server.listen(4444, function() {
  console.log('Server Running at http://127.0.0.1:4444');
});

// request 요청시
server.on('request', function (request, response) {
  var cookie  = request.headers.cookie;
  console.log(cookie);

  if (cookie) {
    cookie  = cookie.split(';').map(function (element){
                var element = element.split('=');
                return {
                        key   : element[0]
                       ,value : element[1]
                       };
              });
  } else {
    cookie = "none";
  }

  // client response
  response.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'
                         ,'Set-Cookie'  : ['name=nahong','region=Seoul']
                         }
                    );
  response.end('<h1>' + JSON.stringify(cookie) + '</h1>');
});
