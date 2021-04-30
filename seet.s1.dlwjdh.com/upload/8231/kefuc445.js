var kefucurrentScript = document.currentScript || document.scripts[document.scripts.length - 1];
$(function() {
    var para = (kefucurrentScript.src.match(/[?&]color=([^&]*)/i) || ["", ""])[1];
    var content = '';
    var qq = [{"catid":1,"title":"QQ咨询","value":"120385306"}];
    var wangwang = [];
    var other = [];
    var freecall = '029-86683353';
    var tel = '029-86683353';
    var mobile = '18629005772';
    var qrcode = '../img.dlwjdh.com/upload/8231/190927/ce5cee8594d2619adc82c2a1a705de63%40256X254.jpg';
    var qqlist = '';
    var wwlist = '';
    var otlist = '';
    if (qq.length != 0) {
        for (var i = 0; i < qq.length; i++) {
            qqlist += '<li class="wjdh-kefu-zxqq"><a href="http://wpa.qq.com/msgrd?v=3&site=qq&menu=yes&uin=' + qq[i].value + '" title="' + qq[i].title + '" target="_blank">' + qq[i].title + '</a></li>        '
        }
    };
    if (wangwang.length != 0) {
        for (var i = 0; i < wangwang.length; i++) {
            wwlist += '<li class="wjdh-kefu-zxqq"><a href="http://www.taobao.com/webww/ww.php?ver=3&touid=' + wangwang[i].value + '&siteid=cntaobao&status=1&charset=utf-8" title="' + wangwang[i].title + '" target="_blank">' + wangwang[i].title + '</a></li>        '
        }
    };
    if (other.length != 0) {
        for (var i = 0; i < other.length; i++) {
            otlist += '<li class="wjdh-kefu-zxqq"><a href="' + other[i].value + '" title="' + other[i].title + '" target="_blank">' + other[i].title + '</a></li>        '
        }
    };
    var color = "<style>#wjdh-kefu .wjdh-kefu-wsbh{   background:#" + para + "; }#wjdh-kefu .wjdh-kefu-wszk .zx_gb{   background:#" + para + ";}#wjdh-kefu .wjdh-kefu-wszk .wjdh-kefu-zxqq{   background:#" + para + ";}#wjdh-kefu .wjdh-kefu-wszk .wjdh-kefu-dhzx{   background:#" + para + ";}#wjdh-kefu .wjdh-kefu-wszk .wjdh-kefu-ewm{    background:#" + para + ";}</style>";
    content = '<link rel="stylesheet" type="text/css" href="../tag.wjdhcms.com/static/kefu/2-r-22/css/qq_online.css" /><div id="wjdh-kefu">    <div class="wjdh-kefu-wsbh">        <div class="wjdh-kefu-wsbk">            <li>                <img src="http://tag.wjdhcms.com/static/kefu/2-l-11/images/zxqq.png" alt="Click to contact customer service" title="Click to contact customer service" />                <span>Click to contact customer service</span>            </li>        </div>    </div>    <div class="wjdh-kefu-wszk">        <li class="zx_gb"><img src="http://tag.wjdhcms.com/static/kefu/2-l-11/images/zxgb.png" alt="立即咨询" /></li>        ' + qqlist + wwlist + otlist + '        <li class="wjdh-kefu-dhzx">咨询热线：            <br />' + mobile + '</li>        <li class="wjdh-kefu-ewm">            <ul>                <img src="' + qrcode + '" alt="二维码" title="二维码" />                <span class="span1">扫一扫</span>                <div class="span2">全国服务热线                    <br /><span>' + freecall + '</span></div>            </ul>        </li>    </div></div>';﻿
    $("body").append(content + color);

        $('.wjdh-kefu-wsbh').click(function() {
            $('.wjdh-kefu-wsbh').stop().animate({ "right": "-80px" }, 500, function() {
                $('.wjdh-kefu-wszk').stop().animate({ "right": "0" }, 500)
            });
        });
        $('#wjdh-kefu .zx_gb').click(function() {
            $('.wjdh-kefu-wszk').stop().animate({ "right": "-160px" }, 500, function() {
                $('.wjdh-kefu-wsbh').stop().animate({ "right": "0" }, 500)
            });
        });
})

