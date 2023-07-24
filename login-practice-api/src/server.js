const express = require('express')

const server = express();
const {notFoundHandler}=require('./handlers')
const morgan= require('morgan')
server.use(express.urlencoded({extended:false}))
server.use(morgan('dev'))
server.use(express.json())
server.use('/api',require('./routes'))
server.use('*',notFoundHandler)
module.exports=server