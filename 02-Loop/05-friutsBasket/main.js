
const fruits ={};

let key = prompt("Enter fruit");
let value = +prompt("Enter Quantity");

// fruits[key] = value;

if(value == 1) {
    fruits[key] = value;
} else if(value > 1) {
    fruits[`${key}s`] = value;
}

console.log(fruits)
