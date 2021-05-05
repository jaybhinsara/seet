




$(function () {
    // form

    $('.messageBthd').on('click', function () {

        var kcontent = $('#msgContext').val();
        var kuser = $('#msgName').val();
        var kphone = $('#msgTel').val(); 
        var kcode = $('#msgcode').val().trim();
        var reg = /(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$)|(^((\(\d{3}\))|(\d{3}\-))?(1[3578]\d{9})$)|(^400[0-9]{7})/;
        if(kuser == "" && kphone == "" && kcontent ==""){
        	alert("This form cannot be blank to submit, please complete the relevant information!");
        	return false;
        }

        if (kuser == "") {
            alert('The name cannot be empty!')
            $("#msgName").focus();
            return false;
        }
        if (kphone == "") {
            alert('The number cannot be empty!')
            $("#msgTel").focus();
            return false;
        }
        if(!reg.test(kphone)) {
            alert('The number is incorrect, please enter the correct number!')
            $("#msgTel").focus();
            return false;
        }
        if (kcontent == "" || kcontent.length < 10) {
            alert('The message content must be greater than 10 words!')
            $("#msgContext").focus();
            return false;
        }
        if (kcode == "") {
            alert('verification code must be filled')
            $("#msgcode").focus();
            return false;
        }
        $.post('/api/message.ashx?action=add', {
            "kcontent": 'information:' + kcontent ,
            "kuser": kuser,
            "kphone": kphone, 
            "kcode": kcode
        }, function (res) {
            if (res == '1') {
                alert("Message submitted successfully");
                $('#msgContext').val('');
                $('#msgName').val('');
                $('#msgTel').val('');
                $('#msgcode').val('');
            }else {
                alert('Message submission failed')
            }
        }) 
    })
})

$(".msgImgcode").click(function () {
    $(this)[0].src = '/api/message.ashx?action=code&' + Math.random()
})


    $(".wjdh-message .close,.wjdh-message i").on('click', function () { wjdhClose() });

    function wjdhClose() { $(".wjdh-message").remove() };
