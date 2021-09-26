//OBJECTS

//Assignments with dots
var person={};
person.name="Mr.white";
// console.log(person.name);//just return the string

var who = person.name;

// console.log(who);

person.name="Mrs.white";
// console.log(who);//we stored who by value primitive value by value

//primtive values are passed by value
//non-primtive values are passed by reference

//Arrays
var personArr =[];
personArr.name="Mrs.White";
var whoArr = personArr.name;
console.log(personArr);

//we have properties in array arrays are objects
console.log(typeof person==="array");
console.log(typeof person==="object")

person[0]="I am learning JS";

//when you cannot use an property name with dot as it is not following variable notation
// then use brackets and Js coerse it into string
var plea="would she";
person[plea]="I would never";
person["plea"]="I would never";
console.log(person.plea);

