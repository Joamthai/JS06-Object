console.log('Learn Object');

//Data Types
//- Primitive : Boolean, Number, String etc...
// -Non-Primitive : Object

// ###### Object Declaration
// {} == stand for Object / Scope
// { record1, record2, record3, ....}
// each record => <key_name> : <value>
// <value> any Datatypes
// <key_name> Datatypes : String
// record === property == key-value pair


let user = {
    //<key_name>: <value>
    firstName: 'JT',
    lastName: 'KSS',
    age: 18,
    isAmin: true,
};

console.log(user);


// ##### ACCESS, MODIFY, DELETE
// Every action need <key_name>
// .Notation <obj>.<key_name>
// No record => undefined
// ข้อจำกัด : เข้าถึง key ที่มี white space ไม่ได้


// GET, POLL, READ
console.log(user.firstName === "JT");
console.log(user.lastName);
console.log(user.isAmin === false);

// MODIFY, UPDATE
// SYNTAX : <obj>.<key_name> newValue
user.firstName = "Joam";
user.age = 25;
user.age += 2;
user.age++;
console.log(user.age);

// ADD
// SYNTAX : <obj>.<key_name> newValue
user.address = 'Bangkok';
console.log(user);

// DELETE
// SYNTAX : delete <obj>.<key_name>
delete user.isAmin;
console.log(user);
// delete employee.address.province;


// ##### NESTED OBJECT
const employee = {
    fullName: 'John Doe',
    salary: 500000,
    address: {
        district: 'Phaya Thai',
        province: 'Bangkok',
        country: 'Thailand'
    },
};

console.log(employee.salary);
console.log(employee.address);
console.log(employee.address.province);
console.log(employee.address.district);

// . ใช้กับ Object เท่านั้น!! <obj>.<key>
// ห้าม!! ใช้กับ undefined <undefined>.<key> 
// วิธีแก้ optional chaining => <undefined>?.<key>
console.log(employee.addr?.district);
console.log(employee.address?.district);
console.log(employee.address?.village);


// ##### Check key ?

const product = {
    id: 221,
    name: 'IPhone',
    price: 50000,
};

console.log(product.discount); // undefined

// IN Operator
// SYNTAX : <key_name> in <obj>

// 'name' in product // => true, false
console.log('name' in product);
console.log('discount' in product);

// Method has ownProperty
// SYNTAX : <obj>.hasOwnProperty(<key_name>) => Boolean
console.log(product.hasOwnProperty('name'));


// ##### Bracket Notation []
// 1.ใช้ bracket เมื่อไหร่ ชื่อ key ข้างในต้องเป็น string
// 2.ถ้าไม่ใช่ string ต้องเป็นตัวแปรที่เก็น String // Computed key
// Access key-value ผ่านตัวแปรได้
console.log(product.id);
console.log(product['id']);


// console.log(product.is mobile) crash
console.log(product['is mobile']);

product['name'] = 'IPhone-15';
console.log(product);

let aaa = 'name';
console.log(product['name']); // IPhone-15
console.log(product[aaa]); // IPhone-15
console.log(product.aaa); // undefined