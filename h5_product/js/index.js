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
                imageUrl: "images/NOAH/2.0/诺亚系统 配置3.png",
                desc: "系统主列表"
            }, {
                imageUrl: "images/NOAH/2.0/诺亚系统 配置2.png",
                desc: "组件配置页面"
            }, {
                imageUrl: "images/NOAH/2.0/诺亚系统 配置1.png",
                desc: "组件配置页面"
            }, {
                imageUrl: "images/NOAH/2.0/看图猜漫画.png",
                desc: "看图漫画活动实例"
            }, {
                imageUrl: "images/NOAH/2.0/斗气冲顶大会.png",
                desc: "斗气冲顶大会活动实例"
            }, {
                imageUrl: "images/NOAH/2.0/话题.png",
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
            html += '<div class="card"><div class="image"><a href="javascript:;"><img alt="" src="' + item.imageUrl + '"></a></div>';
            html += '<div class="desc">' + item.desc + '</div></div>';
        }
        html += '</div>';
    }
    html += '</div>';

    return html;
}

$("document").ready(function() {
    var product = getQueryString("product");

    $(".container").empty();
    $(".container").append(getHtml(product));
});