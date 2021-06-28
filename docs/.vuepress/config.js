module.exports = {
  title: 'My VuePress',
  description: '默认主题配置',
  themeConfig: {
    nav: [
      { text: '指南', link: '/' },
      { text: '配置', link: '/config/' },
      { text: '插件', link: '/plugin/' },
      { text: '主题', link: '/plugin/' },
      { text: '了解更多', link: '/plugin/' },
      { text: 'v1.x', items: [
          { text: 'v0.x', link: 'https://v0.vuepress.vuejs.org/zh/' },
          { text: 'v2.x', link: 'https://v2.vuepress.vuejs.org/zh/' }
        ] },
      {
        text: '语言',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      },
      { text: 'Github', link: 'https://github.com/', target: "_blank" },
    ],
    sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ]
  }
}