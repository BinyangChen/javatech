/**
 * @see https://vuepress.vuejs.org/zh/
 */
module.exports = {
  port: "4000",
  dest: "dist",
  base: "/javatech/",
  title: "JAVATECH",
  description: "Java 教程",
  head: [["link", { rel: "icon", href: `/favicon.ico` }]],
  markdown: {
    externalLinks: {
      target: "_blank",
      rel: "noopener noreferrer"
    }
  },
  themeConfig: {
    logo: "https://raw.githubusercontent.com/dunwu/images/master/common/dunwu-logo-200.png",
    repo: "dunwu/javatech",
    repoLabel: "Github",
    editLinks: true,
    smoothScroll: true,
    locales: {
      "/": {
        label: "简体中文",
        selectText: "Languages",
        editLinkText: "帮助我们改善此页面！",
        lastUpdated: "上次更新",
        nav: [
          {
            text: "框架",
            link: "/framework/",
          },
          {
            text: "缓存",
            link: "/cache/",
          },
          {
            text: "消息队列",
            link: "/mq/",
          },
          {
            text: "搜索引擎",
            link: "/search/",
          },
          {
            text: "存储",
            link: "/storage/",
          },
          {
            text: "微服务",
            link: "/soa/",
          },
          {
            text: "安全",
            link: "/security/",
          },
          {
            text: "测试",
            link: "/test/",
          },
          {
            text: "服务器",
            link: "/server/",
          },
          {
            text: "Java系列",
            ariaLabel: "Java",
            items: [
              {
                text: "Java 教程 📚",
                link: "https://dunwu.github.io/java-tutorial/",
                target: "_blank",
                rel: ""
              },
              {
                text: "JavaCore 教程 📚",
                link: "https://dunwu.github.io/javacore/",
                target: "_blank",
                rel: ""
              },
              {
                text: "JavaTech 教程 📚",
                link: "https://dunwu.github.io/javatech/",
                target: "_blank",
                rel: ""
              },
              {
                text: "Spring 教程 📚",
                link: "https://dunwu.github.io/spring-tutorial/",
                target: "_blank",
                rel: ""
              },
              {
                text: "Spring Boot 教程 📚",
                link: "https://dunwu.github.io/spring-boot-tutorial/",
                target: "_blank",
                rel: ""
              }
            ]
          },
          {
            text: "博客",
            link: "https://github.com/dunwu/blog",
            target: "_blank",
            rel: ""
          }
        ],
        sidebar: "auto",
        sidebarDepth: 2
      }
    }
  },
  plugins: [
    ["@vuepress/back-to-top", true],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    ["@vuepress/medium-zoom", true],
    [
      "container",
      {
        type: "vue",
        before: '<pre class="vue-container"><code>',
        after: "</code></pre>"
      }
    ],
    [
      "container",
      {
        type: "upgrade",
        before: info => `<UpgradePath title="${info}">`,
        after: "</UpgradePath>"
      }
    ],
    ["flowchart"]
  ]
};
