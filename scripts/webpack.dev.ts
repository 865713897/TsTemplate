import { merge } from 'webpack-merge';
import baseConfig from './webpack.base';

export default merge(baseConfig, {
  mode: 'development',
  devServer: {
    open: true,
    compress: true,
    hot: true, // 热更新
    proxy: {
      '/api/v1': {
        target: 'http://localhost:8080/',
      },
    },
  },
} as Object);
