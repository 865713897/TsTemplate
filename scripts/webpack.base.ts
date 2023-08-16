import path from 'path';
import WebpackBar from 'webpackbar';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const isDev = process.env.NODE_ENV === 'development';

export default {
  entry: {
    app: path.resolve(__dirname, '../src/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: `[name]${isDev ? '' : '.[fullhash]'}.js`,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
    symlinks: false,
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  stats: {
    all: false, // 首先禁用所有输出
    errors: true, // 启用错误输出
    warnings: true, // 启用警告输出
    moduleTrace: true, // 启用模块跟踪输出
    // 在需要显示的信息前面添加上 “\n\n\n\n\n”，这样可以在输出前增加几行空行以清除控制台
    logging: 'warn', // 控制台日志级别（'trace' | 'debug' | 'info' | 'warn' | 'error' | 'silent'）
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackBar({
      name: isDev ? '编译' : '打包',
      color: '#2f54eb',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html',
      cache: false,
    }),
  ].filter(Boolean),
};
