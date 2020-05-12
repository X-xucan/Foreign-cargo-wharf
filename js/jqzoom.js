//放大镜的封装
(function($){
	$.fn.jqzoom = function(options){
		
		var _this = this
		var smallImg = $(_this).find('.small-img')
		
		var smallwidth = smallImg.width()
		var smallheight = smallImg.height()
		
		//
		var popwidth = 0 ,popheight = 0
		var bigwidth = 0 ,bigheight = 0
		
		$(_this).mouseenter(function(){
			var smallSrc = smallImg.attr('src')
			
			var bigHtml = `<div style="width:${options.offwidth}px;height:${options.offheigth}px;" class="zoom-big">
								<img src="${smallSrc}" />
							</div>`
			
			$(_this).append('<div class="zoom-pop"></div>')
			
			$(_this).append(bigHtml)
			
			var bigImg = $(_this).find('.zoom-big img')
			
			bigwidth = bigImg.width()
			bigheight = bigImg.height()
			
			var popx = smallwidth/bigwidth*options.offwidth
			var popy = smallheight/bigheight*options.offheigth
			popwidth = popx
			popheight = popy
			$(_this).find('.zoom-pop').css({
				width: popx,
				height: popy
			})
		})
		
		//删除移入的图片的区域选择的盒子
		$(_this).mouseleave(function(){
			$(_this).find('.zoom-pop').remove()
			$(_this).find('.zoom-big').remove()
		})
		
		//鼠标移动时候小图标的位置
		$(_this).mousemove(function(e){
			
			var pagex = e.pageX
			var pagey = e.pageY
			
			var offsetX = $(_this).offset().left
			var offsetY = $(_this).offset().top
			
			//计算弹出的left top
			var popx = pagex - offsetX - popwidth/2
			var popy = pagey - offsetY - popheight/2
			
			popx = popx < 0 ? 0 : popx
			popy = popy < 0 ? 0 : popy
			
			popx = popx > (smallwidth - popwidth) ? (smallwidth - popwidth) : popx
			popy = popy > (smallheight - popheight) ? (smallheight - popheight) : popy
			
			$('.zoom-pop').css({
				left: popx,
				top: popy
			})
			$(_this).find('.zoom-big img').css({
				left: -popx*bigwidth/smallwidth,
				top: -popy*bigheight/smallheight
			})
		})
	}
})($)
