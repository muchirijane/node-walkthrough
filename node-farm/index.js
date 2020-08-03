const fs = require('fs');
const http = require('http');
const url = require('url');
//////////////////////////////////////////////////// file system
//synchronous method, blocking
// const text = fs.readFileSync('./txt/input.txt', 'utf8');
// console.log(text);

// const textOutput = `This is what I know about avocados: ${text}.\n created on ${new Date()}`;
// fs.writeFileSync('./txt/output.txt', textOutput);
// console.log('Created textOutput file');

//asynchronous method/ non-blocking method
// fs.readFile('./txt/starty.txt', 'utf-8' ,(err, data1)=>{
//     if(err) return console.log('Error!!! 💣 ');
//     console.log(data1);
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8' ,(err, data2)=>{
//         console.log(data2);
//         fs.readFile('./txt/append.txt', 'utf-8', (err, data3)=>{
//             console.log(data3);

//             fs.writeFile('./txt/final-output.txt', `${data2} \n${data3}`, 'utf-8', (err)=>{
//                 console.log('The file has been written 😏');
//             });
//         });
//     });
// });
// console.log('This will be first! 🔥 ');

/////////////////////////////////////////////////////////////////////////////
//////***********************  server.js *********//////////////////////////
// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(req);
//     res.end('Hello from server! 😍');
// });

// server.listen(8000, '127.0.0.1', () => {
//     console.log('Server listening! 💣');
//  });

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if(pathName === '/' || pathName === '/overview' ){
        res.end('This is from overview!😍');
    }else if(pathName === '/product'){
        res.end('This is from product!');
    }else if(pathName === '/api'){
        // fs.readFile(`${__dirname}./dev-data/data.json`, 'utf-8' , (err, data) => {
        //     res.end(JSON.parse(data));
        // });
        res.end('API')

    }else{
        res.writeHead(404, { 
            'Content-type' : 'text/html ,charset=utf-8',
            'my-own-header' : 'hello-world'
        });
        res.end('<h1>Page not found!</h1>');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Server listening! 💣');
});

