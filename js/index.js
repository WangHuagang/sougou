$(function(){
    $("header .nav .add_arrow1").on("click",function(){
        $("header .nav .sec_ul1").slideToggle(100);
    })
    $("header .nav .add_arrow2").on("click",function(){
        $("header .nav .sec_ul2").slideToggle(100);
    })
})


/*倒计时*/
$(function(){
    show_time();
});

function show_time(){
    var time_start = new Date().getTime(); //设定当前时间
    var time_end =  new Date("2017/04/09 00:00:00").getTime(); //设定目标时间
    // 计算时间差
    var time_distance = time_end - time_start;
    // 天
    var int_day = Math.floor(time_distance/86400000)
    time_distance -= int_day * 86400000;
    // 时
    var int_hour = Math.floor(time_distance/3600000)
    time_distance -= int_hour * 3600000;
    // 分
    var int_minute = Math.floor(time_distance/60000)
    time_distance -= int_minute * 60000;
    // 秒
    var int_second = Math.floor(time_distance/1000)
    // 时分秒为单数时、前面加零
    if(int_day < 10){
        int_day = "0" + int_day;
    }
    if(int_hour < 10){
        int_hour = "0" + int_hour;
    }
    if(int_minute < 10){
        int_minute = "0" + int_minute;
    }
    if(int_second < 10){
        int_second = "0" + int_second;
    }
    // 显示时间
    $(".goods .count_down #cd_span1").html(int_day);
    $(".goods .count_down #cd_span2").html(int_hour);
    $(".goods .count_down #cd_span3").html(int_minute);
    $(".goods .count_down #cd_span4").html(int_second);
    // 设置定时器
    setTimeout("show_time()",1000);
}