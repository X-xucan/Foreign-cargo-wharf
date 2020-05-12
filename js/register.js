//验证
$.extend($.validator,{
			messages: {
				required: "该字段不能为空.",
				remote: "Please fix this field.",
				email: "请输入正确的邮箱.",
				url: "请输入正确的地址",
				date: "Please enter a valid date.",
				dateISO: "Please enter a valid date (ISO).",
				number: "Please enter a valid number.",
				digits: "Please enter only digits.",
				equalTo: "请输入相同的密码",
				maxlength: $.validator.format( "Please enter no more than {0} characters." ),
				minlength: $.validator.format( "Please enter at least {0} characters." ),
				rangelength: $.validator.format( "请输入6-18位的数字" ),
				range: $.validator.format( "Please enter a value between {0} and {1}." ),
				max: $.validator.format( "Please enter a value less than or equal to {0}." ),
				min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
				step: $.validator.format( "Please enter a multiple of {0}." )
			}
	})
	$('.validateForm').validate({
		//验证规则
		rules:{
			email:{
				//邮箱必填
				required:true,
				email:true
			},
			password:{
				required:true,
				rangelength: [6,8]
			},
			repassword:{
				equalTo:$('[name=passwopasswordrd]')
			},
			mobile:{
				required:true,
				mobile:true
			}
		},
		//定义错误信息
		messages:{
			email:{
				required: '邮箱不能为空'
			}
		}
	})
	//$.validator.addMethod('验证名字',function(){},验证错误信息)
	$.validator.addMethod('mobile',function(value,element){
		var reg = /^1[356789]\d{9}$/
		return reg.test(value)
	},'请输入正确的电话号码，且为11位纯数字格式')
	
//获取验证码倒计时

var cookia = $.cookie('cookia')
if(cookia){
	countDown(cookia)
}

$('.get-code').click(function(){
	var _this = this;
	
	if($(this).hasClass('disabled'))
	return
	
	countDown(60)
})
function countDown(count){
	
	$('.get-code').addClass('disabled')
	$('.get-code').html(count+'s重获')
	
	var timer = setInterval(function(){
		count--
		//设置cookie
		$.cookie('cookia',count)
		//取
		$('.get-code').html(count+'s重获')
		if(count<=0){
			clearInterval(timer)
			$('.get-code').removeClass('disabled').html('重新获取')
			$.removeCookie(cookia)
		}
	},1000)
}
