import { sidebar, mdPlugin } from "./pressConfig";
import demoblock from "vitepress-demoblock";

const buildTransformers = () => {
  const transformer = () => {
    return {
      props: [],
      needRuntime: true,
    };
  };

  const transformers = {};
  const directives = [
    "infinite-scroll",
    "loading",
    "popover",
    "click-outside",
    "repeat-click",
    "trap-focus",
    "mousewheel",
    "resize",
  ];
  directives.forEach((k) => {
    transformers[k] = transformer;
  });

  return transformers;
};
export default {
  base: "/components/",
  themeConfig: {
    siteTitle: false,
    logo: "/logo.jpg",
    nav: [
      { text: "指南", link: "mdFile/guide/installation" },
      { text: "组件", link: "mdFile/components/autoScroll" },
      { text: "工具", link: "mdFile/tools/mainColor" },
    ],
    sidebar,
    socialLinks: [
      { icon: "github", link: "https://github.com/lzxcode/lzxOnline" },
    ],
  },
  markdown: {
    config: (md) => {
      mdPlugin(md);
      // md.use(demoblock)
    },
  },
  // vue: {
  //   template: {
  //     ssr: true,
  //     compilerOptions: {
  //       directiveTransforms: buildTransformers(),
  //     },
  //   },
  // },
};
