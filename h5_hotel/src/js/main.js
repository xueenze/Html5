$(function() {
    var rem = new Fjjrem();
    rem.Fjjwidth = 640;
    rem.type = 'width';
    rem.Go();

    setTimeout(function() {

        $('body').css('opacity', '1');

        FastClick.attach(document.body);

    }, 100);

    //绑定滚动条点击事件
    $(".home-in li").click(function() {
        var imageUrl = $(this).find("div").css("background-image");

        console.log(imageUrl);

        $(".imageLayer").css({
            'display': 'block'
        });

        $(".imageDisplay").css({
            "background-image": imageUrl
        });
    });

    //关闭浮层
    $(".imageLayer").click(function() {
        $(this).css({
            'display': 'none'
        });
    });

    $('body').on('touchmove',
        function(event) {
            event.preventDefault();
        });

});