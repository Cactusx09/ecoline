$(document).ready(function(){
    $('.hamb_aside').click(function(){ $('.hamb_aside,aside').toggleClass('opened');
        $('.hamb_aside_2, .item_aside_2').removeClass('opened');
        $('.overlay').addClass('visible');
    });
    $('.hamb_aside_2').click(function(){
        $('.hamb_aside_2, .item_aside_2').toggleClass('opened');
        $('.hamb_aside, aside').removeClass('opened');
        $('.overlay').addClass('visible');
    });
    if (window.matchMedia('(min-width: 992px)').matches) {
        $('aside .scroll, .item_aside_2 .scroll').perfectScrollbar('destroy');
    } else{
        $('aside .scroll, .item_aside_2 .scroll').perfectScrollbar();
    }
    $(window).resize(function(){
         if (window.matchMedia('(min-width: 992px)').matches) {
             $('aside .scroll, .item_aside_2 .scroll').perfectScrollbar('destroy');
         } else{
             $('aside .scroll, .item_aside_2 .scroll').perfectScrollbar('update');
         }
    });
});
