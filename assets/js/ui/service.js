import { tab } from "./tab.js";
import { serviceData } from "../data/serviceData.js";

export const serviceTab1 = () => {
  tab(".service__tab1 button", ".service__tab1-contents > div");
};

export const serviceTab2 = () => {
  tab(".service__tab2-1 button", ".service__tab2-contents.first > ul");
  tab(".service__tab2-2 button", ".service__tab2-contents.second > ul");
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
              <img src="./assets/images/icon_arrow-r-u.png" aria-hidden="true" alt="">
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

    // product 3개인 경우
    const liElements = ul.querySelectorAll("li");
    if ([...liElements].length === 3) {
      liElements.forEach((li, index) => {
        if (index === 1) {
          li.classList.add("extend");
        }
      });
    }
  });
};
