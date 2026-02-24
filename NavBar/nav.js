 const menuBtn = document.getElementById("response");
    const navbar = document.querySelector(".navbar");

    menuBtn.addEventListener("click", function(){
        navbar.classList.toggle("active");
    });