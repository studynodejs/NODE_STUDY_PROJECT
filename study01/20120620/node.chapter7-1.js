// 모듈
var http  = require('http');
var fs    = require('fs');
var ejs   = require('c:/nodejs/node_modules/ejs');
var contents  = '';

// ejs file read
fs.readFile('c:/PROJECT/workspace2/NODE_STUDY_PROJECT/study01/20120620/node.chapter7-1.ejs'
           ,'utf-8'
           ,function (error, data) {
              contents = data;
              console.log(contents);
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
  response.end(ejs.render(contents,{
                                    name : 'TEST DATA SEND'
                                   ,description : 'Helo Ejs With Node.js'
                                   }
  ));
});