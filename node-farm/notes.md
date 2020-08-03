## Node JS
#### Node JS commands
+ .break    Sometimes you get stuck, this gets you out
+ .clear    Alias for .break
+ .editor   Enter editor mode
+ .exit     Exit the repl
+ .help     Print this help message
+ .load     Load JS from a file into the REPL session
+ .save     Save all evaluated commands in this REPL session to a file
+ ctr + d   to exist node terminal

#### How to write your first code in Node JS
+ create a index.js file in your folder 
+ Write the following code
```js
const hello = 'Hello World';
console.log(hello);
```
+ Open your terminal and write 
```js
node index.js
```
####  Congratulations you just created your first line of code in Node JS
---

#### node module - used to store the functionality of a function. Example file system (fs) module for reading and writing data.

#### How to use this module
+ You require the module
+ Store it in a variable

#### How read files 
+ Use file system module and store it in a variable.
```js
const fs = require('fs');
```
+ Use Synchronous read file function, that reads the entire contents of a file. The input will be the path to your file and utf8 character encoding.
```js
const text = fs.readFileSync('./txt/input.txt', 'utf8');
console.log(text); 

// in the terminal run node index.js(file with the code) and you will see the text as the output.
```

#### How to write files 
+ Store your code in a variable. 
```js
const hello = 'Hello World! I am finally ready to learn Node!'
```
+ Use the file system module and the write file sync function that Synchronously writes data to a file or replacing the file if it already exist.
```js
//you have to specify the file path and the code you want to write

fs.writeFileSync('./txt/output.txt', hello);
```

#### Let's understand the difference between Synchronous and asynchronous coding
+ Synchronous coding is when code can only run if the previous code is executed. This can cause problems if you have code that takes too long to execute. \
It's even worse if you have a lot of users in your application. Simple functionality like logining in or reading othe feeds will be dealed. This is also called blocking method.

```js
const text = fs.readFileSync('./txt/input.txt', 'utf8');
console.log(text); 
```

+ Asynchronous is when heavy code that take longer to execute is done at the background as the other code runs in the application. When the longer code is done, it's called through a callback function that runs the result/output of the previous code. This is also called non-blocking.
```js
fs.readFileSync('./txt/input.txt', 'utf8', (err,data) => {
    console.log(data);
});
console.log('Asynchronous code');
```

#### Single thread in node JS
- In node JS process there is only one Single thread.\
A thread is a set of instructions that runs our code in the machine processor. Hence in every node application there is one thread that all your users are using. If one user runs a Synchronous code that takes a few seconds, the rest of the users will have to wait until the code is executed. \
This can be a pain if your application has thousands of users because all functionality of the application will stop working asynchronously and wait until for the previous code is executed. \
That's why asynchronous method is preferred over synchronous method in node applications.
---

#### How to make a simple web server in node
```js
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    res.end('Hello from server! 😍');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Server listening! 💣');
});
```
---
## Rounting
#### What is rounting?
This is implementing different actions for different urls.
You can use the if else statement to direct actions to the urls inside the createServer callback function.
```js
const pathName = req.url;
const server = http.createServer((req, res) => {

    if(pathName === '/' || pathName === '/overview' ){
        res.end('This is from overview!😍');
    }else if(pathName === '/product'){
        res.end('This is from product!');
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
```
---
### How to make a simple API 
#### How to request data as a user with one API call.
+ Use the if statement to match the  request api url. 
```js
if(pathName === '/api') {}
```
+ Create a file system function that runs once to read the data. Hence you will use the asynchronous file system function. \
 It's a good practice to use dirname variable to locate the directory where the script is. \
 To use the json data in html you have to use JSON.parse to convert it to javascript. Store it in a variable.
 ```js
 const data = fs.readFileSync(`${__dirname}/dev-data/data.json` 'utf-8');
 const objData = JSON.parse(data);
 ```
+ Send the data to the browser as a response by using res.end method.
+ Tell the browser that your data is JSON, use res.writeHead method.
```js
const pathName = req.url;

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const objData =  JSON.parse(data);

const server = http.createServer((req, res) => {
    if(pathName === '/api') {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(data);     
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
```