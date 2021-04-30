/*
*copyright by 动力无限 v4.0  www.btoe.cn
*邮箱 btoe@btoe.cn
*合作电话 400-0599-360
*版权所有违者必究
/*-----------------------------------------------------------*/

//*************************************IE8下兼容性处理********************************************//

function isIe8() {




    if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/7./i) == "7.") {

        alert("您的浏览器版本太低，请您更新至最新的浏览器进行查看");

    }
    else if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i) == "8.") {
        var head = document.getElementsByTagName('head')[0],
            cssURL = '../templates/pc_wjdh/css/commnIe8.css',
            linkTag = document.createStyleSheet(cssURL);
    }
    else if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/9./i) == "9.") {
        var head = document.getElementsByTagName('head')[0],
            cssURL = '../templates/pc_wjdh/css/commnIe8.css',
            linkTag = document.createStyleSheet(cssURL);
    }
   
}


isIe8();







!function (a) { a.fn.slide = function (b) { return a.fn.slide.defaults = { type: "slide", effect: "fade", autoPlay: !1, delayTime: 500, interTime: 2500, triggerTime: 150, defaultIndex: 0, titCell: ".hd li", mainCell: ".bd", targetCell: null, trigger: "mouseover", scroll: 1, vis: 1, titOnClassName: "on", autoPage: !1, prevCell: ".prev", nextCell: ".next", pageStateCell: ".pageState", opp: !1, pnLoop: !0, easing: "swing", startFun: null, endFun: null, switchLoad: null, playStateCell: ".playState", mouseOverStop: !0, defaultPlay: !0, returnDefault: !1 }, this.each(function () { var t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, c = a.extend({}, a.fn.slide.defaults, b), d = a(this), e = c.effect, f = a(c.prevCell, d), g = a(c.nextCell, d), h = a(c.pageStateCell, d), i = a(c.playStateCell, d), j = a(c.titCell, d), k = j.length, l = a(c.mainCell, d), m = l.children().length, n = c.switchLoad, o = a(c.targetCell, d), p = parseInt(c.defaultIndex), q = parseInt(c.delayTime), r = parseInt(c.interTime); if (parseInt(c.triggerTime), t = parseInt(c.scroll), u = "false" == c.autoPlay || 0 == c.autoPlay ? !1 : !0, v = "false" == c.opp || 0 == c.opp ? !1 : !0, w = "false" == c.autoPage || 0 == c.autoPage ? !1 : !0, x = "false" == c.pnLoop || 0 == c.pnLoop ? !1 : !0, y = "false" == c.mouseOverStop || 0 == c.mouseOverStop ? !1 : !0, z = "false" == c.defaultPlay || 0 == c.defaultPlay ? !1 : !0, A = "false" == c.returnDefault || 0 == c.returnDefault ? !1 : !0, B = isNaN(c.vis) ? 1 : parseInt(c.vis), C = !-[1] && !window.XMLHttpRequest, D = 0, E = 0, F = 0, G = 0, H = c.easing, I = null, J = null, K = null, L = c.titOnClassName, M = j.index(d.find("." + L)), N = p = -1 == M ? p : M, O = p, P = p, Q = m >= B ? 0 != m % t ? m % t : t : 0, S = "leftMarquee" == e || "topMarquee" == e ? !0 : !1, T = function () { a.isFunction(c.startFun) && c.startFun(p, k, d, a(c.titCell, d), l, o, f, g) }, U = function () { a.isFunction(c.endFun) && c.endFun(p, k, d, a(c.titCell, d), l, o, f, g) }, V = function () { j.removeClass(L), z && j.eq(O).addClass(L) }, "menu" == c.type) return z && j.removeClass(L).eq(p).addClass(L), j.hover(function () { R = a(this).find(c.targetCell); var b = j.index(a(this)); J = setTimeout(function () { switch (p = b, j.removeClass(L).eq(p).addClass(L), T(), e) { case "fade": R.stop(!0, !0).animate({ opacity: "show" }, q, H, U); break; case "slideDown": R.stop(!0, !0).animate({ height: "show" }, q, H, U) } }, c.triggerTime) }, function () { switch (clearTimeout(J), e) { case "fade": R.animate({ opacity: "hide" }, q, H); break; case "slideDown": R.animate({ height: "hide" }, q, H) } }), A && d.hover(function () { clearTimeout(K) }, function () { K = setTimeout(V, q) }), void 0; if (0 == k && (k = m), S && (k = 2), w) { if (m >= B ? "leftLoop" == e || "topLoop" == e ? k = 0 != m % t ? (0 ^ m / t) + 1 : m / t : (W = m - B, k = 1 + parseInt(0 != W % t ? W / t + 1 : W / t), 0 >= k && (k = 1)) : k = 1, j.html(""), X = "", 1 == c.autoPage || "true" == c.autoPage) for (Y = 0; k > Y; Y++)X += "<li>" + (Y + 1) + "</li>"; else for (Y = 0; k > Y; Y++)X += c.autoPage.replace("$", Y + 1); j.html(X), j = j.children() } if (m >= B) switch (l.children().each(function () { a(this).width() > F && (F = a(this).width(), E = a(this).outerWidth(!0)), a(this).height() > G && (G = a(this).height(), D = a(this).outerHeight(!0)) }), Z = l.children(), $ = function () { var a; for (a = 0; B > a; a++)Z.eq(a).clone().addClass("clone").appendTo(l); for (a = 0; Q > a; a++)Z.eq(m - a - 1).clone().addClass("clone").prependTo(l) }, e) { case "fold": l.css({ position: "relative", width: E, height: D }).children().css({ position: "absolute", width: F, left: 0, top: 0, display: "none" }); break; case "top": l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + B * D + 'px"></div>').css({ top: -(p * t) * D, position: "relative", padding: "0", margin: "0" }).children().css({ height: G }); break; case "left": l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + B * E + 'px"></div>').css({ width: m * E, left: -(p * t) * E, position: "relative", overflow: "hidden", padding: "0", margin: "0" }).children().css({ "float": "left", width: F }); break; case "leftLoop": case "leftMarquee": $(), l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + B * E + 'px"></div>').css({ width: (m + B + Q) * E, position: "relative", overflow: "hidden", padding: "0", margin: "0", left: -(Q + p * t) * E }).children().css({ "float": "left", width: F }); break; case "topLoop": case "topMarquee": $(), l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + B * D + 'px"></div>').css({ height: (m + B + Q) * D, position: "relative", padding: "0", margin: "0", top: -(Q + p * t) * D }).children().css({ height: G }) }_ = function (a) { var b = a * t; return a == k ? b = m : -1 == a && 0 != m % t && (b = -m % t), b }, ab = function (b) { var d, f, g, h, c = function (c) { for (var d = c; B + c > d; d++)b.eq(d).find("img[" + n + "]").each(function () { var c, d, b = a(this); if (b.attr("src", b.attr(n)).removeAttr(n), l.find(".clone")[0]) for (c = l.children(), d = 0; d < c.length; d++)c.eq(d).find("img[" + n + "]").each(function () { a(this).attr(n) == b.attr("src") && a(this).attr("src", a(this).attr(n)).removeAttr(n) }) }) }; switch (e) { case "fade": case "fold": case "top": case "left": case "slideDown": c(p * t); break; case "leftLoop": case "topLoop": c(Q + _(P)); break; case "leftMarquee": case "topMarquee": d = "leftMarquee" == e ? l.css("left").replace("px", "") : l.css("top").replace("px", ""), f = "leftMarquee" == e ? E : D, g = Q, 0 != d % f && (h = Math.abs(0 ^ d / f), g = 1 == p ? Q + h : Q + h - 1), c(g) } }, bb = function (a) { var b, c, d; if (!z || N != p || a || S) { if (S ? p >= 1 ? p = 1 : 0 >= p && (p = 0) : (P = p, p >= k ? p = 0 : 0 > p && (p = k - 1)), T(), null != n && ab(l.children()), o[0] && (R = o.eq(p), null != n && ab(o), "slideDown" == e ? (o.not(R).stop(!0, !0).slideUp(q), R.slideDown(q, H, function () { l[0] || U() })) : (o.not(R).stop(!0, !0).hide(), R.animate({ opacity: "show" }, q, function () { l[0] || U() }))), m >= B) switch (e) { case "fade": l.children().stop(!0, !0).eq(p).animate({ opacity: "show" }, q, H, function () { U() }).siblings().hide(); break; case "fold": l.children().stop(!0, !0).eq(p).animate({ opacity: "show" }, q, H, function () { U() }).siblings().animate({ opacity: "hide" }, q, H); break; case "top": l.stop(!0, !1).animate({ top: -p * t * D }, q, H, function () { U() }); break; case "left": l.stop(!0, !1).animate({ left: -p * t * E }, q, H, function () { U() }); break; case "leftLoop": b = P, l.stop(!0, !0).animate({ left: -(_(P) + Q) * E }, q, H, function () { -1 >= b ? l.css("left", -(Q + (k - 1) * t) * E) : b >= k && l.css("left", -Q * E), U() }); break; case "topLoop": b = P, l.stop(!0, !0).animate({ top: -(_(P) + Q) * D }, q, H, function () { -1 >= b ? l.css("top", -(Q + (k - 1) * t) * D) : b >= k && l.css("top", -Q * D), U() }); break; case "leftMarquee": c = l.css("left").replace("px", ""), 0 == p ? l.animate({ left: ++c }, 0, function () { l.css("left").replace("px", "") >= 0 && l.css("left", -m * E) }) : l.animate({ left: --c }, 0, function () { l.css("left").replace("px", "") <= -(m + Q) * E && l.css("left", -Q * E) }); break; case "topMarquee": d = l.css("top").replace("px", ""), 0 == p ? l.animate({ top: ++d }, 0, function () { l.css("top").replace("px", "") >= 0 && l.css("top", -m * D) }) : l.animate({ top: --d }, 0, function () { l.css("top").replace("px", "") <= -(m + Q) * D && l.css("top", -Q * D) }) }j.removeClass(L).eq(p).addClass(L), N = p, x || (g.removeClass("nextStop"), f.removeClass("prevStop"), 0 == p && f.addClass("prevStop"), p == k - 1 && g.addClass("nextStop")), h.html("<span>" + (p + 1) + "</span>/" + k) } }, z && bb(!0), A && d.hover(function () { clearTimeout(K) }, function () { K = setTimeout(function () { p = O, z ? bb() : "slideDown" == e ? R.slideUp(q, V) : R.animate({ opacity: "hide" }, q, V), N = p }, 300) }), cb = function (a) { I = setInterval(function () { v ? p-- : p++ , bb() }, a ? a : r) }, db = function (a) { I = setInterval(bb, a ? a : r) }, eb = function () { y || !u || i.hasClass("pauseState") || (clearInterval(I), cb()) }, fb = function () { (x || p != k - 1) && (p++ , bb(), S || eb()) }, gb = function () { (x || 0 != p) && (p-- , bb(), S || eb()) }, hb = function () { clearInterval(I), S ? db() : cb(), i.removeClass("pauseState") }, ib = function () { clearInterval(I), i.addClass("pauseState") }, u ? S ? (v ? p-- : p++ , db(), y && l.hover(ib, hb)) : (cb(), y && d.hover(ib, hb)) : (S && (v ? p-- : p++), i.addClass("pauseState")), i.click(function () { i.hasClass("pauseState") ? hb() : ib() }), "mouseover" == c.trigger ? j.hover(function () { var a = j.index(this); J = setTimeout(function () { p = a, bb(), eb() }, c.triggerTime) }, function () { clearTimeout(J) }) : j.click(function () { p = j.index(this), bb(), eb() }), S ? (g.mousedown(fb), f.mousedown(gb), x && (kb = function () { jb = setTimeout(function () { clearInterval(I), db(0 ^ r / 10) }, 150) }, lb = function () { clearTimeout(jb), clearInterval(I), db() }, g.mousedown(kb), g.mouseup(lb), f.mousedown(kb), f.mouseup(lb)), "mouseover" == c.trigger && (g.hover(fb, function () { }), f.hover(gb, function () { }))) : (g.click(fb), f.click(gb)), "auto" != c.vis || 1 != t || "left" != e && "leftLoop" != e || (nb = function () { C && (l.width("auto"), l.children().width("auto")), l.parent().width("auto"), E = l.parent().width(), C && l.parent().width(E), l.children().width(E), "left" == e ? (l.width(E * m), l.stop(!0, !1).animate({ left: -p * E }, 0)) : (l.width(E * (m + 2)), l.stop(!0, !1).animate({ left: -(p + 1) * E }, 0)), C || E == l.parent().width() || nb() }, a(window).resize(function () { clearTimeout(mb), mb = setTimeout(nb, 100) }), nb()) }) } }(jQuery), jQuery.easing["jswing"] = jQuery.easing["swing"], jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function (a, b, c, d, e) { return jQuery.easing[jQuery.easing.def](a, b, c, d, e) }, easeInQuad: function (a, b, c, d, e) { return d * (b /= e) * b + c }, easeOutQuad: function (a, b, c, d, e) { return -d * (b /= e) * (b - 2) + c }, easeInOutQuad: function (a, b, c, d, e) { return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c }, easeInCubic: function (a, b, c, d, e) { return d * (b /= e) * b * b + c }, easeOutCubic: function (a, b, c, d, e) { return d * ((b = b / e - 1) * b * b + 1) + c }, easeInOutCubic: function (a, b, c, d, e) { return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c }, easeInQuart: function (a, b, c, d, e) { return d * (b /= e) * b * b * b + c }, easeOutQuart: function (a, b, c, d, e) { return -d * ((b = b / e - 1) * b * b * b - 1) + c }, easeInOutQuart: function (a, b, c, d, e) { return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c }, easeInQuint: function (a, b, c, d, e) { return d * (b /= e) * b * b * b * b + c }, easeOutQuint: function (a, b, c, d, e) { return d * ((b = b / e - 1) * b * b * b * b + 1) + c }, easeInOutQuint: function (a, b, c, d, e) { return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c }, easeInSine: function (a, b, c, d, e) { return -d * Math.cos(b / e * (Math.PI / 2)) + d + c }, easeOutSine: function (a, b, c, d, e) { return d * Math.sin(b / e * (Math.PI / 2)) + c }, easeInOutSine: function (a, b, c, d, e) { return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c }, easeInExpo: function (a, b, c, d, e) { return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c }, easeOutExpo: function (a, b, c, d, e) { return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c }, easeInOutExpo: function (a, b, c, d, e) { return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c }, easeInCirc: function (a, b, c, d, e) { return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c }, easeOutCirc: function (a, b, c, d, e) { return d * Math.sqrt(1 - (b = b / e - 1) * b) + c }, easeInOutCirc: function (a, b, c, d, e) { return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c }, easeInElastic: function (a, b, c, d, e) { var f = 1.70158, g = 0, h = d; return 0 == b ? c : 1 == (b /= e) ? c + d : (g || (g = .3 * e), h < Math.abs(d) ? (h = d, f = g / 4) : f = g / (2 * Math.PI) * Math.asin(d / h), -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g)) + c) }, easeOutElastic: function (a, b, c, d, e) { var f = 1.70158, g = 0, h = d; return 0 == b ? c : 1 == (b /= e) ? c + d : (g || (g = .3 * e), h < Math.abs(d) ? (h = d, f = g / 4) : f = g / (2 * Math.PI) * Math.asin(d / h), h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * 2 * Math.PI / g) + d + c) }, easeInOutElastic: function (a, b, c, d, e) { var f = 1.70158, g = 0, h = d; return 0 == b ? c : 2 == (b /= e / 2) ? c + d : (g || (g = e * .3 * 1.5), h < Math.abs(d) ? (h = d, f = g / 4) : f = g / (2 * Math.PI) * Math.asin(d / h), 1 > b ? -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) + c : .5 * h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) + d + c) }, easeInBack: function (a, b, c, d, e, f) { return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c }, easeOutBack: function (a, b, c, d, e, f) { return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c }, easeInOutBack: function (a, b, c, d, e, f) { return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c }, easeInBounce: function (a, b, c, d, e) { return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c }, easeOutBounce: function (a, b, c, d, e) { return (b /= e) < 1 / 2.75 ? d * 7.5625 * b * b + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c }, easeInOutBounce: function (a, b, c, d, e) { return e / 2 > b ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c } });





$(function () { if (0 < $(".contact .kf-img img").length) { var b = ["kf001.png", "kf002.html", "kf003.html", "kf004.png"], a = $(".contact .kf-img img").attr("src"), a = a.replace("kf.html", b[Math.floor(Math.random() * b.length)]); $(".contact .kf-img img").attr("src", a) } });


$(function () {
    // form

    $('.a-bth').on('click', function () {
        var kcontent = $('.pro-textarea').val();
        var kuser = $('.pro-name').val();
        var kphone = $('.pro-tel').val();
        var kcode = $('.pro-email').val().trim();

        var reg = /(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$)|(^((\(\d{3}\))|(\d{3}\-))?(1[3578]\d{9})$)|(^400[0-9]{7})/;

        if(kcontent == "" && kuser == "" && kphone =="" && kemail =="" ){
            alert("此表单不能为空提交,请您完善相关信息！");
            return false;
        }
        if (kuser == "") {
            alert('姓名不能为空！')
            $(".username").focus();
            return false;
        }
        if (kphone == "") {
            alert('号码不能为空！')
            $(".usertel").focus();
            return false;
        }
        if(!reg.test(kphone)) {
            alert('号码填写有误,请您输入正确的号码!')
            $(".usertel").focus();
            return false;
        }
        if (kcontent == "" || kcontent.length < 10) {
            alert('留言内容必须大于10字！')
            $(".xqcontent").focus();
            return false;
        }

        if (kcode == "") {
            alert('验证码不能为空')
            $("#codeText").focus();
            return false;
        }
        $.post('/api/message.ashx?action=add', {
            "kuser": kuser,
            "kphone": kphone,
            "kcode": kcode,
            "kcontent": '信息：' + kcontent,
        }, function (res) {
            if (res == '1') {
                alert("留言提交成功");
                 $('.pro-name').val("");
                 $('.pro-tel').val("");
                 $('.pro-email').val("");
            }else {
                alert('留言提交失败')
            }
        }) 
    })
})

$(".imgCode2").click(function () {
    $(this)[0].src = '/api/message.ashx?action=code&' + Math.random()
})

$(function () {
    // form

    $('.contact-bth').on('click', function () {
        var kcontent = $('.contact-textarea').val();
        var kuser = $('.contact-name').val();
        var kphone = $('.contact-tel').val();
        var kcode = $('.contact-imgCode').val().trim();
        var reg = /(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$)|(^((\(\d{3}\))|(\d{3}\-))?(1[3578]\d{9})$)|(^400[0-9]{7})/;
        console.log(kcontent, kuser, kphone)
        if (kcontent == "" && kuser == "" && kphone ==""){
            alert("此表单不能为空提交,请您完善相关信息！");
            return false;
        }

        if (kuser == "") {
            alert('姓名不能为空！')
            console.log(456)
            $(".contact-name").focus();
            console.log(123);
            return false;

        }
        if (kphone == "") {
            alert('号码不能为空！')
            $(".contact-tel").focus();
            return false;
        }
        if(!reg.test(kphone)) {
            alert('号码填写有误,请您输入正确的号码!')
            $(".contact-tel").focus();
            return false;
        }
        if (kcontent == "" || kcontent.length < 10) {
            alert('留言内容必须大于10字！')
            $(".contact-textarea").focus();
            return false;
        }

        if (kcode == "") {
            alert('验证码不能为空')
            $(".contact-imgCode").focus();
            return false;
        }
        $.post('/api/message.ashx?action=add', {
            "kcontent": '信息：' + kcontent ,
            "kuser": kuser,
            "kphone": kphone,
            "kcode": kcode
        }, function (res) {
            if (res == '1') {
                alert("留言提交成功");
                 $('.contact-name').val("");
                 $('.contact-tel').val("");
                $('.contact-textarea').val("");
                $('.contact-imgCode').val("");
            }else {
                alert('留言提交失败');
            }
        }) 
    })
})

$(".contactImgcode").click(function () {
    $(this)[0].src = '/api/message.ashx?action=code&' + Math.random()
})


 $(function () {

            $('.scan').hover(function () {

                $('#qrcode').show();

            }, function () {

                $('#qrcode').hide();

            });

        });




(function (window, undefined) {


    "use strict";
    // test for REM unit support
    var cssremunit = function () {
        var div = document.createElement('div');
        div.style.cssText = 'font-size: 1rem;';

        return (/rem/).test(div.style.fontSize);
    },

        // filter returned links for stylesheets
        isStyleSheet = function () {
            var styles = document.getElementsByTagName('link'),
                filteredLinks = [];

            for (var i = 0; i < styles.length; i++) {
                if (styles[i].rel.toLowerCase() === 'stylesheet' && styles[i].getAttribute('data-norem') === null) {

                    filteredLinks.push(styles[i].href);
                }
            }

            return filteredLinks;
        },

        processLinks = function () {
            //prepare to match each link
            for (var i = 0; i < links.length; i++) {
                xhr(links[i], storeCSS);
            }
        },

        storeCSS = function (response, link) {

            preCSS.push(response.responseText);
            CSSLinks.push(link);

            if (CSSLinks.length === links.length) {
                for (var j = 0; j < CSSLinks.length; j++) {
                    matchCSS(preCSS[j], CSSLinks[j]);
                }

                if ((links = importLinks.slice(0)).length > 0) { //after finishing all current links, set links equal to the new imports found
                    CSSLinks = [];
                    preCSS = [];
                    importLinks = [];
                    processLinks();
                } else {
                    buildCSS();
                }
            }
        },

        matchCSS = function (sheetCSS, link) { // collect all of the rules from the xhr response texts and match them to a pattern
            var clean = removeMediaQueries(sheetCSS).replace(/\/\*[\s\S]*?\*\//g, ''), // remove MediaQueries and comments
                pattern = /[\w\d\s\-\/\\\[\]:,.'"*()<>+~%#^$_=|@]+\{[\w\d\s\-\/\\%#:!;,.'"*()]+\d*\.?\d+rem[\w\d\s\-\/\\%#:!;,.'"*()]*\}/g, //find selectors that use rem in one or more of their rules
                current = clean.match(pattern),
                remPattern = /\d*\.?\d+rem/g,
                remCurrent = clean.match(remPattern),
                sheetPathPattern = /(.*\/)/,
                sheetPath = sheetPathPattern.exec(link)[0], //relative path to css file specified in @import
                importPattern = /@import (?:url\()?['"]?([^'\)"]*)['"]?\)?[^;]*/gm, //matches all @import variations outlined at: https://developer.mozilla.org/en-US/docs/Web/CSS/@import
                importStatement;

            while ((importStatement = importPattern.exec(sheetCSS)) !== null) {
                if (importStatement[1].indexOf("../index.html") === 0) { // check if the value of importStatement[1] is a root relative path, in which case it shouldn't be concatenated with sheetPath
                    importLinks.push(importStatement[1]);
                } else {
                    importLinks.push(sheetPath + importStatement[1]);
                }
            }

            if (current !== null && current.length !== 0) {
                found = found.concat(current); // save all of the blocks of rules with rem in a property
                foundProps = foundProps.concat(remCurrent); // save all of the properties with rem
            }
        },

        buildCSS = function () { // first build each individual rule from elements in the found array and then add it to the string of rules.
            var pattern = /[\w\d\s\-\/\\%#:,.'"*()]+\d*\.?\d+rem[\w\d\s\-\/\\%#:!,.'"*()]*[;}]/g; // find properties with rem values in them
            for (var i = 0; i < found.length; i++) {
                rules = rules + found[i].substr(0, found[i].indexOf("{") + 1); // save the selector portion of each rule with a rem value
                var current = found[i].match(pattern);
                for (var j = 0; j < current.length; j++) { // build a new set of with only the selector and properties that have rem in the value
                    rules = rules + current[j];
                    if (j === current.length - 1 && rules[rules.length - 1] !== "}") {
                        rules = rules + "\n}";
                    }
                }
            }

            parseCSS();
        },

        parseCSS = function () { // replace each set of parentheses with evaluated content
            for (var i = 0; i < foundProps.length; i++) {
                css[i] = Math.round(parseFloat(foundProps[i].substr(0, foundProps[i].length - 3) * fontSize)) + 'px';
            }

            loadCSS();
        },

        loadCSS = function () { // replace and load the new rules
            for (var i = 0; i < css.length; i++) { // only run this loop as many times as css has entries
                if (css[i]) {
                    rules = rules.replace(foundProps[i], css[i]); // replace old rules with our processed rules
                }
            }
            var remcss = document.createElement('style');
            remcss.setAttribute('type', 'text/css');
            remcss.id = 'remReplace';
            document.getElementsByTagName('head')[0].appendChild(remcss);   // create the new element
            if (remcss.styleSheet) {
                remcss.styleSheet.cssText = rules; // IE8 will not support innerHTML on read-only elements, such as STYLE
            } else {
                remcss.appendChild(document.createTextNode(rules));
            }
        },

        xhr = function (url, callback) { // create new XMLHttpRequest object and run it
            try {
             
                var xhr = window.ActiveXObject ? (new ActiveXObject('Microsoft.XMLHTTP') || new ActiveXObject('Msxml2.XMLHTTP')) : new XMLHttpRequest();

                xhr.open('GET', url, true);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        callback(xhr, url);
                    } 
                };

                xhr.send(null);
            } catch (e) {
                if (window.XDomainRequest) {
                    var xdr = new XDomainRequest();
                    xdr.open('get', url);
                    xdr.onload = function () {
                        callback(xdr, url);
                    };
                    xdr.onerror = function () {
                        return false; // xdr load fail
                    };
                    xdr.send();
                }
            }
        },

        // Remove queries.
        removeMediaQueries = function (css) {
            // Test for Media Query support
            if (!window.matchMedia && !window.msMatchMedia) {
                // If the browser doesn't support media queries, we find all @media declarations in the CSS and remove them.
                // Note: Since @rules can't be nested in the CSS spec, we're safe to just check for the closest following "}}" to the "@media".
                css = css.replace(/@media[\s\S]*?\}\s*\}/g, "");
            }

            return css;
        };

    if (!cssremunit()) { // this checks if the rem value is supported
        var rules = '', // initialize the rules variable in this scope so it can be used later
            links = isStyleSheet(), // initialize the array holding the sheets urls for use later
            importLinks = [], //initialize the array holding the import sheet urls for use later
            found = [], // initialize the array holding the found rules for use later
            foundProps = [], // initialize the array holding the found properties for use later
            preCSS = [], // initialize array that holds css before being parsed
            CSSLinks = [], //initialize array holding css links returned from xhr
            css = [], // initialize the array holding the parsed rules for use later
            fontSize = '';

        // Notice: rem is a "root em" that means that in case when html element size was changed by css
        // or style we should not change document.documentElement.fontSize to 1em - only body size should be changed
        // to 1em for calculation

        fontSize = (function () {
            var doc = document,
                docElement = doc.documentElement,
                body = doc.body || doc.createElement('body'),
                isFakeBody = !doc.body,
                div = doc.createElement('div'),
                currentSize = body.style.fontSize,
                size;

            if (isFakeBody) {
                docElement.appendChild(body);
            }

            div.style.cssText = 'width:1em; position:absolute; visibility:hidden; padding: 0;';

            body.style.fontSize = '1em';

            body.appendChild(div);
            size = div.offsetWidth;

            if (isFakeBody) {
                docElement.removeChild(body);
            }
            else {
                body.removeChild(div);
                body.style.fontSize = currentSize;
            }

            return size;
        }());

        processLinks();
    } // else { do nothing, you are awesome and have REM support }

})(window);


$(".casemfx").mouseenter(function () {
    var width = $(window).width()
    if (width > 768) {
        $(".casemImg").css("display", "block");
    }
})
$(".casemfx").mouseleave(function () {
    var width = $(window).width()
    if (width > 768) {
        $(".casemImg").css("display", "none");
    }
})










var swiper1 = new Swiper('.caseReC', {
    slidesPerView: 3,
    spaceBetween:8,
    loop: true,
    pagination: '.swiper-pagination',

    breakpoints: {   

        768: {
            slidesPerView: 1,
            spaceBetween: 15,

        },
        640: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 2
        }
    }
});



var swiper2 = new Swiper('.honor-container', {
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 10,
    loop: true,
    nextButton: '.honorR',
    prevButton: '.honorL',

    breakpoints: {   

        768: {
            slidesPerView: 2,
            spaceBetween: 15,

        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 2
        }
    }
});



var swiper3 = new Swiper('.newsQa', {
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 30,
    loop: true,

    breakpoints: {  

        768: {
            slidesPerView: 1,
            spaceBetween: 15,

        },
        640: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 2
        }
    }
});



var viewSwiper = new Swiper('.view .swiper-container', {
    onSlideChangeStart: function () {
        updateNavPosition()
    }
})

$('.view .arrow-left,.preview .arrow-left').on('click', function (e) {
    e.preventDefault()
    if (viewSwiper.activeIndex == 0) {
        viewSwiper.slideTo(viewSwiper.slides.length - 1, 1000);
        return
    }
    viewSwiper.slidePrev()
})
$('.view .arrow-right,.preview .arrow-right').on('click', function (e) {
    e.preventDefault()
    if (viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
        viewSwiper.slideTo(0, 1000);
        return
    }
    viewSwiper.slideNext()
})

var previewSwiper = new Swiper('.preview .swiper-container', {
    //visibilityFullFit: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
    onTap: function () {
        viewSwiper.slideTo(previewSwiper.clickedIndex)
    }
})

function updateNavPosition() {
    $('.preview .active-nav').removeClass('active-nav')
    var activeNav = $('.preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav')
    if (!activeNav.hasClass('swiper-slide-visible')) {
        if (activeNav.index() > previewSwiper.activeIndex) {
            var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 1
            previewSwiper.slideTo(activeNav.index() - thumbsPerNav)
        } else {
            previewSwiper.slideTo(activeNav.index())
        }
    }
}




var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 3,
    slidesPerView: 5,
    loop: true,
    freeMode: true,
    loopedSlides: 6, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 3,
    loop: true,
    loopedSlides: 6, //looped slides should be the same
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
});




$(function(){
    var docheight = $(document).height();
    if (docheight <= 3000 ){
        $('.proList_sort1').find('ul').addClass('swiper-wrapper');
        $('.proList_sort1').find('.pro-next').show();
        $('.proList_sort1').find('.pro-prev').show();
        var swiper4 = new Swiper('.proList_sort1', {
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: 3000,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            nextButton: '.pro-prev img',
            prevButton: '.pro-next img'
        });
    }else{
        $('.proList_sort1').find('ul').removeClass('swiper-wrapper');
        $('.proList_sort1').find('.pro-next').hide();
        $('.proList_sort1').find('.pro-prev').hide();
        var swiper4 = new Swiper('.proList_sort1', {
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: 3000,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            nextButton: ' ',
            prevButton: ' '
        });  
    }

})

// jQuery(".proList_classify").slide({ titCell: ".proListclass1", 

// targetCell: "ul li", 
//  effect: "slideDown", 
//  delayTime: 300, 
//  returnDefault: true,
// });




// $(".proList_classify1").addClass("on");


$('.sidepromenu ul').slideDown(500)
$('.sidepromenu .proListclass1').on('click', function () {
    $(this).parent().find('ul').slideToggle();
    $(this).find('b').toggleClass('active')
})







window.onload = function(){
   window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"1","bdSize":"16"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
}









function intval(v) {
    v = parseInt(v);
    return isNaN(v) ? 0 : v;
} // ?取元素信息     
function getPos(e) {
    var l = 0;
    var t = 0;
    var w = intval(e.style.width);
    var h = intval(e.style.height);
    var wb = e.offsetWidth;
    var hb = e.offsetHeight;
    while (e.offsetParent) {
        l += e.offsetLeft + (e.currentStyle ? intval(e.currentStyle.borderLeftWidth) : 0);
        t += e.offsetTop + (e.currentStyle ? intval(e.currentStyle.borderTopWidth) : 0);
        e = e.offsetParent;
    }
    l += e.offsetLeft + (e.currentStyle ? intval(e.currentStyle.borderLeftWidth) : 0);
    t += e.offsetTop + (e.currentStyle ? intval(e.currentStyle.borderTopWidth) : 0);
    return {
        x: l,
        y: t,
        w: w,
        h: h,
        wb: wb,
        hb: hb
    };
} // ?取??条信息     
function getScroll() {
    var t, l, w, h;
    if (document.documentElement && document.documentElement.scrollTop) {
        t = document.documentElement.scrollTop;
        l = document.documentElement.scrollLeft;
        w = document.documentElement.scrollWidth;
        h = document.documentElement.scrollHeight;
    }
    else
        if (document.body) {
            t = document.body.scrollTop;
            l = document.body.scrollLeft;
            w = document.body.scrollWidth;
            h = document.body.scrollHeight;
        }
    return {
        t: t,
        l: l,
        w: w,
        h: h
    };
} // ?点(Anchor)?平滑跳?     
function scroller(el, duration) {
    if (typeof el != 'object') {
        el = document.getElementById(el);
    }
    if (!el)
        return;
    var z = this;
    z.el = el;
    z.p = getPos(el);
    z.s = getScroll();
    z.clear = function () {
        window.clearInterval(z.timer);
        z.timer = null
    };
    z.t = (new Date).getTime();
    z.step = function () {
        var t = (new Date).getTime();
        var p = (t - z.t) / duration;
        if (t >= duration + z.t) {
            z.clear();
            window.setTimeout(function () {
                z.scroll(z.p.y, z.p.x)
            }, 13);
        }
        else {
            st = ((-Math.cos(p * Math.PI) / 2) + 0.5) * (z.p.y - z.s.t) + z.s.t;
            sl = ((-Math.cos(p * Math.PI) / 2) + 0.5) * (z.p.x - z.s.l) + z.s.l;
            z.scroll(st, sl);
        }
    };
    z.scroll = function (t, l) {
        window.scrollTo(l, t)
    };
    z.timer = window.setInterval(function () {
        z.step();
    }, 13);
} 




/*! 随机客服 */
$(function () { if (0 < $(".contact .kf-img img").length) { var b = ["kf001.png", "kf002.png", "kf003.png", "kf004.png"], a = $(".contact .kf-img img").attr("src"), a = a.replace("kf.png", b[Math.floor(Math.random() * b.length)]); $(".contact .kf-img img").attr("src", a) } });


 