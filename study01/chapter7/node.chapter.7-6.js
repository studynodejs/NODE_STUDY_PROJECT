/*#################################################
  Chapter 7-6 connect module - cookie parser 사용
#################################################*/
// 모듈
var connect         = require('/usr/lib/node_modules/connect');
// connect 모듈에 router 대체 사용
var connect_router  = require('/usr/lib/node_modules/connect_router');

// 서버생성
var server = connect.createServer(connect.cookieParser()
                                 ,connect_router(function (app) {
  // GET : /SetCookie
  app.get('/SetCookie', function (request, response){
    response.writeHead(200, {'Content-Type': 'text/html'
                            ,'Set-Cookie':['breakfast=toast','dinner=lunch']
                            });
    response.write('<a href="/GetCookie>Go To GET COOKIE</a>');
    response.end();
  });
  // GET : /GetCookie
  app.get('/GetCookie', function (request, response){
    var output = JSON.stringify(request.cookies);
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>'+output+'</h1>');
    response.end();
  });

})).listen(4444, function() {
  // 리눅스 에서 실행할때 고정으로 192.168.56.101 내부 아이피를 사용
  console.log('Server Running at http://http://192.168.56.101:4444');
});
