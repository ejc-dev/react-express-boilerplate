const mongoose = require('mongoose')

const ItemSchema = mongoose.Schema( {
    user: {
        type: monggose.Schema.Types.ObjectId,
        ref: "user",
        require: true
    },
    name: {
        type: String,
        require: true
    },
    amount: {
        type: Number,
        require: true,
        default:0
    },
    date: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('item', ItemSchema)