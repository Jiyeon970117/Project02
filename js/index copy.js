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
        } 

        $('.wrap').css({transform:`translateY(${posTop}px)`}); 


        $('.main_menu a').removeClass('active');
        $('.main_menu span').removeClass('active');


        $('.main_menu a').eq(num).addClass('active');
        $('.main_menu span').eq(num).addClass('active');

    }

    $('.main_menu a').on('click',function(){
        num = $(this).index();
        ani();
        // $('aside a').removeClass('active').eq(num).addClass('active');
    })

    $('.toggle').onclick()



})

