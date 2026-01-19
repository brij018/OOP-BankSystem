class BankAccount {
    constructor(balance) {
        this.balance = balance
    }

    deposit(amount) {
        this.balance = this.balance + amount
        return this.balance
    }

    withdraw(amount) {
        if (amount > this.balance) {
            return "Insufficient balance"
        }
        this.balance = this.balance - amount
        return this.balance
    }

    getBalance() {
        return this.balance
    }
}

class SavingsAccount extends BankAccount {}

const account = new SavingsAccount(0)

function deposit() {
    const amount = Number(document.getElementById("amount").value)
    document.getElementById("result").innerText = "Balance: " + account.deposit(amount)
}

function withdraw() {
    const amount = Number(document.getElementById("amount").value)
    const res = account.withdraw(amount)
    document.getElementById("result").innerText =
        typeof res === "number" ? "Balance: " + res : res
}

function checkBalance() {
    document.getElementById("result").innerText = "Balance: " + account.getBalance()
}
