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

// 아이디 중복 체크
// $(document).ready(function(){
//		$("#idCheck").click(function(){
//		//서버 id 비교 검색 처리 후 아이디 사용 여부 판단 (서버 진행)
//		alert("해당 아이디를 사용하실 수 있습니다.");			
//	});
// });

//아이디 암호 입력 체크 스트립트

function CheckForm(){
	//[1 ]아이디 텍스트 박스에 접근해서 txtuserid 변수로 저장하는데, 입력한 id 값 저장
	var txtuserid = document.FrmLogin.txtuserid;
	
	//만약 txtuserid의 값이 아무 것도 입력되지 않았을 시
	if(txtuserid.value == "" || !(txtuserid.value.length >= 3 && txtuserid.value.length <=12)){
		
		//아이디를 입력하시오! 경고 메세지
		window.alert("아이디를 입력하세요.");

		//아이디 폼에 커서 깜빡거리는 포커스
		document.FrmLogin.txtuserid.focus();
		
		document.FrmLogin.txtuserid.select();
		
		return false; //현재 submit이벤트를 중지하는 개념
		
	}else if(document.FrmLogin.txtpassword.value==""){
			//암호를 입력하시오! 경고 메세지
			window.alert("암호를 입력하세요.");
		
			return false;
	}else {
// 			document.FrmLogin.action = "../jsp/Default.jsp";
	
			document.FrmLogin.submit(); //form안에 있는 데이터를 action속성의 주소로 전송
		  }	
}

 // 회원 가입 체크 체크
function checkAll() {
        if (!checkUserId(form.id.value)) {
            return false;
        }
        if (!checkPassword(form.id.value, form.pw1.value,    form.pw2.value)) {
            return false;
        }
		if (!checkName(form.name.value)) {
            return false;
        }
		if (!checkBirth(form.birth.value)) {
            return false;
        }
		// 월 선택
		var sel = document.getElementById("month");
		var val;
		for(i=0; i<sel.options.length; i++) {
			
			if (sel.options[0].selected==true)
			{
				alert('월을 선택하세요');
                return false;

			}else if(sel.options[i].selected == true) {
				val = sel.options[i].value;
				break;
			}
		}
		// 일 선택
		var sel = document.getElementById("day");
		var val;
		for(i=0; i<sel.options.length; i++) {
			
			if (sel.options[0].selected==true)
			{
				alert('일을 선택하세요');
                return false;

			}else if(sel.options[i].selected == true) {
				val = sel.options[i].value;
				break;
			}
		}
		// 성별 구분
		var sel = document.getElementById("gender");
		var val;
		for(i=0; i<sel.options.length; i++) {
			
			if (sel.options[0].selected==true)
			{
				alert('성별을 선택하세요.');
                return false;

			}else if(sel.options[i].selected == true) {
				val = sel.options[i].value;
				break;
			}
		}
        if (!checkNumber(form.number.value)) {
            return false;
        }
		// 거주지 선택
		var sel = document.getElementById("sido");
		var val;
		for(i=0; i<sel.options.length; i++) {
			
			if (sel.options[0].selected==true)
			{
				alert('거주지를 선택하세요');
                return false;

			}else if(sel.options[i].selected == true) {
				val = sel.options[i].value;
				break;
			}
		}
        if (!checkMail(form.mail.value)) {
            return false;
        }
		// 도메인 선택
		var sel = document.getElementById("selectEmail");
		var val;
		for(i=0; i<sel.options.length; i++) {
			
			if (sel.options[0].selected==true)
			{
				alert('도메인을 선택하세요');
                return false;

			}else if(sel.options[i].selected == true) {
				val = sel.options[i].value;
				break;
			}
		}
        return true;
    }
 
    // 공백 확인 함수
    function checkExistData(value, dataName) {
        if (value == "") {
            alert(dataName + " 입력해 주세요.");
            return false;
        }
        return true;
    }
 
    function checkUserId(id) {
        //Id가 입력되었는지 확인하기
        if (!checkExistData(id, "아이디를"))
            return false;
 
        var idRegExp = /^[a-zA-z0-9]{5,15}$/; //아이디 유효성 검사
        if (!idRegExp.test(id)) {
            alert("아이디는 영문 대소문자와 숫자 5 ~ 15 자리로 입력해야 합니다.");
            form.userId.value = "";
            form.userId.focus();
            return false;
        }
        return true; //확인이 완료되었을 때
    }

	function idCheckbox() {
			if (!checkExistData(idCheckbox, "중복 확인을"))
            return false;

			var regExp =  /^[a-zA-z0-9]{5,15}$/; //아이디 유효성 검사
			var id = document.getElementById("id").value;
			
			if (regExp.test(id)) {
				alert("정상적으로 확인되었습니다.");
			}else {
				alert("잘못 입력하셨습니다.");
			}
			return true; //확인이 완료되었을 때
		}

    function checkPassword(id, password1, password2) {
        //비밀번호가 입력되었는지 확인하기
        if (!checkExistData(password1, "비밀 번호를"))
            return false;
        //비밀번호 확인이 입력되었는지 확인하기
        if (!checkExistData(password2, "비밀 번호 확인을"))
            return false;
 
        var password1RegExp = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
		//비밀 번호 유효성 검사
        if (!password1RegExp.test(password1)) {
            alert("비밀 번호는 숫자, 특문 각 1 회 이상, 영문은 2개 이상 사용하여 8 자리 이상 입력.");
            form.password1.value = "";
            form.password1.focus();
            return false;
        }
        //비밀번호와 비밀번호 확인이 맞지 않다면..
        if (password1 != password2) {
            alert("두 비밀 번호가 맞지 않습니다.");
            form.password1.value = "";
            form.password2.value = "";
            form.password2.focus();
            return false;
        }
 
        //아이디와 비밀번호가 같을 때..
        if (id == password1) {
            alert("아이디와 비밀 번호는 같을 수 없습니다.");
            form.password1.value = "";
            form.password2.value = "";
            form.password2.focus();
            return false;
        }
        return true; //확인이 완료되었을 때
    }
 
  function checkName(name) {
        if (!checkExistData(name, "이름을"))
            return false;
 
        var nameRegExp = /^[가-힣]{2,4}$/;
        if (!nameRegExp.test(name)) {
            alert("이름이 올바르지 않습니다.");
            return false;
        }
        return true; //확인이 완료되었을 때
    }
	function checkBirth(birth) {
        if (!checkExistData(birth, "년도를"))
            return false;

	var birthRegExp = /^[12][0-9]{3}$/;
        if (!birthRegExp.test(birth)) {
            alert("년도가 올바르지 않습니다.");
            form.birth.value = "";
            form.birth.focus();
            return false;
        }
		return true; //확인이 완료되었을 때
    }

	 function checkNumber(number) {
        if (!checkExistData(number, "번호를"))
            return false;

        var numberRegExp = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
        if (!numberRegExp.test(number)) {
            alert("잘못된 휴대폰 번호입니다. 숫자 10 자 이상 입력하세요.");
			form.number.value = "";
            form.number.focus();
            return false;
        }
        return true; //확인이 완료되었을 때
    }

    function checkMail(mail) {
        //mail이 입력되었는지 확인하기
        if (!checkExistData(mail, "이메일을"))
            return false;
 
        var emailRegExp = /^[0-9a-z]+$/;
        if (!emailRegExp.test(mail)) {
            alert("이메일 형식이 올바르지 않습니다.");
            form.mail.value = "";
            form.mail.focus();
            return false;
        }
        return true; //확인이 완료되었을 때
    }


 // 이메일 입력 방식
 $('#selectEmail').change(function(){ $("#selectEmail option:selected").each(function () { if($(this).val()== '1'){ 
	 //직접 입력
	 $("#mail02").val(''); 

	 //값 초기화 
	 $("#mail02").attr("disabled",false); 

	 //활성화 
	 }else{ 
	 //직접 입력이 아닐 경우 
	 $("#mail02").val($(this).text()); 

	 //선택 값 입력 
	 $("#mail02").attr("disabled",true); 
	 
	 //비활성화
	 } }); }); 


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