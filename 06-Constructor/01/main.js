
function Calculator(x, y) {
    this.read = function() {console.log(x, y)};
    this.sum = function() {console.log(x + y)};
    this.mul = function() {console.log(x * y)};
}

calc = new Calculator(10, 5);

calc.read();
calc.sum();
calc.mul();
