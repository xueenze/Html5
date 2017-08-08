define(function(require, exports, module) {

    var init = function(){
        $(".part5-nav-item").each(function(index) {
            $(this).click(function() {

                // 关闭其他active
                $(".part5-nav-item").each(function() {
                    $(this).removeClass("active");
                });

                // 打开当前点中项
                $(this).addClass("active");

            });
        });
    };

    exports.init = init;

});