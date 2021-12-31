/*
공유소스 라이선스: 
//CVBot//
원작자 - by 쪼캉 님
소스제공 - by 쪼캉 님
라이선스 BY NC ND
저작권자표시 및 2차저작물배포금지 및 영리목적 사용금지
//CVBot//
*/
const scriptName = "[카링] 홍보감지 시스템";

const { KakaoLinkClient } = require('kakaolink');
const Kakao = new KakaoLinkClient("21de65ed5d7788f98fb4050742655fae","https://www.naver.com");
Kakao.login('my-Email','my-pw');

function response(room, msg, sender, igc, isGroupChat, replier, imageDB, packageName) {
  
var mm = (java.text.SimpleDateFormat("y년 M월 d일").format(new Date()));
try {
if(msg.includes("https://open.kakao.com"))  { //옾챗방 링크
if (igc == true) {
   Kakao.sendLink(room, {
"link_ver":"4.0",
"template_id":  (67817), //템플릿ID
"template_args":{
  "gr": "🚨홍보감지", //타이틀
  "mm":mm, //날짜 
  "s":sender+ "님께서 옾챗방 홍보!"} //홍보한 장본인 
}, "custom" );}}

if(msg.includes("https://youtube.com/channel/"))  { //유튜브 링크 
Api.reload("홍보 적발");
   Kakao.sendLink(room, {
"link_ver":"4.0",
"template_id":  (67817), //템플릿ID
"template_args":{
  "gr": "🚨홍보감지", //타이틀
  "mm":mm, //날짜 
  "s":sender+ "님께서 Youtube채널 홍보!"} //홍보한 장본인 
}, "custom" );
}
//CVBot//
if(msg.includes("https://discord.gg"))  { //디코방 홍보 
   Kakao.sendLink(room, {
"link_ver":"4.0",
"template_id":  (67817), //템플릿ID
"template_args":{
  "gr": "🚨홍보감지", //타이틀 
  "mm":mm, //날짜 
  "s":sender+ "님께서 디코방 홍보!"} //홍보한 장본인 
}, "custom" );
}
} catch (e) {  
}
}


/*
공유소스 라이선스: 
//CVBot//
원작자 - by 쪼캉 님
소스제공 - by 쪼캉 님
라이선스 BY NC ND
저작권자표시 및 2차저작물배포금지 및 영리목적 사용금지
//CVBot//
*/
