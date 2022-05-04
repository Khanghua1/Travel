//Scroll hide/show Nav

function hideShowNav() {
    const navDefaul = document.querySelector('.header__nav-defaul');
    const navScroll = document.querySelector('.header__nav-scroll');

    window.addEventListener('scroll', function () {
        if (document.documentElement.scrollTop > 10 && document.documentElement.scrollTop < 100) {
            navScroll.classList.add('header__nav-scroll-sticky');
            navDefaul.style.transform = 'translateY(-75px)';

        } else if (document.documentElement.scrollTop < 5 ) {
            navScroll.classList.remove('header__nav-scroll-sticky');
            navDefaul.style.transform = 'translateY(0px)';

        }

    })

}
hideShowNav();


function navBar() {
    const navMb = document.querySelector('.header__navBar');
    const barIcon = document.getElementById('bar__icon');
    const overlay = document.getElementById('overlay')
    const close  = document.querySelector('.close');
    barIcon.onclick = ()=>{

        if(navMb.style.transform === 'translateX(100%)'){
            navMb.style.transform = 'translateX(0%)';
            overlay.classList.add('overlay');
        }
    }
    close.onclick = ()=>{
        navMb.style.transform = 'translateX(100%)';
        overlay.classList.remove('overlay');
    }
}
navBar()

//Slide__show
function slideShow(){
    const x = 520;
    let index = 0;
    const slide = document.querySelector('.slide__list');
    const slides = document.querySelectorAll('.slide__item');
    const prev = document.querySelector('.slide__prev');
    const next = document.querySelector('.slide__next');

    next.addEventListener('click',function(){

        if(index < slides.length - 2){
            index++;
        
        }else{
            index = 0;
        }

        slide.style.transform = `translateX(-${x * index}px)`;
    })
    prev.addEventListener('click',function(){

        if(index === 0 ){
            index = slides.length - 2;
        
        }else{
            index --;
        }

        slide.style.transform = `translateX(-${x * index}px)`;
    })

}
slideShow()
//Slide content
function slideContent(){
    const slide = document.querySelector('.main__say-list');
    const slides = document.querySelectorAll('.main__say-item');
    const prev = document.querySelector('.main__say-prev');
    const next = document.querySelector('.main__say-next');
    let index = 0;
    let x = slide.offsetWidth;

    next.addEventListener('click', function(){
        index < slides.length - 1 ? index ++ : index = 0; 
        slide.style.transform = `translateX(-${x * index}px)`;
    })
    prev.addEventListener('click', function(){
        index === 0 ? index = slides.length - 1 : index --;
        slide.style.transform = `translateX(-${x * index}px)`;
    })

}
slideContent()

function gotoTop(){

    const top = document.querySelector('.go__top');
    window.addEventListener('scroll', function(){
        if(document.documentElement.scrollTop > 300
        || document.body.scrollTop > 300){
            top.style.display = 'block';
        }else{
            top.style.display = 'none';
        }
    })

}
gotoTop()
