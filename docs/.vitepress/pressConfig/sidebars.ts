import { ensureLang } from "../utils/lang";
let guideLocale: entri = require("../json/pages/guide.json");
let componentLocale: entri = require("../json/pages/components.json");
let tools: entri = require("../json/pages/tools.json");

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
        mapPrefix(val, "mdFile/", "components"),
      ])
    )
  );
}
function getToolssSideBar() {
  return Object.values(
    Object.fromEntries(
      Object.entries(tools).map(([lang, val]) => [
        lang,
        mapPrefix(val, "mdFile/", "tools"),
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
    "/mdFile/components/": getComponentsSideBar(),
    "/mdFile/tools/": getToolssSideBar(),
  };
};

export const sidebar = getSidebars();
