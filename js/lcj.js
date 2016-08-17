define(["jquery","js/template",'js/iscroll5'],function($,template,is){
if(window.location.href.indexOf('lcj_list.html')==-1) return;
	var wrap=$(".lcj_picMain");
	$.getJSON("data/lcj_list.json")
		.done(function(data){
		var i=0;
		render(i,data);

		$(".lcj_numMain").on("click",'li',function(){
			i=$(this).index();
			console.log(i);
			

			render(i,data);
		})
	})

	function render(i,data){                    
		var tempData=[];
		
		tempData.list=data.result[i];
		
		var html=template("pic_list1",tempData);
		wrap.html(html)
	};
	
	/*var myscroll=new IScroll("#container",{
		click:false
	});*/

	
	$('.lcj_picMain').on('click','li',function(){
		window.location.href='Basement_detail.html';
	})

})