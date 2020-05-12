
/*
 *countDown   倒计时
 * @param future date 表示倒计时结束时间   IS NOT NUll
 * @param history date 表示倒计时开始时间
 * 将时间转换为相差的时分秒字符串返回
 */

function countDown(future, histry) {
	
	if(!histry) {
		//当前时间距离1970年1月1日毫秒数
		histry = new Date().getTime()
	}else {
		histry = new Date(histry).getTime()
	}
	//倒计时结束时间距离1970年的毫秒数
	future = new Date(future).getTime()
	
	//倒计时相差的毫秒数
	var distance = future - histry
	
	
	
	if(distance <= 0) {
		return '000000'
	}
	
	//距离毫秒数- 小时毫秒数 =  分钟毫秒数 + 秒的毫秒数
	//1小时  1*60*60*1000
	//向下取整 Math.floor()
	var hours = Math.floor(distance/(60*60*1000))
	
	//1分钟 1*60*1000
	
	var minutes = Math.floor((distance - hours*60*60*1000)/(60*1000))
	
	var seconds = Math.floor((distance - hours*60*60*1000 - minutes*60*1000)/1000)

	return changeLength(hours) + changeLength(minutes) + changeLength(seconds) 
}

/*
 *changeLength   将一位数的时间转换为两位数
 * @param num string|number 表示转换的字符   IS NOT NUll
 */
function changeLength(num) {
	//判断长度
	num = String(num)
	
	if(num.length <=1) {
		num = '0' + num
	}
	
	return num
}

////tab 切换
//var tabTitle = document.querySelectorAll('.tab-title')
//
//for(var i=0;i<tabTitle.length;i++){
//	
//	//保存给tebTiltle 添加index 属性 属性值为下标
//	tabTitle[i].index =i ;
//	tabTitle[i].onmouseenter =function(){
//		var parent = this.parentNode.nextElementSibling
//		
//		//找到所有tablists
//		var tabLists = parent.children
//		
//		for(var j=0; j<tabTitle.length;j++){
//			tabTitle[j].classList.remove('active')
//			tabLists[j].classList.remove('active')
//			
//		}
//		
//		this.classList.add('active');
//		tabLists[this.index].classList.add('active')
//	}
//}

//tab切换
function changeTab(parentClass){
	var parent = document.querySelector(parentClass)
	
	var tabTitle = parent.querySelectorAll('.tab-title')
	var tabLists = parent.querySelectorAll('.tab-lists')
	
	for(var i=0; i<tabTitle.length;i++){
		tabTitle[i].index = i;
		tabTitle[i].onmouseenter = function(){
			for(var j =0;j<tabLists.length;j++){
				tabTitle[j].classList.remove('active')
				tabLists[j].classList.remove('active')
			}
			this.classList.add('active')
			tabLists[this.index].classList.add('active')
		}
	}
}
changeTab('.tab-box')
changeTab('.tab-box1')

//正则表达式
			function str(){
				var phone = document.getElementById('tel').value;
				var phoneFont = document.getElementById('phoneFont');
				
				
				if(!/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/.test(phone)){
//					phoneFont.style.display='block'
					phoneFont.innerHTML="请输入正确的电话号码!!";	
					return false;
				}else{
					phoneFont.innerHTML="格式正确!!";	
					return true;
				}
			}
			
			function str_1(){
				var phone_1 = document.getElementById('ipt_3').value;
				var usernames = document.getElementById('usernames');
				
				if(!/^[a-zA-Z0-9_-]{4,12}$/.test(phone_1)){
					usernames.style.display='block'
					usernames.innerHTML="请输入4-12的正确密码!!";	
					return false;
				}else{
					usernames.innerHTML="密码输入正确!!";	
					return true;
				}
			}

