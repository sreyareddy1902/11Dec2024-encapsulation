

/*----using closures
function BankAccount(accountNumber,accountHolder,balance)
{
    let a1=accountNumber //privare variables
    let a2=accountHolder
    let a3=balance

    //private method
    function showAccountDetails()
    {
        console.log(`AccountNumber:${a1}`)
        console.log(`AccountHolder:${a2}`)
        console.log(`Balance:${a3}`)
    }

    //public method
    function deposit(amount)
    {
        a3=a3+amount
        //a3+=amount
        showAccountDetails()
    }

    function withDraw(amount)
    {
        if(a3>=amount)
        {
            a3=a3-amount
            showAccountDetails()
        }
        else
        {
            console.log("insuffiecient balance")
        }
    }

    return{
        showAccountDetails:showAccountDetails,
        deposit:deposit,
        withDraw:withDraw
    }

}

let b1=new BankAccount(12345,"john",1000)

b1.deposit(2000)
console.log("******************")

b1.withDraw(1000)

console.log("*****************")

b1.withDraw(2000)

console.log("***************")

b1.withDraw(1000)
-----*/

/*-----using classes
class BankAccount{
    constructor(accountNumber,accountHolder,balance)
    {
        this.a1=accountNumber
        this.a2=accountHolder
        this.a3=balance
    }

    showAccountDetails()
    {
        console.log(`AccountNumber:${this.a1}`)
        console.log(`AccountHolder:${this.a2}`)
        console.log(`Balance:${this.a3}`)
    }

    deposit(amount)
    {
        this.a3=this.a3+amount
        //this.a3+=amount
        this.showAccountDetails()
    }

    withDraw(amount)
    {
        if(this.a3>=amount)
        {
            this.a3=this.a3-amount
            //this.a3-=amount
            this.showAccountDetails()
        }
        else
        {
            console.log("insufficient balance")
        }
    }

}

let b1=new BankAccount(12345,"merry",0)

b1.deposit(1000)
console.log("*****************")

b1.withDraw(500)

console.log("*******************")
b1.withDraw(500)

console.log("**********************")
b1.withDraw(1000)
---------------*/