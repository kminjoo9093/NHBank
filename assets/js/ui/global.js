import { handleExpanded } from "./handleExpanded.js";

export const global = () => {
  const globalBtn = document.querySelectorAll('.btn--open3.global');
  handleExpanded(globalBtn);
}