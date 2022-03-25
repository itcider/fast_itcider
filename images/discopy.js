/*
스킨명 : fast itcider
버전 : V4.0
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

(function () {
      //=================================================================================
      // 우클릭, 드래그, 복사 차단https://gist.github.com/ab-c-d/7aa98987589466eee696952e154c98e1
      //=================================================================================
      var events = ["contextmenu", "selectstart", "dragstart",  "cut"];

      events.forEach(function (event) {
          window.addEventListener(event, blockEvent, true);
      })

      function blockEvent(e) { e.preventDefault(); }
      //=================================================================================
      // 개발자 메뉴 (F12) 차단
      //=================================================================================
      window.addEventListener('keydown', blockDeveloperMenu, true);

      function blockDeveloperMenu(e) {
          if (e.keyCode === 123) { // F12
              blockEvent(e);
          }
          if (e.ctrlKey && e.shiftKey) {
              var code = e.keyCode;
              // 개발자 도구를 여는 Ctrl + Shift + 키 조합
              if (code === 67 || code === 69 || code === 73 || code === 74 || code === 75 || code === 77 || code === 83) {
                  blockEvent(e);
              }
          }
      }

      setInterval(function () { debugger; }, 200);
      //=================================================================================
      // 애드온 (pig toolbox 등) 차단
      //=================================================================================
      var event, received = false;

      refreshEvent();

      window.addEventListener("contextmenu", function (e) {
          if (e === event) { received = true; }
      }, true);

      setInterval(function () {
          received = false;
          window.dispatchEvent(event);
          received ? hideMessage() : showMessage();
          refreshEvent();
      }, 200);

      function refreshEvent() {
          if (event && !event.cancelBubble) { return; }
          event = document.createEvent("MouseEvents");
          event.initMouseEvent("contextmenu", true, true, window, 1, 50, 121, 50, 50, false, false, false, false, 2, null);
      }
      //=================================================================================
      // 자바스크립트 비활성화 (Disable Javascript) 시 메세지 띄우기
      //=================================================================================
      var timer = null;
      function showMessage() {
          clearInterval(timer); timer = null;
      }
      function hideMessage() {
          if (timer === null) { timer = setInterval(reveal, 450); }
      }
      function reveal() {
          cl().toggle("cm-hide");
          cl().toggle("cm-hide-2");
      }
      function cl() { return Copyright_Message.classList; }

      window.addEventListener('visibilitychange', function() {
          // 페이지가 숨겨질 시 animation을 정지함
          if (document.visibilityState === "hidden") {
              cl().remove("cm-hide", "cm-hide-2");
              void Copyright_Message.offsetWidth;
              showMessage();
          } else {
              cl().add("cm-hide");
              cl().remove("cm-hide-2");
              hideMessage();
          }
      }, true);

      hideMessage();
  })();