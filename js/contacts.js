$(document).ready(function(){
    //custom scroll
    Calc_scroll();
    $('.g_gallery .scroll').perfectScrollbar({useBothWheelAxes:true});
    $(window).resize(function(){
         $('.g_gallery .scroll').perfectScrollbar('update');
         Calc_scroll();
    });
    $(".b_gallery").lightGallery();
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [55.755574, 37.573856],
                zoom: 13
            }, {
                searchControlProvider: 'yandex#search'
            }),
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Компания ООО “EcoLine”'
            }, {
                iconLayout: 'default#image',
                iconImageHref: '../images/ico/baloon.png',
                iconImageSize: [52, 70],
                iconImageOffset: [-23, -72]
            });
        myMap.behaviors.disable('scrollZoom');3
        myMap.geoObjects.add(myPlacemark);
    });
});
function Calc_scroll(){
    var item = $('.b_gallery').find('.gallery_item');
    var n = item.length;
    var width = item.width()+16.9;
    $('.b_gallery').css('width',n*width+'px');
}
