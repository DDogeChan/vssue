const path = require("path");
module.exports = {
  // 网站 Title
  title: "My Blog",

  // 网站描述
  description: "This is my blog",
  head: [
    ["link", { rel: "shortcut icon", href: "/favicon.png" }],
    [
      "meta",
      {
        name: "keywords",
        content: "Unknow Me, viko16, vuepress-theme-simple, 博客, vue"
      }
    ],
    ["meta", { name: "author", content: "rezelchan" }]
  ],

  // 网站语言
  locales: {
    "/": {
      lang: "zh-CN"
    }
  },

  // 使用的主题
  theme: "simple",
  dest: path.resolve(__dirname, "../../dist"),
  plugins: ["permalink-pinyin", ["sitemap", { hostname: "https://ukn.me" }]]
};
