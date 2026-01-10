let obj={
    name:"virali",
     age:18
}
let x=obj["name"]
console.log(x)
obj.name="xyz"
console.log(obj.name); //here the name is changed 

// common problem mutation because referance share
//resolved using spread operator

let newobj = {...obj,age:20} 
console.log(obj.age)
console.log(newobj.age)

const user = { age: 22 };
user.age = 23;   
console.log(user.age) // though const mutation is allowed

//understanding destructring

let {name,age} = obj
console.log(name);

//output 
/*virali
xyz
18
20
23
xyz*/
