<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
        <title>C</title>
    <script src="https://cdn.wpon.cn/duanshipin/io/js/mui.min.js"></script>
    <script src="https://cdn.wpon.cn/duanshipin/io/js/jquery.min.js"></script>
    <script src="https://cdn.wpon.cn/duanshipin/io/js/swiper.min.js"></script>
    <link href="https://cdn.wpon.cn/duanshipin/io/css/mui.min.css" rel="stylesheet">
    <link href="https://cdn.wpon.cn/duanshipin/io/css/swiper.min.css" rel="stylesheet">
    <link href="https://cdn.wpon.cn/duanshipin/io/css/style.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.w3cbus.com/library/mdui/1.0.2/css/mdui.min.css"/>
    <link rel="stylesheet" href="./css/styles.css">
    <link rel="stylesheet" href="https://cdn.w3cbus.com/library/mdui/1.0.2/css/mdui.min.css"/>
    <style>
    body{
      background-color:#eee;
      }
      h1{
        color:grey;
        font-size:10px;
        text-align:center;
        }
     #im{
       background-color:#EEEEEE;
       height:92.6%;
       }
     #im2{
       background-color:;
       }

.functions {
    width: 80px;
    margin:0 auto;
}

     </style>
     </head>
     <body>
    <script type="text/javascript" charset="utf-8">
        mui.init();
    </script>



    <div id="wrap">

        <div class="swiper-container" id="im" style="box-shadow:0 0px 3px rgba(0,0,0,0.2);border-radius:20px;width:660px;height:1300px">

            <div class="swiper-wrapper" style="border:0px solid;width:660px;">


            </div>
        </div>

    <script type="text/javascript">
        window.onload = function() {
            //ios会使用自带的视频播放器全屏播放
            $('.swiper-wrapper video').each(function() {
                enableInlineVideo(this);
            });

            $.ajax({
                type: "GET",
                url: "#",
                contentType: 'application/json',
                data: {
                    page: 1,
                    type: 1
                },
                dataType: "jsonp",
                success: function(res) {
                    console.log(res.data)
                },
                error: function(xhr) {

                    console.log(xhr);
                }
            });


            var arwr = [{
                title: "创海工作室",
                msg: true,
                state: 'pause',
                src: 'https://tucdn.wpon.cn/api-girl/index.php?wpon=302',
                videoImg: ''
            }, ];


            $(function() {
                setInterval(function() {
                    $("#swiper-slide").load(location.href + " #swiper-slide>*", ""); //注意后面DIV的ID前面的空格跟 id 后的>*，很重要！
                }, 8000); //8秒自动刷新
            })




            $.each(arwr, function(i, item) {
                console.log(item.src);

                var lihtml = $(
                    `<div class="swiper-slide">
                        <video autoplay="autoplay" class="video" id="video${i+1}" preload="auto" src="${item.src}"  data-id="${i+1}" page-gesture="true" 
     show-center-play-btn="true" show-play-btn="false" enable-play-gesture="true" loop="true">无网络</video>
    
				<div class="play"></div><div class="desc"><div class="desc_name">
                  </div>

				</div>

<h1>本软件短视频模块只提供页面服务,其视频源均出自于第三方</h4>
<h1>如果视频出现侵权,可与第三方进行协谈</h1>
     <div id="tm">
					<div class="functions">

      <img src="./img/tm2.png" width="80" style="transform:translate(0px,-504px);opacity:0.3">
					</div>
     </div>
					<div class="function" id="${item.state}">
     	<div class="dianzan">
							<div id="hongxin" class="${item.msg?"xin":"xin_active"}"></div>
							<div class="dianzan_number">点赞</div>
						</div>
						<div class="xiarou-go" onclick="javascript:location.reload();">
							<img src="https://tucdn.wpon.cn/2021/12/20/17d2e702c7533.svg" alt="">
							<div class="xiarou-go_number">下一个</div>
						</div>
					</div>  
   </div>`
                )
                $(".swiper-wrapper").append(lihtml);
            })



            //点赞变红心   还是考虑用一个div的背景图片来做 用2个img太难考虑了
            $("#wrap").on("click", ".swiper-slide .function .dianzan #hongxin", function(e) {
                //先获取视频id
                // var id = $(this).data("id");

                if ($(this).hasClass("xin")) { //点击实心
                    // 发送ajax成功之后
                    $(this).addClass("xin_active").removeClass("xin");
                    mui
                } else if ($(this).hasClass("xin_active")) { //点击红心
                    // 发送ajax成功之后
                    $(this).addClass("xin").removeClass("xin_active");
                    mui
                }


            })

            //一级留言点赞变红拇指   还是考虑用一个div的背景图片来做 用2个img太难考虑了
            $("#wrap").on("click", ".remark_mid .remarkMid_info .info_right .plinfo_img",
                function(e) {
                    //先获取评论id
                    // var id = $(this).data("id");
                    console.log(1);
                    if ($(this).hasClass("plmuzhi")) { //点击实心
                        // 发送ajax成功之后
                        $(this).addClass("plmuzhi_active").removeClass("plmuzhi");
                        var number = Number($(this).prev().text()) + 1;
                        console.log(number)
                        $(this).prev().text(number)

                    } else if ($(this).hasClass("plmuzhi_active")) { //点击红心
                        // 发送ajax成功之后
                        $(this).addClass("plmuzhi").removeClass("plmuzhi_active");
                        var number = Number($(this).prev().text()) - 1;
                        console.log(number)
                        $(this).prev().text(number)

                    }

                })


            //一级评论点赞变红拇指   还是考虑用一个div的背景图片来做 用2个img太难考虑了
            $("#wrap").on("click", ".twoRemarkWrap .twoRemark .twoRemark_mid .twoRemarkMid_info .info_right .info_img",
                function(e) {
                    //先获取评论id
                    // var id = $(this).data("id");
                    console.log(1);
                    if ($(this).hasClass("muzhi")) { //点击实心
                        // 发送ajax成功之后
                        $(this).addClass("muzhi_active").removeClass("muzhi");
                        var number = Number($(this).prev().text()) + 1;
                        console.log(number)
                        $(this).prev().text(number)

                    } else if ($(this).hasClass("muzhi_active")) { //点击红心
                        // 发送ajax成功之后
                        $(this).addClass("muzhi").removeClass("muzhi_active");
                        var number = Number($(this).prev().text()) - 1;
                        console.log(number)
                        $(this).prev().text(number)

                    }

                })

            //二级回复点赞变红拇指   还是考虑用一个div的背景颜色来做 用2个img太难考虑了
            $("#wrap").on("click",
                ".twoRemarkWrap .twoRemark .twoRemark_wrap .twoRemarkWrap_info .infoItem_right .hfinfo_img",
                function(e) {
                    //先获取评论回复id
                    // var id = $(this).data("id");
                    console.log(2);
                    if ($(this).hasClass("hfmuzhi")) { //点击实心
                        // 发送ajax成功之后
                        $(this).addClass("hfmuzhi_active").removeClass("hfmuzhi");
                        var number = Number($(this).prev().text()) + 1;
                        $(this).prev().text(number)

                    } else if ($(this).hasClass("hfmuzhi_active")) { //点击红心
                        // 发送ajax成功之后
                        $(this).addClass("hfmuzhi").removeClass("hfmuzhi_active");
                        var number = Number($(this).prev().text()) - 1;
                        console.log(number)
                        $(this).prev().text(number)

                    }

                })

            //点击某个视频的播放按钮，如果正在播放则暂停，如果暂停则播放
            $("#wrap").on("click", ".swiper-slide .play", function(e) {

                var i = $(this).prev().data("id");
                console.log(i)
                var select = "video" + i;
                console.log(select)
                var video = document.getElementById(select);
                console.log(video)
                if (video.paused) {
                    video.play();
                    $(this).children("img").hide();
                     document.getElementById("tm").innerHTML='<div class="functions"><img src="./img/tm2.png" width="80" style="transform:translate(0px,-1304px);opacity:0.2"></div>';
                } else {
                    video.pause();
                    $(this).children("img").show();
                     document.getElementById("tm").innerHTML='<div class="functions"><img src="./img/tm3.png" width="80" style="transform:translate(0px,-764px);opacity:0.2"></div>';
                }

            })

            var mySwiper = new Swiper('.swiper-container', {
                direction: 'vertical', // 垂直切换选项
                on: {
                    slideChangeTransitionEnd: function() {

                        $(".remarkWrap").slideUp(100);
                        $(".twoRemarkWrap").slideUp(100);

                        console.log(this.activeIndex) //切换结束时，告诉我现在是第几个slide
                        var videoLength = $(".swiper-container .swiper-slide").length;
                        console.log(videoLength);


                        //先显示 (这一部分是不能实现进去就播放因为没有进行过交互动作所以先在加载的时候全部先暂停并时间重置为0，用户点击的时候再播放)
                        for (var i = 1; i < (videoLength + 1); i++) {

                            var select = "video" + i;
                            console.log(select)
                            var video = document.getElementById(select);
                            video.currentTime = 0;
                            video.pause();
                            $(".swiper-container .swiper-slide .play img").show();

                        }





                    },
                },

            })
        }
    </script>



<script src="https://www.wpon.cn/lsp/js/j.js"></script>
<script type="text/javascript">
    // vue 解析
    var Application = new Vue({
        el: "#app",
        data: {
            videoUrl:'',
            video:null,
        },
        mounted: function(){
            this.videoUrl = url;
            this.video = this.$refs.video;
        },
        methods: {
            player:function(){
                if(this.video.paused){
                    // 播放
                    this.video.play();
                }else{
                    // 暂停
                    this.video.pause()
                };            
            }
        }
    });

var startx, starty;
 
//获得角度
function getAngle(angx, angy) {
    return Math.atan2(angy, angx) * 180 / Math.PI;
};
 
//根据起点终点返回方向 1向上滑动 2向下滑动 3向左滑动 4向右滑动 0点击事件
function getDirection(startx, starty, endx, endy) {
    var angx = endx - startx;
    var angy = endy - starty;
    var result = 0;
 
    //如果滑动距离太短
    if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
        return result;
    }
 
    var angle = getAngle(angx, angy);
    if (angle >= -135 && angle <= -45) {
        result = 1;
    } else if (angle > 45 && angle < 135) {
        result = 2;
    } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 3;
    } else if (angle >= -45 && angle <= 45) {
        result = 4;
    }
    return result;
}
 
//手指接触屏幕
document.addEventListener("touchstart", function(e){
    startx = e.touches[0].pageX;
    starty = e.touches[0].pageY;
}, false);
 
//手指离开屏幕
document.addEventListener("touchend", function(e) {
    var endx, endy;
    endx = e.changedTouches[0].pageX;
    endy = e.changedTouches[0].pageY;
    var direction = getDirection(startx, starty, endx, endy);
    switch (direction) {
        case 1:
            location.assign(location);
            break;
        case 3:
            location.assign(location);
            break;
        }
}, false);
</script>
    <script src="https://cdn.wpon.cn/duanshipin/io/js/rem.js"></script>
    <script src="https://cdn.w3cbus.com/library/mdui/1.0.2/js/mdui.min.js"></script>
</body>

</html>