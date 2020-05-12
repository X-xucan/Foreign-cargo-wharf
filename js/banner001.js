window.onload = function(){
	var carosoalSlide = document.querySelector('.seckill-slide')
	
	var carosoalImg = document.querySelectorAll('.seckill-banner-carousel img')
	
	var index = 1
	//图片的宽度等于任意一张图片的长度
	var imgwidth = carosoalImg[0].offsetWidth
	var imgLength = carosoalImg.length
	
	carosoalSlide.style.width = imgwidth * imgLength + 'px'
	
	var autoInterval = null
	autoAnimate()
	function autoAnimate(){
			autoInterval =  setInterval(function(){
			animate()
		},2000)
	}
	 //3.让图片循环运动 
	function animate(){
		var timer = setInterval(function(){
		
		var left = carosoalSlide.offsetLeft - 20 
		carosoalSlide.style.left = left + 'px'
		//当运动目标left的值小于下一张图片显示letf的时 停止的动画
		if(left <= -(index+1) * imgwidth){
			clearInterval(timer)
			index ++
			
			if(index >= imgLength -1){
				index = 1
				carosoalSlide.style.left = -imgwidth + 'px'
			}
			
		}
		
	},10)
	}
	
	//5.移入轮播盒子 停止动画 移除开始
	carosoalSlide.onmouseenter = function() {
		clearInterval(autoInterval)
	}
	carosoalSlide.onmouseleave = function() {
		autoAnimate();
	}
	
	//切换标签的定时
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
	

