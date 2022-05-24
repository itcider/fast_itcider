/*
스킨명 : fast itcider
버전 : V5.1
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
function clip(){

	var url = '';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	url = window.document.location.href;
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
}
	
	

$().ready(function () {
            $("#urlcopied").click(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'center-center',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: 'url이 복사되었습니다!<br>필요한 곳에 붙여넣어 사용해주세요 :>'
                })
            });
        });