

const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    img: {type: String, required: true},
});


module.exports = new mongoose.model('Img', imageSchema);