import { handleExpanded } from "./handleExpanded.js";
import { tab } from "./tab.js";

export const openMegaMenu = () => {
  const menuBtn = document.querySelectorAll(".btn__menu");
  handleExpanded(".btn__menu");
  handleMegaMenuHeight(menuBtn);

  // close버튼 rotate
  rotateCloseBtn(menuBtn);
};

export const megaMenuTab = () => {
  tab(".megaMenu__tab button", ".megaMenu__wrap");
  
  // 메가메뉴 높이, 스크롤
  const tabBtns = document.querySelectorAll(".megaMenu__tab button");
  handleMegaMenuHeight(tabBtns);
};

const handleMegaMenuHeight = (buttons) => {
  buttons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const html = document.documentElement;
      const body = document.body;
      const header = document.querySelector('header');
      const group = [html, body, header];
      if (btn.getAttribute("aria-selected") === "true" || btn.getAttribute("aria-expanded") === "true"){
        group.forEach(el=>{
          el.classList.add('menu-open');
        })
      } else {
        group.forEach(el=>{
          el.classList.remove('menu-open');
        })
      }
    })
  })
}

const rotateCloseBtn = (button)=>{
  button.forEach((btn) => {
    let rotateValue = 0;
    btn.addEventListener("mouseenter", () => {
      if (btn.getAttribute("aria-expanded") === "true") {
        rotateValue += 180;
        btn.style.transform = `rotate(${rotateValue}deg)`;
      }
    });
});
}

export const megaMenuBtn = () => {
  handleExpanded(".megaMenu__nav-group .btn--more");
};

export const megaOpenAllBtn = () => {
  handleExpanded(".megaMenu__menuArea .btn--open2", { isMegaOpenAll: true });
};

export const megaNavOpen = () => {
  handleExpanded(".megaMenu__board .btn--open1");
};
