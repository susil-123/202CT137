const express = require('express')

require('dotenv').config({path:'./config.env'})
const app = require('./app')

app.listen(3000,'0.0.0.0',()=>{
    console.log("server started")
})