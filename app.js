// 引入express框架
var express = require('express')
var mongoose = require('mongoose')

// 创建网站服务器
var app = express()

// 配置将post请求的请求体作为json解析
app.use(express.json());

// 连接数据库
mongoose.connect('mongodb://localhost/productManage', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

// 引入二级路由
const login = require('./routes/login')
const category = require('./routes/category')
const product = require('./routes/product')
// 创建一级路由
app.use('/login', login)
app.use('/category', category)
app.use('/product', product)

// 配置全局错误处理中间件
app.use(function (err, req, res, next) {
    res.status(500).json({
        meta: {
            status: 500,
            msg: "Internal server error"
        },
        data: {}
    })
})

// 监听端口
app.listen(3000, function() {
    console.log('Server is running at port 3000......')
})