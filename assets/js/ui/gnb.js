import { handleExpanded } from "./handleExpanded.js";

export const gnb = () => {
  handleExpanded(".gnb .nav__list .btn--more", { isGnb : true});
};

export const tabFocusNav = () => {
  const mainNavs = document.querySelectorAll(".gnb__list > li > a");

  mainNavs.forEach((nav) => {
    nav.addEventListener("focus", (e) => {
      e.currentTarget.nextElementSibling.style.display = "block";
    });
  });
};
