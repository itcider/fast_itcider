/*
스킨명 : fast itcider
버전 : V9.0
제작자 : itcider 쉽고 시원한 it
제작자 웹사이트 : itcider.com
사용 조건 : itcider license
사용 주의점 :
ㄴ주석 수정 및 삭제 불가
ㄴfi스킨 문구 삭제 불가
ㄴ스킨은 무제한적으로 사이트에 적용 가능
ㄴ재배포 및 코드 무단 사용 절대 불가
ㄴitcider 공식 웹사이트에서만 배포 가능
위 주의사항을 어기실 경우 사용 불가합니다.
*/
if(detectIE()){
    window.location('https://ie.itcider.com')
} else {
;
}

function detectIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
   if (msie > 0) {
     return true;
   }

  var trident = ua.indexOf('Trident/');
   if (trident > 0) {
    return true;
   }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    return true;
  }

  // other browser
  return false;
}

