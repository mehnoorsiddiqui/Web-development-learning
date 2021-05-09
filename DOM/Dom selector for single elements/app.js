console.log(document.getElementById("task-title"));

//GEt things from the element
console.log(document.getElementById("task-title").id);
console.log(document.getElementById("task-title").className);

//change styling
//document.getElementById("task-title").style.backgroundColor="red";
//document.getElementById("task-title").style.color="white";
//document.getElementById("task-title").style.display="none";

//change content
document.getElementById("task-title").textContent="Text content";
document.getElementById("task-title").innerText="inner text";
document.getElementById("task-title").innerHTML=`<span style="color:red">Task</span>`;
//

//Query Selector can use any css selector
console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5"));
//just applied on first element
document.querySelector("li").style.color="red";
//li of ul
document.querySelector("ul li").style.color="blue";

document.querySelector("li:last-child").style.color="pink";
document.querySelector("li:nth-child(3)").style.color="green";

document.querySelector("li:nth-child(4)").textContent="Hello World";
//first odd affected
document.querySelector("li:nth-child(odd)").style.backgroundColor="brown";
document.querySelector("li:nth-child(even)").style.backgroundColor="gray";








