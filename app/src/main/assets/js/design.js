$(document).ready(function(){
	//lnb_open
	$('.all_menu').bind('touchstart click', function(e) {
		var cate_h = $('#lnb').height();
		$('html').addClass( 'l-nav-open' );
		$('#wrap').css('height',cate_h);
		e.preventDefault();
	});
	$('.wrap_bg, #lnb .close').on('touchstart click', function(e) {
		$('html').removeClass( 'l-nav-open' );
		$('#wrap').css('height','100%');
		e.preventDefault();
	});

	//메인비쥬얼
	$('.main_visual').flexslider({
		animation: 'slide',
		animationSpeed: 500,
		slideshowSpeed: 3000
	});
	
	/* 이벤트 탭버튼 */
	$("#event_tab li a").on("click", function(e){
		$("#event_tab li").removeClass("on");
		$(this).parent().addClass("on");
		e.prevetnDefault();
	});
	
	/* 전후사진 */
	$('.roll_slider').flexslider({
		animation: 'fade',
		animationSpeed: 500,
		slideshowSpeed: 3000,
		manualControls: ".bnf_paging li",
		useCSS: false /* Chrome fix*/
	});
});

