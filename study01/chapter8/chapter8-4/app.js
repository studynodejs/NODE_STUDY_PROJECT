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
connect.createServer(connect.bodyParser(),connect_router(function(app){
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
  });
  // POST - /Edit
  app.get('/Edit'       ,function (request, response){
  });
})).listen(4444,function(request, response){
  console.log('server running at http://192.168.56.101:4444');
});
