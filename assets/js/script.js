console.log("PromptForge Website Loaded");

document.querySelectorAll(".feature-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="scale(1.05)"

})

card.addEventListener("mouseleave",()=>{

card.style.transform="scale(1)"

})

})

// Navbar shadow effect on scroll

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } 
    else {
        navbar.classList.remove("scrolled");
    }

});