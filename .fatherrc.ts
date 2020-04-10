import { IBundleOptions } from 'father-build';

const options: IBundleOptions = {
  esm: 'babel',
  cjs: 'babel',
  disableTypeCheck: true,
  preCommit: {
    eslint: true,
    prettier: true,
  },
  extraBabelPlugins: [['babel-plugin-transform-async-to-promises']],
};

export default options;
