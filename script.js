// Welcome Message
console.log("Welcome to JDM Fitness");

// Join Button

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
    alert("Welcome to JDM Fitness! 💪");
});

// Navbar Active Effect

const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function () {

        links.forEach(item => item.style.color = "white");

        this.style.color = "red";
    });
});
