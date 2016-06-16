Template.loginRegist.helpers({
	// 生成验证码
	code: function createCode() {
		var code = "";
		var codeLength = 4;
		var selectChar = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
		for(var i = 0;i < codeLength;i++) {
			var index = Math.floor(Math.random()*selectChar.length);
			code += selectChar[index];
		}
		return code;
	}
});



Template.loginRegist.events({

	//登录、注册标签切换
	'click .tab': function (e) {
		var tab = e.target;
		var index = $('.tab').index(tab);
		console.log($(tab).siblings());
		$(tab).addClass('active').siblings().removeClass('active');
		$('.item').eq(index).show().siblings().hide();
	},

	'click .login': function(e) {
		e.preventDefault;
		var inputCode = $('#code').val();
		var code = $('#code2').val();
		if(inputCode.length <= 0) {
			alert('请输入验证码');
		}else if (inputCode != code) {
			alert('请输入正确的验证码');
		} else {
			alert('输入正确！')
		}
	},

	'click .regist': function(e) {
		e.preventDefault;
		var inputCode = $('#code3').val();
		var code = $('#code4').val();
		if(inputCode.length <= 0) {
			alert('请输入验证码');
		}else if (inputCode != code) {
			alert('请输入正确的验证码');
		} else {
			alert('输入正确！')
		}
	}


});