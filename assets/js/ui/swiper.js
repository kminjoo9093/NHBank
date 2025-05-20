import Swiper from 'swiper/bundle';
// import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
// import { visualData } from "../data/visualData.js";

export const visualSwiper = (dataList = visualData) => {
  const swiper1 = new Swiper(".visualSwiper", {
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".visual .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".visual .swiper-button-next",
      prevEl: ".visual .swiper-button-prev",
    },
  });

  const infoWrap = document.querySelector(".visual .slide__info");
  const updateInfo = (activeIndex) => {
    const { title, category } = dataList[activeIndex];

    infoWrap.innerHTML = `<span class="category">${category}</span>
              <h2 class="title">${title}</h2>`;
  };

  swiper1.on("slideChange", ()=> updateInfo(swiper1.activeIndex));
  updateInfo(swiper1.activeIndex);

  // play button
  handelPlayBtn(swiper1, '.visualSwiper__tools .btn--play');
};

export const newsSwiper = () => {
  const swiper2 = new Swiper(".newsSwiper", {
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".newsSwiper-controls .swiper-button-next",
      prevEl: ".newsSwiper-controls .swiper-button-prev",
    },
  });

  handelPlayBtn(swiper2, ".news .swiper-button-pauseToggle");
};

const handelPlayBtn = (swiper, buttonEl)=>{
  let isPlaying = true;

  const button = document.querySelector(buttonEl);
  button.addEventListener("click", () => {
    if (isPlaying) {
      swiper.autoplay.stop();
      button.classList.add("stop");
    } else {
      swiper.autoplay.start();
      button.classList.remove("stop");
    }
    isPlaying = !isPlaying;
  });
}