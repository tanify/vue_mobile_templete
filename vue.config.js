const path = require('path');
const fs = require('fs');
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const vConsole = require('vconsole-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const PATH_SRC='/src';
const PATH_DIST='/dist';

module.exports = {
  productionSourceMap: false,
  configureWebpack: (config) => {
    let result = {
      optimization: {
        minimizer: [new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false,
            output: {
              comments: false,
            },
            compress: {
              drop_debugger: true, //debugger
              drop_console: true,// console
           },
          },
        })]
      },
      plugins: [
        new webpack.DllReferencePlugin({
          context: process.cwd(),
          manifest: require('./lib-manifest.json')
        })
      ],
    }
    if (process.env.VUE_APP_CONFIG === 'production') {
      result.plugins.push(
        new CompressionPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.js$|\.html$|\.json$|\.css/,
          threshold: 0, // 只有大小大于该值的资源会被处理
          minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
          deleteOriginalAssets: false // 是否删除原文件
        })
      );
    }

    // 本地开发打包分析
    if (process.env.VUE_APP_CONFIG === 'production') {
      result.plugins.push(new BundleAnalyzerPlugin());
    }
    return result;
  },
  chainWebpack: config => {
    config.plugin('copy')
      .use(CopyWebpackPlugin, [[{
        from: path.resolve(__dirname + `${PATH_SRC}/lib/`),
        to: path.resolve(__dirname + `${PATH_DIST}/lib/`),
        toType: 'dir',
        ignore: ['.*']
      }]])
    config.module
      .rule('eslint')
      .test(/\.js$/)
      .exclude
      .add(path.resolve(__dirname +`${PATH_SRC}/lib`));
    config.module.rule('compile')
      .test(/\.js$/)
      .exclude
      .add(path.resolve(__dirname +`${PATH_SRC}/lib`));
    //修正svg字体被放入img
    config.module.rule('svg')
      .test(/\.svg$/)
      .include
      .add(path.resolve(__dirname +`${PATH_SRC}/assets/fonts`))
      .end()
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'fonts/[name].[hash:8].[ext]'
      })
    //图片压缩
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true,
      });
    // 测试环境加载vconsole
    if (process.env.VUE_APP_CONFIG === 'RD') {
      config.plugin('vconsole').use(vConsole, [{
        filter: [],
        enable: true,
      }]);
    }
  }
};