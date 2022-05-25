const fs = require('fs')
const path = require('path')

let buffer = ""

const parse = (filepath) => {
   buffer = fs.readFileSync(filepath, 'utf8')
   parseHelper(buffer);
}


const parseHelper = (fileContents) => {
     let variables = fileContents.split('\n')
     variables.forEach(element => {
        element = element.replace(/\s+/g, '')
        element = element.split('=')
        process.env[element[0]] = element[1]
     });   
}



module.exports.parse = parse