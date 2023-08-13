
function Accumulator(startingValue) {
    this.currentValue = startingValue;
    this.read = function() {
        // this.input = prompt("Enter Number")
        this.currentValue += +prompt("Enter Number")
    };
    this.show = function() {
        alert(this.currentValue);
    };
};

const acc = new Accumulator(5);
// console.log(acc);
acc.read();
acc.show();
