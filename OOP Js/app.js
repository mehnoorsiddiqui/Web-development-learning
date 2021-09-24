//Person Constructor
function Person(name,dob){
    this.name=name;
    // this.age=age;
    this.birthday=new Date(dob);
    // console.log(this);
    this.calAge=function(){
        const diff= Date.now()-this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear()- 1970);
    }
}
//here this refers to the window
// console.log(this);

//creating object named brad
// const brad=new Person('brad',36);
// const john=new Person('john',30);

// console.log(john);

// console.log(john.age);

const brad = new Person('Brad','October 13, 2010 11:13:00');
// console.log(brad.calAge());



//Built in Contructors

//String
const name1='Jeff';
const name2=new String('Jeff');
// name2.foo='bar;'
// console.log(name2);

console.log(typeof name1);

console.log(typeof name2);
if(name2==='Jeff'){
    console.log("YES");
}else{
    console.log('No');
}

//Number
const num1= 5;
const num2=new Number(5);
// console.log(num2);

//Boolean 
const bool1=true;
const bool2= new Boolean(true);

// console.log(bool1);


//Function

const getSum1= function(x,y){
    return x+y;
}

const getSum2= new Function ('x','y','return 1+1');

// console.log(getSum2(1,3));

//Object 
const john1={name:'john'};
const john2=new Object({name:'john'});
// console.log(john1);
// console.log(john2);

//Arrays
const arr1=[1,2,3,4];
const arr2=new Array(1,2,3,4);
console.log(arr1);
console.log(arr2);

//Regular experessions
const re1=/\w+/;
const re2=new RegExp('\\w+');

// console.log(re1);
// console.log(re2);

//Object.prototype
//Person.prototype

//Person constructor

function Person(firstName,lastName,dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.birthday=new Date(dob);
    // this.calAge=function(){
    //     const diff= Date.now()-this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear()- 1970);
    // }
}

//Calculate age
Person.prototype.calAge=function(){
    const diff= Date.now()-this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear()- 1970);
}
//Get full name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}
//Get Married
Person.prototype.getsMaried = function(newLastName){
    this.lastName = newLastName;
}

const john=new Person('John','Doe','August 12 1990');
const mary=new Person('Mary','Johnson ','March 20 1978');

// console.log(mary);
// console.log(john.calAge());
// console.log(mary.getFullName());
// mary.getsMaried('Doe');
// console.log(mary.getFullName());

// console.log(mary.hasOwnProperty('firstName'));

//Prototypal Inheritance

function Person(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

//Greeting
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const personObj= new Person('Jhon', 'Doe');
console.log(personObj.greeting());


//Customer constructor
function Customer(firstName,lastName,phone,membership){
    //inheritance of person class
    Person.call(this,firstName,lastName);
    this.phone = phone;
    this.membership = membership;
}
//Inherit the person prototype method
Customer.prototype = Object.create(Person.prototype);

//Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

//Create customer
const customer1 = new Customer('Tom','Smith','555-555-555','Standard');

Customer.prototype.greeting =function(){
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}
console.log(customer1.greeting());



//Using Object.create

const perosnPrototypes = {
    greeting: function(){
        return`Hello there ${this.firstName} ${this.lastName} welcome to our company`;
    },
    getsMarried: function(newLastName){
        this.lastName = newLastName;
    }
}

const maria= Object.create(perosnPrototypes);
maria.firstName='Mary';
maria.lastName='Williams';
maria.age = 30;

maria.getsMarried('Thomson');
console.log(maria.greeting());

const brads = Object.create(perosnPrototypes,{
    firstName: {value: 'Brad'},
    lastName: {value: 'Traversy'},
    age:{value:36}
});
console.log(brads);
console.log(brads.greeting());

//ES6 


class Persons{
    constructor(firstName,lastName,dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting(){
        return`Hello there ${this.firstName} ${this.lastName} welcome to our company`;
    }
    calculateAge(){
        const diff = Date.now()-this.birthday.getTime();
        const ageDate = new Date (diff);
        return Math.abs(ageDate.getUTCFullYear()-1970);
    }
    getsMaried(newLastName){
        this.lastName =newLastName;
    }

    //static method gets instantiated without creating objects

    static addNumbers(x,y){
        return x + y;
    }
}
const mario = new Persons('Mary','Williams','2015-03-25');

mario.getsMaried('Thompson');
console.log(mario.greeting());
console.log(mario.calculateAge());
console.log(Persons.addNumbers(1,20));