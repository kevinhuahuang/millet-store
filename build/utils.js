'use strict'
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')
const async = require('async')
const fs = require('fs')

// 这是添加的部分()（开始）
var myFileName = 'main' // 指定要编译的文件名 默认index, 可改为cellphone  dev用到 build未用到
var HTML_OUTPUT_PATH = '' //指定build后html文件路径
var myCurFilePath = '../src/pages/main' // 指定要编译或运行调试的文件所在的文件夹（可单个文件或多个文件）
var myCurDir = '/*'
exports.htmlName = HTML_OUTPUT_PATH + myFileName + '.html' //devSever运行时调用的文件名
// glob是webpack安装时依赖的一个第三方模块，还模块允许你使用 *等符号, 例如lib/*.js就是获取lib文件夹下的所有js后缀名的文件
var glob = require('glob')
// 页面模板
var HtmlWebpackPlugin = require('html-webpack-plugin')
// 取得相应的页面路径，因为之前的配置，所以是src文件夹下的pages文件夹

/* 通过指定不同的文件夹来编译指定文件下面的文件，比如pages下面的cellphone或notepad*/
var PAGE_PATH = path.resolve(__dirname, myCurFilePath)

// 用于做相应的merge处理
var merge = require('webpack-merge')

// 这是添加的部分（结束）

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap,
      minimize: true // 压缩
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}

/* 这里是添加的部分 ---------------------------- 开始 */

// 多入口配置
// 通过glob模块读取pages文件夹下的所有对应文件夹下的js后缀文件，如果该文件存在
// 那么就作为入口处理
var filePathArray = []
// 遍历文件夹下面的文件夹 并返回
// 文件遍历方法
function fileDisplay (filePath, callback) {
  // 根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, function (err, files) {
    if (err) {
      console.warn(err)
    } else {
      var count = 0
      var checkEnd = function () {
        ++count === files.length && callback()
      }
      // 遍历读取到的文件列表
      files.forEach(function (filename) {
        // for (let i = 0; i < files.length; ++) {
        // 获取当前文件的绝对路径
        var filedir = path.join(filePath, filename)
        // 根据文件路径获取文件信息，返回一个fs.Stats对象
        fs.stat(filedir, function (eror, stats) {
          if (eror) {
            console.warn('获取文件stats失败')
          } else {
            // var isFile = stats.isFile() // 是文件
            var isDir = stats.isDirectory() // 是文件夹
            // if (isFile) {
            //   console.log(filedir)
            //   // 读取文件内容
            //   var content = fs.readFileSync(filedir, 'utf-8')
            //   console.log(content)
            // }
            if (isDir) {
              filePathArray.push(filedir)
              return fileDisplay(filedir, checkEnd) // 递归，如果是文件夹，就继续遍历该文件夹下面的文件夹
            } else {
              checkEnd()
            }
          }
        })
      })
      // 为空时直接回调
      files.length === 0 && callback()
    }
  })
}

function fileDisplaySync (filePath) {
  // 根据文件路径读取文件，返回文件列表
  var files = fs.readdirSync(filePath)
  // 遍历读取到的文件列表
  files.forEach(function (filename) {
    // for (let i = 0; i < files.length; ++) {
    // 获取当前文件的绝对路径
    var filedir = path.join(filePath, filename)
    // 根据文件路径获取文件信息，返回一个fs.Stats对象
    // console.log(filedir)
    var stats = fs.statSync(filedir)
    if (stats.isDirectory()) {
      filePathArray.push(filedir)
      // console.log(filedir)
      fileDisplaySync(filedir) // 递归，如果是文件夹，就继续遍历该文件夹下面的文件夹
    } else if (stats.isFile()) {
      filePathArray.push(filePath) // 如果是文件，则保存它所在的文件夹
    }
  })
}

exports.entries = function () {
  let entryFiles
  let map = {}
  fileDisplaySync(PAGE_PATH) // 递归，如果是文件夹，就继续遍历该文件夹下面的文件夹
  // console.log(filePathArray)
  filePathArray.forEach(function (filePath) {
    entryFiles = glob.sync(filePath + myCurDir + '.js')
    entryFiles.forEach((filePath) => {
      // console.log(filePath)
      let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
      map[filename] = filePath
    })
  })
 // console.log(map)
  return map
}

/*多页面输出配置
* 与上面的多页面入口配置相同，读取pages文件夹下的对应的html后缀文件，然后放入数组中
* 如果只想编译其中的一个网页，更改entryHtml为指定的网页, 如果数组中只有一个网页就不需要指定
*/
exports.htmlPlugin = function () {
  let entryHtml
  let arr = []
  fileDisplaySync(PAGE_PATH) // 用同步的方法遍历文件夹
  filePathArray.forEach(function (filePath) {
    entryHtml = glob.sync(filePath + myCurDir + '.html')
    entryHtml.forEach((filePath) => {
      let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
      let conf = {
        // 模板来源
        template: filePath,
        // 文件名称
        filename: HTML_OUTPUT_PATH + filename + '.html',
        // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
        chunks: ['manifest', 'vendor', filename],
        inject: true
      }
      if (process.env.NODE_ENV === 'production') {
        conf = merge(conf, {
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
          },
          chunksSortMode: 'dependency'
        })
      }
      arr.push(new HtmlWebpackPlugin(conf))
    })
  })

  return arr
}
/* 这里是添加的部分 ---------------------------- 结束 */
