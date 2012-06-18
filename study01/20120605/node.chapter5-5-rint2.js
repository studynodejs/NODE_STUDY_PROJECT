var count = 0;
// EventEmitter 객체 생성
module.exports.timer = new process.EventEmitter();
module.exports.ttt   = 'tasdfasdfasdf';

// 이벤트 강제 발생
setInterval(function () {
              count++;
              console.log(count+'번째 호출 이벤트------------------');
              exports.timer.emit('tick');
              // 10번만 실행하고 종료
              if (count >= 10) {
                process.exit();
              }
            }
           ,1000
);


