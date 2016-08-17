define(['jquery','sweetalert','fastClick'],function($,_alert,fastClick){
	if(window.location.href.indexOf('cart.html')==-1) return;
	fastClick.attach(document.body);
	var Init=function(){
		this.listBox=document.querySelector(".list-box");
		this.item=document.querySelector(".item");
		this.itemContral=document.querySelector(".item-contral");
		this.minus=document.querySelector(".minus");
		this.add=document.querySelector(".add");
		this.num=document.querySelector(".num");
		this.bindEvent();
	}

	Init.prototype={
		bindEvent:function(){
			var that=this;
			$(".list-box").each(function(i,e){
				$(e).find(".item").on("click",function(){
					var ev=ev || window.event;
					var target=ev.target || ev.srcElement;
					console.log(target.className)
					var num=$($(target).parent().find(".num")).val();
					if(target.className=="minus"){
						var that=this;
						if(num*1>0){
							num--;
							$(target).parent().find(".num").val(num);
						}else if(num*1==0){
							swal({
								title:"",
								text:"Commodity is at least one number, sure to delete?",
								type:"warning",
								showCancelButton:true,
								confirmButtonText:"yes,delete it",
							},function(){
								$(that).remove();
							})
						}
						toMath();
					}
					if(target.className=="add"){
						num++;
						$(target).parent().find(".num").val(num);
						toMath();
					}
				})
			})
			toMath();
			function toMath(){
				var sum=0,shipping=parseInt($(".shipping").text());
				$(".item").each(function(i,e){
					var unit=parseInt($(e).find(".unit-price").text());
					var num=$(e).find(".num").val();
					sum+=unit*num;
					console.log(num)
				})
				if(sum===0){
					$(".subtotal").text(sum+"$");
					$(".shipping").text("0$");
					$(".total").text(sum+shipping+"$")
				}else{
					$(".subtotal").text(sum+"$");
					$(".total").text(sum+shipping+"$")
				}
			}
		}
	}

	var Init=new Init();
	$('.back').on('click',function(){
		window.location.href='index.html';
	})

	$('.payment').on('click',function(){
		window.location.href='check.html';
	})
})