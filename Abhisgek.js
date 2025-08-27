// server 

// const http= require("http");
// const server =http.createServer((req,res)=>{
// res.statusCode=200;
// res.setHeader('content-type','text/place');
// res.end('helloworld from node.js backend!');
// });
// server.listen(3000,() =>{
//     console.log("server running at http://localhost:3000/");
// });





// for loop 
// for (let i=1; i<=5; i++)  {
//     console.log("for loop iteraqrte:", i);
// };



//server
// const http = require('http');
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type': 'text/plain'});
//     res.end("hello");
// });
// server.listen(8000,()=>{
//     console.log("server is running");
// });



//heading req and res

// const http = require ('http');
// const server = http.createServer((req,res)=>{
//     if (req.url === '/'){
//     res.writeHead(200,{'content-type':'text/html'});
//     res.end("<h1>welcome to home page</h1>")}
//         else if (req.url === '/about'){
//     res.writeHead(200,{'content-type':'text/html'});
//     res.end("<h1>welcome to about page</h1>")}
//     else {
//     res.writeHead(404,{'content-type':'text/html'});
//     res.end("<h1>page not found</h1>")}
// });
// server.listen(8000,()=>{
//     console.log("server is running")
// })


//create file

// const fs = require('fs');
// fs.writeFile('asd.txt','this is a sample',(err,data)=>{
//     if(err) throw err;
//     console.log("file created");
// });


//read file
// const fs = require('fs');
// fs.readFile('asd.txt','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log("data");
// });



//make dir
// const fs = require('fs');
// fs.mkdir('my_folder',(err) => {
//     if(err) throw err;
//     console.log("dictory create");
// });


//write file
// const fs = require('fs');
// fs.writeFile('abc.txt','this is a first file',(err)=>{
//     if (err) throw err;
//     console.log("file written successfully");
// });
