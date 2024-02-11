const hamburgerMenu = document.querySelector(".hamburger-menu");
const toggleMenu = document.querySelector(".open-menu");

hamburgerMenu.addEventListener("click", () => {
    console.log("test")
    toggleMenu.classList.toggle("hide");
})