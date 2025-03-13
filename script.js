// BY ME
// let image = document.getElementById("image");
// let historyBtn = document.getElementById("history");
// let visionBtn = document.getElementById("vision");
// let successBtn = document.getElementById("success");
// let paragraph = document.getElementById("para");
// let allButton = document.querySelectorAll(".btns button");

// historyBtn.addEventListener("click", function () {
//   paragraph.innerText =
//     "Founded with a vision to innovate and inspire, our company has been delivering excellence since its inception. What started as a small idea has grown into a dynamic force, providing top-notch solutions in our industry. With a passion for quality and a commitment to customer satisfaction. 🚀✨";
//   image.src = "img1.avif";
//   allButton.forEach((btn) => btn.classList.remove("active"));
//   this.classList.add("active");
// });

// visionBtn.addEventListener("click", function () {
//   paragraph.innerText =
//     "We strive to innovate, inspire, and lead with excellence. Our goal is to push boundaries, embrace new possibilities, and create impactful solutions. With a customer-centric approach and a passion for progress, we aim to shape a smarter, better future. 🚀";
//   image.src = "download.jpg";
//   allButton.forEach((btn) => btn.classList.remove("active"));
//   this.classList.add("active");
// });

// successBtn.addEventListener("click", function () {
//   paragraph.innerText =
//     "Through innovation and dedication, we have reached remarkable milestones. From delivering top-quality solutions to earning customer trust, our journey reflects excellence. Each success fuels our passion to grow, improve, and set new industry standards for the future. 🏆🎉";
//   image.src = "download (1).jpg";
//   allButton.forEach((btn) => btn.classList.remove("active"));
//   this.classList.add("active");
// });



// BY GPT
let image = document.getElementById("image");
let paragraph = document.getElementById("para");
let historyBtn = document.getElementById("history");
let visionBtn = document.getElementById("vision");
let successBtn = document.getElementById("success");
let buttons = document.querySelectorAll(".btns button");

historyBtn.addEventListener("click", function () {
  changeTab(this, "Founded with a vision to innovate and inspire, our company has been delivering excellence since its inception. What started as a small idea has grown into a dynamic force, providing top-notch solutions in our industry. With a passion for quality and a commitment to customer satisfaction. 🚀✨", "img1.avif");
});

visionBtn.addEventListener("click", function () {
  changeTab(this, "We strive to innovate, inspire, and lead with excellence. Our goal is to push boundaries, embrace new possibilities, and create impactful solutions. With a customer-centric approach and a passion for progress, we aim to shape a smarter, better future. 🚀", "download.jpg");
});

successBtn.addEventListener("click", function () {
  changeTab(this, "Through innovation and dedication, we have reached remarkable milestones. From delivering top-quality solutions to earning customer trust, our journey reflects excellence. Each success fuels our passion to grow, improve, and set new industry standards for the future. 🏆🎉", "download (1).jpg");
});

function changeTab(button, newText, newImage) {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Apply fade-out effect
    paragraph.style.opacity = 0;
    image.style.opacity = 0;

    setTimeout(() => {
      paragraph.innerText = newText;
      image.src = newImage;

      // Apply fade-in effect
      paragraph.style.opacity = 1;
      image.style.opacity = 1;
    }, 300);
  }