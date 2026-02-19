let menubtn = document.querySelector("#menu-bar");
let navBar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

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

(function () {
  emailjs.init("0mNi-Pp7SiU5CoiYC"); // ✅ ADDED Public Key
})();

let form = document.querySelector(".form");
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // ea page refresh nahi hone dega

  let name = form.Name.value;
  let email = form.Email.value;
  let message = form.Message.value;
  let subject = form.Subject.value;
  let phone = form.Phone.value;

  let data = await fetch("https://sheetdb.io/api/v1/o2jeove6osc3w", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [
        {
          Name: name,
          Email: email,
          Message: message,
          Subject: subject,
          Phone: phone,
        },
      ],
    }),
  });

  emailjs
    .send("service_y9c1hn1", "template_527b42e", {
      Name: name, // ⚠ Must match template variable
      Email: email,
    })
    .then(function (response) {
      console.log("Email Sent Successfully ✅", response);
    })
    .catch(function (error) {
      console.log("Email Failed , error");
    });

  form.reset();
});
