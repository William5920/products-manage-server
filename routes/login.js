var express = require('express')

var login = express.Router()

login.post('/', function(req, res) {
    // console.log(req.body)
    const body = req.body
    if(body.username==='admin') {
        if(body.password==='admin') {
            res.status(200).json({
                meta: {
                    status: 200,
                    msg: "登录成功"
                },
                data: {
                    user: {
                        username: body.username,
                        _id: 1234567,
                        role: {
                            menus: [
                                {
                                    title: '首页', // 菜单标题名称
                                    key: '/home', // 对应的path
                                    icon: 'el-icon-menu', // 图标名称
                                    public: true, // 公开的
                                  },
                                  {
                                    title: '商品',
                                    key: '/products',
                                    icon: 'el-icon-shopping-cart-2',
                                    children: [ // 子菜单列表
                                      {
                                        title: '品类管理',
                                        key: '/category',
                                        icon: 'el-icon-notebook-1'
                                      },
                                      {
                                        title: '商品管理',
                                        key: '/product',
                                        icon: 'el-icon-present'
                                      },
                                    ]
                                  },
                                  {
                                    title: '用户管理',
                                    key: '/user',
                                    icon: 'el-icon-user'
                                  },
                                  {
                                    title: '角色管理',
                                    key: '/role',
                                    icon: 'el-icon-s-check',
                                  },
                                
                                  {
                                    title: '图形图表',
                                    key: '/charts',
                                    icon: 'el-icon-picture-outline',
                                    children: [
                                      {
                                        title: '柱形图',
                                        key: '/charts/bar',
                                        icon: 'el-icon-data-analysis'
                                      },
                                      {
                                        title: '折线图',
                                        key: '/charts/line',
                                        icon: 'el-icon-data-line'
                                      },
                                      {
                                        title: '饼图',
                                        key: '/charts/pie',
                                        icon: 'el-icon-pie-chart'
                                      },
                                    ]
                                  },
                            ]
                        }
                    }
                }
            })
        } else {
            res.status(200).json({
                meta: {
                    status: 205,
                    msg: "密码错误"
                },
                data: {}
            })
        }
    } else {
        res.status(200).json({
            meta: {
                status: 205,
                msg: "暂不支持其他用户"
            },
            data: {}
        })
    }
    
})

module.exports = login