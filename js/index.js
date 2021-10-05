window.addEventListener('load',function() {
    // 添加点击事件，点击后会弹出视频
    var qiusheng = document.querySelector('.qiusheng');
    var play = qiusheng.querySelector('.play_pause');
    var translucent = this.document.querySelector('.translucent');
    var close = translucent.querySelector('h1');
    var vid = translucent.querySelector('video');
    
    play.addEventListener('click', function() {
        translucent.style.display = 'block';    
    })

    close.addEventListener('click', function() {
        translucent.style.display = 'none';
    })

    

    // 根据页面被卷的距离来让转跳条高亮
    var activaor = document.querySelector('.activaor');
    var cue = activaor.querySelector('.cue');
    // activaor.style.display = 'none';
    window.addEventListener('scroll', function () {
        var y = window.pageYOffset;
        // console.log(y);
        if (y < 900){
            activaor.style.top = 1000-y+'px';
            cue.style.display = 'none';
        }if (y >= 900 && y < 1800) {
            activaor.style.top = 100+'px';
            cue.style.top = 25+'px';
            var str = cue.innerHTML = '丰富防具';
            cue.style.width = str.length*14 + 'px';
            cue.style.display = 'block';
        }if (y >= 1800 && y < 2600) {
            activaor.style.top = 100+'px';
            cue.style.top = 160+'px';
            var str = cue.innerHTML = '丰富武器及配件';
            cue.style.width = str.length*14 + 'px';
            cue.style.display = 'block';
        }if (y >= 2600 && y < 3693) {
            activaor.style.top = 100+'px';
            cue.style.top = 290+'px';
            var str = cue.innerHTML = '丰富天气和地形';
            cue.style.width = str.length*14 + 'px';
            cue.style.display = 'block';
        }if (y >= 3693 && y < 4573) {
            activaor.style.top = 100+'px';
            cue.style.top = 420+'px';
            var str = cue.innerHTML = '丰富载具';
            cue.style.width = str.length*14 + 'px';
            cue.style.display = 'block';
        }if (y >= 4573) {
            activaor.style.top = 100+'px';
            cue.style.top = 550+'px';
            var str = cue.innerHTML = '各种地形一览无余';
            cue.style.width = str.length*14 + 'px';
            cue.style.display = 'block';
        }
    })
    
// 手风琴
    var accordion = document.querySelector('.weather').querySelector('.accordion');
    var days = accordion.querySelectorAll('.days');
    
    days[0].addEventListener('mouseover', function() {
        days[1].style.left = '1200px';
        days[2].style.left = '1359px';
    })
    
    days[1].addEventListener('mouseover', function() {
        this.style.left = '159px';
        days[2].style.left = '1359px';
    })

    days[2].addEventListener('mouseover', function() {
        this.style.left = '318px';
        days[1].style.left = '159px';
    })
})