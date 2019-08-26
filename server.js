const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const path = require('path')
const helmet = require('helmet')
const { connectDB, disconnectDB } = require('./db.js')
const dotenv = require('dotenv')
const morgan = require('morgan')
// Load env
dotenv.config({path:'./.env'})

//Dev logs to verify that routes are being hit
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Helmet Middleware
app.use(helmet())

//Middleware for json reading hehe
app.use(express.json({extended:false}))

//Adding Routes
app.use("/api/v1/users",require('./routes/users'))
app.use("/api/v1/auths",require('./routes/auths'))

// Serve static assets in production
if(process.env.NODE_ENV === 'production') {
    app.set('trust proxy', 1)
    app.use(express.static('client/build'))
    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname,'client','build','index.html')))
}

app.listen(PORT, () => {
    console.log(`Server Started on ${PORT}`)
    connectDB()
    setTimeout(() => {
        disconnectDB().then(() => {
            console.log('Disconnecting')
        })
    },60000)
})