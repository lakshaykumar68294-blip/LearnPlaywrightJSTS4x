// TYPE 1: Default (every object gets the same initial values)👇

class student
{
    constructor() // default constructor
    {
        this.name = "Lakshay";
        this.location = "New Delhi";
    }
}

const st1 = new student();
const st2 = new student();

console.log(st1.name); // Lakshay
console.log(st2.name); // Lakshay -- both object get same initial values 

// TYPE 2: Parameterized (each object gets different values)👇

class playwright
{
    constructor(stu_name,stu_id)
    {
        this.stu_name = stu_name;
        this.stu_id = stu_id;
    }
}

const s1 = new playwright("Rahul",101);
const s2 = new playwright("Deepak",102);


console.log(s1.stu_name,s1.stu_id); // Rahul 101
console.log(s2.stu_name,s2.stu_id); // Deepak 102 -- each object gets  different value

// TYPE 3 : A default value is used as a fallback , value when you do not provide the value

class selenium_course
{
    constructor(candidate_name="Shivam",candidate_id = 110)
    {
        this.candidate_name = candidate_name;
        this.candidate_id = candidate_id;
    }
}

const obj1 = new selenium_course();
const obj2 = new selenium_course("Lucky",111);

console.log(obj1.candidate_name,obj1.candidate_id); // default value
console.log(obj2.candidate_name,obj2.candidate_id); // default value replaced as you have provided value



