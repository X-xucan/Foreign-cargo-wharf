var requstUrl = 'http://192.168.97.221:3001/'
		
		for(var i=0;i<3;i++){
			sendAjax(i)
		}
		function sendAjax(id){
			$.ajax({
				type:"get",
				url: requstUrl+'lists?id='+id,
				async:true,
				dataType: 'json',
				success:function(res){
					
					if(res.success){
						var lists = res.list;
						
						var html = ''
						for(var i=0;i<lists.length;i++){
							html +=`<li >
									<img src="${requstUrl+lists[i].img}" />
									<div class="text-ellipsis  font-14  margin-10-top">${lists[i].title}</div>
									<div class="text-main text-bolder margin-10-top">￥${lists[i].price}</div>
								</li>`
						}
						$('.recommand-lists').eq(id).html(html)
					}
				}
			});
		}
		//banner
		$.ajax({
			type:"get",
			url: requstUrl+'getBanner',
			async:true,
			dataType: 'json',
			success:function(res){
				if(res.success){
					var lists = res.list;
					
					var html = ''
					for(var i=0;i<lists.length;i++){
						html +=`
						<a href=""><img src="${requstUrl+lists[4].img}" /></a>
						<a href=""><img src="${requstUrl+lists[0].img}" /></a>
						<a href=""><img src="${requstUrl+lists[1].img}" /></a>
						<a href=""><img src="${requstUrl+lists[2].img}" /></a>
						<a href=""><img src="${requstUrl+lists[3].img}" /></a>
						<a href=""><img src="${requstUrl+lists[4].img}" /></a>
						<a href=""><img src="${requstUrl+lists[0].img}" /></a>
						`
					}
					$('.carosoal-slide').html(html)
				}
			}
		});