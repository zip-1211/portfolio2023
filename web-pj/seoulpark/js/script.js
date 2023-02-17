
 function tab_show() {
  document.getElementById("tab1").style.display = "block";
  document.getElementById("tab2").style.display = "none";
  document.getElementById("tab3").style.display = "none";
  document.getElementById("tab4").style.display = "none";
 }
  function tab_show2() {
  document.getElementById("tab2").style.display = "block";
  document.getElementById("tab1").style.display = "none";
  document.getElementById("tab3").style.display = "none";
  document.getElementById("tab4").style.display = "none";
 }
 function tab_show3() {
  document.getElementById("tab3").style.display = "block";
  document.getElementById("tab1").style.display = "none";
  document.getElementById("tab2").style.display = "none";
  document.getElementById("tab4").style.display = "none";
 }
 function tab_show4() {
  document.getElementById("tab4").style.display = "block";
  document.getElementById("tab1").style.display = "none";
  document.getElementById("tab2").style.display = "none";
  document.getElementById("tab3").style.display = "none";
 }

 // 배너 이미지 스크립트 : index 밑에도 넣어 둠
 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
		autoplay: 3500,
		speed: 2000,
        autoplayDisableOnInteraction: false,
        paginationClickable: true,
        paginationBulletRender: function (swiper, index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    });

//아이디 암호 입력 체크 스트립트

function CheckForm(){
	//[1 ]아이디 텍스트 박스에 접근해서 txtuserid 변수로 저장하는데, 입력한 id 값 저장
	var txtuserid = document.FrmLogin.txtuserid;
	
	//만약 txtuserid의 값이 아무 것도 입력되지 않았을 시
	if(txtuserid.value == "" || !(txtuserid.value.length >= 3 && txtuserid.value.length <=12)){
		
		//아이디를 입력하시오! 경고 메세지
		window.alert("아이디를 입력하세요");

		//아이디 폼에 커서 깜빡거리는 포커스
		document.FrmLogin.txtuserid.focus();
		
		document.FrmLogin.txtuserid.select();
		
		return false; //현재 submit이벤트를 중지하는 개념
		
	}else if(document.FrmLogin.txtpassword.value==""){
			//암호를 입력하시오! 경고 메세지
			window.alert("암호를 입력하세요");
		
			return false;
	}else {
// 			document.FrmLogin.action = "../jsp/Default.jsp";
	
			document.FrmLogin.submit(); //form안에 있는 데이터를 action속성의 주소로 전송
		  }	
}

// 약관 동의 체크

function check(){
   var frm = document.frm;
   if(!frm.agree1.checked){
      alert("약관에 동의하세요!");
      frm.agree1.focus();
      return;
   }
   if(!frm.agree2.checked){
      alert("개인 정보 수집에 동의하세요!");
      frm.agree2.focus();
      return;
   }
   if(!frm.agree3.checked){
      alert("개인정보 처리 안내에 동의하세요!");
      frm.agree3.focus();
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