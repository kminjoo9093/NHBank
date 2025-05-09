import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

export const newsSwiper = ()=>{
  const pauseBtn = document.querySelector('.news .swiper-button-pauseToggle');
  let isPlaying = true;

  const swiper1 = new Swiper('.newsSwiper', {
    direction : 'vertical',
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".newsSwiper-controls .swiper-button-next",
      prevEl: ".newsSwiper-controls .swiper-button-prev",
    },
  })

  pauseBtn.addEventListener('click', ()=>{
    if(isPlaying){
      swiper1.autoplay.stop();
      pauseBtn.classList.add('stop');
    } else {
      swiper1.autoplay.start();
      pauseBtn.classList.remove('stop');
    }
    isPlaying = !isPlaying
  })
}