const clearBtn=document.querySelector(".clear-tasks");
// console.log(clearBtn)
const card=document.querySelector(".card");
const heading=document.querySelector("h5");

//Click
// clearBtn.addEventListener("click",runEvent);

//Double click
// clearBtn.addEventListener("dblclick",runEvent);

// MouseDown
// clearBtn.addEventListener("mousedown",runEvent);

// MouseUP
// clearBtn.addEventListener("mouseup",runEvent);

// MouseEnter
// card.addEventListener("mouseenter",runEvent);

// MouseLeave
// card.addEventListener("mouseleave",runEvent);

// MouseOver
// card.addEventListener("mouseover",runEvent);

// MouseOut
// card.addEventListener("mouseout",runEvent);

// MouseMove
card.addEventListener("mousemove",runEvent);

//Event handler
function runEvent(e){
   // console.log(`Events Type: ${e.type}`);
   heading.textContent=`MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
   document.body.style.backgroundColor=`rgb( ${e.offsetX} , ${e.offsetY} ,50 )`
}



