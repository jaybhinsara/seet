/* 

　　　　　　　　　＃＃　　　　　　　　　　　＃＃　　　　　　　　　　　　　　　　＃　　　　　　＃＃　　＃＃　　　＃　　　

　　　　　＃＃＃　＃＃　　　　　　　　　　　＃＃　　　　　　　　　　＃＃＃＃＃＃＃＃　　　　　＃＃＃＃＃＃＃＃＃＃　　　

　　　＃＃＃＃＃　＃＃　　　　　　　　　　　＃＃　　　　　　　　　　＃＃　＃　　　　　　　　　　＃＃＃　＃　　　＃　　　

　　　　　　　　　＃＃＃＃　　　　　　　　　＃＃＃＃＃＃　　　　　　　　　＃　　　　　　　　　　＃＃＃　＃＃＃＃＃　　　

　　　　＃＃＃＃＃＃＃＃＃　　　　　＃＃＃＃＃＃＃＃＃　　　　　＃＃＃＃＃＃＃＃＃＃＃　　　　＃＃＃＃＃＃　　＃＃　　　

　　＃＃＃＃＃＃　＃　　＃　　　　　　　　＃＃　　＃＃　　　　　＃＃＃＃＃＃＃＃　　　　　　　＃＃　＃＃＃＃＃＃＃　　　

　　　　＃＃　　　＃　＃＃　　　　　　　　＃＃　　＃＃　　　　　　　　　＃　＃　　　　　　　　＃＃＃＃＃＃＃＃　＃＃　　

　　　＃＃＃＃　＃＃　＃＃　　　　　　　＃＃　　　＃＃　　　　　　　　＃＃　＃　　　　　　　　＃＃＃＃＃＃　＃＃＃＃　　

　　　＃＃＃＃＃＃＃　＃＃　　　　　　　＃＃　　　＃＃　　　　　　　　＃＃　＃　　　＃　　　　＃＃＃＃＃＃　＃＃　　　　

　　＃＃＃＃＃＃＃　　＃＃　　　　　　＃＃　＃＃　＃　　　　　　　　＃＃　　＃　　　＃＃　　　＃＃　　＃＃　＃＃＃　　　

　　　　　　＃＃　＃＃＃　　　　　　＃＃　　　＃＃＃　　　　　　　＃＃　　　＃　　　＃＃　　　＃＃　　＃＃＃＃＃＃＃　　

　　　　　＃＃＃　　＃＃　　　　　＃＃　　　　＃＃＃　　　　　　＃＃　　　　＃＃＃＃＃＃　　　＃＃　　＃＃＃　　＃＃＃　

　　　　　＃＃　　　　＃　　　　　＃　　　　　　＃　　　　　　　＃　　　　　　　　　　　　　　　＃　　＃＃　　　

*更新时间：2017-1-10



/* ----------------------------------------------------------*/
var currentScript = document.currentScript || document.scripts[document.scripts.length - 1];
//$(function () {
    var para = (currentScript.src.match(/[?&]siteid=([^&]*)/i) || ["", ""])[1];
    var url = 'http://tongji.wjdhcms.com/visit/visit.ashx?action=open&type=para&siteid='+para+'&u=&d=';
    $.getScript(url);
//});
//function TongJi(siteid) {
//    var url = '/api/visit.ashx?action=isopen', h = window.location.href;
//    if (h.indexOf("preview=1") != -1) url = url + '&theme_preview=1';
//    $.ajax({
//        type: "POST",
//        url: url,
//        dataType: "json",
//        success: function (msg) {
//            var c = msg.config;

//            if (c.visit == 1) {			  //站长统计
//                //alert("fff");
//                //var navurl=classnow==10001?'':'../';
//                //var	stat_d=classnow+'-'+id+'-'+lang;
//                var url = '/api/visit.ashx?action=open&type=para&u=&d=';
//                $.getScript(url);
//            }
//        }
//    });
//}