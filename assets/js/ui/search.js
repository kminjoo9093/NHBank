import { activeBackdrop, hideBackdrop } from "./handleBackdrop.js";

export const searchDialog = () => {
  const searchDialog = document.querySelector(".dialog__search");
  const openDialogBtns = document.querySelectorAll(
    ".utility__search, .btn--quick-search"
  );
  const utilSearchBtn = document.querySelector(".utility__search");
  const closeDialogBtn = searchDialog.querySelector(".btn--close1");

  //dialog top 위치 계산
  const setDialogTop = () => {
    const headerTop = document.querySelector(".header__top");
    const dialogTopValue = headerTop.getBoundingClientRect().bottom;
    searchDialog.style.setProperty(
      "--searchDialogTop",
      `${dialogTopValue / 10}rem`
    );
  };

  // 검색버튼 클릭 -> 다이아로그 열리고 검색버튼 안보이도록
  openDialogBtns.forEach((button) => {
    button.addEventListener("click", () => {
      setDialogTop();
      searchDialog.show();
      utilSearchBtn.style.visibility = "hidden";
      activeBackdrop();

      window.addEventListener("scroll", ()=>{
        const backdrop = document.querySelector("#backdrop");
        const valueY = window.scrollY;
        if(valueY >= 83){
          backdrop.style.marginTop = 0;
        } else {
          backdrop.style.marginTop = "20rem";
        }
      })
    });
  });

  // 클로즈버튼 클릭 -> 다이아로그 닫히고 검색버튼 보이도록
  closeDialogBtn.addEventListener("click", () => {
    closeDialog();
  });

  closeDialogBtn.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      closeDialog();
      utilSearchBtn.focus();
    }
  });

  const closeDialog = () => {
    searchDialog.close();
    utilSearchBtn.style.visibility = "visible";
    hideBackdrop();
  };
};

export const validateSearchInput = () => {
  const searchInput = document.querySelector("#searchInput");
  const searchBtn = document.querySelector("#searchForm .btn__search2");
  searchBtn.addEventListener("click", ()=>{
    if(searchInput.value === ""){
      alert("검색어를 입력하세요.");
    }
  })
}