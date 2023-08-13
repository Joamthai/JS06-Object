console.log('Constructor Function');

const dev1 = {
    name: 'John',
    age: 32,
    role: 'dev',
    salary: 40000,
    dev: function() {
        console.log("I'm develop some feature");
    },
};

function Developer (name, age) {
    this.name = name;
    this.age = age;
    this.role = 'dev';
    this.salary = 40000;
    this.dev = function () {
        console.log("I'm develop some features");
    };
};

const dev2 = new Developer('JT, 18');
// console.log(dev2.dev);
dev2.dev()