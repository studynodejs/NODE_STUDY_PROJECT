var url           = require('url');
var querystring   = require('querystring');

var parsedObject  = url.parse('http://hanb.co.kr/book/look.html?isbn=978-89-7914-874-9');
console.log(querystring.parse(parsedObject.query));
console.log(url.parse('http://hanb.co.kr/book/look.html?isbn=978-89-7914-874-9',true));



