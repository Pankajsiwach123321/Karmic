let nav = document.querySelector(".nav");
let menubar = document.querySelector(".menubar");
let finish = document.querySelectorAll(".finish");
let bgbody = document.querySelector(".bg-body");
nav.addEventListener("click", function () {
    menubar.classList.toggle("right-0")
    bgbody.classList.toggle("over-flow")
})
finish.forEach(e => {
    e.addEventListener("click", function () {
        menubar.classList.remove("right-0")
        bgbody.classList.remove("over-flow")
    })
});