/*검색*/
$(document).ready(function(){
    $('.search_toggle').click(function(){
    var hidden2 = $('#search_wrap');
    if (hidden2.hasClass('visible')){
        hidden2.animate({"top":"0px"}, "fast").removeClass('visible');
    } else {
        hidden2.animate({"top":"50px"}, "fast").addClass('visible');
    }
    });
});

/*메뉴*/
$(document).ready(function(){
    $('#menubar').click(function(){
    var hidden = $('#gnb');
    if (hidden.hasClass('visible')){
        hidden.animate({"left":"-470px"}, "fast").removeClass('visible');
    } else {
        hidden.animate({"left":"0px"}, "fast").addClass('visible');
    }
    $(".back").toggle();
	});
	

});

/* 서브메뉴 */
$(function(){
 
        $('.title').click(function(){
			$(this).next('div').stop().slideToggle(); 
			$(this).siblings().next('div').stop().slideUp();
           //$('.content1').slideToggle('fast');
       });
});



// 약관 동의 체크

function check(){
   var frm = document.frm;
   if(!frm.agree1.checked){
      alert("약관에 동의하세요!");
      frm.agree1.focus();
      return;
   }
   if(!frm.agree2.checked){
      alert("개인 정보에 동의하세요!");
      frm.agree2.focus();
      return;
   }
   location.href = "signup.html";   
}

function allCheck(){
   with(document.frm){
      if(all.checked){
         for(var i=0;i<length;i++){  // 체크 박스는 0부터 쉬작
            if(elements[i].type == "checkbox"){
               elements[i].checked = true;
            }
         }
      }else{
         for(var i=0;i<length;i++){
            if(elements[i].type == "checkbox"){
               elements[i].checked = false;
            }
         }
      }
   }
}



//아이디 중복 체크
$(document).ready(function(){
		$("#idCheck").click(function(){
		//서버id비교검색처리후 아이디 사용여부판단(서버진행)
		alert("해당 아이디를 사용하실 수 있습니다.");			
	});
});


function formCheck(){
	var join = document.join;
	var reg_email = /([0-9a-zA-Z_]+)@([0-9a-zA-Z_-]+)\.([0-9a-zA-Z_]+)/;
	var reg_num = /(?=.*[a-z])(?=.*[0-9])(?=.*[?~!@#$%^&*_-])/;
	
	//아이디검사
	if(!join.id.value){   //아이디에 값이 없으면~
		alert("아이디를 입력하세요!");
		join.id.focus();
		return false;
	}
	if(!reg_email.test(join.id.value)){   //test:정규화코드화 내장함수
		alert("이메일 형식에 맞게 입력하세요!");
		join.id.focus();
		return false;
	}
	
	//비밀번호 검사
	if(!join.pw.value){
		alert("비밀번호를 입력하세요!");
		join.pw.focus();
		return false;
	}
	if(join.pw.value.length<8){
		alert("비밀번호를 8자 이상 입력하세요!");
		join.pw.focus();
		return false;
	}
	if(!reg_num.test(join.pw.value)){
		alert("비밀번호는 영문, 숫자, 특수 문자를 포함하는 형식이어야 합니다!");
		join.pw.focus();
		return false;
	}
	
	//비밀번호 재입력 검사
	if(!join.repw.value){
		alert("비밀번호를 확인하세요!");
		join.repw.focus();
		return false;
	}
	if(join.pw.value!=join.repw.value){
		alert("비밀번호가 맞지 않습니다!");
		join.repw.focus();
		return false;
	}
	
	//이름 검사
	if(!join.memberName.value){
		alert("이름을 입력하세요!");
		join.memberName.focus();
		return false;
	}

	//주소 검사
	if(!join.address.value){
		alert("정확한 주소를 입력하세요!");
		join.address.focus();
		return false;
	}

	
	//휴대폰번호 검사
	if(!join.hp.value){
		alert("휴대 전화 번호를 입력하세요!");
		join.hp.focus();
		return false;
	}
	if(isNaN(join.hp.value)){
		alert("숫자만 입력하세요!");
		join.hp.focus();
		return false;
	}

	//직업 검사
	if(!join.job.value){
		alert("직업을 선택하세요!");
		join.job.focus();
		return false;
	}
}



//login시 칸에 마우스커서 놨을 경우, 배경 안보이게 하기

var idimg = $("#container2 .loginPage .inputText p:first-child input");
var pwimg = $("#container2 .loginPage .inputText p:last-child input");

idimg.click(function(){
  $(this).css("background","none");
});

pwimg.click(function(){
  $(this).css("background","none");
});

//아이디 암호 입력 체크 스트립트

function idpwCheck(){

 var idVal = document.getElementById('id');
 var pwVal = document.getElementById('pw'); 

 if(!idVal.value){
       alert("아이디를 입력하세요!");
  idVal.focus();
  return false;
 }

 if(!pwVal.value){
       alert("비밀번호를 입력하세요!");
  pwVal.focus();
  return false;
 }
	// location.href = "index.html";
   frm.submit("index.html"); // action으로 이동
}


/* .lipp .colorfrm 색상명 텍스트 변경 */
$(function(){
	$('input[type=radio]').click(function(){
	
			var col_name = $('input:radio[name="lipimg"]:checked').val();
    
			$('.text_color').text(col_name);		 
    
	});
});

/*장바구니 수량*/
$(function(){ 
  $('.bt_up').click(function(){ 
    var n = $('.bt_up').index(this);
    var num = $(".num:eq("+n+")").val();
    num = $(".num:eq("+n+")").val(num*1+1); 
  });
  $('.bt_down').click(function(){ 
    var n = $('.bt_down').index(this);
    var num = $(".num:eq("+n+")").val();
    num = $(".num:eq("+n+")").val(num*1-1); 
  });
}) 



//제품 상세정보 아코디언 메뉴
//dt클릭
$(document).ready(function(){
	$("#contents .lip_cont dt").click(function(){
		$(this).next().toggleClass("on"); 
		$(this).next().siblings("dd").removeClass("on");
	});  //dt    dd        형제dd
});         

