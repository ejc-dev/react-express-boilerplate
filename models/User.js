const mongoose = require('mongoose')
const passportLocalMongoose = require("passport-local-mongoose")

const UserSchema = mongoose.Schema( {
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    }
})

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('user', UserSchema)