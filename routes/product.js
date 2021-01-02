var express = require('express')
var Product = require('../models/product')
var product = express.Router()

// 新建商品
product.post('/', function (req, res) {
    console.log(req.body)
    const body = req.body
    new Product(body).save(function (err, product) {
        if (err) {
            return res.status(500).json({
                    meta: {
                        status: 500,
                        msg: "Internal server error"
                    },
                    data: {}
				})
        }
        return res.status(200).json({
            meta: {
                status: 200,
                msg: "ok"
            },
            data: {product}
        })
    })
})

// 删除商品
product.delete('/:id', function (req, res, next) {
    console.log('待删除商品id', req.params)
    Product.deleteOne({_id: req.params.id}, function (err) {
        if(err) return next(err)
        return res.status(200).json({
            meta: {
                status: 200,
                msg: "ok"
            },
            data: {}
        })
    })
    
})

// 获取商品列表
product.get('/list', function (req, res) {
    Product.find({}, function (err, result) {
        if(err) {
            return res.status(500).json({
                meta: {
                    status: 500,
                    msg: "Internal server error"
                },
                data: {}
            })
        }

        return res.status(200).json({
            meta: {
                status: 200,
                msg: "ok"
            },
            data: {list: result}
        })
    })
})

// 根据_id获取商品详情
product.get('/info', function (req, res, next) {
    console.log('商品_id', req.query)
    Product.findById(req.query.productId, function (err, result) {
        if(err) {
            // return res.status(500).json({
            //     meta: {
            //         status: 500,
            //         msg: "Internal server error"
            //     },
            //     data: {}
            // })
            // 直接跳转到全局错误处理中间件
            return next(err)
        }

        return res.status(200).json({
            meta: {
                status: 200,
                msg: "ok"
            },
            data: result
        })
    })
    
})

// 更新商品信息
product.put('/', function (req, res, next) {
    console.log('更新商品请求体', req.body)
    const body = req.body
    Product.findByIdAndUpdate(body._id, body, function (err, result) {
        if(err) return next(err)
        console.log('待更新的商品', result)
        res.status(200).json({
            meta: {
                status: 200,
                msg: "ok"
            },
            data: {}
        })
    })
})

module.exports = product