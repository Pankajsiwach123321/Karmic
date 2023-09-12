let nav = document.querySelector(".nav");
let menubar = document.querySelector(".menubar");
let finish = document.querySelectorAll(".finish");
let bgbody = document.querySelector(".bg-body");
let fix1 = document.querySelector(".fix1");
let fix2 = document.querySelector(".fix2");
let fix3 = document.querySelector(".fix3");
nav.addEventListener("click", function () {
    menubar.classList.toggle("right-0")
    bgbody.classList.toggle("over-flow")
    fix1.classList.toggle("fixer1")
    fix2.classList.toggle("fixer2")
    fix3.classList.toggle("fixer3")
})
finish.forEach(e => {
    e.addEventListener("click", function () {
        menubar.classList.remove("right-0")
        bgbody.classList.remove("over-flow")
    })
});