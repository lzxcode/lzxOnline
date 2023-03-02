import { sidebar } from './pressConfig'

export default {
  base: '/mobile/',
  themeConfig: {
    siteTitle: false,
    logo: "/logo.jpg",
    nav: [
      { text: "指南", link: "mdFile/guide/installation" },
      { text: "组件", link: "mdFile/examples/autoScroll" },
    ],
    sidebar,
    socialLinks: [{ icon: "github", link: "https://gitee.com/geeksdidi" }],
  },
};