window.addEventListener('load',function () {
    // 关闭广告
    var poster = document.querySelector('.poster');
    var btn = poster.querySelector('.btn');

    btn.addEventListener('click' ,function() {
        poster.style.display = 'none';
    })

    // 制作放大镜
    var main1 = document.querySelector('.main1');
    var ul = main1.querySelector('ul');
    var box1 = main1.querySelector('.box1')
    var magn = box1.querySelector('.magnifier')

    var mirror = main1.querySelector('.mirror_image');
    var inversion = mirror.querySelector('.inversion');
    // console.log(box1);

    box1.addEventListener('mouseover', function() {
        magn.style.display = 'block';
        mirror.style.display = 'block';
    })

    box1.addEventListener('mouseout', function() {
        magn.style.display = 'none';
        mirror.style.display = 'none';
    })

    box1.addEventListener('mousemove', function (e) {
        var x = e.pageX - ul.offsetLeft;
        var y = e.pageY- ul.offsetTop;

        var maskX = x - magn.offsetWidth/2;
        var maskY = y - magn.offsetHeight/2;

        if (maskX <= 0) {
            maskX = 0;
        }else if(maskX >= this.offsetWidth - magn.offsetWidth) {
            maskX = this.offsetWidth - magn.offsetWidth;
        }
        if (maskY <= 0) {
            maskY = 0;
        }else if(maskY >= this.offsetHeight - magn.offsetHeight) {
            maskY = this.offsetHeight - magn.offsetHeight;
        }

        magn.style.left = maskX + 'px';
        magn.style.top = maskY + 'px';
        // 核心思路：半透明遮罩的坐标/半透明遮罩能在父元素内移动的距离=大图片的坐/大图片父元素的宽或高。
        var moveX = maskX*mirror.offsetWidth/(this.offsetWidth - magn.offsetWidth);
        var moveY = maskY*mirror.offsetHeight/(this.offsetHeight - magn.offsetHeight);
        inversion.style.left = - moveX + 'px';
        inversion.style.top = - moveY + 'px';
    })

    // 制作倒计时
    var countDown = document.querySelector('.main8').querySelector('.lu2').querySelector('.count_down');
    var theDays = countDown.querySelector('.the_days');
    var theHours = countDown.querySelector('.the_hours');
    var theMinutes = countDown.querySelector('.the_minutes');
    var theSecs = countDown.querySelector('.the_secs');

    console.log(theSecs);
    
    var tiemr = setInterval(function() {
        var nowTime = new Date();
        var endTIme = new Date("2020/09/01 00:00:00");

        var times = (endTIme.getTime() - nowTime.getTime())/1000;
        var the_days = parseInt(times/(24*60*60));
        var the_hours = parseInt(times/(60*60)%24);
        var the_minutes = parseInt(times/60%60);
        var the_secs = parseInt(times%60);

        the_secs < 10 ? the_secs ='0' +  the_secs :  the_secs = the_secs ;
        the_minutes < 10 ? the_minutes ='0' +  the_minutes : the_minutes = the_minutes;
        the_hours < 10 ?  the_hours ='0' +  the_hours : the_hours = the_hours;
        the_days < 10 ? the_days ='0' +  the_days : the_days = the_days;

        theDays.innerHTML = the_days;
        theHours.innerHTML = the_hours;
        theMinutes.innerHTML = the_minutes;
        theSecs.innerHTML = the_secs;
    },'1000')

})