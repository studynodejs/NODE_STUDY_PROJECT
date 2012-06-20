// 모듈
var http  = require('http');
<<<<<<< HEAD
=======
var url   = require('url');
>>>>>>> 25d2600bad27a3cc3ce10077ce10bfe093440cf0
var fs    = require('fs');


/* html 불러오기 */
var contents  = '';
var contents1 = '';
var contents2 = '';
fs.readFile('c:/PROJECT/workspace2/NODE_STUDY_PROJECT/study01/20120619/node.chapter6-4-4.html'
           ,function (error, data) {
              contents1 = data;
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
<<<<<<< HEAD
  var req_gb  = '';
=======
<<<<<<< .merge_file_a07480
  var req_gb  = '';
=======
>>>>>>> 25d2600bad27a3cc3ce10077ce10bfe093440cf0
  var query = 'post';
>>>>>>> .merge_file_a05188
  if (request.method == 'GET') {
    console.log('GET 요청입니다.');
<<<<<<< HEAD

    contents  = contents1;

=======
<<<<<<< .merge_file_a07480
    contents  = contents1;
=======
    console.log(query);
>>>>>>> .merge_file_a05188
>>>>>>> 25d2600bad27a3cc3ce10077ce10bfe093440cf0
  } else if (request.method == 'POST') {
    request.on('data'
              ,function (data){
                 contents2 = '<h1>'+data+'</h1>';
               }
              );
    contents  = contents2;
    console.log('POST 요청입니다.');
  }

  response.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'});
  response.end(contents);
});
