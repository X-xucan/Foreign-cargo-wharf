//底部、侧边、头部等公共部分的逻辑
//document.getElementById  只能获取一个，数据类型 对象{}
//document.getElemenetsByName  获取多个， 数组[]

//document.querySelector()  获取一个 第一个， 对象{}
//document.querySelectorAll() 获取多个  数组[]

var asideLists = document.querySelectorAll(".asidebar-bar")

for(i=0;i<asideLists.length;i++){
	asideLists[i].onmouseenter = function(){
		
		console.log(this.children[1])
		var bar = this.children[1]
		
		if( !bar){
			return;
		}
		
		var right = 45
		var timer = setInterval(function(){
			right = right-1;
			if(right<=35){
				clearInterval(timer)
			}else{
				bar.style.right = right-1+'px'
			}
		}, 40)
	}
}


// 返回顶部

var returnTop = document.querySelector('.return-top')

returnTop.onclick = function(){
	var scrollTop  = document.body.scrollTop || document.documentElement.scrollTop;
	document.body.scrollTop = 0
	
	document.documentElement.scrollTop = 0;
	
}

//点击控件 购物车以及客服滑出
var slidBars = document.querySelectorAll('.aside-slide-bar');
var asideSlide = document.querySelector('.aside-slide')

for(var i=0; i<slidBars.length;i++){
	 slidBars[i].onclick = function(){
	 	
//	 	console.log(asideSlide.currentStyle.right)
	 	var right = ''
	 	if(asideSlide.currentStyle){
	 		right = asideSlide.currentStyle.right
	 	}else{
	 		right = getComputedStyle(asideSlide,false)['right']
	 	}
	 	
	 	var speed =0
	 	right = parseInt(right)
	 	//获取元素的类名 数据类型为对象
//	 	this.classList.add('on')
//	 	this.log(this.classList)
	 	className = this.className
	 	
	 	//当滑块要往回走时 当前点的按钮上有个on这个类型
	 	if(right > -265 && className.indexOf('on')>=0){
	 		//回去  35--<264
	 		speed = -12
	 		//往元素上移除一个类
	 		this.classList.remove('on')
	 	}else{
	 		//出去264--<35
	 		speed = 12
	 		this.classList.add('on')
	 		
	 		//当前元素的上一个元素节点on去掉
	 		//当前元素的下一个元素节点on去掉
	 		
	 		
	 		
	 		
	 		var car = document.querySelector('.aside-slide-car')
	 		var server = document.querySelector('.aside-slide-server')
	 		if(className.indexOf('asidebar-bar-cart') >=0 ){
	 			this.nextElementSibling.classList.remove('on')
		 		car.style.display = 'block'
		 		server.style.display='none'
	 		}else{
	 			//显示客服
	 			server.style.display = 'block'
	 			car.style.display='none'
	 			this.previousElementSibling.classList.remove('on')
	 		}
	 	}
	
	 	
	 	//运动
	    var	timer = setInterval(function(){
	 		right += speed
	 		
	 		if((right > 35 && speed >0) ||(right <-265 && speed <0)){
	 			clearInterval(timer)
//	 			asideSlide.style.right = 35 + 'px'
	 		}else{
	 			asideSlide.style.right = right+ 'px'
	 		}
	 	},10)
	  }
}

//删除 购物车
		var carshpin = document.querySelector('.car-noe')
		var dle = document.querySelectorAll('.shanchu')
		
			for(i=0;i<dle.length;i++){
				dle[i].onclick = function(){
					var oli = this.parentNode
					carshpin.removeChild(oli)
				}
				
			}
			

