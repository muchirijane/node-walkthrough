const fs = require('fs');

//synchronous method, blocking
// const text = fs.readFileSync('./txt/input.txt', 'utf8');
// console.log(text);

// const textOutput = `This is what I know about avocados: ${text}.\n created on ${new Date()}`;
// fs.writeFileSync('./txt/output.txt', textOutput);
// console.log('Created textOutput file');

//asynchronous method/ non-blocking method
fs.readFile('./txt/starty.txt', 'utf-8' ,(err, data1)=>{
    if(err) return console.log('Error!!! 💣 ');
    console.log(data1);
    fs.readFile(`./txt/${data1}.txt`, 'utf-8' ,(err, data2)=>{
        console.log(data2);
        fs.readFile('./txt/append.txt', 'utf-8', (err, data3)=>{
            console.log(data3);

            fs.writeFile('./txt/final-output.txt', `${data2} \n${data3}`, 'utf-8', (err)=>{
                console.log('The file has been written 😏');
            });
        });
    });
});
console.log('This will be first! 🔥 ');