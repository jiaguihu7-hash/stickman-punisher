const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',  // 入口文件
  output: {
    filename: 'bundle.js',   // 输出文件名
    path: path.resolve(__dirname, 'dist'),  // 输出目录
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],   // 支持解析的文件类型
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,  // 匹配 .ts 和 .tsx 文件
        use: 'ts-loader',  // 使用 ts-loader 编译 TypeScript 文件
        exclude: /node_modules/,  // 排除 node_modules 文件夹
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),  // 静态文件目录
    compress: true,  // 启用压缩
    port: 9000,      // 开发服务器端口
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // 使用 HTML 模板
    }),
  ],
};
