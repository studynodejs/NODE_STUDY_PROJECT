var fs = require('fs');

console.log('#####################readFileSync');
var text = fs.readFileSync('c:/PROJECT/workspace2/NODE_JS_STUDY/node.serverTest02.js'
                          ,'utf-8'
                          );
console.log(text);

console.log('#####################readFile');
var text = fs.readFile('c:/PROJECT/workspace2/NODE_JS_STUDY/node.serverTest02.js'
                      ,'utf-8'
                      ,function (error, data){
                         console.log(data);
                       }
                      );

