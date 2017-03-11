$(document).ready(function(){
    //custom scroll
    Calc_scroll();
    $('.b_leaders .scroll').perfectScrollbar({useBothWheelAxes:true});
    $(window).resize(function(){
         $('.b_leaders .scroll').perfectScrollbar('update');
         Calc_scroll();
    });
    //tovar slider
    $('.slider').lightSlider({
        item: 1,
        controls: false,
        gallery: true,
        thumbItem: 3
    });
    //valute tab
    $('.b_valuta h6 span').click(function(){
        $('.b_valuta h6 span').addClass('azure');
        var n = $(this).index();
        $(this).removeClass('azure');
        $('.b_valuta h2').hide();
        $('.b_valuta h2').eq(n).show();
    });
    //sertificate slider
    var c_slider = $('.certificate-slider').lightSlider({
        item: 1,
        controls: false,
        pager: false
    });
    $('.arr-left').click(function(){
        c_slider.goToPrevSlide();
    });
    $('.arr-right').click(function(){
        c_slider.goToNextSlide();
    });
    //popover
    $('.tech_item').webuiPopover({
        trigger:'hover',
        placement:'auto',
        animation:'pop'
    });
});
function Calc_scroll(){
    var item = $('.b_leaders').find('.leaders_item');
    var n = item.length;
    var width = item.width()+200;
    $('.b_inside_scroll').css('width',n*width+'px');
}
