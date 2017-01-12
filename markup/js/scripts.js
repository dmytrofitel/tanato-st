
$(document).ready(function(){
	$('.slide-item').each(function() {
		$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')').find('> img').hide();
	});

	$('.slide').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		fade: true,
		/*autoplay: true,
		autospeed: 2000*?*/
});


	$('.team-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		arrows: false,
		autoplay: true,
		autospeed: 2000,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
/*  autoplay: true,
autospeed: 2000*/
});

	$('<a href="#" class="open-menu"><span></span><span></span><span></span>Menu</a>').appendTo('#header > .container');
	$('<span class="fader"/>').appendTo('#header > .container');
	$('.open-menu, .menu-btn').click(function(){
		$('body').toggleClass('menu-opened');
		return false;
	});

	$('.fader').click(function(){
		$('body').removeClass('menu-opened');
	});

	$('.bg-img').each(function() {
		$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')').find('> img').hide();
	});

	$('.scroll-to').click(function (e) {
		var href = $(this).attr("href"),
		offsetTop = href === "#" ? 0 : $(href).offset().top;
		$('html, body').stop().animate({
			scrollTop: offsetTop 
		}, 300);
		return false;
	});
	
	$('.testimonials-item').each(function() {
		$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')').find('> img').hide();
	});

	$('.testimonials-slide').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		fade: true,
		autoplay: true,
		delay: 700,
		autospeed: 2000
	});
});