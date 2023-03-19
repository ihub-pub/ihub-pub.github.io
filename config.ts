import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'IHub Doc',
  description: '工欲善其事，必先利其器。IHub是一套用于Java开发的神兵利器，IHub Plugins插件集封装了常用Gradle插件，可以极大的简化项目管理配置；IHub Libs是一套开箱即用的组件集，可以让项目开发可以更专注于业务；IHub Apps应用集提供常见的公共应用，可以即起即用。',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: 'ihub,java,groovy,gradle,maven,插件,组件,plugins,libs,技术,博客' }]
  ],

  theme: defaultTheme({
    logo: '/ihub.png',
    logoDark: 'ihub_white.png',
    repo: 'ihub-pub',
    docsDir: 'docs',
    sidebar: false,
    editLink: false,
    lastUpdated: false,
    contributors: false,
    navbar: [
      {
        text: 'IHub',
        link: 'https://ihub.pub',
      },
      {
        text: 'Gitee',
        link: 'https://gitee.com/ihub-pub',
      },
    ],
  }),
})