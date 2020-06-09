$(document).ready(function () {


    function onLoadFadeIn() {
        $('.tabs').animate({
            opacity: '1'
        }, 2000)
    }
    window.onload = onLoadFadeIn;

    $('.tabs').hover(function() {
        $('#topics_text').animate({
            height: '100%'
        })
    })

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



})