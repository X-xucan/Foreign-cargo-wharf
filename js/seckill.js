
(function($) {
	$.fn.cdencapsulation = function(options) {
		var SysSecond;
		var InterValObj;
		var cdcontainer; //装时间的容器

$(document).ready(function() {
	// SysSecond = parseInt($(options.kkk).html()); //这里获取倒计时的起始时间
	SysSecond = options.shijian //这里获取倒计时的起始时间
	InterValObj = window.setInterval(SetRemainTime, 1000); //间隔函数，1秒执行
	cdcontainer = $(options.acceptor) //接收时间的容器

});

//将时间减去1秒，计算天、时、分、秒
function SetRemainTime() {
	if(SysSecond > 0) {
		SysSecond = SysSecond - 1;
		var second = Math.floor(SysSecond % 60); // 计算秒     
		var minite = Math.floor((SysSecond / 60) % 60); //计算分 
		var hour = Math.floor((SysSecond / 3600) % 24); //计算小时
		var day = Math.floor((SysSecond / 3600) / 24); //计算天 
		

		var hourDiv = "<span class='time margin-5-l'>" + hour + "</span>"+"<span>:</span>";
		var dayDiv = "<span class='time margin-5-l'>" + day  + "</span>"+"<span>:</span>";
		var miniteDiv = "<span class='time margin-5-l'>"+minite+"</span>"+"<span>:</span>"
		var secondDiv = "<span class='time margin-5-l'>"+second+"</span>"

		cdcontainer.html(dayDiv + hourDiv + miniteDiv + secondDiv);

		if(hour === 0) { //当不足1小时时隐藏小时
			// $('#hourSpan').css('display','none');

		}
		if(day === 0) { //当不足1天时隐藏天
			$('#daySpan').css('display','none');

		}

	} else { //剩余时间小于或等于0的时候，就停止间隔函数
		window.clearInterval(InterValObj);
		//这里可以添加倒计时时间为0后需要执行的事件
		alert("时间为0");
			}
		}

	}

})($)

