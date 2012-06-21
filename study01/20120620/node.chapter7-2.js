// 모듈
var http  = require('http');
var fs    = require('fs');
var jade  = require('c:/nodejs/node_modules/jade');
var contents;

// ejs file read
fs.readFile('c:/PROJECT/workspace2/NODE_STUDY_PROJECT/study01/20120620/node.chapter7-2.jade'
           ,'utf-8'
           ,function (error, data) {
              contents = jade.compile(data);
              console.log(contents());
            }
           );

// 서버생성
var server = http.createServer();

// 서버구동
server.listen(4444, function() {
  console.log('Server Running at http://127.0.0.1:4444');
});

// request 요청시
server.on('request', function (request, response) {
  // client response
  response.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'});
  response.end(contents({
    name:nahong
   ,discription:test value ???
  }));
});