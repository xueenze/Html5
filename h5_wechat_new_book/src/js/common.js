define(_function(require, exports, module) {

    //针对于本项目的一个TAB切换模块
    function navTab(name, callback) {
        var clickType = name + "Nav",
            area = $("." + name),
            navs = area.find("." + name + "-nav-item"),
            items = area.find("." + name + "-content-item"),

        if(typeof callback != "function") {
            callback = function(){}
        }

        function _cb(){
            var _this = $(this),
                index = _this.index(),
                src = null;

            if(_this.hasClass("active")){
                return false;
            }

            navs.removeClass("active");

            _this.addClass("active");

            items.addClass("dn");

            src = items.eq(index);
            src.removeClass("dn");

            callback.call(this,index,src);
        }
    }

    exports.navTab = navTab;
});