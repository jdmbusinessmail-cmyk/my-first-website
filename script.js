// Sticky Header

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "#000";
    }else{
        header.style.background = "rgba(0,0,0,.7)";
    }
});

// Smooth Scroll

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});

// Contact Form

const form = document.querySelector("form");

if(form){

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank You! Your message has been sent.");

    form.reset();

});

}
