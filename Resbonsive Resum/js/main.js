/* Dark And Light */

let themeSwitch = document.querySelector(".theme-switch");
let body = document.querySelector("body .container");

themeSwitch.onclick = function () {
    themeSwitch.classList.toggle("active");
    body.classList.toggle("dark");
}