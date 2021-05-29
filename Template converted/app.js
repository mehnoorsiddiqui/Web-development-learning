const barslines = document.querySelector(".bars").children;
const bars = document.querySelector(".bars");
const navItems = document.querySelector(".navItems");
//On click the nav items becomes visible
bars.addEventListener("click", hideNavs);
function hideNavs() {
    for (let i = 0; i < barslines.length; i++) {
        barslines[i].classList.toggle("active");
        navItems.classList.toggle("active");
    }
}



