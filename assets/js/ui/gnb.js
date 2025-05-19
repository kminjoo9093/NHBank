import { activeBackdrop, hideBackdrop } from "./handleBackdrop.js";

import { handleExpanded } from "./handleExpanded.js";

export const gnb = () => {
  handleExpanded(".gnb .nav__list .btn--more", { isGnb: true });
};


export const tabFocusNav = () => {
  const mainNavs = document.querySelectorAll(".gnb__list > li > a");
  mainNavs.forEach((a) => {
    a.addEventListener("focusin", (e) => {
      e.currentTarget.nextElementSibling.style.display = "block";
    });

    // focusout은 부모 요소에서 내부 자식 요소 전체의 포커스 이탈을 감지할 때 사용하는 것이 일반적이기 때문에 a가 아니라 li에서 focusout이벤트를 적용함. a가 서브내비의 부모가 아니라 형제이기 때문에
    const targetLi = a.parentElement;
    targetLi.addEventListener("focusout", (e) => {
      const subNav = e.currentTarget.querySelector('.gnb__sub');
      if(!targetLi.parentElement.contains(e.relatedTarget)){
        subNav.style.display = "none";
      }
    });
  });
};

const mainNavLis = document.querySelectorAll(".gnb__list > li");

export const navMouseEvents = () => {
  mainNavLis.forEach((li)=>{
    // const subNav = li.querySelector('.gnb__sub');

    li.addEventListener("mouseleave", (e)=>{
      const subNav = e.currentTarget.querySelector('.gnb__sub');
      subNav.style.display = "none";
    })

    li.addEventListener("mouseover", (e)=>{
      const subNav = e.currentTarget.querySelector('.gnb__sub');
      subNav.style.display = "block";
    })
  })
}

export const getGnbBackdrop = () => {

  mainNavLis.forEach((nav) => {
    nav.addEventListener("mouseover", () => activeBackdrop());
    nav.addEventListener("focusin", () => activeBackdrop());
  });

  mainNavLis.forEach((nav) => {
    const subNav = nav.querySelector(".gnb__sub");

    nav.addEventListener("mouseleave", () => hideBackdrop());
    nav.addEventListener("focusout", () => hideBackdrop());
  });
};
