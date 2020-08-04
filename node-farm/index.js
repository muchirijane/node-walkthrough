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
const replaceTemplate = (card, product) => {
    let output = card.replace(/{%PRODUCT_NAME%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);
    
    if(!product.organic)  output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    return output;
}

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');



const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const objData =  JSON.parse(data);

const server = http.createServer((req, res) => {
    console.log(req.url);
    
    const pathName = req.url;
     //overview
    if(pathName === '/' || pathName === '/overview' ){
        res.writeHead(200 , {'content-type' : 'text/html'});

        const cardHtml = objData.map( obj => replaceTemplate(tempCard,obj)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARD%}', cardHtml);
        res.end(output);

     //product
    }else if(pathName === '/product'){
        res.writeHead(200, {'content-type' : 'text/html'})
        res.end(tempProduct);

    //api
    }else if(pathName === '/api'){
           res.writeHead(200, {'Content-Type': 'application/json'})
           res.end(data);
    //page not found   
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

