window.addEventListener('load',function() {
    // 类似换肤效果
    var winterContent = document.querySelector('.winter').querySelector('.winter_content');
    var imgs = winterContent.querySelector('.product_title').querySelectorAll('img');
    var beautiful = winterContent.querySelector('.beautiful');

    var girls = beautiful.querySelectorAll('.girls');

    var boys = beautiful.querySelectorAll('.boys');

    var kids = beautiful.querySelectorAll('.kids');

    var theGirl = winterContent.querySelector('.the_girl').querySelector('img');

    imgs[0].addEventListener('click',function() {
        this.src = '../img/bosedeng/winter/women/y_women_series.svg';
        imgs[1].src = '../img/bosedeng/winter/men/men_series.svg';
        imgs[2].src = '../img/bosedeng/winter/kids/kids_series.svg';
        var s = 2;

        for (i = 0; i < girls.length; i++) {
            girls[i].style.opacity = 1;
            girls[i].style.top = '130px';
            girls[i].style.transition = s + 's';

            boys[i].style.opacity = 0;
            boys[i].style.top = '280px';
            boys[i].style.transition = '0s';

            kids[i].style.opacity = 0;
            kids[i].style.top = '280px';
            kids[i].style.transition = '0s';

            s -= 0.5;
        }

        theGirl.src = '../img/bosedeng/winter/women/women_large.jpg';
    })

    imgs[1].addEventListener('click',function() {
        imgs[0].src = '../img/bosedeng/winter/women/women_series.svg';
        this.src = '../img/bosedeng/winter/men/y_men_series.svg';
        imgs[2].src = '../img/bosedeng/winter/kids/kids_series.svg';
        var s = 2;

        for (i = 0; i < girls.length; i++) {
            girls[i].style.opacity = 0;
            girls[i].style.top = '280px';
            girls[i].style.transition = '0s';

            boys[i].style.opacity = 1;
            boys[i].style.top = '130px';
            boys[i].style.transition = s + 's';

            kids[i].style.opacity = 0;
            kids[i].style.top = '280px';
            kids[i].style.transition = '0s';

            s -= 0.5;
        }

        theGirl.src = '../img/bosedeng/winter/men/men_large.jpg';
    })
    
    imgs[2].addEventListener('click',function() {
        imgs[0].src = '../img/bosedeng/winter/women/women_series.svg';
        imgs[1].src = '../img/bosedeng/winter/men/men_series.svg';
        this.src = '../img/bosedeng/winter/kids/y_kids_series.svg';
        var s = 2;

        for (i = 0; i < girls.length; i++) {
            girls[i].style.opacity = 0;
            girls[i].style.top = '280px';
            girls[i].style.transition = '0s';

            boys[i].style.opacity = 0;
            boys[i].style.top = '280px';
            boys[i].style.transition = '0s';

            kids[i].style.opacity = 1;
            kids[i].style.top = '130px';
            kids[i].style.transition = s + 's';

            s -= 0.5;
        }

        theGirl.src = '../img/bosedeng/winter/kids/kids_large.jpg';
    })

    // 以小托大效果
    var bot = document.querySelector('.bot');
    var move = bot.querySelector('.move');
    var steep = bot.querySelector('.steep');
    var moveBox = steep.querySelector('.move_box')

    // console.log(moveBox);
    moveBox.addEventListener('mousedown',function(e) {
        
        var x = e.pageX - steep.offsetLeft -this.offsetLeft;

        // console.log(x);

        this.addEventListener('mousemove',moveMethods);
        function moveMethods (e) {
            var boxX = e.pageX - steep.offsetLeft - x;

            if (boxX <= 0) {
                boxX = 0;
            }else if (boxX >= steep.offsetWidth - moveBox.offsetWidth) {
                boxX = steep.offsetWidth - moveBox.offsetWidth;
            }

            this.style.left = boxX + 'px';
            
            console.log(this.offsetLeft);

            var moveLeft =boxX*(move.offsetWidth - bot.offsetWidth)/(steep.offsetWidth - moveBox.offsetWidth);
            move.style.left = - moveLeft +'px';
            console.log(move.style.left);
            
            
        }
        // console.log(x);
        this.addEventListener('mouseup', function() {
            this.removeEventListener('mousemove',moveMethods)
        })
        
    })

    
    
})