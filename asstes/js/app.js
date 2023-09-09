let nav = document.querySelector(".nav");
let menubar = document.querySelector(".menubar");
let bgbody = document.querySelector(".bg-body");
nav.addEventListener("click", function () {
    menubar.classList.toggle("right-0")
    bgbody.classList.toggle("over-flow")
})
menubar.addEventListener("click", function () {
    menubar.classList.toggle("right-0")
    bgbody.classList.remove("over-flow")
})