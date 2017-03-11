$(document).ready(function(){
    $('.slider').lightSlider({
        item:1,
        controls:false,
        pager:false,
        slideMargin:1,
        auto:true,
        pause:6000,
        loop:true
    });
    var slider = $('.slider_x4').lightSlider({
        item:1,
        controls:false,
        pager:false,
        loop:true
    });
    $('#arr-prev').click(function(){
       slider.goToPrevSlide();
    });
    $('#arr-next').click(function(){
       slider.goToNextSlide();
    });
    setTimeout(function(){
        $(".chat_text").typed({
            strings: ["Добрый день, меня зовут Валентин и я сейчас онлайн. <br>Могу я Вас проконсультировать?"],
            typeSpeed: 0
        });
    },5000);
     //tabs
    $('.tab').click(function(){
        $('.tab').removeClass('active');
        $(this).addClass('active');
        var n = $(this).index();
        $('.b_tab').removeClass('current');
        $('.b_tab').eq(n).addClass('current');
        if (window.matchMedia('(max-width: 768px)').matches) {
            var top = $('.tab_body').offset().top;
            $('body,html').animate({scrollTop: top}, 500);
        }
    });
    if (window.matchMedia('(max-width: 768px)').matches) {
        $('.mb').lightSlider({
            item:1,
            controls:false,
            slideMargin:1
        });
    }
});
