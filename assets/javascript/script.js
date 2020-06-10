$(document).ready(function () {


    function onLoadFadeIn() {
        $('.tabs').animate({
            opacity: '1'
        }, 1000)
    }
    window.onload = onLoadFadeIn;

    $('.tabs').hover(function () {
        $('#topics_text').animate({
            height: '100%'
        })
    })

    // hovers for tabs


    $('.history_tab').hover(function () {
        $(this).addClass('addShadow');
        $('.history_name').css('opacity', '1');
    })

    $('.speech_tab').hover(function () {
        $(this).addClass('addShadow');
        $('.speech_name').css('opacity', '1');
    })
    $('.news_tab').hover(function () {
        $(this).addClass('addShadow');
        $('.news_name').css('opacity', '1');
    })
    $('.watch_tab').hover(function () {
        $(this).addClass('addShadow');
        $('.watch_name').css('opacity', '1');
    })
    $('.business_tab').hover(function () {
        $(this).addClass('addShadow');
        $('.business_name').css('opacity', '1');
    })

    // History tab Click

    $('.history_tab').click(function () {
        $('.topics_text_wrap').fadeOut('slow', function () {
            location.href = '#history_wrap';

        })

    })

    // History Section Timeline

    $('.clickhere').click(function() {
        $('.timeline_item').animate({
            opacity: '0'
        }, function() {
            $('.timeline_item').animate({
                opacity: '1'
            }, 1000);
            location.href = '#toHere';
        })
    })

})