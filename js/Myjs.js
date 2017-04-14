/**
 * Created by Mr.Wang on 2017/4/7.
 */
$(function(){
    $(".price_btn").hover(function(){

        $(this).css({
            overflow:"visible"
        });
    },function(){
        $(this).css({
            overflow:"hidden"
        });
    })
})

/*切换图片*/
$(function(){
    $(".content .content_top_left .shpwPicture .shpwPicture_left img").click(function(e){
        var currentElement = e.target;//获取触发单击事件的元素
        var url=currentElement.src;
        $(".content .content_top_left .shpwPicture .shpwPicture_right img").attr("src",url);//将触发单击事件的图片的src赋值给你想显示的img
        $(".content .content_top_left .shpwPicture .shpwPicture_right img").css({
            width:'300px',
            height:'300px'
        });
    });
})

