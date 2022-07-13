const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    firstName: String,
    lastname: String,
    email: {
        type: String,
        lowercase: true,
    },
    contactNumber: Number
})

module.exports = mongoose.model('users', User)