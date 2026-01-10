//began the javascript 
console.log("hello world!!")

//checking the behavior of let ,var,const
 
/*var isloggedin = true ;
if(true){
  var isloggedin = false;
}
console.log(isloggedin); */ // which give false that shows that the concept of the var follow function scope and allow redeclaration

let isloggedin = true;
if(true){
  let isloggedin = false;
}
console.log(isloggedin); // it shows that the let follow block scope as well i have to commentout the above function because of redeclaration not allowed 
// and this can i consider as the fixing the bug which created by the var by let 

//understanding the types and type conversion in js 

//let x="xyz";
let x=Number(("xyz")); //force type conversion
let z= [2,3,4,5];
let y=90;
let w=null;
let v;

console.log(typeof(x));
console.log(typeof(y));
console.log(typeof(w));
console.log(typeof(z))//in array type of method only show the answer object becase it is non primt
// ive datatype .

//understand the concept of truthy anf falsy value and operator 
//as well as if(condition)

let email = ''//make note empty string return falsy value 

if(email){
  console.log("email is valid");
}else{
  console.log("email is invalid")
}

// example of using loop 
// just simple even number from 1-20

for (let i=0; i<=20; i++){
  if(i%2==0){
    console.log(i);
  }
}

//output still here 
/*hello world!!
true
number
number
object
object
email is invalid
0
2
4
6
8
10
12
14
16
18
20*/


