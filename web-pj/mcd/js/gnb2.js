$(function(){
	var gnbA = $("#gnb>li");
	var sub = $("#gnb>li>ul");

	var headerMin = $("#headerBox").height();//30px

	var headerMax = sub.innerHeight() + headerMin;	

	var state = false; //참-거짓설정변수
	var speed = 150;
	gnbA.mouseenter(function(){
		if(!state){ 
			$("#headerBox").stop().animate({height:headerMax},speed,function(){
				sub.stop().fadeIn(speed);
			});
			state = true;
		}
		
		$(this).find(sub).addClass("on"); //sub는 변수이므로 ""생략
	});
	gnbA.mouseleave(function(){
		$(this).find(sub).removeClass("on");
	});   
	
	
	$("#header").mouseleave(function(){
		sub.stop().fadeOut(speed,function(){
			$("#headerBox").stop().animate({height:headerMin},speed);            
		});
		state = false;
	});
	$("#gnb li a").focus(function(){
		$("#headerBox").stop().animate({height:headerMax},speed);
		sub.stop().fadeIn(speed);
	}).blur(function(){
		$("#headerBox").stop().animate({height:headerMin},speed);
		sub.stop().fadeOut(speed);		  
	});	
});