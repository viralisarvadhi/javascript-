function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  inner();
}

outer(); // inner function get the properties of outer functino 


function bankAccount(balance) {
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      balance -= amount;
      return balance;
    }
  };
}

const account = bankAccount(1000);
console.log(account.deposit(500));  
console.log(account.withdraw(200));  // here the clouser concept like we can see that the each function remember their own balance value 

// i stored the main functino in the account mane variable and that inner functino is getting the value of balance and remember updated value as well

// understanding the promise , promise.all , aynsc and await for same example 

function getUser() {
  return new Promise(resolve => {
    setTimeout(() => {
      // console.log("user data")
      resolve("User data");
    }, 1000);
  });
}

function getOrders() {
  return new Promise(resolve => {
    setTimeout(() => {
        //console.log("orders data")
      resolve("Orders data");
    }, 2000);
  });
}

function getNotifications() {
  return new Promise(resolve => {
    setTimeout(() => {
      //console.log("Notifications data");
      resolve("Notifications data");
    }, 1500);
  });
}
getUser();
getOrders();
getNotifications();

// same but by promise.all so all parallal executino 

Promise.all([
    getUser(),
    getOrders(),
    getNotifications(),
]).then(result => {
    console.log(result);
}); // here i noted that i write console .log inside the resolve thats why i get undefien in promise all i can resole by thsi way 

// by async await 

async function loadDashboard() {
  const result = await Promise.all([
    getUser(),
    getOrders(),
    getNotifications()
  ]);

  console.log(result);
}

loadDashboard();  //here this functino is showing the async await concept 
// and i get the syntax as well as how promise and async await comes in picture 