$(function(){
 
 // 메뉴
   var gnbA = $('#gnb .main > a');  // 주 메뉴

	   gnbA.on('mouseenter focus',function(){
	     $('#gnb .sub').hide();// 기존 서브 메뉴 감추기
         $(this).next().slideDown(180);
		 // easing 기본 기능 :swing 처리 포함 
	   }); 
	   // on() - 이벤트를 감지한다 : 여러 개 이벤트 처리시
       $('#gnb').mouseleave(function(){
	     $('#gnb>ul>li>ul').hide();
	   });
});

function show(input) {
document.getElementById(input).style.display = '';
}
