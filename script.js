// JDM Fitness Website

console.log("JDM Fitness Loaded Successfully!");

// Join Button

const joinBtn = document.getElementById("joinBtn");

if (joinBtn) {
    joinBtn.addEventListener("click", function () {
        alert("💪 Welcome to JDM Fitness!\n\nThank you for choosing us.\nWe'll contact you soon.");
    });
}

// Smooth Scroll

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});

// Navbar Shadow on Scroll

window.addEventListener("scroll", function(){

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.style.boxShadow = "0 3px 10px rgba(0,0,0,.5)";
    }else{
        nav.style.boxShadow = "none";
    }

});
