export const handleExpanded = (buttonGroup, options = {}) => {
  const { isGnb = false } = options;
  const { isMegaOpenAll = false } = options;

  const buttons = document.querySelectorAll(buttonGroup);
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const currentBtn = e.currentTarget;
      const targetId = currentBtn.getAttribute("aria-controls");
      let targetDept = document.getElementById(targetId);
      const isExpanded = currentBtn.getAttribute("aria-expanded") === "true";

      if (isGnb && !isExpanded) {
        // 모든 버튼, dept 초기화 (이미 활성화되어있는 버튼이면 초기화 x, true 유지)
        const depts = document.querySelectorAll(".gnb .nav__list .nav__dept");
        buttons.forEach((btn) => {
          btn.setAttribute("aria-expanded", "false");
        });
        depts.forEach((dept) => {
          dept.hidden = true;
        });
      }
      if (isMegaOpenAll) {
        //wrap과 버튼 각각 연결
        const allNavOpenBtns = document.querySelectorAll(
          ".megaMenu__board .btn--open1"
        );
        const allNavWrap = document.querySelectorAll("[id^=nav-wrap]");
        allNavWrap.forEach((wrap) => {
          targetDept = wrap;
          targetDept.hidden = isExpanded;
        });
        allNavOpenBtns.forEach((btn) => {
          btn.setAttribute("aria-expanded", String(!isExpanded));
        });

        buttons.forEach((btn) => {
          btn.textContent = isExpanded ? "모두 열기" : "모두 닫기";
        });
      }

      currentBtn.setAttribute("aria-expanded", String(!isExpanded));
      if (targetDept) {
        targetDept.hidden = isExpanded;
      }
    });
  });
};
