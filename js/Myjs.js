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

/*�л�ͼƬ*/
$(function(){
    $(".content .content_top_left .shpwPicture .shpwPicture_left img").click(function(e){
        var currentElement = e.target;//��ȡ���������¼���Ԫ��
        var url=currentElement.src;
        $(".content .content_top_left .shpwPicture .shpwPicture_right img").attr("src",url);//�����������¼���ͼƬ��src��ֵ��������ʾ��img
        $(".content .content_top_left .shpwPicture .shpwPicture_right img").css({
            width:'300px',
            height:'300px'
        });
    });
})

