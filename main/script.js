$('.js_slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true
});

if (document.documentElement.clientWidth < 1014){
    $('body').on('click', '.burger', function(e){
        let mobileBurger = $(this);
        mobileBurger.toggleClass('active');
        $('.mobile__menu').toggleClass('active');
    });

    $('body').on('click', '.mobile__nav', function(e){
        let tabsBtn = $(this);
        let tabName = tabsBtn.attr('data-tab');

        $('.mobile__tab').removeClass('active');
        $('.mobile__tab').removeClass('active');
        
        tabsBtn.addClass('active');
        $('.mobile__tab[data-tab='+tabName+']').addClass('active');
    });
}