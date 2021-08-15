function init(){
    const vBox = document.querySelector('.box');
    console.log(vBox)
    let xhr, res,tagList='';
    xhr = new XMLHttpRequest();
    xhr.open('get','../js/data.json');
    xhr.send(null);
    xhr.onload = function(){
        res = JSON.parse(xhr.responseText);
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
        console.log(video)


        // const videoIcon = document.querySelectorAll('.video_btn  .video_icon > li ');
        const videoBtn = document.querySelectorAll('.video_menu > li');
        console.log(videoBtn)

        let num = 0;
        for(let i=0; i<videoBtn.length; i++){
            videoBtn[i].addEventListener('click',function(){
                video[num].classList.remove('active');
                num = i;
                video[i].classList.add('active');
            });
        }

    }

}
window.onload = init;