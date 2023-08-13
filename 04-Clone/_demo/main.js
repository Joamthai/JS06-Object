console.log("Object Clone");

let toDo = {
    task: 'Do HW',
    complete: false,
    due_date: '13-08-2023'
};

// Clone
const newToDo = {} // เอาต้นแบบมา Loop แล้ว assign ทีละ key:value ให้ object ใหม่

for(let key in toDo) {

    newToDo[key] = toDo[key]; // assign ทีละ key:value ให้ newToDo
    // newToDo['task'] = todo['task'] => 'Do HW'
};

console.log(newToDo);
newToDo.complete = true;
console.log(newToDo.complete); // true
console.log(toDo.complete); // false ** Value ไม่ถูกเปลี่ยน **

const newTodo = {
    complete: true
};

// Merge/Override direction : Left <- Right
// #1
Object.assign(newTodo, toDo); 
console.log(newTodo); // newTodo.complete ถูกเปลี่ยนเป็น false

// #2
const newTodo2 = Object.assign({}, toDo); // assign key:value ให้กับ obj ว่างของ newTodo2