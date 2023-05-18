class BankAccount{
    constructor(accountNumber,accountHolder,balance){
        this.accountNumber=accountNumber;
        this.accountHolder=accountHolder;
        this.balance=balance;
    }
    depositing(x){
        this.balance=this.balance+x;
        console.log(`You have added ${x} money. The new account is ${this.balance}`)
       
    }
    withdraw(y){
        if(y<=this.balance){
            this.balance=this.balance-y
            console.log(`you have successfully withdraw ${y}, the new balance is: ${this.balance}`)
        }
        else{
            console.log("Insufficient funds. Withdrawal cancelled.");
        }
    }
}
const Animal1=new BankAccount("1111111111111111", "Basit", 2000)
Animal1.depositing(1000)
Animal1.withdraw(1000)







// class BankAccount {
//     constructor(accountNumber, accountHolder, balance) {
//       this.accountNumber = accountNumber;
//       this.accountHolder = accountHolder;
//       this.balance = balance;
//     }
  
//     deposit(amount) {
//       this.balance += amount;
//       console.log(`Deposit of ${amount} successful. New balance is ${this.balance}`);
//     }
  
//     withdraw(amount) {
//       if (this.balance < amount) {
//         console.log("Insufficient funds. Withdrawal cancelled.");
//       } else {
//         this.balance -= amount;
//         console.log(`Withdrawal of ${amount} successful. New balance is ${this.balance}`);
//       }
//     }
//   }
  