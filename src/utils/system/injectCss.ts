import getOS from "./getOs";

if (!["Android", "Iphone"].includes(getOS().name)) {
  let style = document.createElement("style") as HTMLStyleElement & {
    styleSheet: { cssText: string };
  };
  try {
    style.appendChild(
      document.createTextNode(
        "@media screen and (max-width:1000px){html {width: 1000px;}}"
      )
    );
  } catch (error) {
    style.styleSheet.cssText =
      "@media screen and (max-width:1000px){html {width: 1000px;}}";
  }
  document.getElementsByTagName("head")[0].appendChild(style);
}
