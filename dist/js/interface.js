$(document).ready(function() {

	// detect touch device
	if (isTouchDevice() === true) {
		$('body').addClass('touch');
	} else {
		$('body').addClass('no-touch');
	}

	//Мобильное меню
	$( 'body' ).on( 'click', '.menu-btn', function( event ) {
	    $(this).toggleClass('active');
	    $('.bg-zoom').fadeToggle();
	    $('.mobile-menu').fadeToggle();
	    return false;
	});

	
	// $( 'body' ).on( 'click', '.mobile-menu__item-link', function( event ) {
	//     $(this).toggleClass('active');
	//     $(this).parents('.mobile-menu__item').siblings('.mobile-menu__item').find('.mobile-menu__item-link').removeClass('active');
	//     $(this).parents('.mobile-menu__item').siblings('.mobile-menu__item').find('.mobile-menu__list').fadeOut();
	//     $(this).next('.mobile-menu__list').fadeToggle();
	//     $('.bg-zoom').fadeIn(200);
	//    	return false;
	// });
	// $( 'body' ).on( 'click', '.mobile-menu__item-link.active', function( event ) {
	//     $('.bg-zoom').fadeOut(200);
	//    	return false;
	// });
	$(document).click(function (e){
		var divmenu = $(".mobile-menu");
		if (!divmenu.is(e.target)
		    && divmenu.has(e.target).length === 0) {
			$('.bg-zoom').fadeOut();
			$('.menu-btn').removeClass('active');
			$('.mobile-menu').fadeOut();
		}
	});




	//ТАБЫ ТЕКСТОВАЯ СТРАНИЦА
	$("ul.tabs-view1 li:first").addClass("active").show();
	//On Click Event
	$("ul.tabs-view1 li").click(function() {
		$("ul.tabs-view1 li").removeClass("active");
		$(this).addClass("active");
		return false;
	});

	$("ul.tabs-view2 li:first").addClass("active").show();
	//On Click Event
	$("ul.tabs-view2 li").click(function() {
		$("ul.tabs-view2 li").removeClass("active");
		$(this).addClass("active");
		return false;
	});
});


$(window).resize(function () {

});

$(window).load(function(){
	
});

// functions
function isTouchDevice() {
	return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}

// links pages
// $('body').append(
// 	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
// 		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
// 	<style> \
// 		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
// 		#pages a { text-decoration: none; } \
// 		#pages li { margin: 5px 0; } \
// 	</style> \
// 	<ol id="pages"> \
// 		<li><a href="#"></a></li> \
// 		<li><a href="#"></a></li> \
// 		<li><a href="#"></a></li> \
// 		<li><a href="#"></a></li> \
// 		<li><a href="#"></a></li> \
// 		<li><a href="#"></a></li> \
// 	</ol> \
// </div>');
