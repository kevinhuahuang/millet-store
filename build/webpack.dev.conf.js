'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const contentData = require('../server/public/json/main/content.json')
const flashBuyData = require('../server/public/json/main/flashBuy.json')
const homeChannelData = require('../server/public/json/main/homeChannel.json')
const miData = require('../server/public/json/main/mi.json')
const navHeaderData = require('../server/public/json/main/navHeader.json')
const navLeftData = require('../server/public/json/main/navLeft.json')
const navRightData = require('../server/public/json/main/navRight.json')
const recommendData = require('../server/public/json/main/recommend.json')
const sliderData = require('../server/public/json/main/slider.json')
const topBarData = require('../server/public/json/main/topBar.json')
const listData = require('../server/public/json/list/list.json')
const cellphoneData = require('../server/public/json/kind/cellphone.json')
const childrenData = require('../server/public/json/kind/children.json')
const dressData = require('../server/public/json/kind/dress.json')
const householdData = require('../server/public/json/kind/household.json')
const lifeData = require('../server/public/json/kind/life.json')
const notepadData = require('../server/public/json/kind/notepad.json')
const powerData = require('../server/public/json/kind/power.json')
const routerData = require('../server/public/json/kind/router.json')
const speakerData = require('../server/public/json/kind/speaker.json')
const televisionData = require('../server/public/json/kind/television.json')

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    before(app) {
      app.get('/cellphone/jsonData', (req, res) => {
        res.json(cellphoneData)
      }),
      app.get('/children/jsonData', (req, res) => {
        res.json(childrenData)
      }),
      app.get('/dress/jsonData', (req, res) => {
        res.json(dressData)
      }),
      app.get('/household/jsonData', (req, res) => {
        res.json(householdData)
      }),
      app.get('/life/jsonData', (req, res) => {
        res.json(lifeData)
      }),
      app.get('/notepad/jsonData', (req, res) => {
        res.json(notepadData)
      }),
      app.get('/power/jsonData', (req, res) => {
        res.json(powerData)
      }),
      app.get('/router/jsonData', (req, res) => {
        res.json(routerData)
      }),
      app.get('/speaker/jsonData', (req, res) => {
        res.json(speakerData)
      }),
      app.get('/television/jsonData', (req, res) => {
        res.json(televisionData)
      }),
      app.get('/listPageData', (req, res) => {
        res.json(listData)
      }),
      app.get('/contentData', (req, res) => {
        res.json(contentData)
      }),
      app.get('/flashBuyData', (req, res) => {
        res.json(flashBuyData)
      }),
      app.get('/homeData', (req, res) => {
        res.json(homeChannelData)
      }),
      app.get('/miData', (req, res) => {
        res.json(miData)
      }),
      app.get('/navHeaderData', (req, res) => {
        res.json(navHeaderData)
      }),
      app.get('/navLeftData', (req, res) => {
        res.json(navLeftData)
      }),
      app.get('/navRightData', (req, res) => {
        res.json(navRightData)
      }),
      app.get('/recommendData', (req, res) => {
        res.json(recommendData)
      }),
      app.get('/sliderData', (req, res) => {
        res.json(sliderData)
      }),
      app.get('/topBarData', (req, res) => {
        res.json(topBarData)
      })
    },
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, utils.htmlName) },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    /* 单页面时使用(开始) */
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'index.html',
    //   inject: true
    // }),
    /* 单页面时使用(结束) */
    // copy custom static assets
    new CopyWebpackPlugin([ // 将from路径的内容复制到to路径
      {
        from: path.resolve(__dirname, '../server/public'),  //要拷贝的源目录 影响dev，不影响build
        to: config.dev.assetsSubDirectory,  // 要拷贝的目标目录
        ignore: ['.*'] // 忽略指定的拷贝文件
      }
    ])

  ].concat(utils.htmlPlugin())/* 多页面时添加 .concat(utils.htmlPlugin()) */
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
