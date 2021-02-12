//http module creates a web server with node js 

/*const http = require ('http');
//create a server that takes the user request and returns a response
const server = http.createServer((req, res) => {
        if (req.url === '/'){
            res.write("Can you hear me")
            res.end();
        } else{
            res.write('you are using a diffrent domain')
            res.end()
        }
})

server.listen('3000') */

const http = require('http');
const fs = require('fs');
server = http.createServer((req,res) =>{
   const readStream = fs.createReadStream('./img.png')
   res.writeHeader(200, {'Content-type' : 'image/png'})
   readStream.pipe(res)
})
server.listen('3000') 
//package.json holds the meta data of the package. A package is 
//reusable code that can be included inside an application
//npm.js.com == check for packages. 
