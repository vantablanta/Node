/*const tutorial = require('./module1');
console.log(tutorial.sum(2,2));
console.log(tutorial.PI)  ;
console.log(new tutorial.SomeMathObject()) */

const EventEmitter = require('events');

const event = new EventEmitter();
event.on('Michelle', (a,b) => {
    console.log (a * b)
});

event.emit('Michelle', 5, 10);    

class Person extends EventEmitter {
    constructor(name){
        super();
        this._name = name
    }
    get name(){
        return this._name;
    }
}
let man = new Person("Pedro");
let woman = new Person ("Christina")
man.on ('name', () => {
    console.log('my name is '+ man.name)
});
man.emit('name');
woman.on('name',() => {
    console.log ('My name is ' + woman.name)
})
woman.emit('name');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);

let answer= num1 + num2;

rl.question(`What is ${ num1} + ${ num2}? \n`, 
 (userInput)=> {
if(userInput.trim() == answer){
    rl.close()
}else {
    rl.setPrompt('Incorrect \n')
    rl.prompt()
}
});

rl.on('close', () => {
    console.log("Correct!!!")
});
rl.prompt();

rl.on('line', (userInput) => {
    if (userInput.trim() == answer){
        rl.close();

    } else {
        rl.setPrompt('Incorrect again')
        rl.prompt();
    }
    
})

//file sytem module

/*const fileSystem = require('fs');
/*create file
fileSystem.writeFile('nameoffile.text', 'content of file', 
(err) => {
    if (err){
        console.log(err)
    } else {
        console.log ('File successfully created')
    }
    });
        fileSystem.readFile('nameoffile.text', 'UTF-8', (err, file) => {
            if (err){
                console.log(err) 
        } else {
        console.log (file)
    }
})

fileSystem.rename('nameoffile.text', 'filename.txt', (err) =>{
    if (err){
        console.log(err)
    } else {
        console.log("renamed successfully")
    }
})
    
/*fileSystem.appendFile('filename.txt', '\n New data to add to our file', (err) => {
    if (err){
        console.log(err)
    } else{
        console.log("successfully updated")
    }
})
//to delete the created file
/*fileSystem.unlink('fileaname.txt', (err) =>{
    if (err){
        console.log(err)
    } else {
        console.log successfully deleted
    }
})

//working with folders

const folderSystem = require('fs');

folderSystem.mkdir('nameofFolder', (err)=> {
    if (err){
        console.log(err)
    } else {
        fileSystem.writeFile('./nameofFolder/file.txt', 'data inside the file', 
        (err) => {
            if(err){
                console.log(err)
            } else{
                console.log("successfully created a file inside a folder")
            }
        })
    }
});
folderSystem.rmdir("FolderName", (err) =>{
    if (err){
        console.log(err)
    } else {
        console.log('folder deleted')
    }
})*/

// deleting a  folder that has files inside it 
//const fileSystem = require('fs');

/*fileSystem.readdir('nameofFolder', (err, files) =>{
    if (err){
        console.log(err)
    } else {
        for (let file of files){
            fileSystem.unlink('./nameofFolder/' + file, (err) => {
                if (err){
                    console.log(err)
                }else {
                    console.log('files deleted succefully')
                } 
            })
        }
    }
})*/

//readable and writeble streams 
const fileSystem = require('fs');
//create a readablele stream 
/*const zlib = require('zlib')
const gunzip= zlib.createGunzip()
const readStream = fileSystem.createReadStream('module3.js.gz');
const writeStream = fileSystem.createWriteStream('uncompressed.txt')

readStream.pipe(gunzip).pipe(writeStream); */

 const _ = require ('lodash');

let exmaple=  _.fill([1,2,2,3] ,'Banana', 1, 4)

console.log(exmaple)

const express=  require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('Hello')
})

