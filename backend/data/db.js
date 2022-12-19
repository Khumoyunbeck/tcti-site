const mongoose = require('mongoose')
const connectDB = async () => {
    // const conn = await mongoose.connect("mongodb+srv://Olloyor:19971227.mmsaa11AA11@olloyor.ig5i4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {   
    const conn = await mongoose.connect("mongodb://localhost:27017/ddddd", {   
        useNewUrlParser: true
    });   

    console.log(`MongoDB Connected: ${conn.connection.host}`);
};
module.exports = connectDB;