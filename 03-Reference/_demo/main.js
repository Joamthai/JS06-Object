console.log('Learn Ref.')


// Copied by Value
// Copied by Reference


// ###### Copied by Value ######
let msg = 'Hello';
console.log(msg); // Hello

let word = msg;

msg = 'Hi';
console.log(msg); // Hi  
console.log(word); // Hello **Value ไม่ถูกเปลี่ยนตามต้นฉบับ** 

// ______________________________________________________ //

let user = {
    name: 'John'
};

// ###### Copied by Reference ######
let employee = user; // assign address ของ user ให้กับ employee
console.log(employee.name); // John  

user.name = 'Jane'; // Update new value in user
console.log(user.name); // Jane

employee.name = "Joe"; // employee can update new value in user
console.log(employee.name); // Joe  
console.log(user.name); // Joe  **Value ถูกเปลี่ยนตามต้นฉบับ**