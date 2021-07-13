var elementTop = $('.navegador').offset().top;

$(window).scroll(function(){
    if( $(window).scrollTop() >= elementTop){
        $('body').addClass('nav_fixed');
    }else{
        $('body').removeClass('nav_fixed');
    }
});

var elementTop = $('.navegador').offset().top;

$(window).scroll(function(){
    if( $(window).scrollTop() >= elementTop){
        $('body').addClass('nav_fixed2');
    }else{
        $('body').removeClass('nav_fixed2');
    }
});

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'

    }
    });
});
