
const product = {
    id: 221,
    name: 'IPhone',
    price: 50000,
};

// Object => Boolean
function isEmptyObj (obj) {
    let isEmpty = true;
    
    for(let key in obj){
        isEmpty = false;
    };
    return isEmpty;
};

console.log(isEmptyObj(product));

