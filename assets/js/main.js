import { global } from "./ui/global.js";
import { gnb, tabNav } from "./ui/gnb.js";
// import { tab } from "./ui/tab.js";
import { openMegaMenu, megaMenuBtn, megaOpenAllBtn, megaNavOpen, megaMenuTab } from "./ui/megaMenu.js";
import { footerBtn } from "./ui/footer.js";
import { newsSwiper } from "./ui/swiper.js";

global();
gnb();
tabNav();
// tab
// tab(".megaMenu__tab button", ".megaMenu__wrap");


// megamenu
openMegaMenu();
megaMenuBtn();
megaOpenAllBtn();
megaMenuTab();
megaNavOpen();
footerBtn();
newsSwiper();