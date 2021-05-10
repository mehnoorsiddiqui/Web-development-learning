//Replace element


//Create element
const newHeading=document.createElement("h2");
//Add id
newHeading.id="task-title";
//new text node
newHeading.appendChild(document.createTextNode('Task List'))

//Get the old heading
const oldHeading=document.getElementById("task-title");
//Parenet
const cardAction=document.querySelector(".card-action");

//Replace
cardAction.replaceChild(newHeading,oldHeading);

//REMOVE element

const lis=document.querySelectorAll("li");
const list=document.querySelector("ul");

//Remove list item
lis[0].remove();

//Remove child element
list.removeChild(lis[3]);


//CLASSES
const firstLi=document.querySelector("li:first-child");
const link=firstLi.children[0];
let val;
val=link.className;//return string
val=link.classList;// return DOMToken list
val=link.classList[0];//return string
link.classList.add("test");
link.classList.remove("test");
val=link;


// ATTRIBUTES
val=link.getAttribute("href");
link.setAttribute("href","www.google.com");
link.setAttribute("title","my list");
val=link.hasAttribute("title"); //return boolean
link.removeAttribute("title");

console.log(val);


