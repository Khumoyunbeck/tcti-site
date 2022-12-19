const mongoose = require('mongoose')

const fileSchema = mongoose.Schema({
    name: String,
    date: {type: Date, default: Date.now}
})
module.exports = mongoose.model('File', fileSchema)