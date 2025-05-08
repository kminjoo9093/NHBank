import { handleExpanded } from "./handleExpanded.js";

export const footerBtn = ()=>{
  const footerSiteBtn = document.querySelectorAll('.btn--open3.site');
  handleExpanded(footerSiteBtn);
}