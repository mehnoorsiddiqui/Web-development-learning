// set Local storage item (storage stay unless you manually clear it)

// localStorage.setItem("name","Jhon");
// localStorage.setItem("age","30");

// set session storage item 
// sessionStorage.setItem("name","Jhon");
 
// remove from storage 
// localStorage.removeItem("name");

//get from storage
// const name=localStorage.getItem("name");
// const age=localStorage.getItem("age");

//Clear local storage
// localStorage.clear();

// console.log(name,age);

document.querySelector("form").addEventListener("submit",
function(e){
    const task=document.getElementById("task").value;
    let tasks;
    if(localStorage.getItem("tasks")===null){
        tasks=[];
    }
    else{
        tasks=JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(task);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    alert("task saved");
    e.preventDefault();
});

