
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

// chpater 9-4-2
exports.life  = function(req, res){
  res.writeHead(200,{'Content-Type': 'text/html'});
  res.end('<h1> Life Page</h1>');
};


