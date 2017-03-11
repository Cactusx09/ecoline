$(document).ready(function(){
    //custom scroll
    Calc_scroll();
    $('.b_leaders .scroll').perfectScrollbar({useBothWheelAxes:true});
    $(window).resize(function(){
         $('.b_leaders .scroll').perfectScrollbar('update');
         Calc_scroll();
    });
    //input range
    $('input[type="range"]').each(function(){
        var el = $(this);
        el.rangeslider({
            polyfill: false,
            onSlide: function(position, value) {
                el.prev().text(value);
            }
        });
    });
    //aside filter
    $('.g_filter h5').click(function(){
        $(this).next().toggleClass('active');
        $(this).toggleClass('active');
    });
    $('.item .more').click(function(){
        $(this).closest('.item_content').toggleClass('full');
        $(this).toggleClass('active');
    });
    //center filter
    $('.filter_sort').click(function(e){
        e.preventDefault();
        $('.pop_sort').toggleClass('active');
    });
    $('.pop_sort a').click(function(){
        $('.filter_text').text($(this).text());
    });
});
function Calc_scroll(){
    var item = $('.b_leaders').find('.leaders_item');
    var n = item.length;
    var width = item.width()+130.8; $('.b_inside_scroll').css('width',n*width+'px');
}
