// Wait for the document to load
document.addEventListener('DOMContentLoaded', () => {
    
    // Select the button by ID and the nav by Class
    const menuBtn = document.getElementById("response");
    const navbar = document.querySelector(".navbar");

    // Add the click event listener
    menuBtn.addEventListener("click", function() {
        // This toggles a class. In Tailwind, 'hidden' makes it disappear.
        // We toggle 'hidden' to show/hide the menu on mobile.
        navbar.classList.toggle("hidden");
        navbar.classList.toggle("flex");
        navbar.classList.toggle("flex-col");
        navbar.classList.toggle("absolute");
        navbar.classList.toggle("top-16");
        navbar.classList.toggle("bg-white");
        navbar.classList.toggle("w-full");
        navbar.classList.toggle("p-5");
        
        console.log("Menu toggled!");
    });
});