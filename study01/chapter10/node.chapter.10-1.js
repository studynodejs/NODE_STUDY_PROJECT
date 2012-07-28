// module require
var mysql     = require('/usr/lib/node_modules/mysql');         // mysql module

/* #############################################################################
 * 책에 예제에는 로컬에서 실행한다는 가정하에서 host와 port 에 대한 설정이 없다.
 * 일단 난 가상머신으로 node가 실행되는 application 서버와
 * mysql이 동작하는 host 서버가 따로 돌기 때문에 host와 포트를 지정해서 사용함
 * #############################################################################
 * */
// connect & create client
var client  = mysql.createClient({
   user: 'root'
  ,password:'tjznsl'
  ,host:'10.0.3.2'
  ,port:'3307'
  ,database:'nahong'
});

/*
 * 만일 client 생성시 연결할 database를 지정한다면 굳이
 * use <database> 명령을 던질 필요는 없음
 * */
//client.query('USE NAHONG');         // nahong 이라는 데이타 베이스를 만들어 놓음
// query use
client.query('SELECT * FROM TEST01' // test01 이라는 테이블 생성해놓음
            , function(error, result, fields){
  if(error) {
    console.log(error);
  }else{
    console.log(result);
  }
});
// test0000000001
// test0000000002 // 수정변경내역 확인(리눅스작업함)
