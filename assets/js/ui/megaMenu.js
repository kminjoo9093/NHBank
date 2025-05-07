import { handleExpanded } from "./handleExpanded.js";

export const openMegaMenu = () => {
  const menuBtn = document.querySelectorAll(".btn__menu");
  handleExpanded(menuBtn);

  // close버튼 rotate
  menuBtn.forEach((btn) => {
      let rotateValue = 0;
      btn.addEventListener("mouseenter", () => {
        if (btn.getAttribute("aria-expanded") === "true") {
          rotateValue += 180;
          btn.style.transform = `rotate(${rotateValue}deg)`;
        }
      });
  });
};

export const megaMenuBtn = () => {
  const viewMoreBtn = document.querySelectorAll(
    ".megaMenu__menuArea .btn--more"
  );
  handleExpanded(viewMoreBtn);
};

export const megaOpenAllBtn = () => {
  const toggleOpenAllBtn = document.querySelectorAll(
    ".megaMenu__menuArea .btn--open2"
  );
  handleExpanded(toggleOpenAllBtn, { isOpenAll: true });
};

export const megaMenuTab = () => {
  const tabBtns = document.querySelectorAll(".megaMenu__tab button");
  const tabContents = document.querySelectorAll(".megaMenu__wrap");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const currentTab = e.currentTarget;

      // 탭버튼, 컨텐츠 초기화
      tabBtns.forEach((btn) => {
        btn.setAttribute("aria-selected", "false");
      });
      tabContents.forEach((content) => {
        content.style.display = "none";
      });
      //선택 탭,컨텐츠 활성화
      currentTab.setAttribute("aria-selected", "true");
      const tabId = currentTab.getAttribute("aria-controls");
      const targetTabContent = document.getElementById(tabId);

      targetTabContent.style.display = "block";
    });
  });
};

export const megaNavOpen = () => {
  const toggleOpenNavBtn = document.querySelectorAll(
    ".megaMenu__board .btn--open1"
  );
  handleExpanded(toggleOpenNavBtn);
};
