$(document).ready(function(){
    //hamburger
    $('.hamb_nav').click(function(){
        $('.header_nav').addClass('visible');
    });
    $('.close_nav').click(function(){
        $('.header_nav').removeClass('visible');
    });
    //submenu
    $('.b_sub_link a').click(function(e){
        e.preventDefault();
        var n = $(this).index();
        if($('.header_submenu_item').eq(n).hasClass('active')){
            $('.header_submenu_item').removeClass('active');
            $('.b_sub_link a').removeClass('active');
        } else{
            $('.b_sub_link a').removeClass('active');
            $(this).addClass('active');
            $('.header_submenu_item').removeClass('active');
            $('.header_submenu_item').eq(n).addClass('active');
        }
    });
    //submenu inside
    $('.b_submenu li').hover(function(){
        $('.b_submenu li').removeClass('current');
        $(this).addClass('current');
        var n = $(this).index();
        var item = $(this).closest('.header_submenu_item').find('.submenu_item');
        item.removeClass('current');
        item.eq(n).addClass('current');
    });
    //popups
    $('.open_call').click(function(e){
        e.preventDefault();
        $('.popup.call, .overlay').addClass('visible');
        $('.popup.call input').trigger('focus');
    });
    $('.open_req').click(function(e){
        e.preventDefault();
        $('.popup.req, .overlay').addClass('visible');
        $('.popup.req input[name="name"]').trigger('focus');
    });
    $('.open_chat').click(function(e){
        e.preventDefault();
        $('.popup.chat, .overlay').addClass('visible');
        $('.popup.chat input[name="name"]').trigger('focus');
    });
    $('.open_zak').click(function(e){
        e.preventDefault();
        $('.popup.zak, .overlay').addClass('visible');
        $('.popup.zak input[name="name"]').trigger('focus');
    });
    $('.open_com').click(function(e){
        e.preventDefault();
        $('.popup.com, .overlay').addClass('visible');
        $('.popup.com input[name="mail"]').trigger('focus');
    });
    $('.open_ofe').click(function(e){
        e.preventDefault();
        $('.popup.ofe, .overlay').addClass('visible');
        $('.popup.ofe input[name="mail"]').trigger('focus');
    });
    $('.close_pop, .overlay').click(function(){
        $('.popup, .overlay').removeClass('visible');
        $('aside,.item_aside_2,.hamb_aside_2,.hamb_aside').removeClass('opened');
    });

    //tabs article
    $('.b_tab_nav .tab').click(function(){
        var n = $(this).index();
        var b_parent = $(this).closest('.g_tab');
        b_parent.find('.b_tab_bot .tab').removeClass('current');
        b_parent.find('.b_tab_nav .tab').removeClass('current');
        $(this).addClass('current');
        b_parent.find('.b_tab_bot .tab').eq(n).addClass('current');
    });

    //mask
    $('input[name="phone"]').mask('+7 (999) 999-99-99');

    //validate
    $("form").each(function (index) {
        var it = $(this);
        var email = false, name = true, phone = true;
        if(it.hasClass('email-required')){
            email = true;
            phone = false;
            name = false;
        }
        it.validate({
            rules: {
                name: {required: name},
                phone: {required: phone},
                mail: {required: email},
                org: {required: false},
                coment: {required: false}
            },
            messages: {

            },
            errorPlacement: function (error, element) {

            },
            submitHandler: function (form) {
                $.ajax({
                    type: "POST",
                    url: "../mail.php",
                    data: it.serialize()
                }).done(function () {
                    $('.popup').removeClass('visible');
                    $('.popup.thnx, .overlay').addClass('visible');
                    setTimeout(function(){
                        $('.popup.thnx, .overlay').removeClass('visible');
                    },3200);
                });
                return false;
            },
            success: function () {

            },
            highlight: function (element, errorClass) {
                $(element).addClass('error');
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).removeClass('error');
            }
        });
    });

});
