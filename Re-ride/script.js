document.addEventListener('DOMContentLoaded', () => {

const menuBtn = document.getElementById("response");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", function() {

navbar.classList.toggle("hidden");
navbar.classList.toggle("flex");
navbar.classList.toggle("flex-col");
navbar.classList.toggle("absolute");
navbar.classList.toggle("top-16");
navbar.classList.toggle("bg-white");
navbar.classList.toggle("w-full");
navbar.classList.toggle("p-5");

});

});