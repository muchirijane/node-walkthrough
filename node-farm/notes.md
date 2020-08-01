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
#### ~ Congratulations you just created your first line of code in Node JS~

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