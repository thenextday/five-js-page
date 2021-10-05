//window.addEventListener('load',function() {
    var footer = document.querySelector('footer');
    var btn = footer.querySelector('.btn');

    var blackBcg = document.querySelector('.black_bcg')
    var login = blackBcg.querySelector('.login');
    var title = login.querySelector('.title');
    var special = login.querySelector('.special');
    var useName = login.querySelector('.useName');
    var paw = login.querySelector('.paw');
    var btns = login.querySelector('button');
    var telText = login.querySelector('.tel');
    var psdText = login.querySelector('.psd')
    var butText = login.querySelector('.button_text');
    var telBlank = login.querySelector('.tel_blank');
    var telNumber = login.querySelector('.tel_number')
    var telRight = login.querySelector('.tel_right')



    console.log(butText);
    
    btn.addEventListener('click', function() {
        blackBcg.style.display = 'block';
        butText.value = '点此发送验证码';
    })

    special.addEventListener('click',function() {
        blackBcg.style.display = 'none';
        
    })

    title.addEventListener('mousedown',function(e) {
        var x = e.pageX - login.offsetLeft;
        var y = e.pageY - login.offsetTop;
        // console.log(y);

        this.addEventListener('mousemove' ,move);
        function move (e) {
            var moveX = e.pageX - x;
            var moveY = e.pageY - y;

            if(moveX <= 0) {
                moveX = 0
            }else if (moveX >= blackBcg.offsetWidth - login.offsetWidth) {
                moveX = blackBcg.offsetWidth - login.offsetWidth;
            }

            if(moveY <= 0) {
                moveY = 0
            }else if(moveY >= blackBcg.offsetHeight - login.offsetHeight) {
                moveY = blackBcg.offsetHeight - login.offsetHeight
            }

            

            login.style.left = moveX +'px';
            login.style.top = moveY + 'px';
            // console.log(e.pageY - y);
            
        }

        this.addEventListener('mouseup', function() {
            this.removeEventListener('mousemove',move)
        })

    })

    btns.disabled = true;
    butText.disabled = true;

    var telVer =  /^1[3578]\d{9}$/;
    // console.log();
    useName.addEventListener('focus', function() {
        telText.style.display = 'block';
        telBlank.style.display = 'none';
        telNumber.style.display = 'none';
        telRight.style.display = 'none'; 
    })

    useName.addEventListener('blur', function() {
        if (useName.value == '') {
            telText.style.display = 'none';
            telBlank.style.display = 'block';
            telNumber.style.display = 'none';
            telRight.style.display = 'none';
        }

        else if (!telVer.test(useName.value)) {
            telText.style.display = 'none';
            telBlank.style.display = 'none';
            telNumber.style.display = 'block';
            telRight.style.display = 'none';
        }

        else {
            telText.style.display = 'none';
            telBlank.style.display = 'none';
            telNumber.style.display = 'none';
            telRight.style.display = 'block';

            var pweLogin = login.querySelector('.pwe_login');
            var pweBlank = login.querySelector('.pwe_blank');
            var pweNumber = login.querySelector('.pwe_number');
            var pweRight = login.querySelector('.pwe_right');

            paw.addEventListener('focus',function () {
                pweLogin.style.display = 'block';
                pweBlank.style.display = 'none';
                pweNumber.style.display = 'none';
                pweRight.style.display = 'none';
                butText.disabled = true;

                
            })

            var repassword = /^\w{6,12}$/;

            paw.addEventListener('blur', function() {

                if (paw.value == '') {
                    pweLogin.style.display = 'none';
                    pweBlank.style.display = 'block';
                    pweNumber.style.display = 'none';
                    pweRight.style.display = 'none';
                    butText.disabled = true;
                }

                else if (repassword.test(paw.value) == false) {
                    pweLogin.style.display = 'none';
                    pweBlank.style.display = 'none';
                    pweNumber.style.display = 'block';
                    pweRight.style.display = 'none';
                    butText.disabled = true;
                }

                else{
                    pweLogin.style.display = 'none';
                    pweBlank.style.display = 'none';
                    pweNumber.style.display = 'none';
                    pweRight.style.display = 'block';
                    butText.disabled = false;
                }
            })
        }
    })


    var randomArray = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

    butText.addEventListener('click', function () {
        var code = '';
        var tally = 3;
        var timer = setInterval(function() {
            if (tally == 0) {
                for(i = 0; i < 6; i++) {
                    var ind = Math.floor(Math.random()*10);
                    code += randomArray[ind];
                }
                console.log(code);
                alert(code);
                tally = 3;
                butText.value = '重新获取';
                clearInterval(timer);
            }else{
                butText.value = '验证码将在'+tally+'秒后送达';
                tally--;
            }
        },'1000')

        var idenCode = login.querySelector('.iden_code')
        var idenLogin = login.querySelector('.iden_login');
        var idenBlank = login.querySelector('.iden_blank');
        var idenNumber = login.querySelector('.iden_number');
        var idenRight = login.querySelector('.iden_right');

        idenCode.addEventListener('focus' , function() {
            idenLogin.style.display = 'block';
            idenBlank.style.display = 'none';
            idenNumber.style.display = 'none';
            idenRight.style.display = 'none';
            btns.disabled = true;
        })

        idenCode.addEventListener('blur' , function () {
            if (idenCode.value == '') {
                idenLogin.style.display = 'none';
                idenBlank.style.display = 'block';
                idenNumber.style.display = 'none';
                idenRight.style.display = 'none';
                btns.disabled = true;
            }

            else if (idenCode.value != code) {
                idenLogin.style.display = 'none';
                idenBlank.style.display = 'none';
                idenNumber.style.display = 'block';
                idenRight.style.display = 'none';
                btns.disabled = true;
            }

            else {
                idenLogin.style.display = 'none';
                idenBlank.style.display = 'none';
                idenNumber.style.display = 'none';
                idenRight.style.display = 'block';
                btns.disabled = false;
            }
        })

    })

    var eye = login.querySelector('.eye');

    eye.addEventListener('click', function () {
        // console.log(paw.type);
        
        if (this.src.match('close')) {
            this.src = '../img/armani/footer/open.png';
            paw.type = 'text';
            
        }

        else{
            this.src = '../img/armani/footer/close.png';
            paw.type = 'password';
        }

        
    }) 

    
//})