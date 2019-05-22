// 模拟数据
var json = {
    noah: {
        title: "【阅文集团】NOAH系统",
        data: [{
            title: "1.配置原型",
            items: [{
                imageUrl: "images/NOAH/1.0/1.png",
                desc: "配置原型"
            }]
        }, {
            title: "2.部分配置",
            items: [{
                imageUrl: "images/NOAH/2.0/诺亚系统-配置3.jpg",
                desc: "系统主列表"
            }, {
                imageUrl: "images/NOAH/2.0/诺亚系统-配置2.jpg",
                desc: "组件配置页面"
            }, {
                imageUrl: "images/NOAH/2.0/诺亚系统-配置1.jpg",
                desc: "组件配置页面"
            }, {
                imageUrl: "images/NOAH/2.0/看图猜漫画.jpg",
                desc: "看图漫画活动实例"
            }, {
                imageUrl: "images/NOAH/2.0/斗气冲顶大会.jpg",
                desc: "斗气冲顶大会活动实例"
            }, {
                imageUrl: "images/NOAH/2.0/话题.jpg",
                desc: "话题活动实例"
            }]
        }, {
            title: "3.数据运营",
            items: [{
                imageUrl: "images/NOAH/3.0/1.png",
                desc: "运营数据列表"
            }, {
                imageUrl: "images/NOAH/3.0/2.png",
                desc: "条形图生成"
            }, {
                imageUrl: "images/NOAH/3.0/3.png",
                desc: "柱状图生成"
            }]
        }]
    },
    activity: {
        title: "【阅文集团】部分运营活动示例",
        data: [
            {
                title: "1.515活动",
                items: [
                    {
                        imageUrl: "images/活动示例/515/1.jpg",
                        desc: "515战斗页"
                    },
                    {
                        imageUrl: "images/活动示例/515/2.jpg",
                        desc: "515排行榜"
                    }
                ]
            },
            {
                title: "2.节日活动",
                items: [
                    {
                        imageUrl: "images/活动示例/节日活动/万圣夜.jpg",
                        desc: "万圣节活动"
                    },
                    {
                        imageUrl: "images/活动示例/节日活动/元宵节.jpg",
                        desc: "元宵节活动"
                    },
                    {
                        imageUrl: "images/活动示例/节日活动/愚人节活动.jpg",
                        desc: "愚人节活动"
                    }
                ]
            },
            {
                title: "3.完结大典",
                items: [
                    {
                        imageUrl: "images/活动示例/完结大典/佣兵的战争.jpg",
                        desc: "佣兵的战争活动"
                    }
                ]
            },
            {
                title: "4.微信充赠",
                items: [
                    {
                        imageUrl: "images/活动示例/微信冲增/微信充赠.png",
                        desc: "微信充赠活动"
                    }
                ]
            },
            {
                title: "5.小额充赠",
                items: [
                    {
                        imageUrl: "images/活动示例/小额冲增/超级老虎机.png",
                        desc: "小额冲赠活动"
                    }
                ]
            },
            {
                title: "6.新书上架",
                items: [
                    {
                        imageUrl: "images/活动示例/新书上架/还看今朝.png",
                        desc: "还看今朝新书上架活动"
                    }
                ]
            },
            {
                title: "7.阅文开放平台官网",
                items: [
                    {
                        imageUrl: "images/活动示例/阅文开放平台官网/1.png",
                        desc: "阅文开放平台官网首页"
                    },
                    {
                        imageUrl: "images/活动示例/阅文开放平台官网/2.png",
                        desc: "阅文开放平台官网说明页"
                    }
                ]
            },
            {
                title: "8.IP活动",
                items: [
                    {
                        imageUrl: "images/活动示例/IP活动/凤囚凰.jpg",
                        desc: "凤求凰活动"
                    }
                ]
            }
        ]
    },
    interview: {
        title: "【腾讯】校招面试m站",
        data: [
            {
                title: "M站部分页面",
                items: [{
                    imageUrl: "images/Interview/1.png",
                    desc: "侧边栏菜单"
                },{
                    imageUrl: "images/Interview/2.png",
                    desc: "简历列表"
                },{
                    imageUrl: "images/Interview/3.png",
                    desc: "面试安排"
                },{
                    imageUrl: "images/Interview/4.png",
                    desc: "面试已办"
                },{
                    imageUrl: "images/Interview/5.png",
                    desc: "简历详情"
                },{
                    imageUrl: "images/Interview/6.png",
                    desc: "面试岗位列表"
                },{
                    imageUrl: "images/Interview/7.png",
                    desc: "面试岗位分配"
                },{
                    imageUrl: "images/Interview/8.png",
                    desc: "加入面试待办"
                },{
                    imageUrl: "images/Interview/9.png",
                    desc: "简历发起面试"
                },{
                    imageUrl: "images/Interview/10.png",
                    desc: "叫号"
                },{
                    imageUrl: "images/Interview/11.png",
                    desc: "叫号成功"
                },{
                    imageUrl: "images/Interview/12.png",
                    desc: "简历评价"
                }]
            }
        ]
    }
};

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

function getHtml(product) {
    var content = json[product];

    var html = '<div id="' + product + '"><h1>' + content.title + '</h1>';

    for (i = 0; i < content.data.length; i++) {
        var card = content.data[i];
        html += '<div class="list">';
        html += '<h2>' + card.title + '</h2>';
        for (j = 0; j < card.items.length; j++) {
            var item = card.items[j];
            html += '<div class="card"><div class="image"><a class="image-a" href="javascript:;"><img alt="" src="' + item.imageUrl + '"></a></div>';
            html += '<div class="desc">' + item.desc + '</div></div>';
        }
        html += '</div>';
    }
    html += '</div>';

    return html;
}

$("document").ready(function() {
    $(".image-detail").click(function() {
        $(this).hide();
    });

    var product = getQueryString("product") || "noah";

    $(".container").empty();
    $(".container").append(getHtml(product));

    $(".image-a").click(function() {
        var self = $(this);
        $(".image-detail img").attr("src", self.find("img").attr("src"));

        $(".image-detail").show();
    });
});