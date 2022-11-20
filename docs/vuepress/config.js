module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  evergreen: true,
  themeConfig: {
    // 侧边栏
    sidebar: [
      '/',
      '/page-a',
      [ '/page-b', 'Explicit link text' ]
    ]
  }
};
