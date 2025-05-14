import { tab } from "./tab.js";
import { serviceData } from "../data/serviceData.js";

export const serviceTab1 = () => {
  tab(".service__tab1 button", ".service__tab1-contents > div");
};

export const serviceTab2 = () => {
  // tab(".service__tab2 button", ".service__tab2-contents > ul");
  //  => 제대로 동작하지 않는 이유는 탭 버튼들과 컨텐츠들을 분리하지 않고 공유하고 있기 때문에 탭별로 컨텐츠를 구분해서 컨트롤해야 정확하게 동작함

  tab(".service__tab2-1 button", ".service__tab2-contents.first > ul");
  tab(".service__tab2-2 button", ".service__tab2-contents.sec > ul");
  // 탭 버튼 구분, 컨텐츠 구분
};

export const getServiceData = (dataList = serviceData) => {
  const contentBoxes = document.querySelectorAll(".service__tab2-contents ul");

  contentBoxes.forEach((ul) => {
    const selectedId = ul.getAttribute("data-id");
    const newDataList = dataList.filter(({ id }) => {
      return selectedId === id;
    });

    newDataList.forEach(({ name, info, badges, image }) => {
      const getBadge = (badgeList = badges) =>
        badgeList
          .map((badge) => {
            return `<span data-badge=${badge}>${badge}</span>`;
          })
          .join("");

      ul.innerHTML += `
      <li class="service__product">
        <a href="#">
          <div class="content-top">
            <h3 class="product__name">${name}</h3>
            <i class="product__icon">
              <img src="/assets/images/icon_arrow-r-u.png" alt="">
            </i>
          </div>
          <p class="product__info">${info}</p>
          <div class="content-bottom">
            <div class="product__badges">
             ${getBadge(badges)}
            </div>
            <i class="product__img">
              <img src=${image} alt="">
            </i>
          </div>
        </a>
      </li>
      `;
    });

    const liElements = ul.querySelectorAll("li");
    if ([...liElements].length < 4) {
      liElements.forEach((li, index) => {
        if (index === 1) {
          li.classList.add("extend");
        }
      });
    }
  });
};
