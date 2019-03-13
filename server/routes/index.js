var express = require('express')
var fs = require('fs')
var path = require('path')
var router = express.Router()
const homeData = require('../public/json/main/homeChannel.json')
const PUBLIC = require('./public')
// var app = require('../app')

/* GET home page. */
router.get('/', function (req, res) {
  // res.render('main', {title: 'HomePage'}) // 使用模板
  let html = fs.readFileSync(path.resolve(__dirname, PUBLIC.htmlPathSwitch + 'index.html'), 'utf-8')
  res.send(html)
})

router.get('/homeData', function (req, res) {
  // res.render('main', {title: 'HomePage'}) // 使用模板
  res.send(homeData)
})

module.exports = router
