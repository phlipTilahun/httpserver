const fs = require('fs')
const path = require('path')

const router = (req, res) => {
     if(req.url.includes('.')){
        serveStaticFile(path.join(__dirname,'/public',req.url),req,res)
     }else{
        switch (req.url) {

            case '/':
                serveStaticFile(path.join(__dirname,'/public','/index.html'),req,res)
                break;
            default:
               res.setHeader('Content-Type', 'text/html')
               res.writeHead(404)
               res.end(`cannot ${req.method} ${req.url}`)
                break;
        }
     }

}

const serveStaticFile = (filePath, req, res) => {
    fs.readFile(filePath, (err, buffer) => {
        if(buffer){
            res.setHeader('Content-Type', 'text/html')
            res.writeHead(200)
            res.end((buffer))
        }else{
            res.setHeader('Content-Type', 'text/html')
            res.writeHead(404)
            res.end(`cannot ${req.method} ${req.url}`)
        }

    })
}

module.exports = router