export const gnb = () => {
  const viewMoreBtn = document.querySelectorAll(".nav__list .btn--more");
  const navItems = document.querySelectorAll(".nav__list > li");

  viewMoreBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const targetDept = document.getElementById(btn.getAttribute('aria-controls'));
      const allDept = document.querySelectorAll('.nav__list .nav__dept');
      // 모든 버튼, dept 초기화
      allDept.forEach(dept=>{
        dept.hidden = 'true';
      })
      viewMoreBtn.forEach(btn=>{
        btn.setAttribute('aria-expanded', 'false');
      })
      // 클릭된 버튼, dept 활성화
      btn.setAttribute('aria-expanded', String(!isExpanded));
      targetDept.hidden = isExpanded;
    });
  });
};

export const tabNav = ()=>{
  const mainNavs = document.querySelectorAll('.gnb__list > li > a');

  mainNavs.forEach(nav => {
    nav.addEventListener('focus', (e)=>{
      e.currentTarget.nextElementSibling.style.display = 'block';
    })
    // nav.addEventListener('keydown', (e)=>{
    //   if(e.key === 'Tab'){
    //     let subNav = e.currentTarget.nextElementSibling;
    //     subNav.querySelector('a, button').focus();
    //   }
    // })
  })
}