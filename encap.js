function BankAccount(name, initialBalance) {
    // Private properties
    let _balance = initialBalance;
  
    // Public methods
    this.deposit = function(amount) {
      _balance += amount;
      console.log(`Deposited ${amount}, new balance: ${_balance}`);
    };
  
    this.withdraw = function(amount) {
      if (amount <= _balance) {
        _balance -= amount;
        console.log(`Withdrew ${amount}, new balance: ${_balance}`);
      } else {
        console.log("Insufficient funds.");
      }
    };
  
    this.checkBalance = function() {
      console.log(`Current balance: ${_balance}`);
    };
  }
  
  const myAccount = new BankAccount("Keo Magano", 2000);
  myAccount.deposit(500);
  myAccount.withdraw(200);
  myAccount.checkBalance();
  