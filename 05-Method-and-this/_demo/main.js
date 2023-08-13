console.log("Method and this keyword");


// each record => called property
// each property => <key>:<value>

// some record => <key>:<FN>
// called method == ความสามารถของ Obj



const programmer = {
    name : 'JT',
    age: 28,
    dev: devWedsite,
    meet: meeting,
    eat: eating,
};

function devWedsite () {
    console.log("I'm working");
};

function meeting () {
    console.log("I'm meeting");
};

function eating () {
    console.log("I'm eating");
};


console.log(programmer.name);
console.log(programmer.age);

// ####### Method #######
// Object === Collection of properties 
// SYNTAX: <obj>.<method>()
programmer.dev() // I'm working 
programmer.dev // devWedsite
programmer.meet(); // I'm meeting
programmer.eat(); // I'm eating

// __________________________________________ //

const programmer2 = {
    name: 'John',
    age: 30,
    dev: function () {
        console.log("I'm working");
    },
    meet: () => console.log("I'm meeting"),
    sleep () {console.log("I'm sleeping")}, // Method shorthand
};

programmer2.dev();
programmer2.meet();
programmer2.sleep();


// Mini Lab

const user = {
    name : 'JT',
    sport: function playSport (type){
        console.log(`I'm playing ${type}`)}, 
    sleep: function () {
        console.log("Sleep All Day")
    },
    dev: () => console.log("I'm dev"),
    language () {console.log("HTML CSS JS")},
    // eat: menu,
};

user.language();
user.sleep();
user.sport('football')
// user.eat('Pizza')
// Finish

// ##### OPP ######
const car = {
    brand: 'Tesla',
    model: 'X',
    speed: 80,
    drive: () => console.log('Driving'),
    'auto pilot': () => console.log('Self Driving'),
};

console.log(car.brand, car.model);

// caller.Method
car.drive();
car['auto pilot']();

const calculator = {
    sum: (x, y) => x + y,
};

let r1 = calculator.sum(5, 7);
console.log(r1);

console.log(car.speed);
car.speed = calculator.sum(car.speed, 20);
console.log(car.speed);

// ###### JS Keyword : if, else, for, while, do, switch, this

const user1 = {
    name: 'CC',
    age: 15,
    sayHi: function() {
        console.log(`Hello ${this.name}`); // this == user, this.age == user.age
    },
    growOld: function () {
        this.age++
    },
};

user1.sayHi();
user1.name = 'Software Park';
user1.sayHi();

console.log(user1.age);
user1.growOld();
console.log(user1.age);

function dev() {
    console.log(`This feature developed by ${this.name}`);
};

const programmer3 = {
    name: 'John',
    develop: dev,
}
const programmer4 = {
    name: 'Jane',
    develop: dev,
}

// A : this ถูก solve ตอนเรียกใช้ Method
programmer3.develop();
programmer4.develop();


// ######### Execution Context == Caller

// Global(Browser) : window object

// window.alert("I'm Global");
// this.alert("I'm Global this");
// alert("I'm execute in window");

// FN Declaration จะทำให้ sayHi ไปติดใน window
function sayHi() {
    console.log(this); // window
}
// var a = 'm';

// Execute = window
// window.sayHi();
// this.sayHi();
// sayHi();

// Function Context
var name = 'CC';
function sayHello() {
    console.log(this.name);
};

const user2 = {
    name: 'John',
    say: sayHello,
    scream: () => {
        console.log(`scream by ${this.name}`)
    },
    scrm: function(){
        console.log(`scream by ${this.name}`)
    }
};

// user caller
user2.say();
user2.scream(); // scream by CC  ***ห้ามใช้กับ Arrow FN ****
user2.scrm(); // scream by John