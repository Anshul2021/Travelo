// -----------nav-bar------------
var menu = document.getElementById("menu");
var close = document.getElementById("close");
var open = document.getElementById("open");
close.style.display = "none";
function closemenu() {
    menu.style.top = "-100vh";
    open.style.display = "block";
    if ((open.style.display = "block")) {
        close.style.display = "none";
    } else {
        close.style.display = "block";
    }
}
function openmenu() {
    menu.style.top = "0";
    close.style.display = "block";
    if ((close.style.display = "block")) {
        open.style.display = "none";
    } else {
        open.style.display = "block";
    }
}

// ------------preloader--------------------
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
});
const progress = document.getElementById("progress");
window.addEventListener("load", function () {
    progress.style.display = "none";
});

// ---------------Customer review-------------

let slide = document.getElementById("slide");
let upArrow = document.getElementById("upArrow");
let downArrow = document.getElementById("downArrow");

let x = 0;
upArrow.onclick = function () {
    if (x > "-900") {
        x = x - 300;
        slide.style.top = x + "px";
    }
};
downArrow.onclick = function () {
    if (x < 0) {
        x = x + 300;
        slide.style.top = x + "px";
    }
};