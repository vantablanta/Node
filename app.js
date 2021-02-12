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
