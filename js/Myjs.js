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
    /*切换图片*/
    $(".content .content_top_left .shpwPicture .shpwPicture_left img").hover(function(e){
        var currentElement = e.target;//获取触发单击事件的元素
        var url=currentElement.src;
        $(".content .content_top_left .shpwPicture .shpwPicture_right img").attr("src",url);//将触发单击事件的图片的src赋值给你想显示的img
        $(".content .content_top_left .shpwPicture .shpwPicture_right img").css({
            width:'300px',
            height:'300px'
        });
    });
})
/*登录框*/
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

/*注册验证*/
$(function(){
    /*验证昵称*/
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
            $(".main .sign_up_message .un").text("请输入昵称");
        }
    })
    /*验证手机号*/
    $(".main .sign_up_message .phone").focus(function(){
        var ph=$(".main .sign_up_message .ph");
        ph.text("请输入正确的手机号码，将作为你的登录时的账号")
    })
    $(".main .sign_up_message .phone").blur(function(){
        var phone=$(".main .sign_up_message .phone").val();
        var ph=$(".main .sign_up_message .ph");
        var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;

        if(phone==""){
            ph.text("请输入手机号");
        }
        else if(phone.length!==11){
            ph.text("请输入有效的手机号");
        }
        else if(!myreg.test(phone)){
            ph.text("请输入合法的手机号");
        }
        else{
            $(".main .sign_up_message .ph_bg").css({
                display:"block"
            })
            ph.text("");
        }
    })

    /*验证密码*/
    $(".main .sign_up_message .pwd").focus(function(){
        var pw_bg=$(".main .sign_up_message .pw_bg");
        pw_bg.text("请输入6-15位包含数字和字母的密码")
    })
    $(".main .sign_up_message .pwd").blur(function(){
        var pwd_val=$(".main .sign_up_message .pwd").val();
        var pw_bg=$(".main .sign_up_message .pw_bg");
        var show=$(".main .sign_up_message .pw")
        var reg = /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,15}$/;
        if(pwd_val==""){
            pw_bg.text("请输入密码");
            show.css({
                display:"none"
            })
        }
        else if(pwd_val.length<6){
            pw_bg.text("密码至少为6位数");
            show.css({
                display:"none"
            })
        }
        else if(pwd_val.length>15){
            pw_bg.text("密码最多为15位数");
            show.css({
                display:"none"
            })
        }
        else if(!reg.test(pwd_val)){
            pw_bg.text("密码需必须含数字和字母");
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

    /*验证再次确认密码*/

    $(".main .sign_up_message .repwd").blur(function(){
        var repwd=$(".main .sign_up_message .repwd").val();
        var rep_bg=$(".main .sign_up_message .rep_bg");
        var reshow=$(".main .sign_up_message .rep")
        if(repwd.length==0){
            reshow.text("请确认密码")
        }
        else if(repwd!==$(".main .sign_up_message .pwd").val()){
            reshow.text("两次密码不一致，请重新输入")
        }
        else{
            reshow.text("");
            rep_bg.css({
                display:"block"
            })
        }
    })


    /*邮箱验证*/
    $(".main .sign_up_message .email").blur(function(){
        var email=$(this).val();
        var em=$(".main .sign_up_message .em");
        var em_bg=$(".main .sign_up_message .em_bg");
        var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        if(email.length==0){
            em.text("请输入你的邮箱");
        }
        else if(!reg.test(email)){
            em.text("请输入合法的邮箱地址");
        }
        else{
            em.text("");
            em_bg.css({
                display:"block"
            })
        }
    })

    /*地址验证*/
    $(".main .sign_up_message .location").blur(function(){
        var loction=$(this).val();
        var loc=$(".main .sign_up_message .loc");
        var loc_bg=$(".main .sign_up_message .loc_bg");
        if(loction.length==0){
            loc.text("请输入你的常用地址");
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





