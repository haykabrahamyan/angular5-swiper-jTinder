$(function () {

    $('#slide-submenu').on('click', function () {
        $(this).closest('.list-group').fadeOut('slide', function () {
            $('.mini-submenu').fadeIn();
            $('.swiper-wrapper, .cart, .swiper-pagination, .tabs, .chat-item').fadeIn();
        });

    });

    $('.mini-submenu').on('click', function () {
        $(this).next('.list-group').toggle('slide');
        $('.mini-submenu').hide();
        $('.swiper-wrapper, .cart, .swiper-pagination, .tabs, .chat-item').hide();
    });



    $("#tinderslide").jTinder({
        // dislike callback
        onDislike: function (item) {
            // set the status text
            $('#status').html('Dislike image ' + (item.index() + 1));

        },
        // like callback
        onLike: function (item) {
            // set the status text
            $('#status').html('Like image ' + (item.index() + 1));
        },
        animationRevertSpeed: 200,
        animationSpeed: 400,
        threshold: 2,
        likeSelector: '.like',
        dislikeSelector: '.dislike'
    });

    /**
     * Set button action to trigger jTinder like & dislike.
     */
    $('.actions .like, .actions .dislike').click(function (e) {
        e.preventDefault();
        $("#tinderslide").jTinder($(this).attr('class'));
    });


});
