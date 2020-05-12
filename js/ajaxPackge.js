/*
 * ajaxPackge 封装ajax请求 希望请求多次调用  调用不同的地方不同就以参数形式传入
 * dataType josn String
 * success function 回调函数 在参数中存入一个方法 在数据处理完成后调用  并将数据传入调用的方法
 */
function ajaxPackge(options){
	console.log(options)
	//1.创建请求
	var request = new XMLHttpRequest();
	//2.打开请求 request.open
	request.open(options.type || 'get',options.url,options.async || true)
	//3.发送请求 request.send(data)
	request.send( options.data|| null)
	//4.监听请求状态
	request.onreadystatechange = function(){
		if(request.readyState == 4 && request.status == 200){
			var data = request.responseText
			
			
			if(options.dataType == 'json'){
				data = JSON.parse(data)
				
			}
			//调用传入的方法 传回data数据
			options.success(data)
		}
	}
}

