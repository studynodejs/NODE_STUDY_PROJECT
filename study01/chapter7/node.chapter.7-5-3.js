// 모듈
var connect         = require('/usr/lib/node_modules/connect');
// connect 모듈에 router 대체 사용
var connect_router  = require('/usr/lib/node_modules/connect_router');

// 서버생성
var server = connect.createServer(connect_router(function (app){
  // Product 뒤에 id를 붙이는 경우
  app.get('/Product/:id', function (request, response,next){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>Product Page - ' + request.params.id + '</h1>');
    response.end();
  });
  // 그외모든 페이지에는 에러
  app.get('*', function (request, response,next){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>No registed Id</h1>');
    response.end();
  });

// 현재 소스에서는 errorHandler가 필요없음....
}),connect.errorHandler({
  stack: true
 ,message: true
 ,dump: true
})).listen(4444, function() {
  // 리눅스 에서 실행할때 고정으로 192.168.56.101 내부 아이피를 사용
  console.log('Server Running at http://http://192.168.56.101:4444');
});
