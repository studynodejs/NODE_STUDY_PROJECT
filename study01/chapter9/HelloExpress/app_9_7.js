
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
// chapter 9-7 request object
app.get('/onlyChrome', function (request, response){
  // agent value
  var agent = request.header('User-Agent');

  // browser
  if(agent.toLowerCase().match(/chrome/)){
    // page response
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.end('<h1>Welcome Chrome .. !</h1>');
  }else{
    response.redirect('/');
  }
});

// chapter 9-7 use method param()
app.get('/product/:id', function(request, response){
  var output = '';
  output += '<h1>id:' + request.param('id') + '</h1>';
  output += '<h1>name: ' + request.param('name') + '</h1>';

  response.end(output);
});


