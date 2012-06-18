/* 이벤트 연결은 디폴트로 10개 까지만 제한이 걸려있다.
   process.setMaxListeners() 로 연결 제한값을 바꿀수 있다.
   0을 대입하면 무제한으로 연결가능
   수정해서 테스트 해보기
*/
//process.setMaxListeners(0);
for(var i = 1; i <= 30; i++) {
  process.on('exit',function () {});
  console.log('event:exit_'+i);
}


