/* 이벤트 연결및 제거 테스트
   수정해서 테스트 해보기
*/
var count = 0;
var onUncaughtException = function (error) {
                            console.log(count+'번째 예외발생!! : '+error);
                            // 한번만 발생하니 확실히 감이 안와서뤼...ㅡㅡa 코드 추가
                            if (count>=4) {
                              // 이벤트를 제거한다.
                              process.removeListener('uncaughtException', onUncaughtException);
                            }
                          };

// 이벤트를 연결하는 부분
process.on('uncaughtException', onUncaughtException);

// 이벤트를 발생시키기 위해 2초 마다 한번씩 잘못된 함수 호출한다.
setInterval(function () {
              count++;
              // 강제 예외발생(정의되지 않은 함수호출)
              error.error.error('-_-;;');
              if (count>=10) process.exit();
            }
           ,2000);

