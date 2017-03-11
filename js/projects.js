$(document).ready(function(){
    var slider_1 = $('.inside_slider_1').lightSlider({
        item:1,
        controls:false,
        pager:false,
//        loop:true,
    });
    var slider_2 = $('.inside_slider_2').lightSlider({
        item:1,
        controls:false,
        pager:false,
//        loop:true,
    });
    var slider_3 = $('.inside_slider_3').lightSlider({
        item:1,
        controls:false,
        pager:false,
//        loop:true,
    });
    var slider_4 = $('.inside_slider_4').lightSlider({
        item:1,
        controls:false,
        pager:false,
//        loop:true,
    });
    var current = 0;
    $('.sl_tab').addClass('after_load');
    $('.arr-left').click(function(){
        Prev();
    });
    $('.arr-right').click(function(){
        Next();
    });
    $("body").keydown(function(e) {
        if(e.keyCode == 37) {
            Prev();
        }
        else if(e.keyCode == 39) {
            Next();
        }
    });
    function Prev(){
        if(current==0){
            slider_1.goToPrevSlide();
        } else if(current==1){
            slider_2.goToPrevSlide();
        } else if(current==2){
            slider_3.goToPrevSlide();
        } else{
            slider_4.goToPrevSlide();
        }
    }
    function Next(){
        if(current==0){
            slider_1.goToNextSlide();
        } else if(current==1){
            slider_2.goToNextSlide();
        } else if(current==2){
            slider_3.goToNextSlide();
        } else{
            slider_4.goToNextSlide();
        }
    }
    //sliders tab
    $('.b_thumbs img').click(function(){
        $('.b_thumbs img').removeClass('current');
        var n = $(this).addClass('current').index();
        current=n;
        $('.sl_tab').removeClass('current').eq(n).addClass('current');
    });
    $('.gallery').lightGallery({
        selector: 'a'
    });
});
