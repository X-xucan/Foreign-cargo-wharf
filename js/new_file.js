//首页的轮播逻辑代码
//文档加载完成
window.onload = function() {
		carosoul()
}
function carosoul() {
	/*
	 * 轮播
	 * 1.计算carosoal-slide 的宽度 图片的宽度*图片的长度（此长度为图片.lenght）
	 * 
	 */
	if(autoInterval) {
		clearInterval(autoInterval)
	}
	var index = 1;
	var  doIndex = 0;
	var speed = -10;
	var bannerCarosoul = document.querySelector('.banner-cursoal')
	var carosoalSlide = document.querySelector(".carosoal-slide")
	var carosoalTmg = document.querySelectorAll('.banner-cursoal img')
	
	var aBut = document.querySelectorAll(".carosoul-but");
	
	var aDot = document.querySelectorAll('.carosoul-dot li')
	
	
	
	//图片的宽度等于任意一张图片的宽度
	var imgWidth = carosoalTmg[0].offsetWidth
	var imgLength = carosoalTmg.length
	
	//1.计算carosoal-slide 的宽度 图片的宽度*图片的长度
	carosoalSlide.style.width = imgWidth * imgLength + "px"
	
	//var autoInterval = clearInterval(autoAnimate)
	//3.循环轮播
	
	var autoInterval = null;
	
	autoAnimate()
	function autoAnimate() {
		autoInterval = setInterval(function(){
			speed = -Math.abs(speed)
			animate(-10,'right');
		},2000)
	}
	//2运动
	function animate() {
		
		changeDot()
		//2.让图片运动起来
		var timer = setInterval(function(){
			var left = carosoalSlide.offsetLeft + speed
			carosoalSlide.style.left = left + "px"
			
			var curIndex = 0;//即将要运动到图片的下标
			if(speed < 0) {
				curIndex = index+1;
			}else {
				curIndex = index-1;
				
			}
			//(left <= -curIndex* imgWidth && speed < 0)向右移动
			//(left >= -curIndex*imgWidth && speed > 0)向左移动
			//当运动的left的值小于下一张显示图片的left的时 停止动画
			if((left <= -curIndex* imgWidth && speed < 0) || (left >= -curIndex*imgWidth && speed > 0)) {
				clearInterval(timer)
				index = curIndex;
				//4.当图片移动到最后一张时显示第一张的时候（排序的最后一张），
				//默默地将图片换到第一张，排序第二张
				if(index >= imgLength-1) {
					index = 1;
					carosoalSlide.style.left = -imgWidth + "px";
					
				}else if(index<=0) {
					index = imgLength-1;
					carosoalSlide.style.left = -index*imgWidth +"px"
				}
			}
			
		},10)
		
	}

	//轮播圆点的移动
	function changeDot() {
		if(speed < 0){
			doIndex++
		}else {
			doIndex--
		}
		//判断左右移动
		if(doIndex > aDot.length-1) {
			doIndex = 0
		}else if(doIndex < 0) {
			doIndex = aDot.length-1;
		}
		
		for(var i =0;i<aDot.length;i++){
			aDot[i].classList.remove('on')
		}
		aDot[doIndex].classList.add('on')
	}

	//5.移入轮播盒子 停止动画 移除开始
	bannerCarosoul.onmouseenter = function() {
		clearInterval(autoInterval)
	}
	bannerCarosoul.onmouseleave = function() {
		autoAnimate();
	}
	
	//6.给左右添加点击事件
	for(var i = 0; i < aBut.length;i++){
		aBut[i].onclick = function() {
			
			//获取类名
			var className = this.className
			console.log(className)
			if(className.indexOf('prev') >= 0){
				
				speed = -Math.abs(speed)
				//点击左按钮
				animate(10, 'left')
			}else {
				//点击又按钮
				speed = Math.abs(speed)
				animate(-10, 'right')
			}
		}
	}
	//7.给圆点添加点击事件
	for(var i = 0; i<aDot.length;i++) {
		aDot[i].dot = i
		aDot[i].onclick = function() {
			
			if(this.dot < doIndex){
				speed = Math.abs(speed);
				index = this.dot + 2
				doIndex = this.dot + 1
			}else {
				speed = -Math.abs(speed);
				index = this.dot
				doIndex = this.dot - 1
			}
			animate()
		}
	}
	
	//当浏览器最小化 或者切换不同标签是执行的动作 visibilituchange
	//document.addEventListener 监听
	document.addEventListener('webkitvisibilitychange',function(){
		
		var isHidden = document.webkitVisibilityState;
		console.log(isHidden) 
		if (isHidden == 'hidden') {
			clearInterval(autoInterval)
		}else {
			autoAnimate();
		}
	})
}

	countDownHtml()
	
	var countInterval = setInterval(countDownHtml,1000)
	
	//逻辑  与   页面操作  分离
	
	function countDownHtml() {
		/*倒计时*/
		var countDownTime = countDown('2019-9-2 11:36:00')
		
		if(parseInt(countDownTime) <= 0) {
			clearInterval(countInterval)
		}
		//将字符串转换为数组
		var arrTime = countDownTime.split('')
		
		var html = `	<span>本场还剩</span>
						<span class="tiem margin-10-left">${arrTime[0]}</span>
						<span class="tiem">${arrTime[1]}</span>
						<span>:</span>
						<span class="tiem">${arrTime[2]}</span>
						<span class="tiem">${arrTime[3]}</span>
						<span>:</span>
						<span class="tiem">${arrTime[4]}</span>
						<span class="tiem">${arrTime[5]}</span>`
		
		document.querySelector('.count-down').innerHTML = html

}