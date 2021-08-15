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

// function init(){
//     const btsBox = document.querySelector('.bts_box ul');
//     console.log(btsBox)
//     let xhr, res,tagList='';
//     xhr = new XMLHttpRequest();
//     xhr.open('get','../js/data.json');
//     xhr.send(null);
//     xhr.onload = function(){
//         res = JSON.parse(xhr.responseText);

        // res.con4.forEach(function(v,k){
        //     tagList += `<li>
        //                     <figure>
        //                         <img src = ${v.img}>
        //                     </figure>
        //                 </li>`
        // });
        // btsBox.innerHTML = tagList;
        // const btsImg = document.querySelectorAll('.bts_box ul li');
        // const Zoom = document.querySelectorAll('.bts_box img')
        // btsImg[0].classList.add('active')
        // const btsBtn = document.querySelectorAll('.bts_button span');
        // btsBtn[0].classList.add('active')
        // console.log(Zoom)
        
        // let num = 0;
        // for(let i=0; i<btsBtn.length; i++){
        //     btsBtn[i].addEventListener('click',function(){
        //         btsImg[num].classList.remove('active')
        //         btsBtn[num].classList.remove('active')

        //         btsImg[i].classList.add('active')
        //         btsBtn[i].classList.add('active')
        //         num = i;
        //     })
        // }


        // const titCon2 = document.querySelector('.tit_con2 ul');
        // tagList='';

        //     res.con5.forEach(function(v,k){
        //         tagList += `<li>
        //                         <figure>
        //                             <img src = ${v.img}>
        //                             <img src = ${v.img2}>
        //                             <figcaption>
        //                                 ${v.tit}
        //                             </figcaption>
        //                         </figure>
        //                     </li>`
        //     });
        //     titCon2.innerHTML = tagList;
        //     slide();
        //     tagList = '';

            // const con2Fig = document.querySelectorAll('.tit_con2 img');
            // const con2Img = document.querySelectorAll('.tit_con2 figure img:nth-child(2)');
            // console.log(tagList)

            // for(let i=0; i<con2Fig.length; i++){
            //     con2Fig[i].addEventListener('mouseenter',function(){
            //         console.log('sss')
            //         // con2Img.classList.add('active');
            //     });
            // }

    






        // 줌이벤트
        // for(let j=0; j<Zoom.length; j++){
        //     Zoom[j].addEventListener('mousemove',function(){
        //         Zoom[j].style = 'transform: scale(1.05);  transition: all .7s ease-in-out';
        //     });

        //     Zoom[j].addEventListener('mouseout',function(){
        //         Zoom[j].style = 'transform: scale(1.);  transition: all .7s ease-in-out';
        //     });


            
        // }


    }
}
window.onload = init;
