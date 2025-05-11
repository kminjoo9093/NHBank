export const tab = (tabMenu, tabContent)=>{
  const tabBtns = document.querySelectorAll(tabMenu);
  const tabContents = document.querySelectorAll(tabContent);

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
      let contentHeight;

      targetTabContent.style.display = "block";
      contentHeight = targetTabContent.clientHeight;
      console.log(contentHeight)
    });
  });
}

// export const getTabContentHeight = () => {
  
// }