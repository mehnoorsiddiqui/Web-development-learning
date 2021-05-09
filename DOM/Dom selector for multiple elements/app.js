//document.getElementsByClassName

// const items=document.getElementsByClassName("collection-item");
// console.log(items);
// console.log(items[0]);
// items[0].style.color="red";
// items[3].textContent="changing text";

// const listItems=document.querySelector("ul").getElementsByClassName("collection-item");
// console.log(listItems)

//document.getElementsByTagName

// let lis=document.getElementsByTagName("li");
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color="red";
// lis[3].textContent="changing text";

//convert HTMl Collection into array
// lis=Array.from(lis);
// lis.reverse();
// lis.forEach(function(li,index){
//     console.log(li.className)
//     li.textContent= `${index}:Hello`;
// })
// console.log(lis);

// document.querySelectorAll
//return nodeList so dont have to convert into array for using foreach loop
const items=document.querySelectorAll("ul.collection li.collection-item")
items.forEach(function(item,index){
        console.log(item.className)
        item.textContent= `${index}:Hello`;
    })
const liOdd=document.querySelectorAll("li:nth-child(odd)");
const liEven=document.querySelectorAll("li:nth-child(even)");

liOdd.forEach(function(liO,index){
    liO.style.backgroundColor="gray";
})
//for loop not just works on nodeList but also on HTML Collection
for(let i=0;i<liEven.length;i++){
    liEven[i].style.backgroundColor="lightgrey"
}
console.log(items)

