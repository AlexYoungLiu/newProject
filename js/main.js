require.config({
	baseUrl:'',
	paths:{
		'jquery' : 'lib/jquery/jquery-1.9.1.min',
		'swiper' : 'lib/swiper.min',
		'fastClick' : 'lib/fastclick',
		'iscroll' : 'lib/iscroll4',
		'artTemplate':'lib/art-template/template-native',
		'sweetalert':'lib/sweetalert.min'
	}
})
require(['fastClick','js/index','js/basement_detail','js/lcj','js/js','js/cart','js/check'],function(fc){
	//fc.attach(document.body);
})
