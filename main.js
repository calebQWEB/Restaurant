// HAMBURGER MENU

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});



// NAVBAR EFFECT
window.onscroll = () =>{
    menu_btn.classList.remove('.hamburger');
    mobile_menu.classList.remove('is-active');

    if(window.scrollY > 0){
        document.querySelector('nav').classList.add('active');
    }else{
        document.querySelector('nav').classList.remove('active');
    }
}


// CAROUSEL 
const swiper = new Swiper('.swiper', {

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },


    loop: true,



    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

