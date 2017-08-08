define(function(require, exports, module) {

    $(".pop-close").click(function() {
        if($("#pop").hasClass("dn")){
            $("#pop").removeClass("dn");
        }else{
            $("#pop").addClass("dn");
        }
    });

    var part2 = require("part2");
    part2.init();

    var part3 = require("part3");
    part3.init();

    var part5 = require("part5");
    part5.init();
});