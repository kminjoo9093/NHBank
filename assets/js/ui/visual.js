import { visualData } from "../data/visualData.js";
import { visualSwiper } from "./swiper.js";

export const updateVisualSlide = (dataList = visualData) => {
  const visual = document.querySelector('.visual');
  if(!visual) return;

  const swiperWrapper = visual.querySelector('.swiper-wrapper');
  // slide image
  const slideImages = dataList.map(({image})=>{
    return `<li class="swiper-slide">
              <img src=${image} aria-hidden="true" alt="">
            </li>`;
  }).join("");

  swiperWrapper.innerHTML = slideImages;

  visualSwiper();
}