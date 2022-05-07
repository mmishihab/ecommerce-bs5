let daysItem = document.getElementById("days");
let hoursItem = document.getElementById("hours");
let minItem = document.getElementById("min");
let secItem = document.getElementById("sec");

let countDown = () => {
  let futureDate = new Date("12 May 2022");
  let current = new Date();
  let myDate = futureDate - current;
  let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
  let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
  let min = Math.floor(myDate / 1000 / 60) % 60;
  let sec = Math.floor(myDate / 1000) % 60;

  daysItem.innerHTML = days;
  hoursItem.innerHTML = hours;
  minItem.innerHTML = min;
  secItem.innerHTML = sec;
};

countDown();
setInterval(countDown, 1000);

// SCROLL ON TOP
function scrollTopBack() {
  let scrollTopButton = document.querySelector("#scrollUp");
  window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;
    if (scroll >= 250) {
      scrollTopButton.classList.add("scrollActive");
    } else {
      scrollTopButton.classList.remove("scrollActive");
    }
  };
}
scrollTopBack();

// HIDE NAV MENU
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navbar.forEach((item) => {
  item.onclick = () => {
    navCollapse.classList.remove("show");
  };
});
