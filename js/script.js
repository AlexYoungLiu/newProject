$(".box").dropload({
    loadUpFn:function(me){
       $.ajax({
       	  url:'json/lcj_list.json',
       	  type:"get",
       	  dataType:"json",
       	  success:function(result){
             data=result.lists,
             html="";
             $.each(data,function(i,obj){
                 html+='<div class="main-slide">'
						+'<div class="slide-wrap">'
							+'<img src="images/pic2.png" alt="">'
							+'<p class="slide-title">Product one</p>'
							+'<p class="slide-description">Short description</p>'
							+'<p class="slide-money">559$</p>'
						+'</div>'
						+'</div>';
             })
             setTimeout(function(){
             	$(".wrapper").html(html);
                me.reloadDom();
             },1000)
       	  }
       })
    },
    loadDownFn:function(me){
       $.ajax({
       	  url:'json/lcj_list.json',
       	  type:"get",
       	  dataType:"json",
       	  success:function(result){
             data=result.lists,
             html="";
             $.each(data,function(i,obj){
                 html+='<div class="main-slide">'
						+'<div class="slide-wrap">'
							+'<img src="images/pic2.png" alt="">'
							+'<p class="slide-title">Product one</p>'
							+'<p class="slide-description">Short description</p>'
							+'<p class="slide-money">559$</p>'
						+'</div>'
						+'</div>';
             })
             setTimeout(function(){
             	$(html).appendTo($(".wrapper"));
                me.reloadDom();
             },1000)
       	  }
       })
    }
});
