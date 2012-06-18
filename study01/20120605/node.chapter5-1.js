process.on('exit', function () {
  console.log('안녕히 가거라 ^_^ .. !');
});

process.on('uncaughtException', function (error) {
  console.log('예외가 발생했군 ^_^ 봐주겠다 ^_^ .. !');
});

var count = 0;
var id = setInterval(function (){
                       count++;
                       if (count == 3) { clearInterval(id);}
                       test();
                       console.log('예외가 아니라면?');
                     }
                    ,2000
                    );
