const express = require('express')
const app = express()
const router = require("./src/modules/router")
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/getfiles', express.static('public/file'));

app.use('/upload', require('./routes/fileRoutes'))

app.use(router)


app.listen(3001, console.log('server is running on port 3001'))