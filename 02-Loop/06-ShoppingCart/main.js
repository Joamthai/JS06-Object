
let name = prompt("Enter product");
let amount = +prompt("Enter amount");
let price = +prompt("Enter price");
let discount = +prompt("Enter %discount");

const product = {name, amount, price, discount};

// Check Object
// console.log(product);
// console.log(product['discount']);

// #1
function checkPrice () {
    let sum = 0;
    if(+product['discount'] <= 0){
        // return true; //Check Result
        sum = (product['amount'] * product['price'])
    } else {
        // return false; //Check Result
        sum = (product['amount'] * product['price']) * (1-(product['discount']/100))
    };
    return sum;
};

console.log(checkPrice(product));

// #2
function calcPrice() {
    let price = product.price;
    let amount = product.amount;
    let discount = product.discount? product.discount : 0;
    return  (price * amount) * (1 - (discount/100));
};

console.log(calcPrice(product));