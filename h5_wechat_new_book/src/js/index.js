(function (global, factory) {

    global.yueWenActivityInstance = factory;

}(this,function(config){
    /*
     * 几个基本的跳转APP的链接，如果有一天用到了，那么请更新到yueWenActivity.js文件中的jssdk对象中去、
     * 这几个还没有专门去找，所以先放在这里
     * 徽章页  "http://3gtest.if.qidian.com:9002/Atom.axd/Web/UserCenter/GetBadgeTypeList"
     * 指定H5页面："QDReader://activity.qidian.com/2016/58192489"
     * */

    var body = $("body").eq(0),
        wrapper = $("#wrapper"),
        initObject = null;

    /*
     * 平台的枚举值
     * iosApp = 0：IOS起点阅读客户端
     * androidApp = 1：Android起点阅读客户端
     * iosWap = 2：IOS的M站，其他APP内部打开，归于此类
     * androidWap = 3：Android的M站，
     * pc = 4：PC浏览器
     * iosWechat = 5：IOS的微信打开
     * androidWechat = 6：Android的微信打开
     * iosQQReader = 7： IOS的QQ阅读
     * AndroidQQReader = 8；Android的QQ阅读
     * */
    var platforms = yueWenActivity.platforms;

    /*
     * 活动状态
     * 0：正常，表示活动正在进行
     * 1：活动未开始
     * 2：活动已结束
     * */
    var activityStatus = yueWenActivity.activityStatus;

    /*
     *
     * */
    var mBox = yueWenActivity.mBox;


    //活动的JS，第一步，要设置config，该步骤，必须要执行
    //不支持重复定义，所以请一次定义好该对象
    yueWenActivity.setConfig($.extend(config,{

        //容器，事件委托的父级元素，最好这里不要变化
        wrapper : body,

        //一些限制的配置
        limitOption : {

            //是否限制登陆态，如果必须登陆才可以玩，那么这里设置为true，否则设置为false，默认值为true
            login : true,

            appVersion : config.appVersion || {
                "IOS" : "3.8.0",
                "Andriod" : "6.4.0"
            }
        },

        //分享相关的，用于微信分享和APP的分享
        shareOption : $.extend({
            //微信公众号
            id : "qidianzhongwenwang"

        },config.shareOption),

        //弹窗提示的几个默认的提示信息，这几个属性，请务必设置
        tips : {
            "limitApp" : {
                "icon" : "",
                "close" : true,
                "type" : "confirm",
                "title" : "换个姿势",
                "content" : "<p>升级后才能参与活动哦~</p>",
                "btns" : {
                    "leftBtn" : {
                        "name" : "放弃",
                        "type" : "closePop"
                    },
                    "rightBtn" : {
                        "name" : "升级",
                        "type" : "downApp"
                    }
                }
            },

            //在非APP内，操作的时候
            "justApp" : {
                "icon" : "",
                "close" : true,
                "type" : "alert",
                "title" : "换个姿势",
                "content" : "<p>去APP看更多书单吧</p>",
                "btns" : {
                    "rightBtn" : {
                        "name" : "好哒",
                        "type" : "openApp"
                    }
                }
            },

            //活动未开始时，提示该条信息
            unBegin : {
                "icon" : "",
                "close" : true,
                "type" : "alert",
                "title" : "敬请期待",
                "content" : "<p>"+config.msgTips.unBeginTip+"</p>",
                "btns" : {
                    "leftBtn" : {
                        "name" : "好",
                        "type" : "closePop"
                    }
                }
            },


            //活动已结束时，提示该条信息
            hasEnd : {
                "icon": "",
                "close": true,
                "type": "alert",
                "title": "你来晚啦",
                "content": "<p>" + config.msgTips.hasEndTip + "</p>",
                "btns": {
                    "leftBtn": {
                        "name": "好",
                        "type": "zhuli"
                    }
                }
            },

            //一些系统的错误提示
            //内容区域请务必使用"{{msg}}"代替，之后调用该方法时，这部分内容，会根据内容被替换掉的。
            sysError : {
                "icon": "",
                "close": false,
                "type": "alert",
                "title": "系统提示",
                "content": "<p>{{msg}}</p>",
                "btns": {
                    "rightBtn": {
                        "name": "知道啦",
                        "type": "closePop"
                    }
                }
            }


        },

        //下载APP相关的链接
        downAppUrl : {
            //Mobile端的地址：
            mobile : "http://pages.book.qq.com/pages/qidian/qddown/qdreader.htm",

            //PC端的地址：
            pc : "http://www.yuewen.com/app.html#appqd"
        }


    }));

    /*
     * options支持的参数
     * type : alert/confirm,
     * close : true/false,//是否显示右上角的关闭按钮
     * icon : dianlaoshi/fengye/biyezheng/fudai/wangxiaomei/xueweizheng/zhoudaqiang
     * title : 名称用的图片，请在CSS对应着使用
     * content : 内容区域的展示，可以是html代码
     * btns : {
     *   leftBtn: {
     *       name:"显示的名称",
     *       type:"data-click"上的取值
     *   },
     *   rightBtn:{
     *       name:"显示的名字",
     *       type:"data-click"上的值
     *   }
     * }
     * */

    //初始化事件
    initObject = yueWenActivity.initActivity();

    var wrapperClickEvent = initObject.wrapperClickEvent,
        tips = initObject.tips,
        _justApp = initObject.justApp,
        _limitApp = initObject.limitApp,
        _activityStatus = initObject.activityStatus,
        _sysError = initObject.sysError,
        _openAppUrl = initObject.openAppUrl,
        jssdk = initObject.jssdk,
        sysError = initObject.sysError;

    //一个BUG，认为是jQuery的BUG
    //IOS系统下，在某些情况下，事件委托不会被触发，所以这里必须再绑一层事件才可以。
    //先这样解决这个问题，慢慢研究一下源码。
    (function(){
        $("#wrapper").on("click",function(){});
        $("#pop").on("click",function(){});
    })();

    //打开APP
    (function(){
        function _openApp(){
            var href = "QDReader:"+location.href.split(":")[1];
            _openAppUrl(href);

            mBox.hide();
        }
        wrapperClickEvent.add("openApp",_openApp);

        //登陆的处理
        wrapperClickEvent.add("login",jssdk.login);
    })();

    //未登陆时的提示
    function _needLoginIn(){
        var loginTip = {
                "icon" : "",
                "close" : true,
                "type" : "alert",
                "title" : "留个名吧",
                "content" : "<p>登录留名后才能愉快玩耍哦</p>",
                "btns" : {
                    "rightBtn" : {
                        "name" : "好哒",
                        "type" : "login"
                    }
                }
            },
            isLogin = config.isLogin;

        _needLoginIn = function(){
            if(isLogin === false){
                mBox.custom(loginTip);
                return false;
            }

            return true;
        };

        return _needLoginIn();
    }

    //系统错误，提示框
    function _ajaxErr(){
        sysError("操作失败，请稍后重试~");
    }

    //去书籍详情页
    (function(){
        var bookInfo = config.bookInfo,
            qdId = bookInfo.qdId,
            csId = bookInfo.csId;

        function _shuji(){
            jssdk.bookUrl(qdId,csId);

            return false;
        }
        wrapperClickEvent.add("zhuli",_shuji);

        function _shuji1(){

            _clickStatistics("zhuli");

            jssdk.bookUrl(qdId,csId);

            return false;
        }
        wrapperClickEvent.add("zhuli1",_shuji1);

        function _shuji2(){

            _clickStatistics("xinshu");

            jssdk.bookUrl(qdId,csId);

            return false;
        }
        wrapperClickEvent.add("zhuli2",_shuji2);

        function _toBookUrl(){

            _clickStatistics("zhuidashen");

            jssdk.bookUrl($(this).attr("data-id"),"");

            return false;
        }
        wrapperClickEvent.add("toBookUrl",_toBookUrl);


    })();

    //针对于本项目的一个TAB切换模块
    function _navTab(name,callback){
        var clickType = name + "Nav",
            area = $("." + name),
            navs = area.find("."+name+"-nav-item"),
            items = area.find("."+name+"-content-item");

        if(typeof callback != "function"){
            callback = function(){}
        }

        function _cb(){
            var _this = $(this),
                index = _this.index(),
                src =null;

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
        wrapperClickEvent.add(clickType,_cb);
    }

    //part2部分的tab切换，和书单切换
    (function(){
        //navTab的切换
        _navTab("part2");

        var btn = $("#loadShuDan"),
            ajaxOpiton = {
                url : "/ajax/NewBookV2/bookList",
                success : _ajaxSucc,
                error : _ajaxErr,
                type : "get"
            },
            content = null;

        function _tmp(data){
            var list = data.booksId,
                html = '<li class = "part2-item3" data-click = "qushudan" data-id = "'+data.id+'">',
                i = 0,
                len = list.length,
                one = null;


            html += '<ul class = "rel book-lists">';

            for(i;i<len;i++){
                one = list[i];
                html += '<li class = "book" data-rank = "'+(i+1)+'">';
                html += '<a href = "javascript:;">';
                html += '<img class = "wp100" src = "//qidian.qpic.cn/qdbimg/349573/'+one+'/180"/>';
                html += '</a>';
                html += '</li>';
            }

            html += '</ul>';

            html += '<h3 class = "name">'+(data.bookListName || "&nbsp;") +'</h3>';

            html += '</li>';

            return html;
        }

        //填充数据
        function _fill(list){

            if(!(list instanceof Array)){
                return "";
            }

            var i = 0,
                len = list.length,
                html = "";

            for(i;i<len;i++){
                html += _tmp(list[i]);
            }

            if(!content){
                content = $(".part2-item3-content");
            }

            content.html(html);
        }

        //成功之后
        function _ajaxSucc(json){
            btn.removeClass("active");

            if(json.code != "0"){
                sysError(json.msg);
                return "";
            }

            _fill(json.data);

        }

        //ajax请求失败
        function _ajaxErr(){
            btn.removeClass("active");
        }

        function _shudanqiehuan(){
            if(btn.hasClass("active")){
                return "";
            }

            btn.yuewenAjax(ajaxOpiton);

            btn.addClass("active");

        }
        wrapperClickEvent.add("shudanqiehuan",_shudanqiehuan);

        //加载成功之后，直接去load一次书单
        _shudanqiehuan();

        //跳转到书单的操作
        function _qushudan(){

            _clickStatistics("shudan");

            if(!_justApp()){
                return false;
            }

            jssdk.recomBookList($(this).attr("data-id"));

        }
        wrapperClickEvent.add("qushudan",_qushudan);

        //这里我们处理用户点击了作者描述中的书籍信息时的操作
        function _clickBookInDesc(){
            $(".part2-item2-detail").find("a").each(function(){
                console.log($(this).attr("href"));
            });
        }

        _clickBookInDesc();

    })();

    //part3部分的投票
    (function(){
        var ajaxOption = {
            url : "/ajax/NewBookV2/addVote",
            success : _ajaxSucc,
            error : _ajaxErr
            },
            voteInfo = config.voteInfo,
            items = null,
            allCount = 0,
            voteCode = "19701";

        function _update(index,item){

            var ele = items.eq(index),
                voteCount = voteInfo[index].voteCount || 0,
                scale = !allCount?0:((voteCount*100/allCount)+"%")

            ele.find(".vote").html(voteCount);
            ele.find(".percent").css("width",scale);
        }
        function _upDatePercent(){
            if(!items){
                items = $(".part3-item");
            }

            var i = 0,
                len = voteInfo.length,
                one = null;

            allCount = 0;

            for(i=0;i<len;i++){
                allCount += (voteInfo[i].voteCount - 0);
            }

            $.each(items,_update);

        }

        //初始化一次
        _upDatePercent();

        //投过了
        function _touguole(){
            var _goule = {
                "icon" : "",
                "close" : true,
                "type" : "alert",
                "title" : "投过啦",
                "content" : "<p>每天只能投一票<br/>改变心意了就明天再来吧~</p>",
                "btns" : {
                    "rightBtn" : {
                        "name" : "好的",
                        "type" : "closePop"
                    }
                }
            };

            _touguole = function(){
                mBox.custom(_goule);
            };

            _touguole();

        }

        function _ajaxSucc(json){
            var code = json.code;

            if(voteCode == code){
                _touguole();
                return false;
            }

            if(code != "0"){
                sysError(json.msg);
                return "";
            }

            voteInfo[($(this).attr("data-id")-1)].voteCount = json.data.voteNum

            _upDatePercent();

        }

        function _voteCb(){

            //只限定活动时间，和登陆状态
            if(!_needLoginIn() || !_activityStatus()){
                return false;
            }

            var _obj = $(this);
            ajaxOption.data = "index="+_obj.attr("data-id");

            _obj.yuewenAjax(ajaxOption);

        }
        wrapperClickEvent.add("voteBtn",_voteCb);
    })();

    //part4输入信息部分的逻辑
    (function(){
        var input = $("#part4TitleInput"),
            inputTop = 0,
            textarea = $("#part4TextArea"),
            textareaTop = 0,
            hasSendCode = "19708",
            inputLen = 30,
            textLen = 200,
            keyType = config.uA == platforms.pc ? "keyup" : "input",
            hideInputType = "hideInput",
            hideTextType = "hideTextArea";

        function _inputFocus(e){

            //判断登录态和活动状态
            if(!_needLoginIn()){
                input.blur();
                return false;
            }

            if(!inputTop){
                inputTop = input.offset().top - 50;
            }

            _bodyScrollTop(inputTop,200);

            return false;
        }
        input.on("click",_inputFocus);

        function _textAreaFocus(e){
            //判断登录态和活动状态
            if(!_needLoginIn()){
                textarea.blur();
                return false;
            }

            if(!textareaTop){
                textareaTop = textarea.offset().top - 50;
            }

            _bodyScrollTop(textareaTop,200);

            return false;
        }
        textarea.on("click",_textAreaFocus);

        var submitForm = $("#submitForm"),
            ajaxOptions = {
                url : "/ajax/NewBookV2/comment",
                success : _ajaxSucc,
                error : _ajaxErr
            };

        //点击聚焦input，并且隐藏mBox
        function _hideInput(){
            mBox.hide();
            input.focus();
        }
        wrapperClickEvent.add(hideInputType,_hideInput);

        //点击聚焦input，并且隐藏mBox
        function _hideTextArea(){
            mBox.hide();
            textarea.focus();
        }
        wrapperClickEvent.add(hideTextType,_hideTextArea);

        //发表成功
        function _fabiaochenggong(){
            var chenggong = {
                "icon" : "",
                "close" : true,
                "type" : "alert",
                "title" : "发表成功",
                "content" : "<p>"+config.msgTips.sendSucc+"</p>",
                "btns" : {
                    "rightBtn" : {
                        "name" : "好的",
                        "type" : "closePop"
                    }
                }
            };

            _fabiaochenggong = function(){
                mBox.custom(chenggong);
            };

            _fabiaochenggong();
        }

        //发表过了
        function _fabiaoguole(){
            var faguole = {
                "icon" : "",
                "close" : true,
                "type" : "alert",
                "title" : "发表过啦",
                "content" : "<p>每天最多发表5次<br/>这么有想法明天再来吧~</p>",
                "btns" : {
                    "rightBtn" : {
                        "name" : "好的",
                        "type" : "closePop"
                    }
                }
            };

            _fabiaoguole = function(){
                mBox.custom(faguole);
            };

            _fabiaoguole();

        }

        function _ajaxSucc(json){
            var code = json.code;

            if(hasSendCode == code){
                _fabiaoguole();
                return false;
            }

            if(code != "0"){
                sysError(json.msg);
                return "";
            }

            insertNewComment(json.data);

            //清空数据
            input.val("");
            textarea.val("");
            //发表成功
            _fabiaochenggong();

        }

        function _errorTip(content,type){
            var error = {
                "icon" : "",
                "close" : true,
                "type" : "alert",
                "title" : "斟酌一下",
                "content" : "<p></p>",
                "btns" : {
                    "rightBtn" : {
                        "name" : "好哒",
                        "type" : "closePop"
                    }
                }
            };

            _errorTip = function (content,type){
                error.content = "<p>"+content+"</p>";
                error.btns.rightBtn.type = type;
                mBox.custom(error);
            };

            _errorTip(content,type);
        }

        //获取输入数据的长度
        function _getLen(str){
            str = str.replace(/[^\u4e00-\u9fa5]{2}/g,"a");

            return str.length;
        }

        function _check(){
            var inputV = input.val(),
                iLen = _getLen(inputV),
                textV = textarea.val(),
                tLen = _getLen(textV);

            if(iLen === 0){
                _errorTip("标题都还没输呢， 快加上吧~",hideInputType);
                return false;
            }else if(iLen < 4){
                _errorTip("标题字数有点少，再想想吧~",hideInputType);
                return false;
            }else if(iLen > inputLen){
                _errorTip("标题字数太多啦，再想想吧~",hideInputType);
                return false;
            }

            if(tLen === 0){
                _errorTip("正文都还没输呢，快加上吧~",hideTextType);
                return false;
            }else if(tLen < 20){
                _errorTip("正文字数有点少，再想想吧~",hideTextType);
                return false;
            }else if(tLen > textLen){
                _errorTip("正文字数太多啦，再想想吧~",hideTextType);
                return false;
            }

            return "title="+_trim(inputV)+"&content="+_trim(textV);

        }

        function _trim(v){
            return encodeURIComponent(v);
        }

        function _submit(){
            //只有登陆状态，活动期间，才可以评论
            if(!_needLoginIn() || !_activityStatus()){
                return false;
            }

            var data = _check();
            if(data === false){
                return false;
            }

            ajaxOptions.data = data;
            submitForm.yuewenAjax(ajaxOptions);

            return false;
        }
        submitForm.on("submit",_submit);

        function _lengthLimit(ele,len){
            var l = _getLen(ele.val());

            if(l > len){
                ele.addClass("active");
            }else{
                ele.removeClass("active");
            }
        }
        function _checkInput(){
            _lengthLimit(input,inputLen);
        }
        input.on(keyType,_checkInput);

        function _checkTextArea(){
            _lengthLimit(textarea,textLen);
        }
        textarea.on(keyType,_checkTextArea);

    })();

    //part5评论展示模块
    var insertNewComment = (function(){
        var activityTab = $(".part5-nav-item").filter(".active"),
            ajaxData = {
                size : 0,
                lastId : 0,
                type : (activityTab.attr("data-type") || "hot"),
            },
            part5 = $(".part5"),
            ajaxOpitons = {
                url : "/ajax/NewBookV2/list",
                success : _ajaxSucc,
                error : _ajaxErr,
                type : "get",
                data : ajaxData
            },
            contents = part5.find(".part5-nav-content"),
            loadMore = contents.find(".load-msg"),
            loadOption = {
                "load" : {
                    type : "loadMore",
                    name : "更多"
                },
                "loadding" : {
                    type : '',
                    name : '<span class = "load"></span>正在加载...'
                },
                "fail" : {
                    type : "loadFail",
                    name : "加载失败，点击重试..."
                },
                "end" : {
                    type : "",
                    name : "还没有评论，赶紧去发一条吧~"
                },
                "login" : {
                    type : "login",
                    name : '留名后才能来畅想哦，点击去<a class="link" data-click="login" href="javascript:;" title="登录">登录</a>吧'
                }
            },
            cacheType = "",
            isLogin = config.isLogin;

        _navTab("part5",_initLoad);

        var areaLoadding = {
            show : function(){
                part5.addClass("active");
            },
            hide : function(){
                part5.removeClass("active");
            },
            isShow : function(){
                return part5.hasClass("active");
            }
        };

        function _notLogin(){
            ajaxData.type = cacheType;
            ajaxData.lastId = 0;
            ajaxData.size = 0;
            loadMore.prevAll(".item").remove();
            _setLoadTxt("login");
        }

        function _initLoad(index){
            //这里担心，以后会增加逻辑，所以把ajax的请求，单独放到"_begin"方法中去
            cacheType = $(this).attr("data-type");

            if(isLogin === false && cacheType == "my"){
                _notLogin();
                return "";
            }

            if(ajaxData.size){
                areaLoadding.show();
            }

            //设置数据
            ajaxData.type = cacheType;
            ajaxData.lastId = 0;
            ajaxData.size = 0;

            _begin();

        }

        function _setLoadTxt(type){
            var info = loadOption[type] || loadOption.load;

            //如果已经结束，但是却没有任何一条评论的话，那么直接显示，没有评论
            if(type ==  "end" && ajaxData.size !== 0){
                loadMore.addClass("dn");
            }else{
                loadMore.removeClass("dn");
            }

            loadMore.attr("data-click",info.type).html(info.name);
        }

        function _update(list){
            var len = list.length,
                lastList = list[len-1];

            if(len){
                loadMore.before(_tmp(list));
                ajaxData.size += len;
                ajaxData.lastId = lastList.id;
            }

        }

        function dateFormat(options){
            //options支持两个参数
            //format，返回字符串的格式,"yyyy/mm/dd hh:ii",
            //除了其中的字母之外，标点，分隔符等，可以随意修改
            //time为一个有效的时间，可以是字符串，可以是对象
            //如果只传入一个参数，那么该参数为format的值

            var format = options.format,
                t = new Date(options.time),
                tf = dateFormat.toFormatNum;

            return format.replace(/yyyy|mm|dd|hh|ii|ss/g, function(a){
                switch(a){
                    case 'yyyy':
                        return tf(t.getFullYear());
                        break;
                    case 'mm':
                        return tf(t.getMonth() + 1);
                        break;
                    case 'dd':
                        return tf(t.getDate());
                        break;
                    case 'hh':
                        return tf(t.getHours());
                        break;
                    case 'ii':
                        return tf(t.getMinutes())
                        break;
                    case "ss":
                        return tf(t.getSeconds());
                        break;
                }
            });
        }
        //把数字转换为符合时间的两位字符串
        dateFormat.toFormatNum = function(num){
            return (num < 10 ? '0' : '') + num;
        };

        function _getDate(date){
            var secs = (new Date()).getTime()/1000 - date;

            if(secs > 2*24*60*60 || secs <= 0){
                return dateFormat({
                    format : "yyyy年mm月dd日",
                    time : date*1000
                });
            }

            if(secs > 24*60*60){
                return Math.floor(secs/(24*60*60))+"天前";
            }else if(secs > 60*60){
                return Math.floor(secs/(60*60))+"小时前";
            }else if(secs > 60){
                return Math.floor(secs/60)+"分钟前";
            }else if(secs > 0){
                return Math.floor(secs)+"秒前";
            }
        }

        function _createEle(data){
            var html = "",
                photo = JSON.parse(data.extension).photo;

            html += '<li class="item ovh">';
            html += '<h3 class = "title ell">'+(data.title || "")+'</h3>';
            html += '<p class = "content">'+data.content+'</p>';
            html += '<div class = "ovh info">';

            if(photo){
                html += '<img class = "user-img l" src = "'+photo+'" />';
            }

            html += '<span class = "name l ell">'+(data.nickname || "")+'</span>';
            html += '<span class = "time l">'+_getDate(data.createdAt)+'</span>';
            html += '<span class = "praise r '+(data.isLiked?"active":"")+'" data-click = "dianzan" data-id = "'+data.id+'">'+data.likeNum+'</span>';
            html += '</div>';
            html += '</li>';

            return html;

        }

        //显示内容
        function _tmp(list){
            var html = "",
                i = 0,
                len = list.length;

            for(i=0;i<len;i++){
                html += _createEle(list[i]);
            }

            return html;

        }

        function _ajaxSucc(json){

            //如果是切换TAB，不管结果如何，都清理掉
            if(areaLoadding.isShow()){
                loadMore.prevAll(".item").remove();
            }

            areaLoadding.hide();

            if(json.code != "0"){
                _setLoadTxt(this,"fail");
                sysError(json.msg);
                return "";
            }

            var data = json.data;

            _update(data.list || []);

            if(data.end == "1"){
                _setLoadTxt("end");
            }else{
                _setLoadTxt("load");
            }

        }

        //load失败
        function _ajaxErr(){
            //如果是切换TAB，不管结果如何，都清理掉
            if(areaLoadding.isShow()){
                loadMore.prevAll(".item").remove();
            }

            areaLoadding.hide();
            _setLoadTxt("fail");
        }

        //开始请求
        function _begin(){

            loadMore.yuewenAjax(ajaxOpitons);

            _setLoadTxt("loadding");

        }

        //加载最新的一个
        _begin();

        //更多和继续加载使用同样的逻辑
        wrapperClickEvent.add(loadOption.load.type,_begin);
        wrapperClickEvent.add(loadOption.fail.type,_begin);

        function _insertNewComment(data){

            //只有最新和我的，才添加该条数据
            if(cacheType == "new" || cacheType == "my"){
                contents.children().eq(0).before(_createEle(data));

                ajaxData.size += 1;
            }
        }

        return _insertNewComment;

    })();

    //点赞和取消点赞
    (function(){
        var ajaxOptions = {
            url : "/ajax/NewBookV2/like",
            success : _ajaxSucc,
            error : _ajaxErr
        };

        function _yizanguo(){
            var yizan = {
                "icon" : "",
                "close" : false,
                "type" : "alert",
                "title" : "赞过啦",
                "content" : "<p>公平起见，不能重复点赞哦~</p>",
                "btns" : {
                    "rightBtn" : {
                        "name" : "好哒",
                        "type" : "closePop"
                    }
                }
            };

            _yizanguo = function(){
                mBox.custom(yizan);
            };

            _yizanguo();
        }

        function _ajaxSucc(json){
            if(json.code != "0"){
                sysError(json.msg);
                return "";
            }

            var _obj = $(this);

            _obj.addClass("active");

            _obj.html(_obj.text() -0 +1);

        }

        //开始
        function _begin(){

            //点赞需要登录
            if(!_needLoginIn() || !_activityStatus()){
                return "";
            }

            var _obj = $(this);

            if(_obj.hasClass("active")){
                _yizanguo();
                return "";
            }

            ajaxOptions.data = "id="+_obj.attr("data-id");
            _obj.yuewenAjax(ajaxOptions);

        }


        wrapperClickEvent.add("dianzan",_begin);
    })();

    //body的滚动
    function _bodyScrollTop(top,secs){
        if(!top){
            body.scrollTop(top);
        }else{
            body.animate({
                scrollTop:top
            }, secs , "linear");
        }
    }

    var _clickStatistics = (function (){

        var platfom = ["ios","android","wap","wap","pc","wap","wap"],
            userInfo = config.userInfo || {},
            activityId = config.activityId,
            ajaxOptions = {
                url : location.protocol+"//activity.qidian.com/qreport?path=qdactivity&activityid="+activityId+"&userid="+(userInfo.id || "")+"&version="+config.versionNum+"&platform="+platfom[config.uA]
            };

        //发出请求
        function _ajax(data){
            ajaxOptions.data = data;

            $.ajax(ajaxOptions);

        }

        //yyyy-mm-dd hh24:mi:ss
        function _getTime(){
            var date = new Date();

            return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
        }

        var clickType = {

            "zhuli" : "1",

            "xinshu" : "5",

            //tab1出现时
            "zhuidashen":"6",

            //tab2切换时
            "shudan":"7",

            "pv" : "11"

        };
        function _click(type){

            var tyName = clickType[type];

            if(!tyName){
                return "";
            }

            _ajax({
                logtime : _getTime(),
                p1 : clickType[type],
            });
        }

        //页面初始化
        _click("pv");

        return _click;

    })();

}));








