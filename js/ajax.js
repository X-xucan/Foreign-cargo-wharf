//1.定义网络请求实例
var requst = new XMLHttpRequest();

//2.打开请求
//requst.open(请求类型，请求的地址)
//请求的地址 后台人员给的
//请求类型：后台人员规定的
//异步： 浏览器执行js 代码从上到下以此执行，当遇到ajax请求时 会开出新路线 不会影响后面执行的时间
requst.open("get",'http://192.168.97.231:3000/lists',true)


//3.发送请求到后台
//后台会规定是否需要数据
//requst.send(后台需要的数据)
requst.send(null);


//请求发送的状态 4个
//0 初始化xmlhttprequest
//1 打开
//23 请求发送成功 
//4 请求完成 后台返回前端数据成功了
requst.onreadystatechange = function(){
	console.log(requst.readyState)
//请求 监听状态码
	if(requst.readyState == 4){
		console.log(requst.responseText)
	}
}
