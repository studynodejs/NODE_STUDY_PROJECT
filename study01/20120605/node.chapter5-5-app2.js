// 모듈추출
var rint = require('./node.chapter5-5-rint2');

// 이벤트연결
rint.timer.on('tick'
             ,function () {
                console.log('이벤트를 실행합니다~~~~!!');
                console.log(rint.ttt);
              }
);


