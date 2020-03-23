const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: {
      lib: ['vue', 'vuex', 'axios', 'vue-router','dayjs']
    },
    output: {
      path: path.join(__dirname, './src/lib'),
      filename: '[name].dll.[hash:5].js',
      library: '[name]_library' 
      // lib.dll.js中暴露出的全局变量名。
      // 主要是给DllPlugin中的name使用，
      // 故这里需要和webpack.DllPlugin中的`name: '[name]_library',`保持一致。
    },
    plugins: [
      new webpack.DllPlugin({
        path: path.join(__dirname, '.', '[name]-manifest.json'),
        name: '[name]_library', 
        context: __dirname
      }),
      new BundleAnalyzerPlugin()
    ]
  };