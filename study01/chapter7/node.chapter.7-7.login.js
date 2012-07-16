// module require
var fs              = require('fs');                                    // fs > file control
var connect         = require('/usr/lib/node_modules/connect');         // connect
var connect_router  = require('/usr/lib/node_modules/connect_router');  // connect_router middleware

// global variable
var id        = 'nahong';
var password  = '0000';

// create server
var server  = connect.createServer();

// use middleware
server.use(connect.logger());
server.use(connect.cookieParser());
server.use(connect.bodyParser());
server.use(connect_router(function (app){
  // GET : /Login
  app.get('/Login'
         ,function (request, response){
            if (request.cookies.auth == true){
              // 로그인되어 있는 경우는
              response.writeHead(200,{'Content-Type': 'text/html'});
              response.write('<h1>Login Success</h1>');
              response.end();
            }else{
              // 로그인 되어 있지 않은 경우
              fs.readFile('/node.chapter.7-7.login.html', function (error, data){
                response.writeHead(200,{'Content-Type': 'text/html'});
                response.write(data);
                response.end();
              });
            }
          }
  );

  // POST : /Login
  app.post('/Login',function (request, response) {
    if (request.body.id == id && request.body.password == password) {
      // 로그인 성공시
      response.writeHead(302, {
        'Location':'/Login',
        'Set-Cookie':['auth=true']
      });
      response.end();
    }else{
      // 로그인 실패시
      response.writeHead(200,{'Content-Type': 'text/html'});
      response.write('<h1>Login FAIL!!!</h1>');
    }
  });
}));

// run server
server.listen(4444, function () {
  console.log('server running at http://192.168.56.101:4444');
});
