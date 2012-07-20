
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
// chapter 9-4-1
/*
app.get('/life',function (request, response, next) {
  // response
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<h1>Life Page</h1>');
});
*/
// chapter 9-4-2 check /routes/index.js
app.get('/life',routes.life);
// chapter 9-4-3 check /views/product_page.jade
app.get('/product_page', function (request, response) {
  response.render('product_page',{
    title: 'Product Page'
  });
});


