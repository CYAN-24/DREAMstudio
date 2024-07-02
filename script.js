const ctalinks = document.querySelectorAll(".nav-cta");
const popup = document.querySelector(".contact-popup");
const close = document.querySelector(".contact-popup .close-button");
const steps = document.querySelector(".services-steps");
const services = document.querySelectorAll(".service");
const descHeader = steps.querySelector(".description-header");
const descContent = steps.querySelector(".description-content");
const menuIcon = document.querySelector(".icon-mobile-nav");
const navIcon = document.querySelector(".icon-close-nav");
const nav = document.querySelector(".nav");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav-link");
const blur = document.querySelector("#blur");

function openPopup() {
  blur.classList.add("active");
  popup.classList.add("active");
}

console.log(window);

ctalinks.forEach((ctalink) => ctalink.addEventListener("click", openPopup));

function stepsHeader(num) {
  switch (num) {
    case "1":
      return "01 Consulting";
    case "2":
      return "02 Proposal";
    case "3":
      return "03 Renovation";
    case "4":
      return "04 Completion";
  }
}

function toggleTab(num) {
  steps.querySelector(".active").classList.remove("active");
  steps.querySelector(`.service[data-tab='${num}']`).classList.add("active");
  switch (num) {
    case "1":
      descHeader.innerHTML = stepsHeader(num);
      descContent.innerHTML =
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
      break;
    case "2":
      descHeader.innerHTML = stepsHeader(num);
      descContent.innerHTML =
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. In voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
      break;
    case "3":
      descHeader.innerHTML = stepsHeader(num);
      descContent.innerHTML =
        "Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim eveniet consequatur odit quam quos possimus assumenda dicta fuga inventore ab. Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim eveniet consequatur.";
      break;
    case "4":
      descHeader.innerHTML = stepsHeader(num);
      descContent.innerHTML =
        "Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. In voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
      break;
  }
}

steps.addEventListener("click", function (e) {
  const tabNum = e.target.dataset.tab;
  if (tabNum) toggleTab(tabNum);
});

menuIcon.addEventListener("click", function () {
  menuIcon.style.display = "none";
  navIcon.style.display = "block";
  nav.style.display = "flex";
});

navIcon.addEventListener("click", function () {
  menuIcon.style.display = "block";
  navIcon.style.display = "none";
  nav.style.display = "none";
});

//media query
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    document.querySelector(".heading-primary").innerHTML =
      "Turn your DREAMS into reality.";

    services.forEach((service, index) => (service.innerHTML = `0${index + 1}`));

    document.querySelector(".contact-form").style.display = "none";
    document.querySelector(".contact-form-mobile").style.display = "flex";
  } else {
    document.querySelector(".heading-primary").innerHTML =
      "Turn your DREAMS </br> into reality.";

    services.forEach(
      (service, index) => (service.innerHTML = stepsHeader(index + 1 + ""))
    );

    document.querySelector(".contact-form").style.display = "grid";
    document.querySelector(".contact-form-mobile").style.display = "none";
  }
}

// Create a MediaQueryList object
let x = window.matchMedia("(max-width: 36em)");

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function () {
  myFunction(x);
});

///////////////////////////////////
function toggleMenu(maxWidth) {
  function closePopup() {
    blur.classList.remove("active");
    popup.classList.remove("active");
  }

  function setMenu() {
    menuIcon.style.display = "block";
    navIcon.style.display = "none";
    nav.style.display = "none";
  }

  if (maxWidth.matches) {
    //less than 42em
    nav.style.display = "none";
    menuIcon.style.display = "block";
    navIcon.style.display = "none";

    close.removeEventListener("click", closePopup);
    close.addEventListener("click", function () {
      closePopup();
      if (nav.style.display === "block") {
        nav.style.display = "none";
      }
    });
    navLinks.forEach((navLink) =>
      navLink.removeEventListener("click", setMenu)
    );
    navLinks.forEach((navLink) => navLink.addEventListener("click", setMenu));
  } else {
    nav.style.display = "block";
    close.removeEventListener("click", closePopup);
    close.addEventListener("click", function () {
      closePopup();
      if (nav.style.display === "none") {
        nav.style.display = "block";
      }
    });
    navLinks.forEach((navLink) =>
      navLink.removeEventListener("click", setMenu)
    );
    navLinks.forEach((navLink) =>
      navLink.addEventListener("click", function () {
        setMenu();
        if (nav.style.display === "none") {
          nav.style.display = "block";
        }
      })
    );
  }
}

// Create a MediaQueryList object
let maxMenuIconWidth = window.matchMedia("(max-width: 42em)");

// Call listener function at run time
toggleMenu(maxMenuIconWidth);

// Attach listener function on state changes
maxMenuIconWidth.addEventListener("change", function () {
  toggleMenu(maxMenuIconWidth);
});
