import { merge } from 'webpack-merge';
import baseConfig from './webpack.base';

export default merge(baseConfig, {
  mode: 'production',
} as Object);
