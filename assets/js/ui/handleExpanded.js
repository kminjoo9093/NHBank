export const handleExpanded = (buttonGroup, options = {}) => {
  const { isGnb = false, isMegaOpenAll = false } = options;

  const buttons = document.querySelectorAll(buttonGroup);
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const currentBtn = e.currentTarget;
      const targetId = currentBtn.getAttribute("aria-controls");
      let targetdepth = document.getElementById(targetId);
      const isExpanded = currentBtn.getAttribute("aria-expanded") === "true";

      if (isGnb && !isExpanded) {
        // 모든 버튼, depth 초기화 (이미 활성화되어있는 버튼이면 초기화 x, true 유지)
        const depths = document.querySelectorAll(".gnb .nav__list .nav__depth");
        buttons.forEach((btn) => {
          btn.setAttribute("aria-expanded", "false");
        });
        depths.forEach((depth) => {
          depth.hidden = true;
        });
      }
      if (isMegaOpenAll) {
        //wrap과 버튼 각각 연결
        const allNavOpenBtns = document.querySelectorAll(
          ".megaMenu__board .btn--open1"
        );
        const allNavWrap = document.querySelectorAll("[id^=nav-wrap]");
        allNavWrap.forEach((wrap) => {
          targetdepth = wrap;
          targetdepth.hidden = isExpanded;
        });
        allNavOpenBtns.forEach((btn) => {
          btn.setAttribute("aria-expanded", String(!isExpanded));
        });

        buttons.forEach((btn) => {
          btn.textContent = isExpanded ? "모두 열기" : "모두 닫기";
        });
      }

      currentBtn.setAttribute("aria-expanded", String(!isExpanded));
      if (targetdepth) {
        targetdepth.hidden = isExpanded;
      }
    });
  });
};
