/* const http = require("http");
const server = http.createServer((req,resp)=>{
    resp.end("hello server")
})
server.listen(8000, (err)=>{
    if(err) throw err;
    console.log("Yoo why r u running ")
}) */

const http = require('http').createServer((req, resp)=>{
                            resp.end(`<h1>Hello Earth, lakshmi </h1>`)
})
.listen(9000)