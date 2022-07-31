const navSlide = () => {
  const toogleBar = document.querySelector(".menu-active");
  const menu = document.querySelector(".menu");
  toogleBar.addEventListener("click", () => {
    menu.classList.toggle("is-show");
  });
};
navSlide();
