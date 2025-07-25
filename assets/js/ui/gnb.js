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
