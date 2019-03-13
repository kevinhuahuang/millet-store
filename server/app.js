var express = require('express')
// var fs = require('fs')
var path = require('path')
var bodyParser = require('body-parser')

var app = express()

// 注册users接口
// var users = require('./routes/users')
// app.use('/users', users)
// var index = require('./routes/index')
var main = require('./routes/main')
var cellphone = require('./routes/cellphone')
var children = require('./routes/children')
var dress = require('./routes/dress')
var household = require('./routes/household')
var life = require('./routes/life')
var list = require('./routes/list')
var notepad = require('./routes/notepad')
var power = require('./routes/power')
var router = require('./routes/router')
var speaker = require('./routes/speaker')
var television = require('./routes/television')
var building = require('./routes/building')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

// 访问静态资源
app.use(express.static(path.resolve(__dirname, 'public')))

app.use('/', main)
app.use('/main', main)
app.use('/cellphone', cellphone)
app.use('/children', children)
app.use('/dress', dress)
app.use('/household', household)
app.use('/life', life)
app.use('/list', list)
app.use('/notepad', notepad)
app.use('/power', power)
app.use('/router', router)
app.use('/speaker', speaker)
app.use('/television', television)
app.use('/building', building)
// 访问单页(此处不使用此方式)
// app.get('/', function (req, res) {
//   var html = fs.readFileSync(path.resolve(__dirname, '../dist/main.html'), 'utf-8')
//   res.send(html)
// })
// app.get('/index', function (req, res) {
//   var html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
//   res.send(html)
// })
// app.get('/main', function (req, res) {
//   var html = fs.readFileSync(path.resolve(__dirname, '../dist/main.html'), 'utf-8')
//   res.send(html)
// })
// app.get('/cellphone', function (req, res) {
//   var html = fs.readFileSync(path.resolve(__dirname, '../dist/cellphone.html'), 'utf-8')
//   res.send(html)
// })
// app.get('/children', function (req, res) {
//   var html = fs.readFileSync(path.resolve(__dirname, '../dist/children.html'), 'utf-8')
//   res.send(html)
// })
// app.get('/dress', function (req, res) {
//   var html = fs.readFileSync(path.resolve(__dirname, '../dist/dress.html'), 'utf-8')
//   res.send(html)
// })
// app.get('/household', function (req, res) {
//   var html = fs.readFileSync(path.resolve(__dirname, '../dist/household.html'), 'utf-8')
//   res.send(html)
// })
// app.get('/life', function (req, res) {
//   var html = fs.readFileSync(path.resolve(__dirname, '../dist/life.html'), 'utf-8')
//   res.send(html)
// })
// app.get('/notepad', function (req, res) {
//   var html = fs.readFileSync(path.resolve(__dirname, '../dist/notepad.html'), 'utf-8')
//   res.send(html)
// })
// app.get('/power', function (req, res) {
//   var html = fs.readFileSync(path.resolve(__dirname, '../dist/power.html'), 'utf-8')
//   res.send(html)
// })
// app.get('/router', function (req, res) {
//   var html = fs.readFileSync(path.resolve(__dirname, '../dist/router.html'), 'utf-8')
//   res.send(html)
// })
// app.get('/speaker', function (req, res) {
//   var html = fs.readFileSync(path.resolve(__dirname, '../dist/speaker.html'), 'utf-8')
//   res.send(html)
// })
// app.get('/television', function (req, res) {
//   var html = fs.readFileSync(path.resolve(__dirname, '../dist/television.html'), 'utf-8')
//   res.send(html)
// })
// app.get('/list', function (req, res) {
//   var html = fs.readFileSync(path.resolve(__dirname, '../dist/list.html'), 'utf-8')
//   res.send(html)
// })
// 监听
app.listen(8081, function () {
  console.log('success listen: http://localhost:8081')
})
