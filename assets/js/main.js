import { global } from "./ui/global.js";
import { gnb, tabNav } from "./ui/gnb.js";
import { tab } from "./ui/tab.js";
import { megaMenu } from "./ui/megaMenu.js";

global();
gnb();
tabNav();
tab('.megaMenu__tab');
megaMenu();