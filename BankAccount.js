class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`You just have deposited Tk. ${amount}. Your new balance is: Tk. ${this.balance}`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`You just have withdrawn Tk. ${amount}. Your new balance is: Tk. ${this.balance}`);
    } else {
      console.log("Insufficient funds");
    }
  }

  getBalance() {
    return this.balance;
  }

  displayAccountInfo() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Owner Name: ${this.ownerName}`);
    console.log(`Balance: Tk. ${this.balance}`);
  }
}

// Create two instances of the BankAccount class
const account1 = new BankAccount(202400015, "MD Atikur Rahman", 35000);
const account2 = new BankAccount(202400018, "MD Akther Hossain", 52000);


/* Functionality demonstration */

/* Displays Account Information
   Displays messages after the diposit and the withdraw
*/
account1.displayAccountInfo();
console.log("-----------");
account1.deposit(15000);
account1.withdraw(32000);
console.log("**********");

/* Displays the 2nd Account Info 
   and the message for insufficient funds
*/
account2.displayAccountInfo();
console.log("-----------");
account2.withdraw(100000);
console.log("**********");