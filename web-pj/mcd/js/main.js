/* 메뉴 */
	$(function(){
	  var gnb =$('#gnb>ul>li');
	
	   gnb.hover(function(){
	    var num = $(this).data('num');
            
	    $('.sub').stop().slideDown();
        $('.menu_bar').stop().slideDown();        

	  } ,function(){ 
	
	    $('.sub').stop().slideUp();
        $('.menu_bar').stop().slideUp();
	  });
	});

/* 비주얼 스와이프 */
    var swiper = new Swiper('.vis-slide', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'progress',
		paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 3000,
		speed: 1500,
        autoplayDisableOnInteraction: false
    });

/* hot 버거 스크립트 */
var coverflowSetting = {
	slideShadows : false, // 슬라이더 그림자 : 3D 효과를 강조하기 위한 회전시 흐릿한 효과
	rotate : 0, // 슬라이더 회전 각 : 클수록 슬라이딩시 회전이 커짐
	stretch : 100, // 슬라이더간 거리(픽셀) : 클수록 슬라이더가 서로 많이 겹침
	depth : 200, // 깊이 효과값 : 클수록 멀리있는 느낌이 강해짐
	modifier : 1, // 효과 배수 : 위 숫자값들에 이 값을 곱하기 처리하여 효과를 강하게 처리함
}

var myswiper = null;

function init(){

	if(myswiper != null) myswiper.destroy();

	myswiper = new Swiper( '.con-slide', {
		effect : 'coverflow', // 커버플로우 효과 사용
		coverflowEffect : coverflowSetting, // 커버플로우 설정
		loop : true, // 슬라이드 반복

		slidesPerView: 3,
		paginationClickable: true,
		autoplayDisableOnInteraction: false,
		freeMode: false,
		spaceBetween: 0,


		autoplay : { // 자동 재생
			delay : 2500, // 딜레이 2.5초
		},
		speed : 3000, // 슬라이드 속도 3초

		navigation : {
			nextEl : '.swiper-button-next', // 다음 버튼 클래스명
			prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
		},
		pagination : { // 페이징 설정
			el : '.swiper-pagination',
			clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
		},
	});
}

init(); //초기화 함수 : 안 적으면 스크립트 작동 안 함 ㅠㅠ


// more 버튼 (수정 필요)
$(document).ready(function(){
$('.more').click(function(){
    if($('.more').hasClass('more')){
		$('.more').hide('more'); // = html: onclick="$('.more').hide()"
       $('.con3readmore').css('display', 'block');
    }
  });
});