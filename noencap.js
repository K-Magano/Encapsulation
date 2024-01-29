// No encapsulation
let balance = 1000; // Global variable

function deposit(amount) {
  balance += amount;
  console.log(`Deposited ${amount}, new balance: ${balance}`);
}

function withdraw(amount) {
  if (amount <= balance) {
    balance -= amount;
    console.log(`Withdrew ${amount}, new balance: ${balance}`);
  } else {
    console.log("Insufficient funds.");
  }
}

function checkBalance() {
  console.log(`Current balance: ${balance}`);
}


balance = 2000; // Direct modification of the global balance
deposit(500);
withdraw(200);
checkBalance();