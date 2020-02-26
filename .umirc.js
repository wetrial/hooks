const { REACT_APP_ENV } = process.env;

const isSite = REACT_APP_ENV !== 'dev';

export default {
  // history: 'hash',
  hash: true,
  ...(isSite
    ? {
        base: 'hooks',
        publicPath: '/hooks/',
      }
    : null),
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
  doc: {
    mode: 'doc',
    logo: 'https://avatars2.githubusercontent.com/u/40448889?s=66&v=4',
    title: 'Wetrial Hooks',
    include: ['packages/hooks/src', 'packages/use-request'],
    locales: [
      ['zh-CN', '中文'],
      ['en-US', 'English'],
    ],
  },
  plugins: [
    [
      'umi-plugin-react',
      {
        pwa: true,
        headScripts: ['https://hm.baidu.com/hm.js?a3636d814818bccb02a7991d78ba3048'],
      },
    ],
  ],
};
