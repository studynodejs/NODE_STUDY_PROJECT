
/**
 * Module dependencies.
 */

var express = require('express')
  , routes  = require('./routes')
  , http    = require('http');

var app = express();

app.configure(function(){
  app.set('case sensitive routes', true);
  app.set('port', process.env.PORT || 4444);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

/* ############################################################################
 * nahong conding start
 * ############################################################################
 * */
// chapter 9-6 redirect
app.get('/redirect', function(request, response){
  response.redirect('http://google.co.kr');
});
// chapter 9-6 cookie parser
app.get('/cookie',function (request, response){
  // variable
  var date  = new Date();
  date.setDate(date.getDate() + 7);

  response.writeHead(302,{
    'Content-Type': 'text/html',
    'Set-Cookie': [
      'name1=value1;expires=' + date,
      'name2=value2;'
    ]
  });
  response.end('<h1>' + JSON.stringify(request.cookies)+'</h1>');
});
app.get('/cookieEx',function (request, response){
  response.cookie('name1','value1',{
    expires: new Date(Date.now() + 1000 * 60 * 10)
  });
  response.cookie('name2','value2',{
    maxAge: 1000 * 60 * 10
  });

  response.writeHead({'Content-Type': 'text/html'});
  response.end('<h1>' + JSON.stringify(request.cookies)+'</h1>');
});




