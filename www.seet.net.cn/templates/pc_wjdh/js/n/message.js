




$(function () {
    // form

    $('.messageBthd').on('click', function () {

        var kcontent = $('#msgContext').val();
        var kuser = $('#msgName').val();
        var kphone = $('#msgTel').val(); 
        var kcode = $('#msgcode').val().trim();
        var reg = /(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$)|(^((\(\d{3}\))|(\d{3}\-))?(1[3578]\d{9})$)|(^400[0-9]{7})/;
        if(kuser == "" && kphone == "" && kcontent ==""){
        	alert("此表单不能为空提交,请您完善相关信息！");
        	return false;
        }

        if (kuser == "") {
            alert('姓名不能为空！')
            $("#msgName").focus();
            return false;
        }
        if (kphone == "") {
            alert('号码不能为空！')
            $("#msgTel").focus();
            return false;
        }
        if(!reg.test(kphone)) {
            alert('号码填写有误,请您输入正确的号码!')
            $("#msgTel").focus();
            return false;
        }
        if (kcontent == "" || kcontent.length < 10) {
            alert('留言内容必须大于10字！')
            $("#msgContext").focus();
            return false;
        }
        if (kcode == "") {
            alert('验证码不能为空')
            $("#msgcode").focus();
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
                $('#msgContext').val('');
                $('#msgName').val('');
                $('#msgTel').val('');
                $('#msgcode').val('');
            }else {
                alert('留言提交失败')
            }
        }) 
    })
})

$(".msgImgcode").click(function () {
    $(this)[0].src = '/api/message.ashx?action=code&' + Math.random()
})


    $(".wjdh-message .close,.wjdh-message i").on('click', function () { wjdhClose() });

    function wjdhClose() { $(".wjdh-message").remove() };
