define(function(require, exports, module) {

    var init = function(){
        $(".part2-nav-item").each(function(index) {
            $(this).click(function() {

                // 关闭其他active
                $(".part2-nav-item").each(function() {
                    $(this).removeClass("active");
                });
                
                var currentIndex = index;

                $(".part2-content-item").each(function(index) {
                    if(currentIndex == index){
                        $(this).removeClass("dn");
                        $(this).addClass("rel");
                    }else{
                        $(this).removeClass("rel");
                        $(this).addClass("dn");
                    }
                });

                // 打开当前点中项
                $(this).addClass("active");

            });
        });
    };

    exports.init = init;

});