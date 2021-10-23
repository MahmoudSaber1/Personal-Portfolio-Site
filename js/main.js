let toggle = document.querySelector(".toggle");
let topbar = document.querySelector(".topbar");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");
let themSwitch = document.querySelector(".theme-switch");
let body = document.querySelector("body");


toggle.onclick = function () {

    toggle.classList.toggle("active");
    topbar.classList.toggle("active");
    navigation.classList.toggle("active");
    main.classList.toggle("active");
    
}

themSwitch.onclick = function () {
    body.classList.toggle("dark");
}

// Fix issuse in Navbar for Mobile Devices
function toggleMenu() {
    let navigation = document.querySelector(".navigation");
    let main = document.querySelector(".main");
    navigation.classList.remove("active");
    main.classList.remove("active");
}

/* Dark And Light */
