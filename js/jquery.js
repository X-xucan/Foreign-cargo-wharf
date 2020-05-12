//tba切换
	$(".tab-title").click(function(){
		$(this).addClass('on')
		$(this).siblings().removeClass('on')
		
		console.log(111)
		var index = $(this).index()
		//找到当前元素的祖先
		var paren = $(this).parents(".tab-box")
		//find 查找
		var ele = paren.find(".tab-list")
		ele.eq(index).addClass('on')
		ele.eq(index).siblings().removeClass('on')
	})
	//评论
	$(".tab-int").click(function(){
		
		$(".arctle-all").toggleClass('on')
	})
	$(".submit").click(function(){
		var value = $("[name=content]").val()
		//var html = `<li>张三:${value}</li>`
		
		var html = `<li class="comments-list-cent clearfix margin-30-top">
								<img src="img/goods.jpg" class="fl"/>
								<div class="fl high-praise">
									<div>
										<span>好评</span>
										<span class="margin-10-left">|</span>
										<span class="margin-10-left">2016-11-29</span>
										<span>&nbsp;16:10:45</span>
									</div>	
									<div class="high-praise-text margin-15-button">
										<span>${value}</span>
									</div>
								</div>
							</li>
						`
		$(html).appendTo($(".list-text"))
		$("[name=content]").val('')
	})
	
	//
	$(".aaaa").click(function(){
		$(".hidden").toggleClass('on')
	})