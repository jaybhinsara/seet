
//xunpan
$(function () {
    $('#xunpanText').hover(function() {
        var xunpanText = $(this).data('tiptitle');
        $('#xunpantip').css({
            top: $(this).outerHeight(true) + 10 + 'px'
        });
        $('#xunpantip').text(xunpanText);
        $('#xunpantip').addClass('xunpantextactive');
    }, function () {
        $('#xunpantip').removeClass('xunpantextactive');
    })
});



//nav
$(function () {
    $('.sanji_xiala_di').css('display', "none")
    $('.erji_xiala > i').each(function () {
        if ($(this).find('.sanji_xiala').children().length > 0) {
            $(this).find('.sanji_xiala_di').show()
        }
    })
});


//sub
//sub
$(function () {
    $('.m_sub').on('click', function () {
        var kcontent = $('#m_text').val();
        var kuser = $('#m_name').val();
        var kphone = $('#m_phone').val();
        var kcode = $('#codeText').val().trim();
        // var kemail = $('.useremail').val();
        var reg = /(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$)|(^((\(\d{3}\))|(\d{3}\-))?(1[3578]\d{9})$)|(^400[0-9]{7})/;
        if (kuser == "") {
            alert('姓名不能为空！')
            $("#m_name").focus();
            return false;
        }
        if (kphone == "") {
            alert('号码不能为空！')
            $("#m_phone").focus();
            return false;
        }
        if(!reg.test(kphone)) {
            alert('号码填写有误！')
            $("#m_phone").focus();
            return false;
        }
        if (kcontent == "" || kcontent.length < 10) {
            alert('留言内容必须大于10字！')
            $("#m_text").focus();
            return false;
        }

        if (kcode == "") {
            alert('验证码不能为空')
            $("#codeText").focus();
            return false;
        }

        $.post('/api/message.ashx?action=add', {
            "kcontent": '信息：' + kcontent ,
            "kuser": kuser,
            "kphone": kphone,
            "kcode": kcode
        }, function (res) {
            if (res == 1) {
                alert("留言提交成功");
                $('#m_text').val('');
                $('#m_name').val('');
                $('#m_phone').val('');
            }else {
                alert(res)
            }
        })
    })
})




//验证码刷新
$("#imgCode").click(function () {
    $(this)[0].src = '/api/message.ashx?action=code&' + Math.random()
})


document.oncontextmenu = new Function("event.returnValue=false");
document.onselectstart = new Function("event.returnValue=false");  
