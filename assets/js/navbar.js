const navbar = document.querySelector(".mobile-menu");
const nav = document.querySelector("nav");
const body = document.querySelector("body");

navbar.addEventListener("click", activeMenu);

function activeMenu() {
  nav.classList.toggle("active");
}

document.addEventListener("click", closeMenuOnOutsideClick);

function closeMenuOnOutsideClick(event) {
  // Verifica se o clique NÃO foi no nav ou em seus filhos e também fora da navbar
  if (!nav.contains(event.target) && !navbar.contains(event.target)) {
    nav.classList.remove("active");
  }
}
