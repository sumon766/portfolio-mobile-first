const button = document.querySelector(".mobile-menu");
const nav = document.querySelector(".nav");
const bars = document.querySelector("#bars");
const cross = document.querySelector("#cross");
const items = document.querySelector(".nav");
const headerContainer = document.querySelector(".header-container");

if (screen.width < 769) {
    bars.addEventListener("click", function open() {
        nav.style.display = "block";
        bars.style.display = "none";
        cross.style.display = "block";
        headerContainer.style.position = "fixed";
    });
    
    cross.addEventListener("click", function close() {
        nav.style.display = "none";
        bars.style.display = "block";
        cross.style.display = "none";
        headerContainer.style.position = "static";
    });
    
    items.addEventListener("click", function closeItem() {
        nav.style.display = "none";
        bars.style.display = "block";
        cross.style.display = "none";
        headerContainer.style.position = "static";
    });
}