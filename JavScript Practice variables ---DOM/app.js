/*function warn(){
    var warning=confirm("Do you want to continue? ")
    if (warning==true){
        document.write("user want to continue :) ")
    }
    else{
        document.write("user does not want to continue :( ")
    }
}
function getValue(){
    var giveMe=prompt("Enter your name please ","your name here ")
    document.write("You have entered ",giveMe)
}
var no="45" * "5"
console.log(no)
var student1={
    age: 45,
    name : "mehnoor",
}
console.log(student1.name)
var str=`This is my name " mehnoor " `
document.write(str)
let hour=10;
if (hour>=6 && hour<12){
    console.log("Good morning")
}
else if(hour>=12 && hour<18){
    console.log("Good afternoon")
}
else{
    console.log("good evening")
}
var person={
    "name": "mehnoor"

};
var wh0=person.name;
console.log(wh0)
var person = {
    firstname : "Mehnoor",
    lastname : "Siddiqui",
    age: 20,
    fullname: function (){
console.log(this.firstname+" "+ this.lastname)
    }
}
console.log(person.fullname())
var date= new Date(2001,2,18,13,4,23);
console.log(date.getDay())

For_in
moves through properties of object
var person={
    fname: "mehnoor",
    lname: "siddiqui",
    age: 28
};
var text="";
var x;
for(x in person){
    console.log(x)
    text+=person[x]
}
console.log(text)
var numbers=[45,6,8,7,9,94,5]
var txt="";
for(let y in numbers){
    txt+=numbers[y];
}
console.log(txt)
let cars=["VMW","toyota"]
let txt="";
for(let x of cars){
    txt+=x +" "
}
console.log(txt)

i//f else
if (10<5){
    console.log("print true")
}
else{
    console.log("print false")
}
var question=prompt("How old are you? ")
switch(question){
    case "18":
        alert("You can drive a car")
        break;
    case "25":
        alert("You can surely drive a car")
        break;
    default:
        alert("invalid ")

}
//Arrays
var cars=["BMW","Toyota"]
cars[1]="ME"
console.log(cars[cars.length-1])

var cars=["BMW","Toyota"]
cars.forEach(element=>
console.log(element + "hehehe")
)
console.log(cars)
var cars=["BMW","Toyota"]
console.log(cars.toString())
var cars=["BMW","Toyota"]
console.log(cars.join("*"))
var cars=["BMW","Toyota"]
cars.pop();
console.log(cars)
var cars=["BMW","Toyota"]
cars.push("My pushing");
console.log(cars)
//shift removes first element 
var cars=["BMW","Toyota"]
cars.shift()
console.log(cars)
//add element on first index
var cars=["BMW","Toyota"]
cars.unshift("new cae")
console.log(cars)
var cars=["BMW","Toyota"]
delete cars[1]
console.log(cars)
var cars=["BMW","Toyota"]
cars.splice(1,1,"mecedes")
console.log(cars)
var cars=["BMW","Toyota","HO","dkl"]
var age=[25,5,6]
console.log(age.reverse())
//sorting
console.log(age.sort(function(a,b){
    return a-b;
}))
let text="";
let numbers=[15,1,4,8,9,52,6,9];
numbers.forEach(myfunction);
function myfunction(value,index,array)
{
    text+=value+ "<br>";
    console.log(index);
}
document.write(text);
let numbers=[15,1,4,8,9,52,6,9];
var numbers2=numbers.map(myfunction)
function  myfunction(value,index,array){
    return value*2;
}
console.log(numbers2)
let numbers=[15,1,4,8,9,52,6,9];
var over18=numbers.filter(myfunction)
function myfunction(value,index,array){
    return value>18
}
console.log(over18)

let numbers=[15,1,4,8,9,52,6,9];
var sum=numbers.reduceRight(myfunction)
function myfunction(total,value){
    return total+value
}
console.log(sum)
let numbers=[15,1,4,8,9,52,6,9];
var allover18=numbers.every(myfunction)
function myfunction(total,value){
    return value>18
}
console.log(allover18)
let numbers=[15,1,4,8,9,52,6,9];
var finding=numbers.findIndex(myfunction)
function myfunction(value,index){
    return value>18
}
console.log(finding)

var x=new Boolean(true)
var obj={
    firstname:"mehnoor",
    lastname:"siddiqui",
    age:25,
    fullname:function(){
        return this.firstname+" "+this.lastname
    }
}
var person=new Object();
person.fname="Mehnoor";
person.lname="Siddiqui";
person.age=20


var student={
    firstName:"Mehnoor",
    lastName: "Siddiqui",
    language:"en",
    get lang(){
        return this.language
    }
}
document.write(student.lang)
var student={
    firstName:"Mehnoor",
    lastName: "Siddiqui",
    language:"en",
    set lang(lang){
        this.language=lang
    }
}
student.lang="az"
document.write(student.language)
var x,txt="";
for(x in student){
    txt+=student[x]+" "
}
document.write(txt)
var myArray=Object.values(student);
console.log(myArray)

var myString=JSON.stringify(student);
document.write(myString);

var arr=["Jhon","Peter","Sally","Jame"];
var myString=JSON.stringify(arr);
document.write(myString);

delete student.language

Object.keys(user)=["name","age"];
Object.values(user)=["Jhon",35];
Object.entries(user)=[["name","Jhon"],["age",35]];

let user={
    name:"Jhon",
    age:35
}
for(let value of Object.values(user)){
    console.log(value)
}

let prices={
    banana:1,
    orange:2,
    meat:3
}
let doublePrices=Object.fromEntries(Object.entries(prices).map(([key,value])=>[key,value*2]))
console.log(doublePrices.meat)

window.addEventListener("resize",function(){
    this.document.write("REsized")
})

//event bubbling(remaining)


function clicked(){
    alert("You clicked button")
}
function keydown(){
    document.body.style.backgroundColor="red";
}
function keyup(){
    document.body.style.backgroundColor="pink";
}

var elem=document.getElementById("intro");
elem.classList.add("hide","multiple")
elem.classList.remove("hide");
elem.classList.toggle("multiple");

console.log(document.body instanceof HTMLElement)
let elem=document.body;
console.log(elem.nodeType)
console.log(elem.firstChild.nodeType)
console.log(elem.firstChild.nodeName)
let elem=document.getElementById("elem");
console.log(elem.outerHTML)
document.getElementById("elem").outerHTML = "<div>HEllo<\div>"; 
let text = document.body.firstChild;
console.log(text.data);
let name="whats your name ";
let elem1=document.getElementById("elem1");
let elem2=document.getElementById("elem2");
elem1.innerHTML="dakdjkfajk";
elem2.textContent="dfajkjkjk";
console.log(document.getElementById("elem2").innerText);
var main=document.getElementById("main");
var hint=document.getElementById("hint");
console.log(main.firstChild.nodeName)
console.log(hint.firstChild.nodeName)
if(main.hasChildNodes()){
    var nodes=main.childnodes;
    console.log(nodes)
    for(var i=0 ;i<nodes.length;i++){
        console.log(nodes[i].nodeName)
    }
}
if(main.hasChildNodes()){
    var nodes=main.children;
    console.log(nodes)
    for(var i=0 ;i<nodes.length;i++){
        console.log(nodes[i].nodeName)
    }
}

console.log(hint.parentNode.nodeName)
console.log(hint.parentNode.nodeName)

console.log(document.documentElement.parentNode.nodeName)
console.log(document.parentNode)
hint.parentNode.style.backgroundColor="yellow"
hint.parentElement.style.backgroundColor="yellow"

console.log(title.previousSibling.nodeName)
console.log(hint.nextSibling.nodeName)

console.log(hint.previousElementSibling.nodeName)
console.log(title.nextElementSibling.nodeName)


var id=null;

function myMove(){
    var elem=document.getElementById("animation");
    var pos=0;
    clearInterval(id);
    id=setInterval(frame,5);
    function frame(){
        if(pos==350){
            clearInterval(id);
        }
        else{
            pos++;
            elem.style.top=pos + "px";
            elem.style.left=pos + "px";
        }
    }
}
var element=document.getElementById("intro");
var value=element.getAttribute("title");
alert(value)
element.setAttribute("class","clicked-btn")
element.setAttribute("disabled","");
element.removeAttribute("title");

function myFunction(){
  setTimeout(function(){
      alert("hello");
  },3000);
    
}
function change(){
    var elements=document.querySelectorAll("div[title]")
    for(var j=0;j<elements.length;j++){
        elements[j].style.backgroundColor="green";
    }
}
function change(){
   document.querySelector("#changed").style.color="purple";
}
function change(){
   document.querySelector("#changed").style.backgroundColor="purple";
   document.querySelector("#changed").style.color="white";
}
function change(){
    document.getElementById("paragraph").style.color="red";
    document.getElementById("paragraph").style.fontSize="50px";
}
function change(){
  var boxes=  document.getElementsByClassName("box");
  for(var i=0;i<boxes.length;i++){
      boxes[i].style.backgroundColor="purple";
  }
}
function change(){
 var paragraphs=document.getElementsByTagName("p");
 for(let i=0;i<paragraphs.length;i++){
     paragraphs[i].style.color="blue";
     paragraphs[i].style.fontSize="30px";
     paragraphs[i].style.backgroundColor="gray";
 }
}
function change(){
 var paragraphs=document.getElementsByTagName("p");
 for(let i=0;i<paragraphs.length;i++){
     paragraphs[i].style.color="blue";
     paragraphs[i].style.fontSize="30px";
     paragraphs[i].style.backgroundColor="gray";
 }
}
*/

















