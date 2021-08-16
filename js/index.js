$(function(){
    let len = $('.scroll').length
    console.log(len)
    let delta, num = 0, move, posTop;
    $('main').scrollTop(0);
    $(window).on('mousewheel DOMMouseScroll',function(e){
        delta =  e.originalEvent.wheelDelta ||  e.originalEvent.detail * -40;
        clearTimeout(move);
        move = setTimeout(function(){
            if(delta < 0){
                // console.log('down');
            if(num < len-1) num++;
            }else{
                // console.log('up');
                if(num > 0) num--;
            }
            ani();
        },100);
    });
    function ani(){

        if( num == 5  ){
            posTop = -$('.scroll').eq(num).position().top + ($(window).height() - $('footer').height())
            $('.main_menu a').css({display: `none`});
            $('.main_menu span').css({display: `none`});
        }else{
            posTop = -$('.scroll').eq(num).position().top;
            $('.main_menu a').css({display: `inline-block`});
            $('.main_menu span').css({display: `inline-block`});
            // 상단 메뉴 고정
            if(num < 4 && num > 0){
                $('.navbar').addClass('active');
            }else{
                $('.navbar').removeClass('active');
            }
    
        }       

        $('.wrap').css({transform:`translateY(${posTop}px)`}); 

        if(posTop == -$('.scroll').eq(1).position().top){
            $('.scroll').eq(1).find('figure').addClass('active');
        }

        // section Event
        if(num == 1){
            $('.content2').addClass('active');
        }else{
            $('.content2').removeClass('active');
        }
        if(num == 2){
            $('.content3').addClass('active');
        }else{
            $('.content3').removeClass('active');
        }
        if(num == 3){
            $('.content4').addClass('active');
        }else{
            $('.content4').removeClass('active');
        }
        if(num == 4){
            $('.con5').addClass('active')
            $('.content5').addClass('active');
            $('.sns-icon').addClass('active');
            console.log($('.content5 strong'))
        }else{
            $('.sns-icon').removeClass('active');
            $('.con5').removeClass('active')
        }






        $('.main_menu a').removeClass('active').eq(num).addClass('active');
        $('.main_menu span').removeClass('active').eq(num).addClass('active');

        // $('section div').removeClass('animatable').eq(num).addClass('animated');
        // $('.wrap section').removeClass('active').eq(num).addClass('active');
    }

    $('.main_menu li').on('click',function(){
        num = $(this).index();
        ani();
    })

})

function slide(){
    $(".content2 > .con1 ul").slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1500,
        // pauseOnHover : true    //마우스 호버하면 슬라이더 멈춤
    });
}


// 숫자 카운터 이벤트
// function count(s,e){
//     let loop=setInterval(()=>{
//         if(e > s) {
//             s++;
//         }else{
//             clearInterval(loop)
//         };
//         console.log(s)
//     },100)
// }
// count(0,45);
// count(0,80);

function result(){

    const vBox = document.querySelector('.box');
    let xhr, res,tagList='';
    xhr = new XMLHttpRequest();
    xhr.open('get','./js/data.json');
    xhr.send(null);
    xhr.onload = function(){
        res = JSON.parse(xhr.responseText);
    



    

        // 비디오 화면
        res.video.forEach(function(v,k) {
            tagList += `<div class = "video-box">
                            <video autoplay muted loop>
                                <source src =${v.src} type =${v.type} >
                            </video>

                            <div class="txt-box">
                                <h2>${v.tit}</h2>
                                <p>${v.tit2}</p>
                            </div>
                        </div>`;
        });
        vBox.innerHTML = tagList;
        const video = document.querySelectorAll('.video-box');
        video[0].classList.add('active')
        const txtBox = document.querySelectorAll('.txt-box');
        console.log(txtBox)
        txtBox[0].classList.add('active')
        // const videoIcon = document.querySelectorAll('.video_btn  .video_icon > li ');

        // 메뉴버튼
        const videoBtn = document.querySelectorAll('.video_menu > li');
        console.log(videoBtn)

        let num = 0;
        for(let i=0; i<videoBtn.length; i++){
            videoBtn[i].addEventListener('click',function(){
                video[num].classList.remove('active');
                txtBox[num].classList.remove('active');
                num = i;
                video[i].classList.add('active');
                txtBox[i].classList.add('active');
            });
        }

        // 토글버튼 -언어
        const lengBtn = document.querySelector('.leng');
        const leng = document.querySelectorAll('.leng li');
        const ko = document.querySelector('.leng li a')
        console.log(ko)
        for(let j=0; j<leng.length; j++){
            lengBtn.addEventListener('mousemove',function(){
                lengBtn.classList.add('active');
                leng[j].classList.add('active');
                ko.classList.remove('active');
            })

            lengBtn.addEventListener('mouseout',function(){
                lengBtn.classList.remove('active');
                leng[j].classList.remove('active');
                leng[0].classList.add('active');
                ko.classList.add('active');
            })    
        }


        // 토글버튼-메뉴이벤트
        const Toggle = document.querySelector('.button-box');
        const Bgmenu = document.querySelector('.bg_menu');
        Toggle.addEventListener('click',function(){
            Toggle.classList.toggle('active');
            Bgmenu.classList.toggle('active');
        });


        // 토글버튼 bg메뉴
        const box = document.querySelectorAll('.menu_box li');
        const Span = document.querySelectorAll('.menu_box li span');
        console.log(box)

        for(let i=0; i<box.length; i++){
            box[i].addEventListener('mousemove',function(){
                box[i].classList.add('active');
                Span[i].classList.add('active');
            });
            
            box[i].addEventListener('mouseout',function(){
                box[i].classList.remove('active');
                Span[i].classList.remove('active');
            });
        }



        const content2 = document.querySelectorAll('.con1 li figure img');
        console.log(content2)
        
        for(let i=0; i<content2.length; i++){
            content2[i].addEventListener('mousemove',function(){
                content2[i].style = 'transform: scale(1.2); transition: .5s;';
            });

            content2[i].addEventListener('mouseout',function(){
                content2[i].style = 'transform: scale(1.0); transition: .5s;';
            });

        }
    
        // content2
        tagList = '';
        const con2 = document.querySelector('.content2 .con1 ul')
        res.con2.forEach(function(v,k){
            tagList += `<li>
                            <figure>
                                <img src = ${v.img}>
                                <figcaption>
                                    <strong>
                                        ${v.tit}
                                    </strong>
                                </figcaption>
                            </figure>
                        </li>`
        });
        con2.innerHTML = tagList;
        slide();

        // content3
        const con3 = document.querySelector('.content3 ul');
        const con3Btn = document.querySelectorAll('.con3-btn span');
        tagList = '';
        res.con3.forEach(function(v,k){
            tagList += `<li>
                            <figure>
                                <img src=${v.img}>
                            </figure>
                            <div class ="infotxt">
                                <h4>${v.tit}</h4>
                                <p>${v.info}</p>
                            </div>
                        </li>`;
        });
        con3.innerHTML = tagList;
        const con3li = document.querySelectorAll('.content3 ul li')
        con3li[0].classList.add('active');
        console.log(con3li)

        for(let i=0; i<con3Btn.length; i++){
            con3Btn[i].addEventListener('click',function(){
                con3li[num].classList.remove('active');
                con3li[i].classList.add('active');
                num = i;
            });
    
        }


        // setinterval(숫자 카운터)

        // const value = document.querySelectorAll('.content5 ul li strong');
        // console.log(value)
        // for(let i=0; i<value.length; i++){
        //     value[i].textContent = count(0,45)
        // }

        // function count(s,e){
        //     let loop=setInterval(()=>{
        //         if(e > s) {
        //             s++;
        //         }else{
        //             clearInterval(loop)
        //         };
        //         console.log(s)
        //     },100)
        // }
        // count(0,45);    
    }

}
window.onload = result;


