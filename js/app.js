const menuBtn = document.querySelector(".menu-btn");
const menuList = document.querySelector(".nav-links");
menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("active");
});
