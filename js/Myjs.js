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

$(function(){
    $("#citySelect").citySelect({
        nodata: "none",
        required: false,
    });
})


$(function(){
    /*�л�ͼƬ*/
    $(".content .content_top_left .shpwPicture .shpwPicture_left img").hover(function(e){
        var currentElement = e.target;//��ȡ���������¼���Ԫ��
        var url=currentElement.src;
        $(".content .content_top_left .shpwPicture .shpwPicture_right img").attr("src",url);//�����������¼���ͼƬ��src��ֵ��������ʾ��img
        $(".content .content_top_left .shpwPicture .shpwPicture_right img").css({
            width:'300px',
            height:'300px'
        });
    });
})
/*��¼��*/
$(function(){
    $(".main .sign_box .account").focus(function(){
        $(this).css({
            background:"url('../images/icon/account_1.png') no-repeat 2px center"
        })
    })
    $(".main .sign_box .account").blur(function(){
        $(this).css({
            background:"url('../images/icon/account.png') no-repeat 2px center"
        })
    })
    $(".main .sign_box .psw").focus(function(){
        $(this).css({
            background:"url('../images/icon/psw_1.png') no-repeat 2px center"
        })
    })
    $(".main .sign_box .psw").blur(function(){
        $(this).css({
            background:"url('../images/icon/psw.png') no-repeat 2px center"
        })
    })
})

/*ע����֤*/
$(function(){
    /*��֤�ǳ�*/
    $(".main .sign_up_message .username").blur(function(){
        if($(this).val()!=="" && $(this).val().length!==0){
            $(".main .sign_up_message .un_bg").css({
                display:"block"
            })
            $(".main .sign_up_message .un").text("");
        }
        else{
            $(".main .sign_up_message .un_bg").css({
                display:"none"
            })
            $(".main .sign_up_message .un").text("�������ǳ�");
        }
    })
    /*��֤�ֻ���*/
    $(".main .sign_up_message .phone").focus(function(){
        var ph=$(".main .sign_up_message .ph");
        ph.text("��������ȷ���ֻ����룬����Ϊ��ĵ�¼ʱ���˺�")
    })
    $(".main .sign_up_message .phone").blur(function(){
        var phone=$(".main .sign_up_message .phone").val();
        var ph=$(".main .sign_up_message .ph");
        var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;

        if(phone==""){
            ph.text("�������ֻ���");
        }
        else if(phone.length!==11){
            ph.text("��������Ч���ֻ���");
        }
        else if(!myreg.test(phone)){
            ph.text("������Ϸ����ֻ���");
        }
        else{
            $(".main .sign_up_message .ph_bg").css({
                display:"block"
            })
            ph.text("");
        }
    })

    /*��֤����*/
    $(".main .sign_up_message .pwd").focus(function(){
        var pw_bg=$(".main .sign_up_message .pw_bg");
        pw_bg.text("������6-15λ�������ֺ���ĸ������")
    })
    $(".main .sign_up_message .pwd").blur(function(){
        var pwd_val=$(".main .sign_up_message .pwd").val();
        var pw_bg=$(".main .sign_up_message .pw_bg");
        var show=$(".main .sign_up_message .pw")
        var reg = /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,15}$/;
        if(pwd_val==""){
            pw_bg.text("����������");
            show.css({
                display:"none"
            })
        }
        else if(pwd_val.length<6){
            pw_bg.text("��������Ϊ6λ��");
            show.css({
                display:"none"
            })
        }
        else if(pwd_val.length>15){
            pw_bg.text("�������Ϊ15λ��");
            show.css({
                display:"none"
            })
        }
        else if(!reg.test(pwd_val)){
            pw_bg.text("��������뺬���ֺ���ĸ");
            show.css({
                display:"none"
            })
        }
        else{
            show.css({
                display:"block"
            })
            pw_bg.text("");
        }

    })

    /*��֤�ٴ�ȷ������*/

    $(".main .sign_up_message .repwd").blur(function(){
        var repwd=$(".main .sign_up_message .repwd").val();
        var rep_bg=$(".main .sign_up_message .rep_bg");
        var reshow=$(".main .sign_up_message .rep")
        if(repwd.length==0){
            reshow.text("��ȷ������")
        }
        else if(repwd!==$(".main .sign_up_message .pwd").val()){
            reshow.text("�������벻һ�£�����������")
        }
        else{
            reshow.text("");
            rep_bg.css({
                display:"block"
            })
        }
    })


    /*������֤*/
    $(".main .sign_up_message .email").blur(function(){
        var email=$(this).val();
        var em=$(".main .sign_up_message .em");
        var em_bg=$(".main .sign_up_message .em_bg");
        var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        if(email.length==0){
            em.text("�������������");
        }
        else if(!reg.test(email)){
            em.text("������Ϸ��������ַ");
        }
        else{
            em.text("");
            em_bg.css({
                display:"block"
            })
        }
    })

    /*��ַ��֤*/
    $(".main .sign_up_message .location").blur(function(){
        var loction=$(this).val();
        var loc=$(".main .sign_up_message .loc");
        var loc_bg=$(".main .sign_up_message .loc_bg");
        if(loction.length==0){
            loc.text("��������ĳ��õ�ַ");
            loc_bg.css({
                display:"none"
            })
        }
        else{
            loc.text("");
            loc_bg.css({
                display:"block"
            })
        }
    })
})





