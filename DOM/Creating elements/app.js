//Create element
const li=document.createElement("li");

//Add Class
li.className="collection-item";

//Add id
li.id="new-item";

//Add attribute
li.setAttribute("title","New Item");

//Create text node and append
li.appendChild(document.createTextNode("Hello World"))

//Create new link element
const link=document.createElement("a");
//Add classes
link.className="delete-item secondary-content";
//Add icon HTML
link.innerHTML='<i class="fa fa-remove"></i>';
//Add link to li
li.appendChild(link);

//Append li as child to ul will add to the end of the list
document.querySelector("ul.collection").appendChild(li);
console.log(li)