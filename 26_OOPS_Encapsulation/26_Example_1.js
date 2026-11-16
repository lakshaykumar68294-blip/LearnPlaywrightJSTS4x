class Person
{   #name;
    constructor(name,city)
    {
        this.#name = name;
        this.city = city;
    }
    getNameCity()
    {
       return ` ${this.#name}  ${this.city}`;

    }
    setNameCity(change_name)
    {
       return this.name = change_name;
    }
}

let obj_1 = new Person("LUCKY","Switzerland");
//console.log(obj_1.#name);
// Property '#name' is not accessible outside class 'Person'
// because it has a private identifier.

console.log(obj_1.getNameCity()); // #name(private) accessed "INDIRECTLY" through method
//console.log(obj_1.city); // city(public) accessed "DIRECTLY" through object itself

console.log(obj_1.setNameCity("LAKSHAY"));
