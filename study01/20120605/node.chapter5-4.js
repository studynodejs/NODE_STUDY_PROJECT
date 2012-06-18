/* 이벤트 강제 발생시키기
   수정해서 테스트 해보기
*/
var count     = 0;
var eventType = 'REAL';
var onExitCallBack = function (){
                       if (eventType=='REAL') {
                         console.log(count+'번째 이벤트 (실제 종료 이벤트)');
                       }else{
                         console.log(count+'번째 이벤트 (임의 발생 이벤트)');
                       }
                     };
// 이벤트를 연결하는 부분
process.on('exit', onExitCallBack);

// 이벤트를 발생시키기 위해 2초 마다 한번씩 이벤트 호출
setInterval(function () {
              count++;
              // 이벤트를 호출하는 부분과 실제로 프로세스가 종료되는 이벤트를 확인한다.
              if (count == 5) {
                // 5번째에는 실제 프로세스를 종료해본다.
                eventType = 'REAL';
                process.exit();
              } else {
                eventType = 'USER';
                process.emit('exit');
              }

            }
           ,1000);

