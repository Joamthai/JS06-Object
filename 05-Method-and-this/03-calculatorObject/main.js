
let calculator = {
    
    read: function input (){
        this.x = +prompt("Enter number");
        this.y = +prompt("Enter number");
        console.log(this.x, this.y);
    },
    sum:function() {return(this.x + this.y)},
    mul:function() {return(this.x * this.y)},
};
  
calculator.read();
alert(calculator.sum());
alert(calculator.mul());