//载入CSS
require('../css/page.scss');
var $ = require('jquery');

//页面导航栏点击事件方法
window.togglePage = function(page){
    var header = $('#header-wrap');
    var home = $('#home');
    var description = $('#description');
    var header_nav_description = $('#header-nav-description');
    var slider_active = $('#slider-active');
    
    //点击首页
    if(page == 'home'){
        description.css({'display':'none'});
        home.css({'display':'block'});
        $(window).scrollTop(0);
        slider_active.removeAttr('style');
        header_nav_description.css({'font-weight':'200'});
        header.css({'background-color':'#414966','opacity':0.05});
    }

    //点击说明
    if(page == 'description'){
        home.css({'display':'none'});
        description.css({'display':'block'});
        $(window).scrollTop(0);
        header.css({'background-color':'#fff','opacity':1});
        header_nav_description.css({'font-weight':'400'});
        slider_active.css({'width':'100%'});
    }
};

window.onscroll = function(){
    var description = $('#description');
    var header = $('#header-wrap');
    var st = $(window).scrollTop();

    if(st <= 0){
        if(description.css('display') == 'none'){
            header.css({'background-color':'#414966','opacity':0.05});
        }else{
            header.css({'background-color':'#fff'});
            header.css({'opacity':1});
        }
    }else if(st <= 100){
        header.css({'background-color':'#fff'});
        header.css({'opacity':Math.min(st, 96) / 90});
    }else if(st > 100){
        header.css({'background-color':'#fff'});
    }
}

