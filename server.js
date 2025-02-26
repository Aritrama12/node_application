const http=require("http")
const fs=require("fs")
const port=3000;
const hostname='127.0.0.1'

const myserver=http.createServer((req,res)=>{
         
    if(req.url=='/'|| req.url=='/home.html'|| req.url=='//home'){
       fs.readFile("index.html",(err,data)=>{
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data)
        res.end()
       })
    }
    else if(req.url=='/about.html'||req.url=='/about'){
       fs.readFile("about.html",(err,data)=>{
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data)
        res.end()
       })
    }
    else if(req.url=='/contact.html'||req.url=='/contact'){
       fs.readFile("contact.html",(err,data)=>{
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data)
        res.end()
       })
    }
    else{
       fs.readFile("Error.html",(err,data)=>{
        res.writeHead(404,{'content-type':'text/html'})
        res.write(data)
        res.end()
       })
    }
    
})
myserver.listen(port,hostname,()=>{
    console.log(`My server is running successfully at http://${hostname}:${port}`)
})