import { ensureLang } from "../utils/lang";
let guideLocale: entri = require("../json/pages/guide.json");
let componentLocale: entri = require("../json/pages/components.json");

type Item = {
  text?: string;
  items?: Item[];
  link?: string;
};
type entri = {
  [x: string]: Item;
};
function getGuideSidebar() {
  return Object.values(
    Object.fromEntries(
      Object.entries(guideLocale).map(([lang, val]) => [
        lang,
        mapPrefix(val, "mdFile"),
      ])
    )
  );
}

function getComponentsSideBar() {
  return Object.values(
    Object.fromEntries(
      Object.entries(componentLocale).map(([lang, val]) => [
        lang,
        mapPrefix(val, "mdFile/", "examples"),
      ])
    )
  );
}

function mapPrefix(item: Item, lang: string, prefix = "") {
  if (item.items && item.items.length > 0) {
    return {
      ...item,
      items: item.items.map((child) => mapPrefix(child, lang, prefix)),
    };
  }
  return {
    ...item,
    link: `${ensureLang(lang)}${prefix}${item.link}`,
  };
}
const getSidebars = () => {
  return {
    "/mdFile/guide/": getGuideSidebar(),
    "/mdFile/examples/": getComponentsSideBar(),
  };
};

export const sidebar = getSidebars();
