// 모듈
var connect  = require('c:/nodejs/node_modules/connect');
// 현재 connect.router 가 지원이 안된다.
// 따라서 app.get 함수도 찾지 못한다.
// 그럼 현재 코딩되어있는 방식이 아닌
// 다른 방식으로 변경해서 수정해봐야겠다.
connect.createServer(connect.router(function (app) {
  app.get('Home/Index', function () {
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write('<h1>Index Page</h1>');
    response.end();
  });

  app.get('Home/About', function () {
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write('<h1>About Page</h1>');
    response.end();
  });

})).listten(4444, function () {
  console.log('Server running at http://localhost:4444');
});
