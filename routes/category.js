var express = require('express')

var category = express.Router()

var list = [
    {
        name: '手机',
        region: '数码',
        _id: 1
    },
    {
        name: '电脑',
        region: '数码',
        _id: 2
    },
    {
        name: '吉他',
        region: '乐器',
        _id: 3
    },
    {
        name: '钢琴',
        region: '乐器',
        _id: 4
    }
]

category.get('/list', function (req, res) {
    res.status(200).json({
        meta: {
            status: 200,
            msg: "ok"
        },
        data: {
            list
        }
    })
})

category.get('/info', function (req, res) {
    console.log('分类_id', req.query)
    var target = list.find(item => item._id==req.query.categoryId)
    res.status(200).json({
        meta: {
            status: 200,
            msg: "ok"
        },
        data: {
            name: target.name
        }
    })
})

module.exports = category