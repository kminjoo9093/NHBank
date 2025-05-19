import { activeBackdrop, hideBackdrop } from "./handleBackdrop.js";

export const search = () => {
  const searchDialog = document.querySelector(".dialog__search");
  const openDialogBtn = document.querySelector(".utility__search");
  const closeDialogBtn = searchDialog.querySelector(".btn--close1");

  //dialog top 위치 계산
  const headerTop = document.querySelector(".header__top");
  const dialogTopValue = headerTop.getBoundingClientRect().bottom;
  console.log(dialogTopValue);
  searchDialog.style.setProperty(
    "--searchDialogTop",
    `${dialogTopValue / 10}rem`
  );

  openDialogBtn.addEventListener("click", () => {
    // 검색버튼 클릭 -> 다이아로그 열리고 검색버튼 안보이도록
    searchDialog.show();
    openDialogBtn.style.visibility = "hidden";
    activeBackdrop();
  });

  // 클로즈버튼 클릭 -> 다이아로그 닫히고 검색버튼 보이도록
  closeDialogBtn.addEventListener("click", () => {
    closeDialog();
  });

  closeDialogBtn.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      closeDialog();
      openDialogBtn.focus();
    }
  });

  const closeDialog = () => {
    searchDialog.close();
    openDialogBtn.style.visibility = "visible";
    hideBackdrop();
  };
};
