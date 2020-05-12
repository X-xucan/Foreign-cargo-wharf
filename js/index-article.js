//删除
var dle = document.querySelectorAll('.delete')
var  car = document.querySelector('.centCar')
for(i=0;i<dle.length;i++){
	dle[i].onclick = function(){
		
		var dles = this.parentNode
		car.removeChild(dles)
	}
}
//上一页下一页 渲染
//打开列表页 获取列表数量 只要求当显示的页码数量
//存储端口地址
var requseUrl = 'http://192.168.97.231:3000/'
var page = getQueryParam('page') || 1
var count = getQueryParam('count') || 2

var total = 0
//2.发送请求
$.ajax({
	type:"get",
	url: requseUrl+'list',
	async:true,
	data:{
	page:page,
	count:count
},
	success:function(res){
	var pageHtml = ''
	//找到页码总数
	total = res.total
	for(var i=0;i<res.total;i++){
	pageHtml += `<a  href="index-article.html?page=${i+1}&count=${count}" class="button button-mian-hover">${i+1}</a>`
}
console.log(pageHtml)
//在页码第一个a标签插入放入的页码数
	$('.pages a:first').after(pageHtml)
		
	}
});


//3.点击上一步 下一步
$('.page-btn').click(function(){

	if(page <=1 && $(this).hasClass('prev')){
		return;
	}if(page >= total && $(this).hasClass('next')){
		return;
	}
	
	if($(this).hasClass('prev')){
		page--
	}else{
		page++
}

	window.location.href = 'index-article.html?page='+page+'&count='+count
})

//1.从当前地址上获取页码以及数量
//3)获取浏览器请求的参数
function getQueryParam(name){
	//1）获取请求的参数
	var search = window.location.search
	//2)截取字符串 不要？
	search = search.substr(1)
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)")
	//match 从一个字符串匹配与正则匹配的字符串
	//返回一个参数为匹配的字符串
	//后面参数以小括号包起来的字符
	var match = search.match(reg)

	if(match){
		return match[2]
	}
	return ''
}


//渲染图片
var requseUrl = 'http://192.168.97.231:3000/'
for(var i=0;i<3;i++){
	sendAjax(i)
}
function sendAjax(id){
	$.ajax({
		type:"get",
url: requseUrl+'list?id='+id,
async:true,
dataType: 'json',
success:function(res){
	
if(res.success){
	var lists = res.list;
	
	var html = ''
for(var i=0;i<lists.length;i++){
	html +=`<li class="hot-selling-all margin-15-top  fl">
	<div>
		<img src="${requseUrl+lists[i].img}" />
	</div>
	<div class="margin-8">
		<span class="text-main text-bolder font-16 ">￥${lists[i].price}</span>
		<span class="line-throu margin-11-left">￥1999</span>
	</div>
	<div class="margin-8">
		<span class=" font-class overflow-2">${lists[i].title}</span>
	</div>
	<div class="margin-8">
		<span class="text-main">此处为商品所做的活动</span>
	</div>
	<div class="clearfix margin-8">
		<span class="fl iconfont icon-xiaoxi">123</span>
		<span class="fr">产地</span>
	</div>
	<div class="selling">
		<span class="selling-h">热销</span>
	</div>
	<div class="hot-selling-all-a">
		<span>收藏商品</span>
		<span>|</span>
		<span>加入购物车</span>
	</div>
</li>`
}
$('.hot-selling').eq(id).html(html)
	}
	}
});
}
//收起
$('.closed').click(function(){
	$('.goosd-form-show').slideToggle('show')
})