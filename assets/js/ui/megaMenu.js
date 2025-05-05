import { handleExpanded } from "./handleExpanded.js";

export const megaMenu = ()=>{
  const viewMoreBtn = document.querySelectorAll('.megaMenu__menuArea .btn--more');

  handleExpanded(viewMoreBtn);

  // viewMoreBtn.forEach(btn=>{
  //   btn.addEventListener('click', (e)=>{
  //     const currentBtn = e.currentTarget;
  //     const targetId = currentBtn.getAttribute('aria-controls');
  //     const targetDept = document.getElementById(targetId);

  //     handleExpanded(btn, targetDept);
  //   })
  // })

}