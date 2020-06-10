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
        $('.topics_text_wrap').fadeOut("slow", function () {
            location.href = '#history_wrap';

        })
        $('.up_arrow, .down_arrow').delay(1800).fadeIn('slow');

    })

    // History Section Timeline

    $('.down_arrow').click(function () {
        $('.timeline_item').animate({
            opacity: '0'
        }, function () {
            $('.timeline_item').animate({
                opacity: '1'
            }, 1000);
            location.href = '#toHere';
        })
    })

    $('.up_arrow').click(function () {
        $('.timeline_item').animate({
            opacity: '0'
        }, function () {
            $('.timeline_item').animate({
                opacity: '1'
            }, 1000);
            location.href = '#topOfTimeline';
        })
    })

    // BounceJS for timeline items

    $('.moorish_empire').click(function () {
        var bounce = new Bounce();
        bounce
            .rotate({
                from: 0,
                to: 0,
                duration: 1000,
                stiffness: 1
            })
            .scale({
                from: {
                    x: 1,
                    y: 1
                },
                to: {
                    x: 0.9,
                    y: 1.1
                },
                easing: "sway",
                duration: 1000,
                delay: 0,
                stiffness: 1
            })
            .translate({
                from: {
                    x: 0,
                    y: 0
                },
                to: {
                    x: 0,
                    y: 0
                },
                easing: "bounce",
                duration: 1000,
                delay: 30,
            })
            .applyTo(document.querySelectorAll(".moorish_empire_text"));
    })


    // Cursors


})

