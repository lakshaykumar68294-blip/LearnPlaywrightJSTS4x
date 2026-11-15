class APIClient
{
    constructor(baseURL)
    {
        this.baseURL = baseURL;
    }
    get(path) 
        {
            return this.baseURL + path;
        }
}

let staging = new APIClient("https://staging.api.com");
let production = new APIClient("https://prod.api.com");

console.log(staging.get("/user"));
console.log(production.get("/prod/users"));