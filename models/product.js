var mongoose = require('mongoose')

var Schema = mongoose.Schema

var productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    categoryId: {
        type: Number,
        required: true
    },
    imgs: [String],
    detail: String,
    status: {
        type: Number,
        default: 1
    }
})

module.exports = mongoose.model('Product', productSchema)