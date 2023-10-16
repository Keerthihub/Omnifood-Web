// Copyright Year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".header");

btnNavEl.addEventListener("click", function() {
    headerEL.classList.toggle('nav-open');
})