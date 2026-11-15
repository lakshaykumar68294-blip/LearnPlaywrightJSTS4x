class Credentials
{
    #apiKey;

    constructor(user,key)
    {
        this.user = user;
        this.#apiKey = key;
    }
    get API()
    {
        return this.#apiKey;
    } 
}

let cred = new Credentials("admin","secret_key-1234");
console.log(cred.user);
//console.log(cred.#apiKey); // ERROR👇
// Property '#apiKey' is not accessible outside class 'Credentials' 
// because it has a private identifier