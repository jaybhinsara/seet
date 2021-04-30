/*-----------------------------------------------------------*/
/*copyright by 动力无限  www.btoe.cn*/
/*邮箱 btoe@btoe.cn*/
/*合作电话 400-0599-360*/
/*版权所有违者必究*/
/*-----------------------------------------------------------*/


//ys
jQuery(".ys_bot").slide({
    titCell:".hd ul li",
    mainCell:".bd ul",
    effect:"left",
});


//case
jQuery(".case_bot").slide({
    mainCell:".bd ul",
    autoPage:true,
    effect:"left",
    autoPlay:true,
    vis:3
});


//block1
jQuery(".b1_right").slide({
    mainCell:".bd ul",
    autoPage:true,
    effect:"left",
    autoPlay:true,
    vis:2
});

//about
$(document).ready(function(){
    var about_li = $('.about2_box li');
    about_li.first().addClass("about_hot");
    about_li.hover(function(){
        $(this).addClass('about_hot').siblings().removeClass('about_hot');
    });
});


//block3
$(document).ready(function(){
    var b3_li = $('.b3_top li');
    b3_li.first().addClass("b3_hot");
    b3_li.hover(function(){
        $(this).addClass('b3_hot').siblings().removeClass('b3_hot');
        var index = b3_li.index(this);
        $('.b3_bot > div').eq(index).show().siblings().hide();
    });
});

var swiper1 = new Swiper('.swiper-block31', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    clickable: true,
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },
    observer: true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,//修改swiper的父元素时，自动初始化swiper
});
var swiper2 = new Swiper('.swiper-block32', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    clickable: true,
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
    observer: true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,//修改swiper的父元素时，自动初始化swiper
});
var swiper3 = new Swiper('.swiper-block33', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    clickable: true,
    navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3',
    },
    observer: true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,//修改swiper的父元素时，自动初始化swiper
});