function slide(){
    $(".tit_con2 ul").slick({
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

$(function (){
    $(window).scroll(function (){
        if($(this).scrollTop() > 902){
            $('header').addClass('active');
            $('.sns-icon div').addClass('active');
        }else{
            $('header').removeClass('active');
            $('.sns-icon div').removeClass('active');
        }
    });
})

function init(){
    const btsBox = document.querySelector('.bts_box ul');
    console.log(btsBox)
    let xhr, res,tagList='';
    xhr = new XMLHttpRequest();
    xhr.open('get','./js/data.json');
    xhr.send(null);
    xhr.onload = function(){
        res = JSON.parse(xhr.responseText);



        // 비디오 사운드아이콘 & 비디오 재생 및 오디오 컨트롤
        const myvideo = document.querySelector('video');
        const videoIcon = document.querySelectorAll('.video_icon li i:nth-child(2)') //정지, 소리끔 이모티콘
        const videoIcon2 = document.querySelectorAll('.video_icon li i:nth-child(1)') 
        let span = document.querySelector('.video_icon li span');
        let j = 0;
        for(let i = 0; i<videoIcon.length; i++){
            videoIcon[i].addEventListener('click',function(){
                videoIcon2[i].classList.add('active')
                videoIcon[i].style = 'display: none';
                if(i == 1){
                    span.textContent = 'ON';
                    myaudio.play()
                }else{
                    myaudio.pause()
                    myvideo.pause()
                }
            })

            videoIcon2[i].addEventListener('click',function(){
                videoIcon2[i].classList.remove('active')
                videoIcon[i].style = 'display: inline-block';
                if(i == 1){
                    span.textContent = 'OFF';
                    myaudio.pause()
                }else{
                    myvideo.play()
                    myaudio.play()
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
        
        
        
        res.con4.forEach(function(v,k){
            tagList += `<li>
                            <figure>
                                <img src = ${v.img}>
                            </figure>
                        </li>`
        });
        btsBox.innerHTML = tagList;
        const btsImg = document.querySelectorAll('.bts_box ul li');
        const Zoom = document.querySelectorAll('.bts_box img')
        btsImg[0].classList.add('active')
        const btsBtn = document.querySelectorAll('.bts_button span');
        btsBtn[0].classList.add('active')
        console.log(Zoom)
        
        let num = 0;
        for(let i=0; i<btsBtn.length; i++){
            btsBtn[i].addEventListener('click',function(){
                btsImg[num].classList.remove('active')
                btsBtn[num].classList.remove('active')

                btsImg[i].classList.add('active')
                btsBtn[i].classList.add('active')
                num = i;
            })
        }



        // section3
        const titCon2 = document.querySelector('.tit_con2 ul');
        const titCon3 = document.querySelectorAll('.tit_con3 span');
        console.log(titCon3)
        tagList='';

            res.con5.forEach(function(v,k){
                tagList += `<li>
                                <figure>
                                    <img src = ${v.img}>
                                    <img src = ${v.img2}>
                                    <figcaption>
                                        ${v.tit}
                                    </figcaption>
                                </figure>
                            </li>`
            });
            titCon2.innerHTML = tagList;
            slide();
            tagList = '';


            const con2Box = document.querySelectorAll('.tit_con2 figure');
            const con2Fig = document.querySelectorAll('.tit_con2 figure img:nth-child(1)');
            const con2Img = document.querySelectorAll('.tit_con2 figure img:nth-child(2)');
            console.log(con2Box)

            // 이미지 이벤트
            for(let i=0; i<con2Fig.length; i++){
                con2Fig[i].addEventListener('mousemove',function(){
                    con2Img[i].classList.add('active')
                });

                con2Img[i].addEventListener('mouseout',function(){
                    con2Img[i].classList.remove('active')
                });
            }

            // 유튜브
            const videoBox = document.querySelector('.videobox');
            const videoImg = document.querySelector('.video_con2 img');
            const Btnclose = document.querySelector('.btn-close');
            console.log(videoImg);
            videoImg.addEventListener('click',function(){
                videoBox.style = 'display:block';
            });
            // 유튜브 닫기 버튼
            Btnclose.addEventListener('click',function(){
                videoBox.style = 'display:none';
            });





            // 스크롤이벤트로 화면 나타내기

            const elImg = document.querySelectorAll('article');
            let elHei;
            let winHei = window.innerHeight;

            window.addEventListener('scroll',function(){
                for(let i=1; i<4; i++){
                    elHei = elImg[i].offsetTop;

                    if(elHei-winHei <= window.scrollY){
                        elImg[i].classList.add('active');
                    }
                }
            })




            // 버튼 이벤트(이미지 넘기기)
            // let num=0;            
            // for(let i=0; i<titCon3.length; i++){
            //     titCon3.addEventListener('click',function(){
            //         con2Fig[num].classList.remove('active')
            //         btsBtn[num].classList.remove('active')
            //     });
            // }
    






        // 줌이벤트
        for(let j=0; j<Zoom.length; j++){
            Zoom[j].addEventListener('mousemove',function(){
                Zoom[j].style = 'transform: scale(1.05);  transition: all .7s ease-in-out';
            });

            Zoom[j].addEventListener('mouseout',function(){
                Zoom[j].style = 'transform: scale(1.);  transition: all .7s ease-in-out';
            });            
        }


    }
}
window.onload = init;
