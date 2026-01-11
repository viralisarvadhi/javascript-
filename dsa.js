// understand the concept of the array and methods of array 

let arr = [1,2,3,4,5];
console.log(arr);

arr.push(6)
console.log(arr); 

arr.pop()
console.log(arr);

arr.shift()
console.log(arr);

arr.unshift(0)
console.log(arr);

let x= arr.length;
console.log(x)


// conut the sum of all element in array

let count=0;
for(let i=0; i<=x ; i++){
    count+=i;
}
console.log(count)

// finding max element outof the all element of the array 

let max = arr[0];
for (let j = 1; j < arr.length; j++) {
  if (arr[j] > max) {
    max = arr[j];   // ASSIGNMENT
  }
}


console.log(max);

//reverse the string 

function reverse(str){
    return str.split('').reverse().join('');
}
console.log(reverse("hello"));

//output 
/*[ 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 5, 6 ]
[ 1, 2, 3, 4, 5 ]
[ 2, 3, 4, 5 ]
[ 0, 2, 3, 4, 5 ]
5
15
5
olleh*/