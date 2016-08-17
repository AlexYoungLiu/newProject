define(['jquery','sweetalert'],function($,sweetalert){
	if(window.location.href.indexOf('Basement_detail.html')==-1) return;
	//点击箭头，内容显示隐藏
	$('.show_btn').on('click',function(){
		$('.li_table').addClass('show');
		
	
	    $(this).hide();
	    $('.up_arrow').show();
	});
	$('.up_arrow').on('click',function(){
		$('.li_table').removeClass('show');
		
	
	    $(this).hide();
	    $('.show_btn').show();
	});
	//点击心（收藏）时，按钮变红
	$('.heart').on('click','span',function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
		}else{
			$(this).addClass('on');
			swal({
					title: "收藏成功!",
					text: "",
					confirmButtonText: "sure",
					customClass: 'twitter'
			});
		}
	})

	//点击购买的时候，显示弹出框
	$('.buy').on('click',function(){
			swal({
				title: "Are you sure?",
				text: "您确定购买此商品?",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor: '#DD6B55',
				confirmButtonText: 'Yes, buy it!',
				closeOnConfirm: false
			},
			function(){
				swal("success!", "恭喜您购买成功!", "success");
			});

	})

	$('.back').on('click',function(){
		window.location.href="index.html";
	})
	$('.cart').on('click',function(){
		window.location.href="cart.html";
	})
})
 