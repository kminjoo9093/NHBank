import { global } from "./ui/global.js";
import { gnb, tabFocusNav, getGnbBackdrop, navMouseEvents } from "./ui/gnb.js";
import { searchDialog } from "./ui/search.js";
import { openMegaMenu, megaMenuBtn, megaOpenAllBtn, megaNavOpen, megaMenuTab } from "./ui/megaMenu.js";
import { serviceTab1, serviceTab2, getServiceData } from "./ui/service.js";
import { newsSwiper } from "./ui/swiper.js";
import { footerBtn } from "./ui/footer.js";
import { updateVisualSlide } from "./ui/visual.js";
import { sideMenu } from "./ui/sideMenu.js";

// header
global();
gnb();
tabFocusNav();
searchDialog();
getGnbBackdrop();
navMouseEvents();

// megaMenu
openMegaMenu();
megaMenuBtn();
megaOpenAllBtn();
megaMenuTab();
megaNavOpen();

// section: visual
updateVisualSlide();

// section : service
serviceTab1();
serviceTab2();
getServiceData();

// section : news
newsSwiper();

// footer
footerBtn();

// sideMenu
sideMenu();