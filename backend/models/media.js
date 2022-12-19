const mongoose = require('mongoose')

const mediaSchema = mongoose.Schema({
    video: String,
    date: {type: Date, default: Date.now}
})
module.exports = mongoose.model('Video', mediaSchema)