import { global } from "./ui/global.js";
import { gnb, tabFocusNav } from "./ui/gnb.js";
// import { tab } from "./ui/tab.js";
import { openMegaMenu, megaMenuBtn, megaOpenAllBtn, megaNavOpen, megaMenuTab } from "./ui/megaMenu.js";
import { serviceTab1, serviceTab2, getServiceData } from "./ui/service.js";
import { newsSwiper } from "./ui/swiper.js";
import { footerBtn } from "./ui/footer.js";

// header
global();
gnb();
tabFocusNav();

// megaMenu
openMegaMenu();
megaMenuBtn();
megaOpenAllBtn();
megaMenuTab();
megaNavOpen();

// section : service
serviceTab1();
serviceTab2();
getServiceData();
// tab(".service__tab1 button", "service__tab1-contents");

// section : news
newsSwiper();

// footer
footerBtn();