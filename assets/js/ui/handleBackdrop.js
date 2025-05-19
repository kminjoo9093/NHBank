const backdrop = document.querySelector("#backdrop");

export const activeBackdrop = () => {
  backdrop.classList.add("active");
};
export const hideBackdrop = () => {
  backdrop.classList.remove("active");
};
