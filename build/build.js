'use strict'
// 检查npm和nodejs的版本
require('./check-versions')()

process.env.NODE_ENV = 'production'

// orm插件，实现nodejs环境命令行的loading效果和显示各种状态的图标
const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
// 用于控制台输出带颜色的字体插件
const chalk = require('chalk')
// webpack构建配置文件
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building for production...')
spinner.start()

// rimraf插件，每次构建先删除dist文件夹，然后再生成dist文件夹。为了删除旧信息，预防不可预测的情况发生
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
