//Traversing or moving up and down dom
let val;
const list=document.querySelector("ul.collection");
const listItem=document.querySelector("li.collection-item:first-child");
val=list;
val=listItem;

//Get Child nodes
// return NodeList collection having text nodes too
val=list.childNodes;
// val=list.childNodes[0]; //text node
// val=list.childNodes[0].nodeName;// text written as string
// val=list.childNodes[0].nodeType ;// return the type for text it is 3
val=list.childNodes[1].nodeType;//return 1 as li is element
val=list.childNodes[3].nodeType;//return 8 as it is a comment
// 1 - Element
// 2- Attribute(deprecated)
// 3- Text node
// 4-Comment
// 5-Document itself
// 6- DocType




//Get children element nodes
//just return the elements no text nodes HTML Collection
val=list.children;
val=list.children[1];
list.children[1].textContent="hello";

//childeren of children
list.children[3].children[0].id="test-link";
val=list.children[3].children[0];  //means achor tag

//First child
val=list.firstChild;// return first node whether it is an element or not
val=list.firstElementChild;//return first element not node

//Last child
val=list.lastChild; //same goes as first child
val=list.lastElementChild;

//count all tbe child elements
val=list.childElementCount; 

//Get Parent node
val=listItem.parentNode;
val=listItem.parentElement;
val=listItem.parentElement.parentElement;

//get next sibling
val=listItem.nextSibling; //just like child ,firstchild and lastchild it deals with other than element nodes
val=listItem.nextElementSibling;
val=listItem.nextElementSibling.nextElementSibling.previousElementSibling;

//get prev sibling
// val=listItem.previousSibling; //just like child ,firstchild and lastchild it deals with other than element nodes
// val=listItem.previousElementSibling;




console.log(val);