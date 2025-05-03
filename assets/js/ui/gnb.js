export const gnb = () => {
  const viewMoreBtn = document.querySelectorAll(".nav__list .btn--more");
  const navItems = document.querySelectorAll(".nav__list > li");

  viewMoreBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const targetLi = e.currentTarget.closest("li");
      const isActive = targetLi.classList.contains("active");
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const targetDept = document.getElementById(btn.getAttribute('aria-controls'));

      btn.setAttribute('aria-expanded', String(!isExpanded));
      // targetDept.hidden = isExpanded;

      navItems.forEach((item) => {
        item.classList.remove("active");
      });
      if (!isActive) {
        targetLi.classList.add("active");
      }
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