let musicsPage = document.querySelector(".music__left");
let musicsPage2 = document.querySelector(".music__right");
//
let burgerMenu = document.querySelector(".modal__menu");
let burgerMenuBtn = document.querySelectorAll(".burger_item");

//
let html = document.querySelector("html");
function secondList() {
  musicsPage.style.display = "none";
  musicsPage2.style.display = "flex";
}
function firstList() {
  musicsPage2.style.display = "none";
  musicsPage.style.display = "flex";
}
//open burger menu

function openModal() {
  burgerMenuBtn.forEach((item) => {
    item.classList.toggle("active");
  });
  burgerMenu.classList.toggle("activeMenu");
  html.classList.toggle("stop__scroll");
}
