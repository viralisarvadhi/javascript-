class BankAccount { //main parent class
  constructor(accountHolder, balance) {
    this.accountHolder = accountHolder; // property
    this.balance = balance;             // property 
  }

  deposit(amount) { //method 
    this.balance += amount;
    console.log(`Deposited ₹${amount}. New balance: ₹${this.balance}`);
  }

 /*deposit(amount, note) {
    if (arguments.length === 1) {
      this.balance += amount;
      console.log(`Deposited ₹${amount}`);
    } 
    else if (arguments.length === 2) {
      this.balance += amount;
      console.log(`Deposited ₹${amount} (${note})`);
    }
  }*/  // here same name method comes in frame where i see the method overloading concept 
  // same name diifferent behabiour 
  
  withdraw(amount) { // method
    if (amount > this.balance) {
      console.log("Insufficient balance");
    } else {
      this.balance -= amount;
      console.log(`Withdrawn ₹${amount}. Remaining balance: ₹${this.balance}`);
    }
  }
}
class SavingsAccount extends BankAccount { //class that get the properties of the parent class 
  constructor(accountHolder, balance, interestRate) {
    super(accountHolder, balance); // calls parent constructor
    this.interestRate = interestRate;
  }

  addInterest() { //method of childe class 
    const interest = (this.balance * this.interestRate) / 100;
    this.balance += interest;
    console.log(`Interest added: ₹${interest}. Total balance: ₹${this.balance}`);
  }
}
const myAccount = new SavingsAccount("Amit", 1000, 5);

myAccount.deposit(500);      // ₹1500
myAccount.withdraw(300);     // ₹1200
myAccount.addInterest();     // adds 5% interest

//output that getting 

/*Deposited ₹500. New balance: ₹1500
Withdrawn ₹300. Remaining balance: ₹1200
Interest added: ₹60. Total balance: ₹1260*/