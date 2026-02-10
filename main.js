let menubtn = document.querySelector("#menu-bar");
let navBar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  alert("Form submitted successfully!");
});
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a [href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menubtn.onclick = () => {
  menubtn.classList.toggle("bx-x");
  navBar.classList.toggle("active");
};

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
