const http = require('http')
const fs = require('fs')
const router = require('./router')
require('./environmentParser').parse('./.env')


const server = http.createServer(router)

server.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})

