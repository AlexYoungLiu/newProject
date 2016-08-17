define(['swiper','jquery','js/template'],function(swiper,$,template){
	if(window.location.href.indexOf('index.html') == -1) return;
	
	
	//banner图片轮播
	var swiper = new Swiper(".swiper-container", {
		pagination : ".swiper-pagination", //生成分页
		paginationClickable : true, //点击分页跳转
		autoplay : 3000, //自动轮播
		autoplayDisableOnInteraction : false,  //用户操作后继续执行自动轮播
		loop : true //无缝滚动
	});
	//header点击more显示下拉列表
	$(".more").on("click",function(){
		$(".more-wrapper").slideToggle("fast");
	});
	//渲染
	$.getJSON("json/xie_list.json")
		.done(function(data){
		var str = template('main-modular',data)
		$(".wrapper").html(str);

	});
	$(".main").scroll(function(){
	    var scrollTop = $(this).scrollTop();
	    var winH = $(window).height();
	    var innerH = $(".box").outerHeight();
		if(scrollTop+winH>innerH-10){
			$.getJSON("json/xie_list.json")
			.done(function(data){
				var str = "";
				str += template('main-modular',data);
				$(".wrapper").append(str);
			})
		}
	});
	$('.one').on('click',function(){
		window.location.href='Basement_detail.html';
	})
	$('.two').on('click',function(){
		window.location.href='lcj_list.html';
	})
	$('.three').on('click',function(){
		window.location.href='contacts.html';
	})
	$('.cart').on('click',function(){
		window.location.href='cart.html';
	})

$('.wrapper').on('click',function(){
	window.location.href='Basement_detail.html';
})






	
})