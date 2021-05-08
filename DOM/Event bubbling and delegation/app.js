
//event bubbbling call event from elemnt then  backwards to parents
/*
document.querySelector(".card-title").addEventListener("click",function(){
    console.log("card-title")
});
document.querySelector(".card-content").addEventListener("click",function(){
    console.log("card-content")
});
document.querySelector(".card").addEventListener("click",function(){
    console.log("card")
});
document.querySelector(".col").addEventListener("click",function(){
    console.log("col")
});

*/
// Event delegation call from element to child elements
// here clicking the first remove button will work but for the remaining wont
// that's why here we are using event delegation 
// other situation => when dynamically insert something through JS

//const delItem=document.querySelector(".delete-item");
//delItem.addEventListener("click",deleteItem);

document.body.addEventListener("click", deleteItem);

function deleteItem(e){
   
    // className looks for entire string so write complete class name
    // if(e.target.parentElement.className==="delete-item secondary-content"){
    //     console.log("delete item");
    // }
    if(e.target.parentElement.classList.contains("delete-item")){
        console.log("delete item");
        e.target.parentElement.parentElement.remove();
    }
}