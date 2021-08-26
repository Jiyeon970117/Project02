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
            //cursor event
            $('.cursor').css("display", "none");    
            $('body').css("cursor", "default"); 
        }else{
            posTop = -$('.scroll').eq(num).position().top;
            $('.main_menu a').css({display: `inline-block`});
            $('.main_menu span').css({display: `inline-block`});
            
            // 상단 메뉴 고정
            if(num < 4 && num > 0){
                $('.navbar').addClass('active');
                $('.main_menu').addClass('active');
            }else{
                $('.navbar').removeClass('active');
                $('.main_menu').removeClass('active');
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
           count(0,45,0);
           count(58,108,1);
           count(5243,5293,2);
        
        }else{
            $('.sns-icon').removeClass('active');
            $('.con5').removeClass('active')
        }

        $('.main_menu a').removeClass('active').eq(num).addClass('active');
        $('.main_menu span').removeClass('active').eq(num).addClass('active');
    }


    $('.main_menu li').on('click',function(){
        num = $(this).index();
        ani();
        $('.cursor').css("display", "none");
        $('body').css("cursor", "default");
    })

    // 숫자 카운터 이벤트
    const Strong = document.querySelectorAll('.numtxt strong')
    console.log(Strong)
    function count(s,e,n){
        let start = s;
        let loop=setInterval(()=>{
            if(e > start) {
                start++;
            }else{
                clearInterval(loop)
            };
            Strong[n].textContent = start;
        },50)
    }

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
                            <audio src =${v.audio} class = "myaudio"></audio>

                            <div class="txt-box c-cover">
                                <h2>${v.tit}</h2>
                                <p>${v.tit2}</p>
                            </div>
                        </div>`;
        });
        vBox.innerHTML = tagList;
        const video = document.querySelectorAll('.video-box');
        video[0].classList.add('active')
        const txtBox = document.querySelectorAll('.txt-box');
        const txtCon = function(number){
            txtBox[number].classList.add('active');
        };
        // setTimeout
        setTimeout(function(){
            txtCon(0)
        }, 1500)
        setTimeout(function(){
            txtCon(1)
        }, 3000)
        setTimeout(function(){
            txtCon(2)
        }, 5000)



        // 비디오버튼
        const videoBtn = document.querySelectorAll('.video_menu > li');
        const myvideo = document.querySelectorAll('video');
        const myaudio = document.querySelectorAll('.myaudio');
        let num = 0;
        for(let i=0; i<videoBtn.length; i++){
            videoBtn[i].addEventListener('click',function(){
                video[num].classList.remove('active');
                video[i].classList.add('active');
                num = i;
                myaudio[i]
            });
        }


        // 비디오 사운드아이콘
        const videoIcon = document.querySelectorAll('.video_icon li i:nth-child(2)');
        const videoIcon2 = document.querySelectorAll('.video_icon li i:nth-child(1)'); 
        let span = document.querySelector('.video_icon li span');
        let j = 0;
        for(let i = 0; i<videoIcon.length; i++){
            videoIcon[i].addEventListener('click',function(){
                videoIcon2[i].classList.add('active')
                videoIcon[i].style = 'display: none';
                if(i == 1){
                    span.textContent = 'ON';
                        // myaudio.play()
                }else{
                        // myaudio.pause()
                        // myvideo.pause()
                }
            })

            videoIcon2[i].addEventListener('click',function(){
                videoIcon2[i].classList.remove('active')
                videoIcon[i].style = 'display: inline-block';
                if(i == 1){
                    span.textContent = 'OFF';
                        // myaudio.pause()
                }else{
                        // myaudio.play()
                        // myvideo.play()
                }
            })

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



    
        // content2
        tagList = '';
        const con2 = document.querySelector('.content2 .con1 ul')
        res.con2.forEach(function(v,k){
            tagList += `<li class="c-cover">
                            <figure>
                                <img src = ${v.img}>
                            </figure>
                            <p>
                            <strong>
                                ${v.tit}
                            </strong>
                            </p>
                        </li>`
        });
        con2.innerHTML = tagList;
        slide();

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


        // content3
        const con3 = document.querySelector('.content3 ul');
        const con3Btn = document.querySelectorAll('.con3-btn span');
        con3Btn[0].classList.add('active');
        tagList = '';
        res.con3.forEach(function(v,k){
            tagList += `<li >
                            <figure>
                                <img src=${v.img}>
                            </figure>
                            <div class ="infotxt c-cover">
                                <h4>${v.tit}</h4>
                                <p>${v.info}</p>
                            </div>
                        </li>`;
        });
        con3.innerHTML = tagList;
        const con3li = document.querySelectorAll('.content3 ul li')
        con3li[0].classList.add('active');
        console.log(con3li)

        // html이동
        con3li[0].addEventListener('click',function(){
            newPage();
        })

        function newPage(){
            location.href = 'sub.html';
        }

        for(let i=0; i<con3Btn.length; i++){
            con3Btn[i].addEventListener('click',function(){
                con3li[num].classList.remove('active');
                con3Btn[num].classList.remove('active');

                con3li[i].classList.add('active');
                con3Btn[i].classList.add('active');
                num = i;
            });
    
        }

        // 커스텀커서
        let Header = document.querySelector('header');
        let Menu = document.querySelector('.main_menu');
        let mouseCursor = document.querySelector('.cursor');
        let con3_1 = document.querySelectorAll('.content3 ul figure');
        const videoiconBtn = document.querySelector('.video_btn');
        console.log(videoiconBtn)
        const con2Li = document.querySelectorAll('.content2 .con1 ul li');
        const info = document.querySelectorAll('.content3 ul li div');
        const con4 = document.querySelectorAll('.content4 ul li');
        const conSection = document.querySelectorAll('section');
        console.log(conSection)

        conSection.forEach(function(sec,k){
            sec.addEventListener('mouseenter',(e)=>{
               cursor(k,sec,e);
               sec.addEventListener('mousemove',(e)=>{cursor(k,sec,e)})
            });
            sec.addEventListener('mouseleave',(e)=>{
               dis = 'display: none';
               sec.addEventListener('mousemove',(e)=>{cursor(k,sec,e)})
            });
        })

        
        let dis,sty,txt,target;
        function cursor(k,select,e){    
            dis = 'display: flex';
            sty = 'cursor: none';

            target = e.target;
            try{
                for(;!target.classList.contains('c-cover');target=target.parentElement);
                if(target.classList.contains('c-cover')) {
                    txt = 'DISCOVER MORE';
                    dis = 'display: flex';
                }else{
                    dis = 'display: none';
                }           
            }catch{
                if(k==0 || k==2){ 
                    if(e.pageX > select.offsetWidth / 2){
                        txt = 'NEXT';
                    }else{
                        txt = 'PREV';                
                    }
                }else{
                    dis = 'display: none';
                    sty = 'cursor: default';
                }
            }

            mouseCursor.style = dis;
            mouseCursor.style.top = e.pageY + 'px';
            mouseCursor.style.left = e.pageX + 'px';

            document.querySelector('body').style = sty;
            mouseCursor.textContent = txt;
        }
        

        //menu 커스텀 커서 제거
        mouse(Menu);

        //header 커스텀 커서 제거
        mouse(Header);

        //videoicon 커스텀 커서 제거        

        function mouse(x){
           return   x.addEventListener('mousemove',function(){
                        document.querySelector('body').style = 'cursor: default';
                        mouseCursor.style = 'display: none';
                    });
        }

    }

}
window.onload = result;


