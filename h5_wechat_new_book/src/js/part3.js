define(function(require, exports, module) {
    var init = function() {
        $(".vote-btn").each(function() {
            $(this).click(function() {
                $("#pop").removeClass("dn");
            });       
        });
    };

    exports.init = init;

});