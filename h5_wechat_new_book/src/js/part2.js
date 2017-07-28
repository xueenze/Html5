define(function(require, exports, module) {

    var init = function(){
        $(".part2-nav-item").each(() => {
            $(this).click(() => {
                console.log(1);
            });
        });
    };

    exports.init = init;

});