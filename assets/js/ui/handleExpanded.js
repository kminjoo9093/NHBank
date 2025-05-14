export const handleExpanded = (buttonGroup, options = {}) => {
  // 추가 기능이 필요 없어 options 자리에 인수가 없는 경우 undefined가 됨 -> 이후 구조분해할당 시 에러가 나기때문에 {} 빈값을 기본값으로 설정하여 에러 방지

  const { isGnb = false } = options;
  const { isOpenAll = false } = options;
  //구조분해할당시 마찬가지로 빈값으로 인해 isGnb 값이 없는 경우를 대비해 false를 기본값으로 설정

  buttonGroup.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const currentBtn = e.currentTarget;
      const targetId = currentBtn.getAttribute("aria-controls");
      let targetDept = document.getElementById(targetId);
      const isExpanded = currentBtn.getAttribute("aria-expanded") === "true";

      if (isGnb && !isExpanded) {
        // 모든 버튼, dept 초기화
        // 클릭한 버튼이 이미 활성화되어있는 버튼이면 초기화 x, true가 유지되어야 함
        const depts = document.querySelectorAll(".gnb .nav__list .nav__dept");
        buttonGroup.forEach((btn) => {
          btn.setAttribute("aria-expanded", "false");
        });
        depts.forEach((dept) => {
          dept.hidden = true;
        });
      }
      if (isOpenAll) {
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

        buttonGroup.forEach((btn) => {
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
