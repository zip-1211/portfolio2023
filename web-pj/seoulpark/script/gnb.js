$(function(){
 var gnbLi = $('#gnb > li');
 var sub = $('#gnb > li > ul');
 var min =$('#hWrap').height();
 var max =$('#gnb > li > ul').innerHeight()+min;
 
  gnbLi.on("mouseenter focus",function(){
   $('#hWrap').stop().animate({height:max},"fast","swing",function(){
        sub.stop().fadeIn('fast');
   });
     sub.removeClass('on');
	 $(this).find('ul').addClass('on');
  }); 
  $('#header').mouseleave(function(){
      sub.stop().fadeOut('fast',function(){
	     $('#hWrap').stop().animate({height:min},'fast','swing');
	  });
  });
  
  $('#gnb > li > a').focus(function(){
   $('#hWrap').stop().animate({height:max},"fast","swing");
     sub.stop().fadeIn("fast");
  }).blur(function(){
	 sub.stop().fadeOut("fast");
   $('#hWrap').stop().animate({height:min},"fast","swing");
  });

});