/*
스킨명 : fast itcider
버전 : V7.5
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
/*
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
*/
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 