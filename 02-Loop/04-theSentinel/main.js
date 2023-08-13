
let object = {};

let key;
let value;
do {
    key = prompt("Enter name");
    value = +prompt("Enter value");
    object[key] = value
   
    console.log(object)

} while(key != 'stop' && value != 'stop');
