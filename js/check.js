define(['jquery','sweetalert'],function($){
	if(window.location.href.indexOf('check.html') == -1) return;
	var deff=false;
	function check(){
		if(
			valid($(".ch_email"),/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)
			&& valid($(".ch_firstName"),/^[A-Z]{1}[a-z]+/)
			&& valid($(".ch_lastName"),/^[A-Z]{1}[a-z]+/)
			&& valid($(".ch_phone"),/^1[3587]\d{9}/)
			&& valid($(".ch_street"),/\S/)
			&& valid($(".ch_Sstreet"),/\S/)
			&& valid($(".ch_city"),/\S/)
			&& valid($(".ch_zipcode"),/[1-9]\d{5}/)
			&& valid($(".ch_state"),/\S/)
		){
			return deff=true
		}
	}
	$(".ch_save").on("click",function(){
		console.log(deff)
		if(deff){
			$(".ch_state").addClass("ch_bg")
			location.href="aa.html"
		}else{
			swal("不能为空");
		}		
	})
	
	$(".ch_email").on("input propertychange",function(){
		check();
	})
	$(".ch_firstName").on("focus input propertychange",function(){
		if(valid($(".ch_email"),/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)){
			$(".ch_email").addClass("ch_bg")
			check()
		}else{
			
			$(".ch_email").focus();swal("邮箱输入错误");
		}
	})

	$(".ch_lastName").on("focus input propertychange",function(){
		if(valid($(".ch_firstName"),/^[A-Z]{1}[a-z]+/)){
			$(".ch_firstName").addClass("ch_bg")
			check()
		}else{
			
			$(".ch_firstName").focus();swal("姓氏输入错误");
		}
	})
	$(".ch_phone").on("input propertychange",function(){
		if(valid($(".ch_lastName"),/^[A-Z]{1}[a-z]+/)){
			$(".ch_lastName").addClass("ch_bg")
			check()
		}else{
			
			$(".ch_lastName").focus();swal("名字输入错误");
		}
	})
	$(".ch_street").on("input propertychange",function(){
		if(valid($(".ch_phone"),/^1[3587]\d{9}/)){
			$(".ch_phone").addClass("ch_bg")
			check()
		}else{
			
			$(".ch_phone").focus();swal("电话输入错误");
		}
	})
	$(".ch_Sstreet").on("input propertychange",function(){
		if(valid($(".ch_street"),/\S/)){
			$(".ch_street").addClass("ch_bg")
			check()
		}else{
			
			$(".ch_street").focus();swal("街道输入错误");
		}
	})
	$(".ch_city").on("input propertychange",function(){
		if(valid($(".ch_Sstreet"),/\S/)){
			$(".ch_Sstreet").addClass("ch_bg")
			check()
		}else{
			
			$(".ch_Sstreet").focus();swal("详细地址输入错误");
		}
	})
	$(".ch_zipcode").on("input propertychange",function(){
		if(valid($(".city"),/\S/)){
			$(".ch_city").addClass("ch_bg")
			check()
		}else{
			
			$(".ch_city").focus();swal("城市输入错误");
		}
	})
	$(".ch_state").on("input propertychange",function(){
		if(valid($(".ch_zipcode"),/[1-9]\d{5}/)){
			$(".ch_zipcode").addClass("ch_bg")
			check()
		}else{
			
			$(".ch_zipcode").focus();swal("验证码输入错误");
		}
	})
	function valid(ele,reg){
		if(getType(reg)=='[object RegExp]'){
			return reg.test(ele.val());
		}
	}
	function getType(target){
		return Object.prototype.toString.call(target);
	}
})