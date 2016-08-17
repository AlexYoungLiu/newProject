 
define(['jquery','js/js','swiper'],function($){
 if(window.location.href.indexOf('contacts.html')==-1)return;
  /* var swiper = new Swiper('.swiper-container');*/

  var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });

        $(".input1").blur(function(){
            var reg=/[a-zA-Z]/,
                val=$(".input1").val();
            if(val==""){
                alert("The name cannot be empty")
            }else if(!reg.test(val)){
                alert('错误')
            }else{
                alert('完成')
            }
        })


   
 /*$('.back').on('click',function(){
    window.location.href='index.html';
 })*/
})

