import { defineConfig } from 'umi';

export default defineConfig({
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  mode: 'site', // site | doc
  title: 'Wetrial Hooks',
  dynamicImport: {},
  manifest: {},
  links: [{ rel: 'manifest', href: '/asset-manifest.json' }],
  hash: true,
  // history: 'hash',
  base: '/hooks',
  publicPath: '/hooks/',
  favicon: 'https://avatars2.githubusercontent.com/u/40448889?s=66&v=4',
  logo: 'https://avatars2.githubusercontent.com/u/40448889?s=66&v=4',

  locales: [['zh-CN', '中文']],
  resolve: {
    includes: ['src'],
    previewLangs: [], // tsx、jsx
  },
  navs: [
    null,
    {
      title: 'umi hooks',
      path: 'https://hooks.umijs.org/zh-CN/hooks',
    },
  ],
  scripts: [
    // 由于github不支持url重写，history-route模式下会跳转到404 404页面会对路由进行处理将路由转换成?path=xxx/xxx这种形式，首页需要对这种进行处理通过window.g_history.push()进行跳转
    `(function(g_history){
      if(g_history&&g_history.location&&g_history.location.query&&g_history.location.query.path){
        var hash=g_history.location.hash
        g_history.push({pathname:g_history.location.query.path,hash:hash})
      }
    }(window.g_history))`,
  ],
  //plugins: ['@umijs/plugin-qiankun'],
});
