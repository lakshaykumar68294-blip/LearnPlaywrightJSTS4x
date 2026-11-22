class SBI
{
    #balance
    constructor(balance,name)
    {
        this.name = name;
        this.#balance = balance;
    }
    getBalance()
    {
        return this.#balance;
    }
    setBalance(balance,is_cashier)
    {
        if(is_cashier)
            {
                return this.#balance = balance;
            }
        else
            {
                console.log("NOT ALLOWED");
            }
    }
}

let Obj1 = new SBI(10000,"LAKSHAY");
console.log(Obj1.getBalance()); //10000
Obj1.setBalance(40000,false); // NOT ALLOWED

let Obj2 = new SBI(10000,"LAKSHAY");
console.log(Obj2.getBalance()); //10000
console.log(Obj2.setBalance(60000,true)); 60000