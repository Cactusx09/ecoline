$(document).ready(function(){
    var slider = $('.slider').lightSlider({
        controls: false,
        pager: false,
        enableDrag: false,
        item: 1,
        adaptiveHeight: true
    });
    $('.item_1 .btn').click(function(){
        var n = $('.item_1 input').length, count=0;
        $($(".item_1 input").get().reverse()).each(function(){
            if($(this).val()==''){
                $(this).trigger('focus');
                count++;
                return;
            }
            else if(count<n-2){
                Next(1);
            }
        });
    });
    $('.item_2 .btn').click(function(){
        Next(2);
    });
    $('.item_2 .btn').click(function(){
        Next(2);
    });
    $('.item_3 .btn').click(function(){
        Next(3);
    });
    $('.box').click(function(){
        var n = $(this).index(), count=0;
        $('.box img').each(function(){
            count++;
            $(this).attr('src','../images/calculator/category/'+count+'.png');
        });
        $(this).find('img').attr('src','../images/calculator/category/check-'+n+'.png');
        $(this).find('input').prop('checked',true);
    });
    $('.box_2').click(function(){
        var n = $(this).index(), count=0;
        $('.box_2 img').each(function(){
            count++;
            $(this).attr('src','../images/calculator/placement/'+count+'.png');
        });
        $('.box_2').removeClass('choosed');
        $(this).addClass('choosed').find('img').attr('src','../images/calculator/placement/check-'+n+'.png');
        $(this).find('input').prop('checked',true);
    });
    $('button.blue').click(function(){
        $('.popup.thnx, .overlay').addClass('visible');
    });
    $('input[type="range"]').each(function(){
        var el = $(this);
        el.rangeslider({
            polyfill: false,
            onSlide: function(position, value) {
                el.closest('.pl0').find('span.azure').text(value);
            }
        });
    });
    function Next(n){
        $('.step').eq(n).addClass('current');
        $('.step').eq(n-1).addClass('done');
        $('.item_'+n+' .btn').addClass('current');
        slider.goToSlide(n);
    }
});
