import { handleExpanded } from "./handleExpanded.js";

export const gnb = () => {
  const viewMoreBtn = document.querySelectorAll(".gnb .nav__list .btn--more");

  handleExpanded(viewMoreBtn, { isGnb : true});
  
  // viewMoreBtn.forEach((btn) => {
  //   btn.addEventListener("click", (e) => {
  //     const currentBtn = e.currentTarget;
  //     const targetId = currentBtn.getAttribute("aria-controls");
  //     const targetDept = document.getElementById(targetId);

  //     const allDept = document.querySelectorAll(".gnb .nav__list .nav__dept");
  //     // 모든 버튼, dept 초기화
  //     // 클릭한 버튼이 이미 활성화되어있는 버튼이면 초기화 x, true가 유지되어야 함
  //     if(currentBtn.getAttribute('aria-expanded') !== "true"){
  //       viewMoreBtn.forEach((btn) => {
  //         btn.setAttribute("aria-expanded", "false");
  //       });
  //       allDept.forEach((dept) => {
  //         dept.hidden = "true";
  //       });
  //     }

  //     // 클릭된 버튼, dept 활성화
  //     handleExpanded(currentBtn, targetDept);
  //   });
  // });
};

export const tabNav = () => {
  const mainNavs = document.querySelectorAll(".gnb__list > li > a");

  mainNavs.forEach((nav) => {
    nav.addEventListener("focus", (e) => {
      e.currentTarget.nextElementSibling.style.display = "block";
    });
    // nav.addEventListener('keydown', (e)=>{
    //   if(e.key === 'Tab'){
    //     let subNav = e.currentTarget.nextElementSibling;
    //     subNav.querySelector('a, button').focus();
    //   }
    // })
  });
};
