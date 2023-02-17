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
	// best 슬라이드
	  $(function(){
		  slidetimer();

		  var $interval;

		  function slidetimer(){
			  var $interval = setInterval(function(){slide()},2000);
		  }

		  function slide(){
			  $('.notice2').animate({left:'-=310px'},2500,function(){
				  $(this).css({left:0});
				  $('.notice2').append($('.notice2').children('li').eq(0));
			  });
		  }

		  function slideprev(){
			  $(document).on('click','.prev',function(){
				  $('.notice2').children('li').eq(0).appendTo('.notice2');
			  });
		  }
		  slideprev();

		  function slidenext(){
			  $(document).on('click','.next',function(){
				  $('.notice2').children('li').eq(10).prependTo('.notice2');
			  });
		  }
		  slidenext();
	  });

	  // best 슬라이드

	  	  $(function(){
		  slidetimer();

		  var $interval;

		  function slidetimer(){
			  var $interval = setInterval(function(){slide()},2000);
		  }
		  function slide(){
			  $('.cont2 > ul').animate({left:'-=310px'},2500,function(){
				  $(this).css({left:0});
				  $('.cont2 > ul').append($('.cont2 > ul').children('li').eq(0));
			  });
		  }

		  function slideprev(){
			  $(document).on('click','.prev',function(){
				  $('.cont2 > ul').children('li').eq(10).appendTo('.cont2 > ul');
			  });
		  }
		  slideprev();

		  function slidenext(){
			  $(document).on('click','.next',function(){
				  $('.cont2 > ul').children('li').eq(7).prependTo('.cont2 > ul');
			  });
		  }
		  slidenext();
	  });