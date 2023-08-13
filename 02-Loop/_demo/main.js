const user = {
    firstName: 'Codecamp',
    lastName: 'Thailand',
    age: 15,
    // key: "Jaaaa"
};

// FOR IN : Loop through Object
// SYNTAX : for (let <key_variable> in <obj>) {}
for(let key in user) {
    console.log(`KEY: ${key}`); // auto dynamics assign by JS in <string>
    // 1st : let key = "firstName"
    // 2st : let key = "lastName"
    // 3st : let key = "age"

    console.log(`VAL: ${user[key]}`); // need to access by bracket, computed key
    // 1st : user[key] == user["firstName"] ==> Codecamp
    // 2st : user[key] == user["lastName"] ==> Thailand
    // 3st : user[key] == user["age"] ==> 15

    console.log(user.key);
    // 1st : user.key == user["key"] ==> undefined
    // 2st : user.key == user["key"] ==> undefined
    // 3st : user.key == user["key"] ==> undefined
};

// 'firstName' in user;
// 'age' in user;
// 'phone' in user;


//Critical Point
// - bracket notation ใช้กับคีย์ที่เป็น string หรือ ตัวแปรที่เก็บ string
// - for ( <key> in <obj>) JS จะ auto reassign key ใหม่ให้ทุกรอบ (string)
// - obj[key] = obj[key] + new => container = value + new