const barslines = document.querySelector(".bars").children;
const bars = document.querySelector(".bars");
const navItems = document.querySelector(".navItems");
const heading=document.querySelector(".heading");
const backToTop = document.querySelector(".backToTop");

//On click the nav items becomes visible
bars.addEventListener("click", hideNavs);
function hideNavs() {
    for (let i = 0; i < barslines.length; i++) {
        barslines[i].classList.toggle("active");
        navItems.classList.toggle("active");
    }
}


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}




