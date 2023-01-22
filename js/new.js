
    	// 设置倒计时的时间
    	
        var countDownDate = new Date("Jan 22, 2023 00:00:00").getTime();

        // 每秒更新倒计时
        var x = setInterval(function() {

            // 获取当前时间
            var now = new Date().getTime();

            // 计算时间差
            var distance = countDownDate - now;

            // 计算天、时、分、秒
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // 显示倒计时
            document.getElementById("countdown").innerHTML = days + "天 " + hours + "时 "
            + minutes + "分 " + seconds + "秒 ";

            // 如果时间到了，显示烟花
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "Happy chinese new year!";
                document.getElementById("fireworks").className = "active";
            }
        }, 1000);
   
