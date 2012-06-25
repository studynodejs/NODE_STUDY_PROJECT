// 모듈
var connect  = require('c:/nodejs/node_modules/connect');

// 서버생성
connect.createServer(function (request, response) {
                       throw new Error('Page Not Found');
                     }
                    ,connect.errorHandler({
                                           stack:false
                                          ,message:false
                                          ,dump:false
                     })
).listen(4444, function() {
  console.log('Server Running at http://127.0.0.1:4444');
});
