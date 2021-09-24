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

console.log(mary);
console.log(john.calAge());
console.log(mary.getFullName());
mary.getsMaried('Doe');
console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));