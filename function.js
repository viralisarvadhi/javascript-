// from starting basic function that return squre of the given value 

function square(n){
    return console.log(n*n);
}
square(2)

//arrow function with clear working and differance 

const obj = {
  multiplier: 3,
  numbers: [1, 2, 3],
  multiply() {
    return this.numbers.map(num => num * this.multiplier); // here this concept with arrow function 
  }
}; // noted that object can contain function inside 

console.log(obj.multiply());  // also used map method and get the noted point you can write any kind of function inside the map itself.

//callback 
function main(name,callback){
    callback(name,"understand callback");
    //onsole.log()
}
main("virali",function(username,messeage){
    console.log(username+" "+messeage);
});

// higher order function // noted that upper map function is also hof because take argument as function 

function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(calculate(5, 3, add));       
console.log(calculate(5, 3, multiply)); // here add , multiply are simple callback





