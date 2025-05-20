export const tab = (tabMenu, tabContent)=>{
  const tabBtns = document.querySelectorAll(tabMenu);
  const tabContents = document.querySelectorAll(tabContent);

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const currentTab = e.currentTarget;
      const tabId = currentTab.getAttribute("aria-controls");
      const targetTabContent = document.getElementById(tabId);
      const isSelected = currentTab.getAttribute("aria-selected") === "true";
      let contentHeight;

      if(isSelected) return;

      // 탭버튼, 컨텐츠 초기화
      if(!isSelected){
        tabBtns.forEach((btn) => {
          btn.setAttribute("aria-selected", "false");
        });
        tabContents.forEach((content) => {
          content.hidden = true;
        });
      }
      
      //선택 탭,컨텐츠 활성화
      currentTab.setAttribute("aria-selected", String(!isSelected));

      if(targetTabContent){
        targetTabContent.hidden = isSelected;
        contentHeight = targetTabContent.clientHeight;
        console.log(contentHeight)
      }
    });
  });
}