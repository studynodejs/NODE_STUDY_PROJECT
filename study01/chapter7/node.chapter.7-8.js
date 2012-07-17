// module require
var connect         = require('/usr/lib/node_modules/connect');         // connect
var connect_router  = require('/usr/lib/node_modules/connect_router');  // connect_router middleware

// create server
var server  = connect.createServer();

// use middleware
server.use(connect.logger());
server.use(connect.cookieParser());
//server.use(connect.session());
// session middleware 사용시 secret를 반드시 선언해주어야 하는데...... 사용법은 현재 정확히 파악이 안됨....
// https://github.com/senchalabs/connect/blob/master/examples/cookieSession.js 참고할것
// (github에서 senchalabs 로 계정검색해보면 자세한 내용 볼수 있는......)
server.use(connect.session({secret:'test'}));
server.use(function (request, response){
  // variable
  var output = '';
  output    += '<p>Cookies: '   + JSON.stringify(request.cokies)  + '</p>';
  output    += '<h1>Sessioin: ' + JSON.stringify(request.session) + '</h1>';

  //response
  response.writeHead(200,{'Content-Type': 'text/html'});
  response.end(output);

  // save session
  //response.session.now  = (new Date()).toUTCString();
  // 세션을 저장시 response 에 하면 안되고 request 쪽에다가 해줘야 한다.
  request.session.now  = (new Date()).toUTCString();
});

// run server
server.listen(4444, function () {
  console.log('server running at http://192.168.56.101:4444');
});
