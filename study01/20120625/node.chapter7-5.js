// 모듈
var connect  = require('c:/nodejs/node_modules/connect');

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