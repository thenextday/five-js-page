window.addEventListener('load',function() {
    var carousel = document.querySelector('.carousel');
    var exhibit = carousel.querySelector('.exhibit');
    var controls = carousel.querySelector('.controls')
    // console.log(controls);
    
    var arrImg = ['../img/mercedes/carousel/xlx_01.jpg' , '../img/mercedes/carousel/xlx_02.jpg' , '../img/mercedes/carousel/xlx_03.jpg' , '../img/mercedes/carousel/xlx_04.jpg' , '../img/mercedes/carousel/xlx_05.jpg' , '../img/mercedes/carousel/xlx_06.jpg']
    
    // 添加定时器
    var pause = setInterval(animation,'3000')

    exhibit.addEventListener('mouseover', function() {
        clearInterval(pause);
    })

    exhibit.addEventListener('mouseout', function() {
        pause = setInterval(animation,'3000');
    })

    var currentIndex = 7;
    var ts = 0;
    function animation () {
        ts = currentIndex%6;
        exhibit.src = arrImg[ts];
        
        for (var j = 0; j < arrImg.length; j++) {
            controls.children[j].className = '';
        }
        controls.children[ts].className = 'special';
        currentIndex++;
        
    }
     // 在ol中动态加入li元素
    for (var i = 0; i < arrImg.length; i++){
        var list = document.createElement('li');
        list.setAttribute('index',i)
        controls.append(list);
    }
    // console.log(controls);
    exhibit.src = arrImg[0];
    controls.children[0].className = 'special';
    for (var i = 0; i < arrImg.length; i++){
        controls.children[i].addEventListener('click', function() {
            for (var j = 0; j < arrImg.length; j++) {
                controls.children[j].className = '';
            }
            this.className = 'special';

            var ind = this.getAttribute('index');
            
            currentIndex = ind*6+ind;
            exhibit.src = arrImg[ind];
        })
        
    }

    
})