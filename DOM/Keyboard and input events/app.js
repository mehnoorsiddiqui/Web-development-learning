const form=document.querySelector("form");
const taskInput=document.getElementById("task");
const heading=document.querySelector("h5");
const select=document.querySelector("select");

//Clear input
taskInput.value="";

// form.addEventListener('submit',runEvent);
//keydown
//taskInput.addEventListener("keydown",runEvent);

//keyup
//taskInput.addEventListener("keyup",runEvent);

//keypress(generalize key event)
// taskInput.addEventListener("keypress",runEvent);

//focus
//taskInput.addEventListener("focus",runEvent);

//blur
//taskInput.addEventListener("blur",runEvent);

// cut
//taskInput.addEventListener("cut",runEvent);

// paste
// taskInput.addEventListener("paste",runEvent);

//input(genralize)
// taskInput.addEventListener("input",runEvent)

// Change
select.addEventListener("change",runEvent);




function runEvent(e){
    console.log(`Event Type: ${e.type}`);
    
    //heading has the input writings
    // heading.innerText=e.target.value;

    
    //Print everything we typed in 
    console.log(e.target.value)

    //get the valuue of input 
    // console.log(taskInput.value) 

    // e.preventDefault(); ///Prevent from redirecting
}

