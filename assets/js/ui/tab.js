export const tab = (tabEl)=>{
   const tab = document.querySelector(tabEl);
   const tabMenu = tab.querySelectorAll('button');

   tabMenu.forEach((menu)=>{
    menu.addEventListener('click', (e)=>{
      tabMenu.forEach(menu=>{
        menu.classList.remove('active');
      })

      e.target.classList.add('active');
    })
   })
}