import { sidebar } from './pressConfig'

export default {
  base: '/components/',
  themeConfig: {
    siteTitle: false,
    logo: "/logo.jpg",
    nav: [
      { text: "指南", link: "mdFile/guide/installation" },
      { text: "组件", link: "mdFile/examples/autoScroll" },
    ],
    sidebar,
    socialLinks: [{ icon: "github", link: "https://github.com/lzxcode/lzxOnline" }],
  },
};
