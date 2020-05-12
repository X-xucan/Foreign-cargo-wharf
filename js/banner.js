//1.定义网络请求实例
var request = new XMLHttpRequest();

var requstUrl = 'http://192.168.97.231:3001/'
//2.打开请求
//requst.open(请求类型，请求的地址)
//请求的地址 后台人员给的
//请求类型：后台人员规定的
//异步： 浏览器执行js 代码从上到下以此执行，当遇到ajax请求时 会开出新路线 不会影响后面执行的时间
request.open("GET",requstUrl+'getBanner',true);


//3.发送请求到后台
//后台会规定是否需要数据
//requst.send(后台需要的数据)
request.send(null);


//请求发送的状态 4个
//0 初始化xmlhttprequest
//1 打开
//23 请求发送成功 
//4 请求完成 后台返回前端数据成功了
request.onreadystatechange = function(){
	//执行过程中的状态码
	console.log(request.readyState)
//请求 监听状态码
	if(request.readyState == 4){
		console.log(request.responseText)
		
		var result = JSON.parse(request.responseText);
		
		if(result.success == true){
			var list = result.list
			var slide = document.querySelector('.carosoal-slide')
			var html = `<img src="${requstUrl+list[list.length-1].img}" />`
				
			for(var i=0;i<list.length;i++ ){
				 html += `<img src="${requstUrl+list[i].img}" />`
			}
			html += `<img src="${requstUrl+list[1].img}" />`
			slide.innerHTML = html
			carosoul()
		}
		
	}
}
