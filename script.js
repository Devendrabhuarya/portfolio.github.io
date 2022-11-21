const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
let bool = true;
menu.addEventListener("click", () => {
  if (bool) {
    navbar.style.right = "0rem";
    bool = false;
  } else {
    bool = true;
    navbar.style.right = "-60rem";
  }
});
