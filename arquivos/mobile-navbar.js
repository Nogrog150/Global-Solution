const barras = document.querySelector(".barras");
const navMenu = document.querySelector(".nav-menu");

barras.addEventListener("click", () => {
  barras.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n. addEventListener("click", () => {
  barras.classList.remove("active");
  navMenu.classList.remove("active");
}))