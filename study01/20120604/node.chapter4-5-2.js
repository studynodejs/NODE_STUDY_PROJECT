var fs = require('fs');

console.time('file read');
console.log("#############file read start");

var text = fs.readFileSync('c:/PROJECT/workspace2/NODE_JS_STUDY/20120604/node.chapter4-5-1.js'
                      ,'utf-8'
                      );
console.timeEnd('file read');
console.log(text);

/* async 방식으로 예외처리 할때는 콜백함수 사용 */
console.log("#############file write start async");
console.time('file write async');
fs.writeFile('c:/PROJECT/workspace2/NODE_JS_STUDY/copy_file_async_node.chapter4-5-1.js.txt'
            ,text
            ,'utf-8'
            ,function (error) {
               if ( error){
                console.log('WRITE file async ERROR!!');
               }else{
                 console.log('WRITE file async complete');
                 console.timeEnd('file write async');
               }
               //process.exit(1);
             }
            );


/* sync 방식으로 예외처리 할때는 try catch 사용 */
console.log("#############file write start sync");
console.time('file write sync');
try {
  fs.writeFileSync('c:/PROJECT/workspace2/NODE_JS_STUDY/copy_file_sync_node.chapter4-5-1.js.txt'
                  ,text
                  ,'utf-8'
                  );
  console.log('WRITE file sync complete');
} catch (e) {
  console.log('WRITE file sync ERROR!!');
}
console.timeEnd('file write sync');

