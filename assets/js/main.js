import { global } from "./ui/global.js";
import { gnb, tabNav } from "./ui/gnb.js";
// import { tab } from "./ui/tab.js";
import { openMegaMenu, megaMenuBtn, megaOpenAllBtn, megaMenuTab, megaNavOpen } from "./ui/megaMenu.js";

global();
gnb();
tabNav();
// tab('.megaMenu__tab');
openMegaMenu();
megaMenuBtn();
megaOpenAllBtn();
megaMenuTab();
megaNavOpen();