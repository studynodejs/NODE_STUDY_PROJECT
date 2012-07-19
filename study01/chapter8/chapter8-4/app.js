// module require
var fs              = require('fs');
var connect         = require('/usr/lib/node_modules/connect');
var connect_router  = require('/usr/lib/node_modules/connect_router');
var mysql           = require('/usr/lib/node_modules/mysql');
var ejs             = require('/usr/lib/node_modules/ejs');

// connect & create client
var client  = mysql.createClient({
   user: 'root'
  ,password:'tjznsl'
  ,host:'10.0.3.2'
  ,port:'3307'
  ,database:'NODE_STUDY'
});

// create server
connect.createServer(connect.bodyParser()
                    ,connect.logger()
                    ,connect_router(function(app){
  // GET  - /List
  app.get('/'           ,function (request, response){
    console.log('###########List.html');
    fs.readFile('./List.html', 'utf8', function (error, data){
      // select
      client.query('SELECT * FROM PRODUCTS', function(error, result){
        response.writeHead(200,{'Content-Type': 'text/html'});
        response.end(ejs.render(data,{
          data:result
        }));
      });
    });
  });
  // GET  - /Delete/:id
  app.get('/Delete/:id' ,function (request, response){
    console.log('###########DELETE AND GOTO LIST(ID:'+request.params.id);

    client.query('DELETE FROM PRODUCTS WHERE ID=?',[request.params.id]);
    //response
    response.writeHead(302,{'Location': '/'});
    response.end();
  });
  // GET  - /Insert
  app.get('/Insert'     ,function (request, response){
    console.log('###########Insert.html');
    fs.readFile('./Insert.html','utf8', function (error,data){
      // response
      response.writeHead(200,{'Content-Type': 'text/html'});
      response.end(data);
    });
  });
  // POST - /Insert
  app.post('/Insert'    ,function (request, response){
    console.log('###########INSERT AND GOTO LIST');
    var body  = request.body;

    console.log('INSERT INTO PRODUCTS (NAME, MODELNUMBER, SERIES) VALUES (?,?,?)');
    console.log('name:'+body.name+'/modelnumber:'+body.modelnumber+'/series:'+body.series);
    // insert query
    client.query('INSERT INTO PRODUCTS (NAME, MODELNUMBER, SERIES) VALUES (?,?,?)'
                ,[body.name, body.modelnumber, body.series]
    );

    //response
    response.writeHead(302,{'Location': '/'});
    response.end();
  });
  // GET  - /Edit/:id
  app.get('/Edit/:id'   ,function (request, response){
    console.log('###########Edit.html');
    fs.readFile('./Edit.html','utf8', function (error, data){
      console.log('SELECT * FROM PRODUCTS WHERE ID = '+request.params.id);
      // select query & result
      client.query('SELECT * FROM PRODUCTS WHERE ID = ?'
                  ,[request.params.id]
                  ,function (error, result) {
          // response
          response.writeHead(200,{'Content-Type': 'text/html'});
          response.end(ejs.render(data,{
            data:result[0]
          }));
      });
    });
  });
  // POST - /Edit
  //app.post('/Edit'  ,function (request, response){
  /*
   * GET /Edit/:id 로 html 페이지 로딩 후 Post로 받을때도 똑같이 받아줘야 한다.
   * 쉬팍 당연한거잖아 어떻게 테스트 한거야....ㅡㅡa
   * */
  app.post('/Edit/:id'  ,function (request, response){
    console.log('###########UPDATE & GOTO LIST');
    // variable(body)
    var body  = request.body;
    console.log('UPDATE PRODUCTS SET NAME=?,MODELNUMBER=?,SERIES=? WHERE ID=?');
    console.log('NAME:'+body.name+'/MODELNUMBER:'+body.modelnumber+'/SERIES:'+body.series+'/ID:'+request.params.id);
    // update query
    client.query('UPDATE PRODUCTS SET NAME=?,MODELNUMBER=?,SERIES=? WHERE ID=?'
                ,[body.name, body.modelnumber, body.series, request.params.id]
    );
    // response & goto list
    response.writeHead(302,{'Location': '/'});
    response.end();
  });
})).listen(4444,function(request, response){
  console.log('server running at http://192.168.56.101:4444');
});
