let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function isEmptyObj (obj) {
    let isEmpty = true;
    for (let key in obj) {
        isEmpty = false;
    };
    return isEmpty;
};


// OBJECT => NUMBER
function calSalaries (object) {
    // 1.Validate => แยก service
    if(isEmptyObj(object)) return 0;
    // 2.Calculate
    let sum = 0;
    for(let key in object) {
        sum += object[key];
    };
    return sum;
};

let total = calSalaries(salaries);
console.log(total);